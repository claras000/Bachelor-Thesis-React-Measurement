FROM node:18-alpine

WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package.json package-lock.json ./

# Installiere Abhängigkeiten
RUN npm install

# Setze die Berechtigungen für das gesamte /app Verzeichnis und für node_modules
RUN chown -R node:node /app
RUN chown -R node:node /app/node_modules

# Kopiere den Rest des Projekts ins Arbeitsverzeichnis
COPY . .

# Stelle sicher, dass das .vite-temp Verzeichnis existiert und setze die Berechtigungen
RUN mkdir -p /app/node_modules/.vite-temp
RUN chown -R node:node /app/node_modules/.vite-temp

# Wechsle zum node Benutzer
USER node

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
