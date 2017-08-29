const path = require("path");
'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503984392411_8502';

  // add your config here

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Vinsen1991',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
