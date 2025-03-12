module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'sha256-qxainhma06UpHpCCHHJd9iNsgGrEwX90oKujCm7uV04='"],
        connectSrc: ["'self'", "wss://mallorcatech-api.onrender.com:5173"], // Asegúrate de permitir la conexión WebSocket
        // Puedes añadir otras directivas según sea necesario, por ejemplo:
        // styleSrc: ["'self'", "'unsafe-inline'"],
        // imgSrc: ["'self'", "data:"],
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
