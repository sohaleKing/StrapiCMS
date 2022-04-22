# StrapiCMS


## Goal
The goal here is to be able to create a test blog website using headless Strapi CMS as the backend, Angular for the frontend in order to familiarize and to share the experience with other developers

## Prerequisites
Strapi npx create-strapi-app@latest backend --quickstart --no-run - Node 16 - npm 8

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

  ## Apollo-Angular dependency setup
  `ng add apollo-angular`
