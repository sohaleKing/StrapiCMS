'use strict';

/**
 * boost-action service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boost-action.boost-action');
