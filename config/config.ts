import { defineConfig } from 'dumi';
import menus from './hooks';

export default defineConfig({
  title: 'thooks',
  publicPath: '/hooks/',
  favicon:
    'https://shiheng-tech.oss-cn-shanghai.aliyuncs.com/intelligence-shop/test/shop/tstlogot2x.png',
  logo: 'https://shiheng-tech.oss-cn-shanghai.aliyuncs.com/intelligence-shop/test/shop/tstlogot2x.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: 'hooks',
      path: '/hooks',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/shiheng-fe/hooks',
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
