const puppeteer = require("puppeteer");
const microtime = require("microtime");

(async () => {
    const getTimeInMicroseconds = () => microtime.now();
    let lastTime = getTimeInMicroseconds(); // Zeit zu Beginn speichern

    console.log(microtime.now(), "start");

    const logTimeDiff = (message) => {
        const currentTime = getTimeInMicroseconds();
        const diff = currentTime - lastTime;
        console.log(currentTime / 1e6, message, `(Diff: ${diff} µs)`);
        lastTime = currentTime;
    };

    // start Browser
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1920, height: 1080 },
        headless: true,
        executablePath: "/usr/bin/chromium-browser",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    const targetLogMessage = "colors are changed";

    logTimeDiff("starting Browser");
    console.log(microtime.now(), "starting Browser");

    // load page
    await page.goto("http://project:3000", {
        waitUntil: "load",
        timeout: 18000,
    });

    // Variables for closing an checking if programm rendered
    let messageCount = 0;
    const maxMessages = 10;
    let isClosing = false;

    //after fully render close page
    page.on("console", async (message) => {
        if (isClosing) return; // Falls bereits geschlossen wird, abbrechen

        if (message.text().includes(targetLogMessage)) {
            messageCount++;
            if (messageCount === maxMessages) {
                isClosing = true; // Markiere den Browser als geschlossen

                setTimeout(async () => {
                    logTimeDiff("change color");
                    console.log(microtime.now(), "change color");
                    try {
                        await browser.close();
                        logTimeDiff("closing Browser");
                        console.log(microtime.now(), "closing Browser");
                    } catch (error) {
                        console.error("Fehler beim Schließen des Browsers:", error);
                    }

                }, 10);
            }
        }
    });


    //Button click
    await page.waitForSelector("button.colorButton", {
        visible: true,
        timeout: 180000,
    });

    logTimeDiff("load page");
    console.log(microtime.now(), "load page");

    try {
        await page.click("button.colorButton", { timeout: 180000 });
    } catch (error) {
        console.error("Fehler beim Klicken auf den Button:", error);
    }

})();
