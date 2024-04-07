### project

- prettier
- lint：eslint、stylelint、commitlint

### features/TODO

- [ ] 有账号登录界面，当然只有两个账号(最后补充一个)
 - [  ] 首页等待补充....
- [ ] 打卡模块
  - [ ] 整理打卡完成情况绘制图
  - [ ] 类似github的贡献图
  > 后台接口沿用wechat_robot中的mongose文件夹中的
  > 前端页面：顶部是搜索相关的、下方是日历图，如果有打卡，就显示详细信息。日历支持月份、年份的切换，同是也会筛选打卡数据。底部是贡献图(是否需要？)
  > 1. 三个筛选：用户筛选、日期筛选。首先确定用户(默认值根据用户来，没有的话就我自己)，日期图中展示所有的任务；日期默认近一个月
  > 3. 贡献图固定展示该用户的所有任务(只要有一个打卡)一年的数据
- [ ] 记录模块
  - [ ] 支持上传图片
  - [ ] 支持日期搜索
  - [ ] 支持关键字搜索
- [ ] 留言的模块
  - [ ] https://github.com/tldraw/tldraw 共享画板


### 设计

参考：
[作为一个程序员，我该如何设计我的博客](https://www.jianshu.com/p/b37417bc2b8e)
[简洁风](https://www.imshu.cc/?p=221)
[这个很适合](https://www.lpolaris.com/category/%E4%BA%91%E7%A7%BB%E6%B0%91)

备用：https://ubud-right.aspirethemes.com/

#### 首页

全屏图片滚动，分为上面几个模块，有对应的图片。
头部是一个小的导航栏，可以快速的进入某个模块，和下面的图片滚动是联动的。

#### 打卡模块

请求数据库拿到数据 => 分任务渲染green图 => 添加可交互动作

#### 记录模块

有个上传区域，可以上传图片和视频
有个展示区域，时间轴，有个概览
顶部有搜索：支持时间搜索、关键字搜索
有个详情页：具体的图片和文字描述

#### 留言模块

考虑到存储问题。暂时没有想好......
