const puppeteer = require("puppeteer");
const microtime = require("microtime");

(async () => {
  console.log(microtime.now(), " Launching Browser");
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    headless: true,
    executablePath: "/usr/bin/chromium-browser", //place where green coding chrome browser is installed
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });
  // console.log("Dimensions:", dimensions); // Only to double-check if the dimensions are as expected

  //load webside
  console.log(microtime.now(), "load page");
  await page.goto("http://0.0.0.0:3000", {
    waitUntil: "load",
  });
  await page.waitForSelector("#colorButton");
  console.log(microtime.now(), "GMT_SCI_R=1");

  //click button and wait until it rendered completely
  console.log(microtime.now(), "Color change");
  await page.click("#colorButton");
  await page.waitForFunction(() => {
    return (
      window.console._logs &&
      window.console._logs.some((log) => log === "colors are changed")
    );
  });
  console.log(microtime.now(), "GMT_SCI_R=1");
})();
