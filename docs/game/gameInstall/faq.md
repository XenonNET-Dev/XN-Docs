---
title: 问题解决
createTime: 2026/07/21 16:36:38
---

## 启动游戏遇到 Load WritableConfig Failed

![faq_1](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_1.avif)  

原因：游戏本体部分配置存在异常  

::::details 解决方案
1. 进入游戏本体文件夹，再进入 `AMCUS` 文件夹，随后找到 `AMConfig.ini` 。  
2. 使用 [Notepad--](https://gitee.com/cxasm/notepad--/releases)（如果没有请下载安装） 打开 `AMConfig.ini` 。  
3. 根据以下指引，调整文件，并保存（这里以湾岸6RR的为例）：  

```ini title="AMConfig.ini"
[AMUpdaterConfig] 
;; AMUpdater 一般設定
amucfg-title=湾岸ミッドナイト MAXIMUM TUNE 6RR
amucfg-lang=JP
amucfg-countdown=5
amucfg-h_resol=1360
amucfg-v_resol=768
amucfg-logfile=C:\amupdater.log ;; [!code --]
amucfg-logfile=.\amupdater.log ;; [!code ++]
amucfg-game_rev=3
amucfg-h_offset=0
amucfg-v_offset=0

[AMAuthdConfig] 
;; AMAuthd 一般設定
amdcfg-authType=ALL.NET
amdcfg-sleepTime=50
amdcfg-resoNameTimeout=180
amdcfg-writableConfig=F:\WritableConfig.ini  ;; [!code --]
amdcfg-writableConfig=.\WritableConfig.ini  ;; [!code ++]
amdcfg-showConsole=ENABLE
amdcfg-logfile=C:\amauthd.log  ;; [!code --]
amdcfg-logfile=.\amauthd.log  ;; [!code ++]
amdcfg-export_log=

[AllnetConfig] 
;; ALL.Net 一般設定
allcfg-gameID=SBWJ
allcfg-gameVer=13.00

[AllnetOptionRevalTime]
;; ALL.Net 再認証時刻設定
allopt-reval_hour=7
allopt-reval_minute=0
allopt-reval_second=0

[AllnetOptionTimeout]
;; ALL.Net 通信タイムアウト設定
allopt-timeout_connect=60000  
allopt-timeout_send=60000
allopt-timeout_recv=60000

[MuchaAppConfig]
;; mucha_app 設定
appcfg-logfile=C:\muchaapp.log  ;; [!code --]
appcfg-logfile=.\muchaapp.log  ;; [!code ++]
appcfg-loglevel=INFO

[MuchaSysConfig]
;; MUCHA システム設定
syscfg-daemon_exe=.\MuchaBin\muchacd.exe
syscfg-daemon_pidfile=C:\muchacd.pid  ;; [!code --]
syscfg-daemon_pidfile=.\muchacd.pid  ;; [!code ++]
syscfg-daemon_logfile=C:\muchacd.log  ;; [!code --]
syscfg-daemon_logfile=.\muchacd.log  ;; [!code ++]
syscfg-daemon_loglevel=INFO
syscfg-daemon_listen=tcp:0.0.0.0:12345
syscfg-client_connect=tcp:127.0.0.1:12345

[MuchaCAConfig]
;; MUCHA 認証設定
cacfg-game_cd=W6W1
cacfg-game_ver=05.03
cacfg-game_board_type=0
cacfg-game_board_id=W6W
cacfg-auth_server_url=https://v388-front.mucha-prd.nbgi-amnet.jp:10082/mucha_front/
cacfg-auth_server_sslverify=1  ;; [!code --]
cacfg-auth_server_sslverify=0  ;; [!code ++]
cacfg-auth_server_sslcafile=.\front.mucha-prd.nbgi-amnet.jp.cacert.pem
cacfg-auth_server_timeout=300
cacfg-interval_ainfo_renew=1800
cacfg-interval_ainfo_retry=60

[MuchaDtConfig]
;; MUCHA ファイル配信 (DT) 設定
dtcfg-dl_product_id=0x57365731
dtcfg-dl_chunk_size=0x10000
dtcfg-dl_image_path=\\.\I:  ;; [!code --]
dtcfg-dl_image_path=.\dl_image  ;; [!code ++]
dtcfg-dl_image_size=0
dtcfg-dl_image_type=RAW
dtcfg-dl_image_crypt_key=0xdd149aba
dtcfg-dl_log_level=INFO
dtcfg-dl_lan_crypt_key=0xb94ba9fd15258bcb
dtcfg-dl_lan_broadcast_interval=1000
dtcfg-dl_lan_udp_port=9850
dtcfg-dl_lan_bandwidth_limit=0
dtcfg-dl_lan_broadcast_address=0.0.0.0
dtcfg-dl_wan_retry_limit=
dtcfg-dl_wan_retry_interval=
dtcfg-dl_wan_send_timeout=
dtcfg-dl_wan_recv_timeout=
dtcfg-dl_lan_retry_limit=
dtcfg-dl_lan_retry_interval=
dtcfg-dl_lan_send_timeout=
dtcfg-dl_lan_recv_timeout=

[MuchaDtModeConfig]
;; MUCHA ファイル配信モード設定
dtmode-io_dir=E:\
dtmode-io_file=W6W10JPN
dtmode-io_conv=DECEXP
dtmode-io_passphrase=Qx8hJ1KilweAp5Xm
dtmode-io_ext=vhd
```

4. 重新启动游戏尝试

:::tip
如果尝试了上述调整仍然不行，则请重新按照安装教程下载游戏本体文件，并重新解压游戏本体。  
:::

::::

## 游戏卡在 “チェック中・・・”

![faq_3](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_3.avif)  

原因：有很多种原因，总之阻止了游戏和终端机之间的通信。  

::::details 解决方案

::: steps

1. 检查启动游戏时是否打开了 “在启动游戏时启动 NTerminuX”

    如果不打开，启动器不会启动终端机的模拟工具。  
    所以游戏自然而然是无法连接到终端机的。  

2. 尝试更换网络适配器 IP

    您有可能在 “游戏设置” 中的 “网络适配器 IP” 中选择错误（如选到了 `VMware` 的网卡）  
    请选择您主要使用的网络：  
    - 如您是使用的网线上网请选择 “以太网” 的  
    - 如您是使用的无线网络上网请选择 “WLAN” 的  

3. 检查当前系统是否有杀毒软件正在运行  

    如果有的话，请退出杀毒软件，或最好将其卸载。  

    :::tip
    已知火绒安全不会导致这个问题的出现
    :::

4. 检查当前电脑是否有安装 `Radmin` 这款软件

    如果有的话，请将其卸载。  

5. 检查当前网络环境是否为公用 / 特殊网络。  

    部分校园网、公司网络、部分手机的热点等可能会导致该问题的出现。  
    您需要尝试更换网络环境  

6. 禁用网卡驱动

    打开控制面板 --> 网络和 Internet --> 网络和共享中心  
    然后，在左侧找到 “更改适配器设置”，点击打开。  
    随后，除了自己正在上网的网卡外，其余的网卡全部右键并禁用。  

7. 还有问题？

    重装系统吧，任何能做的都做了。  
:::

::::

## 不知道怎么进游戏终端机模式

很简单，切换一下再启动游戏就好了。  

![faq_4](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_4.avif)  

## 车辆跑偏 / 油门刹车无法踩满或无响应

原因：没有对游戏进行IO重置  

::::details 解决方案

::: steps
1. 启动游戏后，按机修按键进入机修模式。  

    ![faq_5](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_5.avif)  

2. 点击“机修上” / “机修下”按钮，移动光标至 “入出力テスト” 选项，再点击“机修确认”按钮进入该选项。  

    ![faq_6](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_6.avif)  

3. 选择第一项“アナログボリュ一ムの初期化(イニシャライズ)”并进入  

    ![faq_7](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_7.avif)  

4. 点击一次“机修确认”键，然后看到如图所示框框位置在闪烁，则再点一次“机修确认”键  

    ![faq_8](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_8.avif)  

5. 进入到此页面即可，再按一次“机修”按钮即可退出该模式进行正常游玩  

    ![faq_9](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_9.avif)  

:::

::::

## 游戏启动后直接闪退（未进入游戏画面）

具体表现为，刚启动游戏，窗口弹出来，画面是全白的，然后就闪退。  

原因：有很多种原因都会导致闪退  

::::details 解决方案

::: steps

1. 关闭游戏设置中的“窗口化运行游戏”

    部分笔记本电脑可能都需要关闭窗口化选项才能正常运行。  

2. 打开游戏设置中的“禁用环境传感器”

    别问，问就是得开开来试试  

3. 给游戏设置兼容模式

    前往游戏本体文件夹，找到 `wmn6r.exe` / `wmn5r.exe`  
    随后，右键 --> 属性  
    在弹出的属性窗口中，前往 “兼容性” 选项卡，按照以下进行设置：  

    - 以兼容模式运行这个程序：启用，版本请选择 `Windows 7`  
    - 以管理员身份运行此程序：启用  
    - 注册此程序以重新启动：启用  

4. 重新解压游戏本体

    您可能是使用 `Bandizip` / `7z` 外的软件（如 2345好压）等进行解压的。  
    如果是的话，按照教程中所推荐的解压软件，对游戏本体进行重新解压。  

5. 退出 / 卸载杀毒软件

    有可能杀毒软件拦截了加载器的启动。  
    请退出 / 卸载后尝试  

6. 还是不行？

    重装系统吧，没辙了。  
:::

::::

## 游戏启动后直接闪退（已进入游戏画面）

具体表现为：在机修选项中的“筐体モ一ドチェック”处于“チェック中・・・”的时候发生闪退。  

![faq_10](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_10.avif)  

::::details 解决方案

::: steps

1. 给游戏设置兼容模式

    前往游戏本体文件夹，找到 `wmn6r.exe` / `wmn5r.exe`  
    随后，右键 --> 属性  
    在弹出的属性窗口中，前往 “兼容性” 选项卡，按照以下进行设置：  

    - 以兼容模式运行这个程序：启用，版本请选择 `Windows 7`  
    - 以管理员身份运行此程序：启用  
    - 注册此程序以重新启动：启用  

2. 重新解压游戏本体

    您可能是使用 `Bandizip` / `7z` 外的软件（如 2345好压）等进行解压的。  
    如果是的话，按照教程中所推荐的解压软件，对游戏本体进行重新解压。  

3. 退出 / 卸载杀毒软件

    有可能杀毒软件拦截了加载器的启动。  
    请退出 / 卸载后尝试  

4. 还是不行？

    重装系统吧，没辙了。  
:::

::::

## 游戏过程中闪退

原因：您大概率是开着中文输入法进行游戏。  

::::details 解决方案
请将输入法切换为系统自带的纯英文输入法，或者打开大写输入。  

:::tip
有部分用户反馈，使用微信输入法也可能导致该问题的发生（无论是否英文输入）  
若您正在使用且发生了该问题，请卸载它  
:::

::::

## 刷卡显示“ネットワ一クが切断されました”

![faq_14](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_14.avif)  

原因：  
1. 您当前使用的卡已经处于封禁状态  
2. 您用了错误的卡  

::::details 解决方案

::: steps
1. 您当前有没有封禁？

    如果您被封了，那确实用不了。  
    如果没被封，则继续下面步骤。  

2. 前往卡包界面，查看是否有卡。

    ![installGuide_22](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_22.avif)  

3. 如果没有卡，则添加卡。

    在“个人资料”-->“BanaPassport”页面可取的您的卡号，您的卡号拆分为 `chipId` 与 `accessCode` ，点击复制并粘贴到对应位置即可。

    ![installGuide_23](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_23.avif)  

4. 在游戏设置中，点击选择卡片。  

    ![installGuide_24](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_24.avif)  

5. 选择刚才添加的卡片并点击确定。

    ![installGuide_24](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_25.avif)  
:::

::::

## 刷卡显示“この力一ド / 携带電話は対応していません”

![faq_15](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_15.avif)  

原因：读卡器在使用南梦宫官方协议时因未知原因无法支持 `Aime` 卡

:::details 解决方案
更换为 BanaPassport 卡。  
:::

## E2401

原因：终端机修订版本号版本与游戏修订版本号不一致。  

:::details 解决方案
一般该问题不会出现。如果真的出现了，那么请您多开几次游戏让 `AMUpdater` 将版本号重新修正。  
:::

## E0551 / E0552 / E0554

原因：游戏认证失败。  

:::details 解决方案
一般只有在游戏服务器正在维护 / 游戏服务器IP错误才会导致这个问题。  

请您到群里看看是不是服务器正在维护。  
:::

## E2212

原因：未在测试菜单中关闭方向盘电源。  

::::details 解决方案

::: steps
1. 启动游戏后，按机修按键进入机修模式。  

    ![faq_5](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_5.avif)  

2. 点击“机修上” / “机修下”按钮，移动光标至 “ゲ一ム設定” 选项，再点击“机修确认”按钮进入该选项。  

    ![faq_11](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_11.avif)  

3. 根据图片进行调整，点击“机修确认”按钮后，再点击“机修上” / “机修下”按钮可切换 `ON` / `OFF` 状态  

    ![faq_12](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_12.avif)  
:::

::::

## E2405

原因：游戏无法对触摸屏进行自检（终端机模式）  

:::details 解决方案
进入游戏时，当自检界面一出现，就开始用鼠标不断点击游戏窗口内直至正常进入游戏即可。  
:::

## E2402

原因：当前网络环境下有多个已开启的湾岸终端机。  

:::details 解决方案
一般情况下（单机），该问题在于后台有多个正在运行的湾岸终端机。  
您可以去任务管理器寻找并终止多余的 `NTerminuX.exe` 的运行。  

如果您是连接到了联机服务器，则请在启动游戏的时候不要打开“在启动游戏时启动 NTerminuX”  
:::

## E2403

原因：当前网络环境下有多个游戏正在开启，且基板ID重复。  

一个网络环境下最多可容纳 `4` 个游戏（驾驶基座模式）。  

::::details 解决方案

::: steps

1. 启动游戏后，按机修按键进入机修模式。  

    ![faq_5](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_5.avif)  

2. 点击“机修上” / “机修下”按钮，移动光标至 “ゲ一ム設定” 选项，再点击“机修确认”按钮进入该选项。  

    ![faq_11](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_11.avif)  

3. 根据图片进行调整，点击“机修确认”按钮后，再点击“机修上” / “机修下”按钮可切换基板ID。  

    ![faq_13](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_13.avif)  
:::

::::

## E0702

原因：运行库未安装正确导致游戏无法调用刷卡所需模块文件。  

:::details 解决方案
下载 [DX修复工具增强版](https://zhangyue667.lanzouh.com/DirectXRepairEnhanced)，运行一次修复。  
:::

## E0711 / E0712

原因：读卡器开关处于关闭状态 / 读卡器未连接。  

::::details 解决方案

::: steps
1. 做一次解决 E2212 的解决方案

    跳转：[E2212](#e2212)  

2. 前往游戏设置中，确保“选择卡片”中不是选择的“使用官方读卡器”

    “使用官方读卡器”选项需要您有读卡器硬件才可以使用。  
:::

::::

## 启动器启动后崩溃（WebView2 组件被 Windows 阻止）

::: tip 判断您的问题是不是这个问题
启动器打开后会发生崩溃，并在 `NXNavigator.exe` 的同目录下生成 `crash` 文件。  
打开 `crash` 文件，在头几行会写明：  

```log
System.Windows.Markup.XamlParseException: 设置 connectionId 时引发了异常。
---> System.IO.FileLoadException: 未能加载文件或程序集
“Microsoft.Web.WebView2.Wpf, Version=1.0.4022.49”
或它的某一个依赖项。不支持操作。
(异常来自 HRESULT:0x80131515)

---> System.IO.FileLoadException: 未能加载文件或程序集
'file:///启动器安装目录/libs/Microsoft.Web.WebView2.Wpf.dll'
或它的某一个依赖项。不支持操作。
```

:::

原因：启动器依赖的 `Microsoft.Web.WebView2.Wpf.dll` 被 Windows 标记为来自网络的文件，导致 .NET Framework 拒绝加载该组件，并出现 `0x80131515` 报错。  

::::details 解决方案

::: steps
1. 关闭启动器。

2. 打开系统的 `PowerShell`（建议使用管理员），并执行以下命令：

    ```powershell
    Get-ChildItem -LiteralPath '启动器安装目录\libs' -Recurse -File | Unblock-File
    ```

    请将 `启动器安装目录` 替换为实际路径，例如：

    ```powershell
    Get-ChildItem -LiteralPath 'D:\WMMT\NXNavigator\libs' -Recurse -File | Unblock-File
    ```

3. 重新启动启动器。
:::

::::

> 注意：仅应对确认来源可信的启动器文件执行此操作。该命令会移除 Windows 对“来自网络”的安全标记，不会修改文件内容或系统权限。