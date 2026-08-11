---
title: 物理读卡器
createTime: 2026/07/21 16:33:51
---

您可以使用物理读卡器来像在街机厅里坐在驾驶基座上一样使用实体卡进行刷卡游戏。  
说实话就是：仪式感？  

## 1. 购入读卡器

::: info 声明
此处没有任何打广告与推销销售的意图，且所有读卡器商家与本服务器并无关联。  
是否使用物理读卡器取决于您的个人选择，没有物理读卡器依然可以使用虚拟刷卡，不影响正常游戏。  
:::

目前有许多商家制作并出售读卡器，基本都集中于闲鱼或淘宝上进行销售。  
已知可用的读卡器品牌：  

- HINATA  
- KOBATO  

## 2. 接入读卡器

自备 USB 线材将读卡器与您的计算机连接即可。  
连接后，您可以在“计算机管理”==>“设备管理器”中查看到已连接的读卡器设备。  

![physicalCardReader_1](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_1.avif)  
![physicalCardReader_2](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_2.avif)  

## 3. 设置端口

湾岸使用 `COM4` 端口与读卡器进行连接。  

### 3.1 打开设备管理器

打开“计算机管理”==>“设备管理器”  
默认情况下的排列方式是“按类型列出设备”，并且按如图所示将“显示隐藏的设备”勾选。  

![physicalCardReader_3](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_3.avif)  

### 3.2 确认是否有设备占用了 `COM4` 端口

首先拔掉读卡器，寻找“端口”下拉菜单：  

![physicalCardReader_4](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_4.avif)  

如果没有看到“端口”下拉菜单，可以直接进入 [第 4 步](#_3-4-接上读卡器)。  
如果有的话，请阅读 [第 3 步](#_3-3-使端口可用)。  

### 3.3 使端口可用

如果有设备占用了 `COM4` 端口，需要右键该设备，并依次选择“属性” ==> “端口设置” ==> “高级”：  

![physicalCardReader_5](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_5.avif)  
![physicalCardReader_6](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_6.avif)  

将“端口”从 `COM4` 修改为其他的端口（比如 `COM255`）  

![physicalCardReader_7](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_7.avif)  

设置完成后，点击确定即可。  

### 3.4 接上读卡器

接上读卡器后，进入下图的选单（按容器列出设备）：  

![physicalCardReader_8](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_8.avif)  

然后查看是否有 `HINATA` / `HINATA Lite`：  

![physicalCardReader_9](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_9.avif)  

### 3.5 修改读卡器端口

找到“USB串行设备”，并依次选择“属性” ==> “端口设置” ==> “高级”：  

![physicalCardReader_10](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_10.avif)  
![physicalCardReader_11](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_11.avif)  

将端口设置为 `COM4`，点击确定即可。  

![physicalCardReader_12](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_12.avif)  

### 3.6 重启电脑

拔掉读卡器，重启电脑，然后再接上读卡器即可。  

## 4. 修改启动器游戏设置

1. 进入游戏设置，点击“选择卡片”：  

![installGuide_24](https://r2.kksk03.site/XenonNET/WebResources/installGuide/installGuide_24.avif)  

2. 选择“使用官方读卡器”，并点击确认。  

![physicalCardReader_13](https://r2.kksk03.site/XenonNET/WebResources/physicalCardReader/physicalCardReader_13.avif)  

3. 点击保存。  

## 5. 启动游戏测试

如果启动游戏，没有出现任何黄窗报错成功进入游戏待机界面的话，那么就说明没有问题了。  

::: warning
请注意：您还需要改绑卡号，才能使用您的实体卡访问您的游戏数据，否则您可能会遇到“ネットワ一クが切断されました”的错误。  

![faq_14](https://r2.kksk03.site/XenonNET/WebResources/faq/faq_14.avif)  
:::

## 6. 改绑卡号

对于 `HINATA` / `HINATA Lite` 读卡器，现已支持在 `XenonNET Hub` 中进行卡号改绑。  
您可以自行在网站在连接读卡器，然后进行改绑。  

如果您使用的是其他的读卡器，可能无法支持，或者是解码出来的卡号不正确，请最好直接找管理员进行卡号改绑。  