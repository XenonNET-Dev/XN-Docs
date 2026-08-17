---
title: 安装教程
createTime: 2026/08/11 21:42:27
---

:::info :tada: :tada: :tada:
欢迎加入CiRCLE联机中心，通过本页教程您将知道如何借助联机中心以及SE进行远程联机。配置后仍遇到问题？请阅读
==> [远程联机FAQ](/vs/vsInstall/remote/remoteVsFaq)
:::
::: tip
请收藏CiRCLE联机中心管理平台网站：[CiRCLE联机账户管理系统](https://web.uryuolab.cc/w6w_servers/my_account) 。  
可以及时获取最新的配置以及客户端。以及更多方便的服务都将依托该平台。  
:::

## 1. 获取联机软件和联机配置

登录 [联机平台](https://web.uryuolab.cc/w6w_servers/my_account)，输入联机账户名与密码，进入网站首页进行下载。

> ==联机软件与联机配置均需要下载=={.danger}。

::: warning
联机平台密码与您的联机软件账户密码一致且同步。  
若您不慎忘记了密码，可联系任意CiRCLE管理员协助重置。  
CiRCLE管理员信息参考 [关于我们](/about/about) ，您可以在CiRCLE群管理员中找到他们。

若发现联机软件或联机配置外链失效，请联系CiRCLE联机中心维护者。  
:::

## 2. 联机软件安装与配置
### 2.1 安装

解压并双击联机软件安装包，点击下一步。

![](https://img.kksk03.site/xrs/website/vs/remote/install/1.avif)  
在这个页面时选中 `SoftEther VPN Client` 后点击下一步。后续的也是一路下一步保持默认配置即可安装完成。  
安装完成后，您的桌面和开始菜单应该能找到下面的图标和应用：

![](https://img.kksk03.site/xrs/website/vs/remote/install/2.avif)  
![](https://img.kksk03.site/xrs/website/vs/remote/install/3.avif)

该应用为联机软件的客户端。  
### 2.2 配置导入与网卡配置

解压联机配置文件压缩包。  
双击联机软件客户端，打开应用。  
在菜单 `连接(C)` → `导入VPN连接配置(P)` 点击该项。

![](https://img.kksk03.site/xrs/website/vs/remote/install/4.avif)

选中解压好的联机配置文件后，点击 `打开（C）`

![](https://img.kksk03.site/xrs/website/vs/remote/install/5.avif)

客户端将显示出刚导入的CIRCLE联机中心配置条。  
下面的虚拟网络适配器如果是空的，请右键该处 - 选择 `新建虚拟网络适配器`

![](https://img.kksk03.site/xrs/website/vs/remote/install/6.avif)

在弹出的窗口直接点击确定。

![](https://img.kksk03.site/xrs/website/vs/remote/install/7.avif)

网络适配器将会创建，可能需要30秒到1分钟的时间。

![](https://img.kksk03.site/xrs/website/vs/remote/install/8.avif)

创建后，在虚拟网络适配器列表中，将会有一个新的项目

![](https://img.kksk03.site/xrs/website/vs/remote/install/9.avif)

这样，虚拟网卡创建完成。开始在配置中填入账户名和密码。  
选中改配置 - 右键，在下拉菜单中找到点击 `属性(R)` ,进入属性选项卡。

![](https://img.kksk03.site/xrs/website/vs/remote/install/10.avif)  
![](https://img.kksk03.site/xrs/website/vs/remote/install/11.avif)

首先将联机账户的账户名密码输入到用户验证框内。  
请注意，密码无法在联机客户端中修改，需要到联机管理网站中的账户设置选项卡中变更。  
变更后，联机网站与联机客户端对应密码将会同时修改。

其次请选择要加入的服。虚拟HuB名右侧的下拉箭头能看到全部能选择的服务器。

:::info
服务器大致分为以下几类：

- `Casual - X` (休闲X服，简称 C)：适合轻度玩家，体验湾岸联机乐趣的
- `Attack - X` (揽超X服，简称 A): 适合技术玩家，与别人进行揽超对战
- `VSVS - X` (对战X服，简称 V): 适合竞技玩家，既可以揽超也可以进行2v2对战

对于每个分类，有1，2，3 三个子房间。  
1房间，2房间自带终端，无需也禁止本地开启终端机。  
3房间不带终端，需要服上玩家自己协调开启一个终端机。

对于自带终端的版本，请参考联机中心网站首页的对应联机服所显示的版本。
:::

最后点击确定，保存配置。

::: caution
请注意，在CiRCLE联机中心的右键选项中，不要启用 `启动连接设置`
<11-1.jpg>
它会让SE程序在开机静默启动并连接到服务器,从而在不知情情况下占用服务器位置。若您之前不小心启用过，请点击：
<11-2.jpg>
:::

### 2.3 SE虚拟网卡与主网卡配置

右键新建的网卡，右键 - 选择 `打开Windows网络连接`

<12.jpg>  
![](https://img.kksk03.site/xrs/website/vs/remote/install/13.avif)

你会见到列出了很多网卡。

- `VPN - VPN Client`：是softether的网卡。
- `WLAN或者图标上有信号`：是无线网卡
- `以太网/本地连接/有线连接`：是有线网。

::: tip
为了您和大家的游戏体验，我们强烈建议您使用有线网，或至少为5G的无线网。  
2.4G无线网潜在会带来卡顿以及同房间人的闪烁现象。
:::

### 2.4 调整网卡 ==跃点=={.warning} 

:::warning
该项很关键，是常见的第一次联机无法找到终端机的原因。请认真阅读
::: 
#### SE 网卡跃点数：10
右键 `VPN-VPN Client` 网卡， 选择 `属性`

![](https://img.kksk03.site/xrs/website/vs/remote/install/14.avif)  
![](https://img.kksk03.site/xrs/website/vs/remote/install/15.avif)

选择 `高级`

![](https://img.kksk03.site/xrs/website/vs/remote/install/16.avif)

接口越点数调整为: ==`10`=={.danger}

![](https://img.kksk03.site/xrs/website/vs/remote/install/17.avif)

点击确定，保存。
#### 主网卡跃点数：20

![](https://img.kksk03.site/xrs/website/vs/remote/install/18.avif)

右键主网卡，同样选择 `属性` - 选中`TCP/IP协议4`，点击 `属性`。 弹出的对话框选择 `高级`。  
在主网卡的高级TCP/IP设置上，取消 `自动跃点` 的勾选。同时将自动跃点数调整为 ==`20`=={.danger}。

![](https://img.kksk03.site/xrs/website/vs/remote/install/19.avif)

::: danger 一些特殊需要说明的情况
- 如果你平时存在同时连接有线网和无线网的情况。（注意是 `同时`，不是 `需要频繁切换`）。请将有线网卡（以太网）设置跃点数为 `20`，wifi网卡设置跃点数为 `30`，SE虚拟网卡设置为 `10`。
- 如果你有其他联机软件或者存在虚拟机网卡，例如 `Radmin（蓝盾）` 或者 `ZeroTier` ，或者 `VMWare` 等虚拟网卡。请在使用SE时将其他虚拟网卡禁用。  
  禁用方法， 以VMWare虚拟网卡为例：

![](https://img.kksk03.site/xrs/website/vs/remote/install/20.avif)

- 如果游玩结束需要使用时，尤其是类似 `Radmin` 这种其他联网软件的虚拟网卡，请手动启用该网卡，禁用SE的虚拟网卡(VPN - VPN Client)

![](https://img.kksk03.site/xrs/website/vs/remote/install/21.avif)  
:::

## 3. 重启电脑
:::tip
你可能会好奇，为啥会有重启电脑单独作为流程中的一步？  
原因是一般情况下可能你大概率在本地已经开过一次本地终端。  
如果符合这种情况，在连接服上的终端时可能会找不到游戏终端。
:::
::: tip 一劳永逸的方法
当你在本地游玩后打算切换到CiRCLE服务器上，请首先重启一次电脑。可以减少一些奇怪问题的发生概率。
:::
::: tip
不过如果你之前已经在CiRCLE服上游玩，只是想切换服务器，只需要更换SE属性中的 `虚拟Hub名`（连接的房间），无需重启。
:::

## 4. 连接到服务器

如果您需要查看服上人员，可以登录联机管理网站。首页上会有当前各服在线人员。您可以根据偏好自行选择需要连接的房间（SE属性中的 `虚拟Hub名`）。  
确认好房间后，右键联机服配置 - `点击连接`

![](https://img.kksk03.site/xrs/website/vs/remote/install/22.avif)

如果连接成功，你将会看到该项目的VPN连接状态为已连接。

![](https://img.kksk03.site/xrs/website/vs/remote/install/23.avif)

若发现报错，请参考 ==> [SE出错问题排查](/vs/vsInstall/remote/remoteVsFaq)

## 5. 进入游戏前

### 5.1 请首先加入对应服的Oopz

Oopz的频道号在CiRCLE联机群公告中。Oopz用于玩家间协调基板，每次联机游戏期间都需要加入。  
在第一次使用Oopz时，请将Oopz昵称改为联机平台网站您设定的昵称。  
昵称修改方式：

<13.jpg>
<14.jpg>


Oopz使用时可以不开麦，但请关注公屏管理员发出的消息。若您没有加入Oopz进行联机游戏，管理员可能会将您踢出或封禁CiRCLE联机账户。

:::caution 上服未登录Oopz封禁规则如下:
- 第一次：警告
- 第二次: 3天
- 第三次:7天
- 第四次:永久封禁，并同步删除XRS账号
- (如您发现有上述违规者，可以向CiRCLE管理举报，凭凭证举报并由管理员核实有效后，奖励1000XR点数）
::: 

### 5.2 查看终端在线情况

在您还未联机成功时，我们强烈建议您加入具有自动终端的游戏房间。在联机管理网站首页可以寻找到。  
在具有自动终端的服务器上，在终端版本旁边具有自动终端的状态显示。

![](https://img.kksk03.site/xrs/website/vs/remote/install/25.avif)

- 🔴： 服务器上无人，自动终端处于关闭状态，等待玩家加入
- 🟡：服务器终端操作中，比较少见
- 🟢：服务器终端开启，游戏客户端可以找到终端。

::: tip
请注意，遇到🔴不代表服务器失效，自动终端将会在检查到服上玩家后自动开启。  
若您发现自动终端状态为❌,很不幸，自动终端出现了问题，请在群中@管理员进行汇报，我们将尽快处理~  
:::

### 5.3 变更NXNavigator (湾岸启动器)的部分设置
:::warning
请注意，`5DX+` 和 `6RR` 都需要设置一次
:::
#### 网卡IP
点击 `游戏` - `XenonNET`支持的游戏版本 - `游戏设置`
<15.jpg>
点击 `网卡适配器IP`
<16.jpg>
选择下标有 `VPN-VPN Client` 的IP 后点击确定
<17.jpg>
#### 模式设置
选择 `驾驶外壳` 模式，==取消=={.danger} 勾选 `在游戏启动时启动NTerminuX`
<18.jpg>

:::caution
不要在连接CiRCLE服务器时候使用 `湾岸终端` 改车，会导致服上其他人终端机NG
:::

## 6. 启动游戏

若根据上述教程设置完成，应该可以成功启动游戏，并找到远程终端！  
如果您成功找到终端：在游戏终端加载的最后一项会看到编号

成功连接的情况如图所示：

![](https://img.kksk03.site/xrs/website/vs/remote/install/31.avif)

::: danger 连接失败是这样的
![](https://img.kksk03.site/xrs/website/vs/remote/install/32.avif)

一般这个状态持续超过5秒，基本就可以判定是未找到终端机。  
对于终端机未连接成功的情况，请见 [联机问题修复 - 找不到终端机](/vs/vsInstall/remote/remoteVsFaq#找不到终端机)  
:::

如果正常连接到了终端机：

有一种情况您可能会遇到就是基板id冲突。基板id冲突报错如下图所示（E2403）：

![](https://img.kksk03.site/xrs/website/vs/remote/install/33.avif)

这时您需要去Oopz或群里与在线群友协商使用的id。更改基板id的方法如下：

1. 按机修键后进入机修菜单，使用机修菜单上下键移动到下面的条目：

![](https://img.kksk03.site/xrs/website/vs/remote/install/34.avif)

2. 按确定后，在子菜单移动到 `基板ID` 项：

![](https://img.kksk03.site/xrs/website/vs/remote/install/35.avif)

3. 按确定后，上下调整为希望分配的id后确认。
4. 按一次机修键退出机修菜单

需要注意，如果服上两个人同时在机修页面，基板ID会提示全部不可用。此时只要其中一人退出机修界面即可。  
调整好后，就可以愉快的进入游戏啦

还有一点需要提醒：如果服务器上只有一人时，闯入功能将失效。  
现象为进入游戏后，闯入选项永远是 `乱入不可`。 此时若您知道另一人已上线，请在游戏中按动 `闯入切换` 按钮，即可重新调整闯入选项。

结束游戏后 ==记得断开 `SoftEther VPN Client` 的连接=={.danger}，==以防占用端口影响别人游玩=={.danger} 哦。

## 5. 遇到问题

请前往 [问题修复](/vs/vsInstall/remote/remoteVsFaq) 查找对应问题的解决方案  


