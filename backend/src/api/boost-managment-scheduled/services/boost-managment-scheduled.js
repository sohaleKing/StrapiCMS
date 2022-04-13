'use strict';

/**
 * boost-managment-scheduled service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boost-managment-scheduled.boost-managment-scheduled');
