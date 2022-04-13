# strapi

## about:
- Strapi is a headless CMS: a cotent managment backend that is agnostic on which frontend platform you will use
- admin panel with different user roles **authentication**
- easily creates data models and with this data models automatically generates CRUD function & the relalted REST/GraphQL API endpoints 
- easily defines the authorization levels for any data types
- media server and email functionality
- extensible **base on Koa NodeJS framework** and plugin system

## Authentication & Authorization
**dont get confused with users**
1. admin panel users 3 default roles admin(superUser) - author- editor **can not add**
2. application users which are customers, data consumers, (read modify your content) **found in cotent manager** 2 default roles: (roles that regulate what app data they can retrieve/mutate)
 roles: authenticated, public **can add** 

## how to access data

- public
public data are the ones you mark as public under **setting-->Users & Permission Plugins-->Roles**
these data are freely available via the api without any kind of authorization

- restricted data
build-in strapi authentication system defines which users can authenticate to your app
need to be by email/password or other third party providers
activate them uder **setting & permission plugin-->providers**
data you mark as accessible only to authorized users need an **authentication process** 
strapi authoriation system is based on **JWT** (jason web token)

***how it works***
*user registers --> you make a call to registration endpoint*
*userwant to log--> make a call to login endpoint*
*upon successful login, the api responds by sending the authentication token automatically*
*any subsequent request to api coming from this registed user wil include the token as header*
*the server check the token in every incoming request and authorizes access to restriced data* 

***manually generating token** allows authenticated access to external sources
give the third party /external server access!
also the external sources need ti include the token in thier API request! 

## Strapi REST API
strapi automatically generate the all CRUD api for any content type but the access to this data is forbiden(403 error) by default and must be enabled explicitly 
more info at [strapi docs - Rest API ](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
two method to get the access: 
1- by editing the user public role permissions
 



## Terms & wording!
- Components: grop fields meant to be re-used in many content types in our application -dont repeat yourself **use components** 
**single vs repeatable components ???** 
- dynamic zone: allow content editor to choose among different component for each single content item **?**

### Collection types vs Single types
Collection types are content-types that can manage several entries.
Single types are content-types that can only manage one entry.
Components are a data structure that can be used in multiple collection types and single types.
