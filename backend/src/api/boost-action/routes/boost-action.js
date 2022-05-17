'use strict';

/**
 * boost-action router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::boost-action.boost-action');
