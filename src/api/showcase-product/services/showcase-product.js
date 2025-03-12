'use strict';

/**
 * showcase-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::showcase-product.showcase-product');
