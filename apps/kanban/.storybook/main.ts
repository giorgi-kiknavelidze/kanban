import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    // eslint-disable-next-line
    // @ts-ignore
    const imageRule = config.module.rules.find(
      (rule) =>
        rule &&
        typeof rule === 'object' &&
        'test' in rule &&
        typeof rule.test === 'object' &&
        'test' in rule.test &&
        rule.test?.test('.svg')
    );
    (imageRule as Record<string, RegExp>)['exclude'] = /\.svg$/;

    // Configure .svg files to be loaded with @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/,
      // matches nx config
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: 'url-loader',
          options: {
            limit: 10000, // 10kB
            name: '[name].[hash:7].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
