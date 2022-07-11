# PWA-Text-Editor

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Technology](#technology)
- [Links](#links)

## Description

Our task is to build a text editor that runs in the browser. The application will be a single-page application that meets the Progressive Web Applications (PWA) criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application is to also function when offline.

## User Story

    AS A developer
    I WANT to create notes or code snippets with or without an internet connection
    SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

    GIVEN a text editor web application
    WHEN I open my application in my editor
    THEN I should see a client server folder structure
    WHEN I run `npm run start` from the root directory
    THEN I find that my application should start up the backend and serve the client
    WHEN I run the text editor application from my terminal
    THEN I find that my JavaScript files have been bundled using webpack
    WHEN I run my webpack plugins
    THEN I find that I have a generated HTML file, service worker, and a manifest file
    WHEN I use next-gen JavaScript in my application
    THEN I find that the text editor still functions in the browser without errors
    WHEN I open the text editor
    THEN I find that IndexedDB has immediately created a database storage
    WHEN I enter content and subsequently click off of the DOM window
    THEN I find that the content in the text editor has been saved with IndexedDB
    WHEN I reopen the text editor after closing it
    THEN I find that the content in the text editor has been retrieved from our IndexedDB
    WHEN I click on the Install button
    THEN I download my web application as an icon on my desktop
    WHEN I load my web application
    THEN I should have a registered service worker using workbox
    WHEN I register a service worker
    THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
    WHEN I deploy to Heroku
    THEN I should have proper build scripts for a webpack application

## Installation

1. Run npm install through terminal
2. Run npm run start through terminal
3. Navigate to localhost:3000

## Screenshots

Homepage

![JATE-Homepage](https://user-images.githubusercontent.com/98381243/178195131-2fe242fe-3872-4776-975f-2c9cd1bfeabf.png)

Manifest

![manifest](https://user-images.githubusercontent.com/98381243/178195170-4b46b6b3-241f-4102-9c85-dc6b624aca8c.png)

Service Worker

![service-worker](https://user-images.githubusercontent.com/98381243/178195326-577cc9fb-e8c7-40fe-ab10-280142106baf.png)

IndexedDB

![indexeddb storage](https://user-images.githubusercontent.com/98381243/178195353-381f2e0d-6a77-4571-b195-2c6659170ed4.png)

## Technology

1. HTML
2. CSS
3. JavaScript
4. Express
5. Node.js
6. NPM
7. Webpack

## Links

Email: andynguyen_3@hotmail.com <br />
Github: https://github.com/androneus14 <br />
Deployed Application: https://anpwa-texteditor.herokuapp.com/ <br />
