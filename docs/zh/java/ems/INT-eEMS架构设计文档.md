---
title: 能源管理设计文档
---
# 架构设计说明

## 系统架构总体描述

INT-eEMS综合能源管理系统（微服务版）（以下简称INT-eEMS）是以目前主流Spring Cloud微服务框架技术为依据，基于经典技术的组合（Spring Boot、Spring Cloud & Alibaba、OAuth2、VueJs、Element-UI等框架）而开发的BS架构的Java应用程序。

INT-eEMS使用目前流行的Sping Cloud Alibaba为主要的技术栈，Spring Cloud Alibaba致力于提供微服务开发的一站式解决方案，包括服务注册与发现、配置中心、服务网关、负载均衡、服务熔断等组件，支持配置回滚，RPC通信、分布式部署等微服务架构应用功能。

## 后台技术选型

- 基础框架：Spring Boot 2.3.4.RELEASE 、 Spring Cloud Alibaba 2.2.3.RELEASE
- 持久层框架：Mybatis-plus 3.1.1 
- 安全框架：Spring Security 
- 微服务技术：Spring Cloud Alibaba、Nacos、Gateway、Sentinel
- 数据库连接池：Alibaba Druid 1.1.10
- 缓存框架：redis
- 日志管理：logback
- 其他：fastjson，poi，Swagger-ui，quartz, lombok等。

## 后台技术框架简介

### SpringBoot

Spring Boot是一款开箱即用框架，提供各种默认配置来简化项目配置。让我们的Spring应用变的更轻量化、更快的入门。可以打包你的应用为jar并通过使用java -jar来运行你的Web应用。它遵循"约定优先于配置"的原则， 使用SpringBoot只需很少的配置，大部分的时候直接使用默认的配置即可。可以与Spring Cloud的微服务无缝结合。

### SpringCloud

Spring Cloud是一系列框架的有序集合。它利用Spring Boot的开发便利性巧妙地简化了分布式系统基础设施的开发， 如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用Spring Boot的开发风格做到一键启动和部署。
  
### SpringCloud Alibaba

Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用微服 务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。
    
依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接 入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。

主要功能包括：服务限流降级、服务注册与发现、分布式配置管理、消息驱动能力、分布式事务、阿里云对象存储、分布式任务调度、阿里云短信服务。

- 服务限流降级：默认支持 WebServlet、WebFlux， OpenFeign、RestTemplate、Spring Cloud Gateway， Zuul， Dubbo 和 RocketMQ 限流降级功能的接入，可以在运行时通过控制台实时修 改限流降级规则，还支持查看限流降级 Metrics 监控。
- 服务注册与发现：适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。
- 分布式配置管理：支持分布式系统中的外部化配置，配置更改时自动刷新。 消息驱动能力：基于 Spring Cloud Strea为微服务应用构建消息驱动能力。
- 分布式事务：使用 @GlobalTransactional 注解， 高效并且对业务零侵入地解决分布式事务问题。
- 阿里云对象存储：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任 何时间、任何地点存储和访问任意类型的数据。
- 分布式任务调度：提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。 同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。
- 阿里云短信服务：覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建 客户触达通道。

组件：
- Sentinel：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。
- Nacos：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。
- RocketMQ：一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。
- Dubbo：Apache Dubbo™是一款高性能 Java RPC 框架。
- Seata：阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。
- Alibaba Cloud ACM：一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心 产品。
- Alibaba Cloud OSS：阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提 供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和 访问任意类型的数据。
- Alibaba Cloud SchedulerX：阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。
- Alibaba Cloud SMS：覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速 搭建客户触达通道。
    

## 前端技术选型

- Vue
- Vuex
- Vue-router
- Axios
- Element-ui

## 前端技术框架简介

- 前端开发使用node.js的包管理工具，用于统一管理前端项目中需要的包、插件、工具、命令等，便于开发与维护。
- vue-cli：vue的脚手架工具，用于自动生成vue项目的目录及文件。
- vue-router: vue提供的前端路由工具，利用vue-router我们实现页面的路由控制，局部刷新及按需加载，构建SPA单面应用，实现前后端分离。
- vuex: vue提供的状态管理工具，用于统一管理我们项目中各种数据的交互和重用，存储我们需要用到的数据对象。
- Element-ui是基于MVVM框架vue开源出来的一套前端ui组件库。

## 微服务架构图
<img src="/assets/img/架构.png" alt="微服务架构图" style="zoom:150%;" />

## 微服务架构问题
* 这么多小服务，如何管理它们？
* 这么多小服务，它们之前如何通讯？
* 这么多小服务，客户端怎么访问它们？
* 这么多小服务，一旦出现问题了，应该如何自处理？
* 这么多小服务，一旦出现问题了，应该如何排错？
