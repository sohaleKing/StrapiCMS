# StrapiCMS


## Goal
The goal here is to be able to create a test blog website using headless Strapi CMS as the backend, Angular for the frontend in order to familiarize and to share the experience with other developers

## Prerequisites
Strapi v4.1.7 - Node 16 - npm 8

## Back-End Setup
 `npx create-strapi-app@latest backend --quickstart --no-run`

### Available commands in your project:

  `npm run develop`
  Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)

  `npm run start`
  Start Strapi without watch mode.

  `npm run build`
  Build Strapi admin panel.

  `npm run strapi`
  Display all available commands.

  You can start by doing: npm run develop (default), I changed the dev script just to make it easier to run
  `npm run dev`   --> opens the strapi on your localhost port 1337

  - By default Strapi create REST endpoints for each of your content-types. [http://localhost:1337/api].
  - With the GraphQL plugin, you will be able to add a GraphQL endpoint to fetch and mutate your content.

  ## GraphQL on Strapi
  navigate to server folder and run this: 
  `npm run strapi install graphql`
  - Then, start your app and open your browser at [http://localhost:1337/graphql] You should see the interface (GraphQL Playground) that will help you to write GraphQL query to explore your data

  ## Front-End Setup
  Install the Angular CLI 
  `npm install -g @angular/cli`

  Create an Angular frontend
  `ng new frontend` and then you can run the angular! 

## run Strapi

token: TON_strapi: (Full Access)
e0a71e0074bbdb0dd7b8f327f53d55ae75a97fe4f9123fdc8bbdfc2677dd2117db0e91e034a1209f47e145ff14db9b3d31c2b644017938b8b6614bc61dd03ceca46890f57e6a46ab9300dcfcd90bb8df761810a9656a528d4bd496a5557108d4b18b6dcb3d7d2647f3648fd350f82b5504934b8b98b4c6ef9b7c4bd5573425df



