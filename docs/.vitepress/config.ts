import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: '学习如何编写测试用例',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: 'TDD',
        collapsible: true,
        items: [
          {
            text: '什么是TDD?',
            link: '/TDD/',
          },
        ],
      },
    ],
  },
});
