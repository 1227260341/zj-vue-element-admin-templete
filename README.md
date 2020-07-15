# vue_for_test

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


 # 权限控制及动态菜单 在permission.js 下面



 # http 请求 统一参照uiti-> http.js  分两步执行
 # 1， 创建单独的业务模块 login.js
import { httpPost } from '@/utils/http'
export function login(data) {
    return httpPost('/login/web', data, res => {return res})
}
# 2, 对应的.vue 页面 引入 
import { login } from '@/api/login'
login(tempData).then((res) => {
    console.log(res)
    if (res != null) {
        setToken(res)
        console.log("登录成功， 成功写入cookie = " + getToken())
        // 返回正确的处理
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
        this.loading = false
        
    } else {
        // 返回错误的处理 
        this.loading = false
    }
})

