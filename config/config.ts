import { defineConfig } from 'dumi';
import menus from './hooks';

export default defineConfig({
  title: 'thooks',
  publicPath: '/hooks/',
  favicon: 'https://f.cdn-static.cn/29440_16560326238012.png',
  logo: 'https://f.cdn-static.cn/29440_16560326238012.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: 'hooks',
      path: '/hooks',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/tastien/thooks',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/hooks': menus,
  },

  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],

  // more config: https://d.umijs.org/config
});
