'use strict';

/**
 * internal-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internal-message.internal-message');
