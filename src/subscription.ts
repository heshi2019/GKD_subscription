import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 6379,
  name: 'XK的GKD订阅-自用尝试',
  version: 0,
  author: 'XK',
  checkUpdateUrl: './XK_gkd.version.json5',
  supportUri: 'https://github.com/heshi2019/GKD_subscription/issues/new/choose',
  categories,
  globalGroups,
  apps: rawApps,
});
