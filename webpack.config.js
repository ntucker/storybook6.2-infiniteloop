const { makeConfig } = require('@anansi/webpack-config');

const options = {
  basePath: 'src',
  buildDir: 'dist/',
  htmlOptions: { title: 'storybook-test' },

  extraJsLoaders: [
    {
      loader: '@linaria/webpack-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

const generateConfig = makeConfig(options);

module.exports = (env, argv) => {
  const config = generateConfig(env, argv);
  return config;
};

module.exports.options = options;
