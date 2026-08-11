---
title: 安装教程
createTime: 2026/07/21 16:15:03
---

::: warning 您是否已经看了安装前言？
我们希望您能独自依靠文档进行游戏安装与问题的解决，因此我们首先设立了安装前言。  
如果您没有看过安装前言，请先阅读安装前言。  

==> [安装前言](/game/gameInstall/introduction)
:::

::: tip
如果您已经在使用 `NXNavigator` 启动器启动游戏，则下面的内容基本不需要看了。  
您只需要在对应游戏中选择 `XenonNET` 服务器并选取原有的游戏本体目录就可以啦！  
:::

## 1. 下载

您需要下载游戏的启动器与游戏本体，以及解压软件。  

### 1.1 NXNavigator 启动器

下载方式：  

1. (直接下载) [kKsk's File Site](https://files.kksk03.site/XenonNET/NXNavigator) | 请选择最新的版本  
2. 群文件：在群文件的 `NXNavigator` 文件夹中会存放启动器的压缩包以供下载  

### 1.2 游戏本体

::: tip 湾岸 6RR
约 `7.69G`，请下载完后检查文件大小是否正确。  

- [kKsk's File Site](https://files.kksk03.site/XenonNET/GameResources/W6W10JPN05.7z?preview=download)  
:::

::: tip 湾岸 5DX+
约 `10.43G`，请下载完后检查文件大小是否正确。  

- [kKsk's File Site](https://files.kksk03.site/XenonNET/GameResources/W5P10JPN05.7z?preview=download)  
:::

### 1.3 解压软件

解压软件主要用于解压启动器压缩包、游戏本体。  
请确保使用以下推荐的解压软件进行解压，使用其他解压软件可能会导致内容有损坏。  

- [Bandzip（本教程中演示使用，推荐）](https://cn.bandisoft.com/bandizip/)  
- [7zip](https://www.7-zip.org/)  

请在这一步中自行安装好解压软件。  

## 2. 安装

### 2.1 创建游戏文件夹

首先，请在存储空间充足的地方，且路径下无中文的位置，新建一个 `WMMT` 文件夹（名字随您，但请确保为英文）  

![installGuide_1](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_1.avif)  

创建完成后，应差不多是这样的结构：  

::: file-tree
- WMMT/
:::

后续教程，该文件夹将统称为“游戏文件夹”  

### 2.2 解压启动器

1. 请在 [游戏文件夹](#21-创建游戏文件夹) 中新建名叫 `NXNavigator` 的文件夹。  

![installGuide_2](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_2.avif)  

::: file-tree
- WMMT
    - NXNavigator/
    - …
:::

2. 打开下载好的NXNavigator启动器的压缩包，您应该能看到如以下的文件（如果一打开不是这些文件，则请翻翻压缩包）  

![installGuide_3](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_3.avif)  

3. 将这些文件直接全部框选，然后拖拽至 `NXNavigator` 文件夹，完成解压。  

![installGuide_4](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_4.avif)  

解压完成后，差不多文件结构如下所示：  

::: file-tree
- WMMT
    - NXNavigator
        - libs/
        - Loader/
        - NTerminuX/
        - wwwroot/
        - .env
        - NXNavigator.exe
    - …
:::

### 2.3 解压游戏本体

1. 打开在 [下载-游戏本体](#12-游戏本体) 中所下好的游戏本体压缩包。  

::: tip
由于多个版本可供使用，所以您如果要安装多个游戏版本，则进行相同的重复操作即可。  
此处将以 ==湾岸 6RR== 为例进行操作
:::

打开游戏本体压缩包后，请您找到和下图所示差不多的文件列表（这个地方会包含 `wmn6r.exe` / `wmn5r.exe`）：  

![installGuide_5](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_5.avif)  

2. 前往 [游戏文件夹](#21-创建游戏文件夹) 中新建名叫 `GameResources` 的文件夹（名称其实无所谓，只要是英文名即可。下面 `GameResources` 文件夹将统称为“游戏本体文件夹”）。  

::: file-tree
- WMMT
    - NXNavigator/ # 这是启动器的文件夹
    - GameResources/ # 这是游戏本体的文件夹
:::

3. 进入 “游戏本体文件夹” ，新建用于存放游戏本体的文件夹：  

    - 湾岸 6RR：`W6W10JPN05`  
    - 湾岸 5DX+：`W5P10JPN05`  

    :::tip
    名称其实都是随便都可以，比如您喜欢也可以叫什么 `WMMT6RR` 啥的，反正就是得创建目录来区分本体，本体不能混装到同一个文件夹里。  
    :::

    ::: file-tree
    - WMMT
        - NXNavigator/ # 这是启动器的文件夹
        - GameResources # 这是游戏本体的文件夹
            - W6W10JPN05/ # 这是湾岸6RR的本体文件夹
            - W5P10JPN05/ # 这是湾岸5DX+的本体文件夹
            - WM510JPN05/ # 假设以后还有其他的版本？
    :::

4. 回到压缩包界面，将所有文件框选，拖拽至对应存放的本体文件夹。  

> 此处，依然是使用湾岸6RR来做教程。

![installGuide_6](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_6.avif)  

解压完的目录结构如下所示：  

::: file-tree
- WMMT
    - NXNavigator/ # 这是启动器的文件夹
    - GameResources # 这是游戏本体的文件夹
        - W6W10JPN05 # 这是湾岸6RR的本体文件夹
            - _F/
            - _G/
            - AMCUS/
            - data/
            - data_jp/
            - …
            - wmn6r.exe # 这是游戏的可执行文件
        - W5P10JPN05 # 这是湾岸5DX+的本体文件夹
            - _F/
            - _G/
            - AMCUS/
            - data/
            - data_jp/
            - …
            - wmn5r.exe # 这是游戏的可执行文件
:::

## 3. 配置启动器

请先前往 `NXNavigator` 文件夹双击打开 `NXNavigator.exe` 以打开启动器。  

### 3.1 配置控制器

1. 前往 “控制器” 页面，随后点击 “配置管理”：  

![installGuide_7](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_7.avif)  

2. 点击 “新建配置”：  

![installGuide_8](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_8.avif)  

3. 输入配置名称（如键盘、手柄等...），随后下方根据实际情况选择 `DirectInput` / `XInput` ，然后点击创建。  

![installGuide_9](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_9.avif)  

4. 创建完毕，点击关闭返回界面。  

![installGuide_10](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_10.avif)  

5. 在 “按键绑定” 中对所有按键进行绑定。  

![installGuide_11](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_11.avif)  

:::tip
1 ~ 6 档可绑可不绑，但建议绑定 3 档 与 4 档以方便在名称选择的时候进行上下移动。  
:::

所有在此页面的设置都是即时保存，因此绑定完按键了就可以了。  

### 3.2 配置游戏设置

1. 回到主页，选择游戏版本后，选择 `Xenon NET` 服务器。  

![installGuide_12](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_12.avif)  

2. 点击浏览以选择游戏本体文件夹

![installGuide_13](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_13.avif)  
![installGuide_14](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_14.avif)  

:::tip
这里选的文件夹就是上面游戏本体的文件夹。  
:::

3. 点击游戏设置

![installGuide_15](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_15.avif)  

4. 点击网络适配器IP  

![installGuide_16](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_16.avif)  

5. 选择一个网络适配器，随后点击确定。  

![installGuide_17](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_17.avif)  

6. 其余选项可根据其实际作用进行调整，调整完毕后点击保存即可。  

:::tip
一般只需要调整“窗口化运行游戏” / “分辨率”，当然不调整也是可以的。  
:::

### 3.3 启动游戏进行测试

打开 “在启动游戏时启动 NTerminuX”，随后点击启动游戏即可。  
如无意外，启动过程中应出现 “AMUpdater” 的游戏更新界面，随后进入游戏。  

![installGuide_18](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_18.avif)  
![installGuide_19](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_19.avif)  
![installGuide_20](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_20.avif)  

:::warning
在这一步你有可能会遇到以下的问题，请跳转问题解决处根据解决方案进行解决。  

1. 启动过程中显示 `Load WritableConfig Failed`  

==> [解决方案](/game/gameInstall/faq#启动游戏遇到-load-writableconfig-failed)  

![faq_1](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_1.avif)  

2. 游戏一直处于连接终端机中  

==> [解决方案](/game/gameInstall/faq#游戏卡在-チェック中・・・)  

![faq_2](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_2.avif)  
:::

## 4. 注册账户

是的，您当前还没有自己的账户，也同样没有自己的卡。  
所以，您需要注册账户才能得到自己的卡，并且使用服务器的全部功能。  

### 4.1 获取注册码并注册

::: steps
1. 启动游戏，进入到如图所示的待机界面，截图。  

    ![installGuide_21](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_21.avif)  

2. 发送截图给任一可以处理注册码的管理员。  

    请留意管理员的群昵称，如果该管理员当前没有空 / 没有这个权限的话，管理员会给自己的群昵称标注出来。  

3. 等待管理员给您注册码。

    平均当天内就会给注册码。  

4. 前往 [XenonNET Hub](https://hub.xenonlabs.top) 进行注册。

    携带注册码，前往数据站进行注册即可。  
:::

### 4.2 取得卡号

::: steps
1. 前往 [XenonNET Hub](https://hub.xenonlabs.top) 进行登录。

    需要先按照 [4.1 获取注册码并注册](#41-获取注册码并注册) 中的步骤进行注册哦！  

2. 在侧边栏中，前往“个人资料”-->“BanaPassport”页面。  

    如果是手机的话，那么请点击左上角的三横杠按钮以打开侧边栏。  

3. 取得卡号

    在“已绑卡片”中就可以看到自己卡号的 `chipId` 与 `accessCode` 啦！
:::

### 4.3 添加卡号至启动器

::: steps
1. 在启动器中切换至卡包页面。

    ![installGuide_22](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_22.avif)  

2. 点击“添加卡”，随后按照您的喜好，输入该卡的卡名称，接着从 [XenonNET Hub](https://hub.xenonlabs.top) 中的“已绑卡片”处复制 `chipId` 与 `accessCode`，填写进相应位置。  

    ![installGuide_23](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_23.avif)  

3. 点击确定。

    然后就可以看到自己的卡添加到启动器啦！  
:::

### 4.4 切换卡片

::: steps
1. 在游戏设置中，点击选择卡片。

    ![installGuide_24](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_24.avif)  

2. 选择在 [4.3 添加卡号至启动器](#43-添加卡号至启动器) 中添加的卡片并点击确定。

    ![installGuide_25](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_25.avif)  
:::

## 5. 启动！

您已经完成了所有安装教程，您以后就可以直接启动游玩了！  

如果您后续遇到任何问题，请先到 [问题解决](/game/gameInstall/faq) 页面寻找对应问题与其解决方案。  
如果您找不到，可以在群里进行提问。  

另外，因为 `NXNavigator` 支持多服务器切换，因此您无需重复下载游戏本体，只需要配置好游戏本体地址、添加并更换好卡号就可以玩其他的服务器了！  
具体详情还请自行去查阅服务器对应的教程文档哦~  