const config = {
  dev: {
    server: 'https://mysterious-taiga-43212.herokuapp.com',
  },
  prod: {
    server:
      process.env.SERVER_URL || 'https://mysterious-taiga-43212.herokuapp.com',
  },
};
export default process.env.NODE_ENV === 'production' ? config.prod : config.dev;
