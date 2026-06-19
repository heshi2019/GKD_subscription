import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flomo.app',
  name: 'flomo浮墨笔记',
  groups: [
    {
      key: 1,
      name: '评价提示',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: [
            '[text="觉得 flomo 怎么样？"]',
            '[text="暂不提醒"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23935802',
        },

        // ✅ 新增：展开按钮自动点击
        {
          name: '自动点击展开',
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: [
            '[vid="expand"]',
            '[text="展开"]',
            '[id="com.flomo.app:id/expand"]'
          ],
          snapshotUrls: 'https://i.gkd.li/i/48f9c71d-cd26-407c-9b2a-55290c1ddcba.json',
        },
      ],
    },
  ],
});
