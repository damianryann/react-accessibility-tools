import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@pbutlewski/storybook-html'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
};

module.exports = config;
