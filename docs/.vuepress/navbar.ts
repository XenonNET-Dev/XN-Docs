/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: "首页", link: '/', icon: "material-symbols:house-outline" },
  {
    text: "游戏",
    prefix: "game",
    icon: "material-symbols:videogame-asset-outline",
    items: [
      {
        text: "游戏安装",
        prefix: "gameInstall",
        items: [
          { text: "安装教程", link: "introduction" },
          { text: "问题解决", link: "faq" },
        ]
      },
      {
        text: "额外功能",
        prefix: "extras",
        items: [
          { text: "力反馈补丁", link: "forceFeedBack" },
          { text: "物理读卡器", link: "physicalCardReader" }
        ]
      }
    ]
  },
  {
    text: "关于",
    prefix: "about",
    icon: "material-symbols:info-outline",
    items: [
      { text: "关于我们", link: "about" },
      { text: "用户协议", link: "userAgreement" },
      { text: "内容规范", link: "contentSpecifications" },
    ]
  }
])
