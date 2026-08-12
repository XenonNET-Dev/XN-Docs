/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const gameDoc = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: "doc",
  // 文档集合所在目录，相对于 `docs`
  dir: "game",
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: "/game",
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: "游戏",
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: "游戏安装",
      prefix: "gameInstall",
      items: [
        { text: "安装前言", link: "introduction", icon: "material-symbols:info-outline" },
        { text: "安装教程", link: "installGuide", icon: "material-symbols:developer-guide-outline" },
        { text: "问题解决", link: "faq", icon: "material-symbols:bug-report-outline" },
      ]
    },
    {
      text: "额外功能",
      prefix: "extras",
      items: [
        { text: "力反馈补丁", link: "forceFeedBack", icon: "material-symbols:vibration-outline" },
        { text: "物理读卡器", link: "physicalCardReader", icon: "material-symbols:nfc-outline" }
      ]
    }
  ]
})

const archiveCategoryNames: Record<string, string> = {
  "events": '在线活动信息',
  "w6w": '湾岸6RR',
}

const archive = defineCollection({
  type: "post",
  dir: "archive",
  linkPrefix: "/archive",
  title: "档案室",
  categoriesTransform: categories => categories.map(category => ({
    ...category,
    name: archiveCategoryNames[category.name] ?? category.name,
  })),
})

const vsDoc = defineCollection({
  type: "doc",
  dir: "vs",
  linkPrefix: "/vs",
  title: "联机",
  sidebar: [
    { text: "联机前言", link: "introduction", icon: "material-symbols:info-outline" },
    {
      text: "联机安装教程",
      prefix: "vsInstall",
      items: [
        {
          text: "远程联机",
          prefix: "remote",
          icon: "mdi:server-network",
          items: [
            { text: "安装教程", link: "remoteVsInstall" },
            { text: "问题解决", link: "remoteVsFaq" }
          ]
        },
        { text: "本地联机", link: "local", icon: "mdi:router-network" },
      ]
    }
  ]
})

const aboutDoc = defineCollection({
  type: "doc",
  dir: "about",
  linkPrefix: "/about",
  title: "关于",
  sidebar: [
    { text: "关于我们", link: "about", icon: "material-symbols:info-outline" },
    { text: "用户协议", link: "userAgreement", icon: "material-symbols:gavel-rounded" },
    { text: "内容规范", link: "contentSpecifications", icon: "material-symbols:health-and-safety-outline" },
  ]
})

/**
 * 导出所有的 collections
 */
export default defineCollections([
  gameDoc,
  aboutDoc,
  vsDoc,
  archive
])
