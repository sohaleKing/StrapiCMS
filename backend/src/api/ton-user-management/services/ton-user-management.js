'use strict';

/**
 * ton-user-management service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ton-user-management.ton-user-management');
