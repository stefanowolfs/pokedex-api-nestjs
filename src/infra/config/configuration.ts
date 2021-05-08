export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  basePath: process.env.BASE_PATH || 'api',
  pokeapiUrl: process.env.DATABASE_HOST || '',
});
