module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-essentials'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  reactOptions: {
    fastRefresh: true,
  },
};
