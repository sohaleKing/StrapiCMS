module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31c49b4c8320660763b360dc01c70017'),
  },
});
