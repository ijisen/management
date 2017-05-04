# resource

> 资源管理模块

## 创建流程

``` bash
# install dependencies
npm install

# 运行本地开发环境 localhost:8080
npm run dev

# 打包文件，线上发布
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# 目录结构说明(src)

## (开发工程目录 src)

> |-- assets  (存放静态文件，图片)
> |-- components  (组件库)
> |-- pages  (页面组件)
>> |-- CarouselManagement (轮播管理)
>>>|-- ChannelManagement (频道管理)
>>>|-- ProgramCheck (排播管理)
>>>|-- ProgramView (节目单审核)
>>>|-- SchedulingManagement (节目单查看)
>> |-- ResourceManagement (资源管理)
>>>  |-- DirectoryTree (目录树维护)
>>>  |-- ResourceAudit (资源上传)
>>>  |-- ResourceUpload (资源维护)
>> |-- SystemSettings (系统设置)
> |-- router  (路由配置文件)
>> |-- CarouselManagement (轮播管理)
>> |-- ResourceManagement (资源管理)
>> |-- SystemSettings (系统设置)
> |-- style  (全局样式文件，lees文件)
> |-- APP.vue  (初始页面配置)
> |-- main.js  (vue全局配置)
