'use strict';

/**
 * internal-message router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::internal-message.internal-message');
