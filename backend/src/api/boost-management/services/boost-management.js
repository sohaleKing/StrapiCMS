'use strict';

/**
 * boost-management service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boost-management.boost-management');
