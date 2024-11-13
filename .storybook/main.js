
const config = {
  // https://storybook.js.org/docs/react/configure/frameworks#which-frameworks-are-supported
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
 stories: [
  '../src/app/components/**/*.stories.mdx',
  '../src/app/components/**/*.stories.@(js|jsx|ts|tsx)',
],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel'
  ],
  core: {
    disableTelemetry: true,
  },
  // Twin recommends adding the babel config here as Next.js disables SWC when .babelrc is added to the root.
  babel: async options => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        'babel-plugin-twin',
        'babel-plugin-macros',
        'babel-plugin-styled-components',
      ],
    }
  },
}
export default config