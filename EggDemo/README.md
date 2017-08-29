# EggDemo

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 目录介绍
* controller 就是接口的入口
* extend  就是一些自己的扩展
* middleware  自己写的中间件
* public 静态文件目录 可以直接通过http://domain/public/{file} 访问
* service 就是一些逻辑  数据组装 处理
* model 就是对应的数据库层了  就是操作数据库

###测试用列
* test 文件下面就是别写自己每个接口的测试用列
