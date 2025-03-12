module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"], // ⚠️ Solo para pruebas, no en producción
          connectSrc: ["'self'", "wss://mallorcatech-api.onrender.com:5173", "https:"],
          imgSrc: ["'self'", "data:", "blob:"],
          mediaSrc: ["'self'", "data:", "blob:"],
          frameAncestors: ["'self'"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
