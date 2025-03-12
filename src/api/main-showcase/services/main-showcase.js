'use strict';

/**
 * main-showcase service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-showcase.main-showcase');
