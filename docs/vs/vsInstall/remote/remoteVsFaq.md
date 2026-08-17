---
title: 问题解决
createTime: 2026/08/11 21:42:46
---
:::warning SoftEther 的已知问题
- 如果玩家离服务器（在江苏）物理距离较远，会出现较大的连接延迟。
- 如果服务器上有多名玩家的延迟较大（超过50ms），则较高概率会出现比较奇怪的物理。比如揽车揽不住，揽车上天。
- 因为SE软件的问题，车与车的碰撞会比较弹。玩家间像在玩OCM那种物理，车整体会感觉比较轻。
- 本地开终端机后切换成使用服上终端机一定需要重启一次计算机。
:::
:::info
CiRCLE 正在积极开发新方案尝试突破现有方案的限制，请您知悉并耐心等待。带来不便敬请谅解~
:::
## 账户名密码输入有误

![](https://img.kksk03.site/xrs/website/vs/remote/issueFix/1.avif)

请核对。注意，在联机平台修改的昵称不会影响本身的用户名，用户名一经分发是无法修改的。

## 服务器无法连接

![](https://img.kksk03.site/xrs/website/vs/remote/issueFix/2.avif)

请检查您的网络

## 目标服务器会话太多

![](https://img.kksk03.site/xrs/website/vs/remote/issueFix/3.avif)

服上的人太多，请稍等一下。若在联机网站与Oopz上的人员人数不符，请在联机群中汇报给CiRCLE群管理员。

## HUB在服务器上不存在

![](https://img.kksk03.site/xrs/website/vs/remote/issueFix/4.avif)

你没有选择要链接的服务器，直接用了默认的。  
请重新阅读：[2.3 联机配置导入与网卡配置](/vs/install/remote/install.html#_2-3-联机配置导入与网卡配置)。

## 找不到终端机

![](https://img.kksk03.site/xrs/website/vs/remote/issueFix/5.avif)

找不到终端机可能发生的原因较多。请按顺序排查并每做完一项就重试一次：

- 重启一次计算机
- 退出一次游戏启动器，检查游戏启动器中 `常规 - 网络适配器IP` 是否设置为CiRCLE服务器房间对应地址
- 重新检查网卡越点设置
- 检查是否有其他虚拟网卡，比如Radmin所在的虚拟网卡未被禁用。
- 如果你的电脑有wifi和以太网双网卡，请暂时禁用不用的副网卡。
- 如果使用的时群友自己开的终端机，请向群友确认其电脑防火墙是否处于关闭状态。
- 若上述还不能解决，请安装好toDesk远程软件联系对应管理员。  