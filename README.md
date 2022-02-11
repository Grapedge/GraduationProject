# 基于端点模型驱动的前端中后台研发提效系统

Summary：毕业设计项目。

## 主要研究内容

1. 对实体(Entity)、查询(Query)、命令(Command)进行建模，简化从服务端获取数据的逻辑。
2. 实现 JSX (指 JSX 的静态子集)与可视化的互操作性，即实现 JSX -> 可视化搭建 -> JSX (Code In, Code Out)的操作链路。

## 目标产物

前端中后台研发提效系统：

- 端点模型协议 Schema
- 端点模型解析器 Parser
- 特定平台的端点模型运行时或代码生成器
- 端点模型驱动的数据获取库

- 以 JSX 为基础格式的可视化 UI 搭建器：支持与数据获取库结合使用，直接为表格等绑定查询或命令
- 预设组件，如数据表格

## 思路来源

- [graphql](https://graphql.org/)
- [rtk query](https://redux-toolkit.js.org/rtk-query/overview)

## 计划

- 0120-0210: 调研现有开源项目，开题报告
- 0210-0320: 端点模型相关
- 0320-0410: 可视化搭建相关
- 0410-0420: 面向演示编程.jpg

## 项目结构概述

暂定：

- app: 主应用
- canvas: JSX 画布，用于拖放 UI，绑定查询
- model-editor：模型编辑器
- browser-fs：模拟 node fs
- sandbox: 代码沙盒，用于渲染 JSX 代码
- query：数据获取库
- server：Node 服务器
