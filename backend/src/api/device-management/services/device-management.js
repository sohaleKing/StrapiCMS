'use strict';

/**
 * device-management service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::device-management.device-management');
