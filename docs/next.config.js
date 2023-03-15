module.exports = {
  staticPageGenerationTimeout: 10000,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ];
  }
};
