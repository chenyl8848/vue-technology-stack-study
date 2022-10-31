# Vue技术栈

[TOC]

## 1.`Vue` 核心

### 1.1 `Vue` 简介

#### 1.1.1 官网

- [英文官网](https://vuejs.org)
- [中文官网](https://cn.vuejs.org)

#### 1.1.2 介绍与描述

1. 动态构建用户界面的 渐进式 `JavaScript` 框架
2. 作者:尤雨溪

#### 1.1.3 Vue的特点

- 遵循 `MVVM` 模式
- 编码简洁，体积小，运行效率高，适合移动/PC端开发
- 它本身只关注UI，也可以引入其它第三方库开发项目

#### 1.1.4 与其它JS框架的关联

1. 借鉴 `Angular` 的**模板和数据绑定技术**
2. 借鉴 `React` 的**组件化**和虚拟 `DOM` 技术

#### 1.1.5 Vue 周边库

1. `Vue CLI`: 项目脚手架

2. `Vue Resource`

3. `Axios`

4. `Vue Router`: 路由

5. `Vuex`: 状态管理

6. `element-ui`:基于 `Vue` 的 `UI` 组件库(PC端)

   ......

### 1.2 初识 Vue

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初识Vue</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        初识Vue：
            1.想让 Vue工作，就必须创建一个 Vue实例，且要传入一个配置对象；
            2.root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue语法；
            3.root 容器里的代码被称为【Vue模板】；
            4.Vue 实例和容器是一一对应的；
            5.真实开发中只有一个 Vue 实例，并且会配合着组件一起使用；
            6.{{xxx}} 中的 xxx 要写 js 表达式，且 xxx 可以自动读取到 data 中的所有属性；
            7.一旦 data 中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

            注意区分：js 表达式和 js 代码(语句)
                1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
                    (1). a
                    (2). a+b
                    (3). demo(1)
                    (4). x === y ? 'a' : 'b'

                2.js代码(语句)
                    (1). if(){}
                    (2). for(){}
    -->
    <div id="root">
        <h1>Hello {{name}}</h1>
    </div>

    <script>
        // 阻止 Vue 在启动时生成生产提示
        // You are running Vue in development mode.
        // Make sure to turn on production mode when deploying for production.
        // See more tips at https://vuejs.org/guide/deployment.html
        Vue.config.productionTip = false

        // 创建 Vue 实例
        new Vue({
            // el 用于指定当前 Vue 实例为哪个容器服务，值通常为 css 选择器字符串
            el: '#root', 
            // data 用于存储数据，数据供 el 所指定的容器去使用
            data: {
                name: "张三"
            },
        })
    </script>
</body>
</html>
```

### 1.3 模板语法

#### 1.3.1 模板的理解

`html` 中包含了一些 `js` 语法代码，语法分为两种，分别为：

1. 插值语法（双大括号表达式）
2. 指令（以v-开头）


#### 1.3.2 插值语法

1. 功能：用于解析标签体内容
2. 语法：`{{xxx}}`，xxxx 会作为 `js` 表达式解析

#### 1.3.3 指令语法

1. 功能：解析标签属性、解析标签体内容、绑定事件
2. 举例：`v-bind:href='xxxx'`，`xxxx` 会作为 `js` 表达式被解析
3. 说明：`Vue` 中有有很多的指令，此处只是用 `v-bind` 举个例子

#### 1.3.4 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue 模板语法</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        Vue模板语法有2大类：
            1.插值语法：
                功能：用于解析标签体内容。
                写法：{{xxx}}，xxx 是 js 表达式，且可以直接读取到 data 中的所有属性。
            2.指令语法：
                功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
                举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到 data 中的所有属性。
                备注：Vue 中有很多的指令，且形式都是：v-????，此处我们只是拿 v-bind 举个例子。
    -->
    <div id="root">
        <h1>插值语法</h1>
        <h3>你好，{{name}}</h3>
        <hr></hr>
        <h1>指令语法</h1>
        <a href="http://baidu.com">去百度</a>
        <br/>
        <a v-bind:href="school.url">去百度</a>
        <br/>
        <a :href="school.url">去百度</a>
    </div>

    <script>
        // 阻止 Vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {
                name: "张三",
                school: {
                    url: "http://baidu.com"
                }
            }
        })
    </script>
</body>
</html>
```

### 1.4 数据绑定


#### 1.4.1 单向数据绑定

1. 语法：`v-bind:href="xxx"` 或简写为 `:href`
2.  特点：数据只能从 `data` 流向页面

#### 1.4.2 双向数据绑定

1. 语法：`v-model:value="xxx"` 或简写为 `v-model="xxx"`
2. 特点：数据不仅能从 `data` 流向页面，还能从页面流向 `data`

#### 1.4.3 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据绑定</title>
    <script src="../js/vue.js"></script>
</head>
<body>

    <!--  Vue中有2种数据绑定的方式：
            1.单向绑定(v-bind)：数据只能从 data 流向页面。
            2.双向绑定(v-model)：数据不仅能从 data 流向页面，还可以从页面流向 data 。
                备注：
                    1.双向绑定一般都应用在表单类元素上（如：input、select等）
                    2.v-model:value 可以简写为 v-model，因为 v-model默认收集的就是 value 值。
    -->
    <div id="root">
        <!-- 单向绑定 -->

        <!-- 普通写法 -->
        单向绑定普通写法:<input type="text" v-bind:value="name"></input>
        <br/>
        <!-- 简写 -->
        单向绑定简写:<input type="text" :value="name"></input>
        
        <hr></hr>
        <!-- 双向绑定 -->
        <!-- 普通写法 -->
        双向绑定普通写法:<input type="text" v-model:value="name"></input>
        <br/>
        <!-- 简写 -->
        双向绑定简写:<input type="text" v-model="name"></input>

        <!-- 如下代码是错误的，因为 v-model只能应用在表单类元素（输入类元素）上 -->
        <!-- <h2 v-model="name">: v-model is not supported on this element type. 
            If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component. -->
        <h2 v-model:x="name"></h2>
        


    </div>

    <script>
        // 组织 Vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {
                name: "张三"
            }
        })
    </script>
</body>
</html>
```

### 1.5 MVVM模型

1. M：模型(Model)：对应 `data` 中的数据
2. V：视图(View)：模板
3. VM：视图模型(ViewModel)：`Vue` 实例对象

![image-20220810144417339](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/vue/vue_core/image-20220810144417339.png)

### 1.6 事件处理

#### 1.6.1 绑定监听

1. `v-on:xxx="fun"`
2. `@xxx="fun"`
3. `@xxx="fun(参数)"`
4. 默认事件形参：`event`
5. 隐含属性对象：`$event`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件的基本使用</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        事件的基本使用：
            1.使用 v-on:xxx 或 @xxx 绑定事件，其中 xxx 是事件名；
            2.事件的回调需要配置在 vue 实例中的 methods 对象，最终会在 vm 实例上；
            3.methods 中配置配置的函数，不要用箭头函数，否则 this 就不是 vm 实例了；
            4.methods 中配置的函数，都是被 vue 实例所管理的函数，this 的指向是 vm 或 组件实例对象；
            5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参
     -->
    <div id="root">
        <h2>欢迎来到 {{name}} 学习</h2>
        <button v-on:click = "showInfo01">点我去学习1</button>
        <button v-on:click = "showInfo02">点我去学习2</button>
        <button @click = "showInfo03">点我去学习3</button>
        <button @click = "showInfo04(88)">点我去学习4</button>
        <button @click = "showInfo05(88, $event)">点我去学习5</button>
    </div>
    
    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data() {
                return {
                    name: "北京大学"
                }
            },
            
            methods: {
                showInfo01() {
                    alert("点我去学习1")
                },
                
                showInfo02(event) {
                    console.log(event);
                },

                showInfo03() {
                    alert("点我去学习3")
                },

                showInfo04(number) {
                    console.log(number);
                    alert("点我去学习4" + number)
                },

                showInfo05(number, event) {
                    console.log(number, event);
                    alert("点我去学习5")
                },
            },
        })
    </script>
</body>
</html>
```

#### 1.6.2 事件修饰符

1. `prevent`: 阻止事件的默认行为 `event.preventDefault()`
2. `stop`: 停止事件冒泡 `event.stopPropagation()`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件修饰符</title>
    <script src="../js/vue.js"></script>
    <style>
        *{
            margin-top: 20px;
        }
        .box1 {
            height: 50px;
            padding: 5px;
            background-color: skyblue;
        }
        .box2 {
            height: 50px;
            padding: 5px;
            background-color: orange;
        }
        .box3 {
            height: 5px;
            padding: 5px;
            background-color: rebeccapurple;
        }
        .box4 {
            height: 50px;
            padding: 5px;
            background-color: antiquewhite;
        }
        .list {
            width: 200px;
            height: 200px;
            background-color: peru;
            /* 在容器内生成滑动窗口 */
            overflow: auto;
        }
        li {
            height: 100px;
        }
    </style>
</head>
<body>
    <!-- 
        Vue中的事件修饰符：
            1.prevent：阻止默认事件（常用）；
            2.stop：阻止事件冒泡（常用）；
            3.once：事件只触发一次（常用）；
            4.capture：使用事件的捕获模式；
            5.self：只有event.target是当前操作的元素时才触发事件；
            6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
    -->

    <div id="root">
        <!-- 1.阻止默认事件 -->
        <!-- 弹窗点击确认后会跳转到百度 -->
        <a href="https://www.baidu.com" @click="gotoBaidu">点我去百度</a><br/>
        <!-- 弹窗点击确认后不会跳转到百度 -->
        <a href="https://www.baidu.com" @click.prevent="gotoBaidu">点我去百度</a><br>

        <!-- 2.stop：阻止事件冒泡 -->
        <div class = "box1" @click="showInfo">
            <button @click="showInfo">点我提示信息</button>
        </div>
        <div class = "box1" @click="showInfo">
            <button @click.stop="showInfo">点我提示信息</button>
        </div>
        
        <!--  3.once：事件只触发一次 -->
        <button @click.once="showInfo">点我提示信息</button>

        <!-- 4.capture：使用事件的捕获模式 -->
        <div class="box2" @click.capture="showMessage(1)">
            div01
            <div class="box3" @click.capture="showMessage(2)">
                div02
            </div>
        </div>

        <!-- 5.self：只有event.target是当前操作的元素时才触发事件 -->
        <div class="box4" @click.self="showInfo">
            <button @click="showInfo">点我提示信息</button>
        </div>

        <!--  6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕 -->\
        <!--  
            @scroll、@wheel 滚轮滑动事件，两者的区别：
                1.scroll是页面滚动条滚动会触发的事件，而 wheel是鼠标滚轮滚动会触发的事件。
                2，一旦滚动条到底部后，滑动鼠标滚轮继续滚动，wheel 就会一直触发，而 scroll 不会触发
        -->

        <ul class="list" @scroll="list">
        <!-- <ul class="list" @wheel="list"> -->
        <!-- <ul class="list" @wheel.passive="list"> -->
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>

        <!-- 7.多个修饰符 -->
        <div @click="showInfo">
            <a href="https://www.baidu.com" @click="showInfo">点我去百度</a>
            <a href="https://www.baidu.com" @click.prevent.stop="showInfo">点我去百度</a>
        </div>

    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {

            },
            methods: {
                gotoBaidu() {
                    alert("点我去百度!")
                },
                showInfo() {
                    alert("hello world")
                },
                showMessage(message) {
                    console.log(message);
                },
                list() {
                    for(let i = 0; i < 10; i++) {
                        console.log("#");
                    }
                    console.log("累坏了");
                }
            },
        })
    </script>
</body>
</html>
```

#### 1.6.3 按键修饰符

1. `keycode`: 操作的是某个 `keycode` 值的键
2. `keyName`: 操作的某个按键名的键(少部分)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>键盘事件</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        1.Vue中常用的按键别名：
            回车 => enter
            删除 => delete (捕获“删除”和“退格”键)
            退出 => esc
            空格 => space
            换行 => tab (特殊，必须配合keydown去使用)
            上 => up
            下 => down
            左 => left
            右 => right

        2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

        3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
            (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
            (2).配合keydown使用：正常触发事件。

        4.也可以使用keyCode去指定具体的按键（不推荐）

        5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名
    -->
    <div id="root">
        <h3>欢迎来到{{name}}学习</h3>
        <!-- @keydown、@keyup两者的区别：前者是键盘按下事件，后者是键盘恢复事件 -->
        <input placeholder="回车事件" @keydown="demo" ></input><br/>
        <input placeholder="回车事件" @keydown.enter="demo"></input><br/>
        <input placeholder="回车事件" @keydown.13="demo"></input><br/>
        <input placeholder="回车事件" @keydown.huiche="demo"></input><br/>

        <input placeholder="删除事件" @keydown.delete="demo"></input><br/>
        <input placeholder="退出事件" @keydown.esc="demo"></input><br/>
        <input placeholder="空格事件" @keydown.space="demo"></input><br/>
        <input placeholder="换行事件" @keydown.tab="demo"></input><br/>
        <input placeholder="上事件" @keydown.up="demo"></input><br/>
        <input placeholder="下事件" @keydown.down="demo"></input><br/>
        <input placeholder="左事件" @keydown.left="demo"></input><br/>
        <input placeholder="右事件" @keydown.right="demo"></input><br/>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false
        // 自定义键盘别名
        Vue.config.keyCodes.huiche = 13

        new Vue({
            el: "#root",
            data: {
                name: "Blili"
            },
            methods: {
                demo(event) {
                    // 输出键值
                    console.log(event.key, event.keyCode);
                    console.log("hello world");
                }
            },
        })
    </script>
</body>
</html>
```

### 1.7 计算属性与监视属性

#### 1.7.1 计算属性 `computed`

1. 要显示的数据不存在，要通过计算得来。

2. 在 `computed` 对象中定义计算属性。

3. 在页面中使用 `{{方法名}}` 来显示计算的结果。

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>姓名案例-计算属性实现</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <!-- 
           计算属性：
               1.定义：要用的属性不存在，要通过已有属性计算得来。
               2.原理：底层借助了 Objcet.defineproperty 方法提供的 getter 和 setter 。
               3.get 函数什么时候执行？
                   (1).初次读取时会执行一次。
                   (2).当依赖的数据发生改变时会被再次调用。
               4.优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便。
               5.备注：
                   1.计算属性最终会出现在 vm 上，直接读取使用即可。
                   2.如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变。
        -->
       <div id="root">
           姓：<input type="text" v-model="firstName"> <br/>
           名：<input type="text" v-model="lastName"> <br/>
           <!-- 测试：<input type="text" v-model="x"> <br/> -->
           全名：<span>{{fullName}}</span> <br/>
           <!-- 全名：<span>{{fullName}}</span> <br/>
           全名：<span>{{fullName}}</span> <br/>
           全名：<span>{{fullName}}</span> -->
   
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           const vm = new Vue({
               el: "#root",
               data: {
                   firstName: "张",
                   lastName: "三",
               },
               computed: {
                   fullName: {
                       get() {
                           //get 有什么作用？当有人读取 fullName 时，get 就会被调用，且返回值就作为 fullName 的值
   					    //get 什么时候调用？1.初次读取 fullName 时。2.所依赖的数据发生变化时。
                           console.log("get 被调用了");
                           return this.firstName + " - " + this.lastName
                       },
                       // set 什么时候被调用？fullName 被修改时
                       set(value) {
                           console.log("set 被调用了");
                           const arr = value.split("-")
                           this.firstName = arr[0]
                           this.lastName = arr[1]
                       }
                   }
               }
           });
       </script>
   </body>
   </html>
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>姓名案例-计算属性简写</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           姓：<input type="text" v-model="firstName"> <br/>
           名：<input type="text" v-model="lastName"> <br/>
           <!-- 测试：<input type="text" v-model="x"> <br/> -->
           全名：<span>{{fullName}}</span> <br/>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   firstName: "张",
                   lastName: "三",
               },
               computed: {
                   // fullName:function() {
                   //     return this.firstName + " - " + this.lastName
                   // },
                   fullName() {
                       return this.firstName + " - " + this.lastName
                   }
               }
           })
       </script>
   </body>
   </html>
   ```

#### 1.7.2 监视属性 `watch`

1. 通过通过 `vm` 对象的 `$watch()` 或 `watch` 配置来监视指定的属性

2. 当属性变化时，回调函数自动调用，在函数内部进行计算

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>天气案例-监视属性</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <!-- 
           监视属性 watch：
               1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作
               2.监视的属性必须存在，才能进行监视！！
               3.监视的两种写法：
                   (1).new Vue 时传入 watch 配置
                   (2).通过 vm.$watch 监视
        -->
       <div id="root">
           <h2>今天天气很{{info}}</h2>
           <button @click="changeWeather">切换天气</button>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           const vm = new Vue({
               el: "#root",
               data: {
                   isHot: true
               },
               computed: {
                   info() {
                       return this.isHot ? "炎热":"凉爽";
                   }
               },
               methods: {
                   changeWeather() {
                       this.isHot = !this.isHot
                   }
               },
               watch: {
                   // isHot: {
                   //     // 初始化的时候让 handler 调用一下
                   //     immediate: true,
                   //     // handler 什么时候被调用？当isHot值发生变化时
                   //     handler(newValue, oldValue) {
                   //         console.log("isHot 值被修改了", newValue, oldValue);
                   //     }
                   // },
                   
                   // computed 中定义的属性也能被监视
                   info: {
                       handler(newValue, oldValue) {
                           console.log("info值被修改了", newValue, oldValue);
                       }
                   }
               }
           });
   
           // watch 属性的另外一种写法
           vm.$watch("isHot", {
               // 初始化的时候让 handler 调用一下
               immediate: true,
               // handler 什么时候被调用？当isHot值发生变化时
               handler(newValue, oldValue) {
                   console.log("isHot 值被修改了", newValue, oldValue);
               }
           })
       </script>
   </body>
   </html>
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>天气案例-深度监视</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <!-- 
           深度监视：
               (1).Vue 中的 watch 默认不监测对象内部值的改变（一层）。
               (2).配置 deep:true 可以监测对象内部值改变（多层）。
               备注：
                   (1).Vue 自身可以监测对象内部值的改变，但 Vue 提供的 watch 默认不可以！
                   (2).使用 watch 时根据数据的具体结构，决定是否采用深度监视。
   
        -->
       <div id="root">
           <h2>今天天气很{{info}}</h2>
           <button @click="changeWeather">切换天气</button>
           <hr/>
           <h3>x的值是:{{numbers.x}}</h3>
           <button @click="numbers.x ++">点我让x + 1</button>
           <h3>y的值是:{{numbers.y}}</h3>
           <button @click="numbers.y ++">点我让y + 1</button>
           <br/>
           <br/>
           <button @click="numbers = {x:666, y:888}">彻底替换掉numbers</button>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   isHot: true,
                   numbers: {
                       x: 100,
                       y: 200
                   },
                   a: {
                       b: {
                           c: {
                               d: "e"
                           }
                       }
                   }
               },
               computed: {
                   info() {
                       return this.isHot ? "炎热":"凉爽";
                   }
               },
               methods: {
                   changeWeather() {
                       this.isHot = !this.isHot
                   }
               },
               watch: {
                   isHot: {
                       // 初始化的时候让 handler 调用一下
                       immediate: true,
                       // handler 什么时候被调用？当isHot值发生变化时
                       handler(newValue, oldValue) {
                           console.log("isHot 值被修改了", newValue, oldValue);
                       }
                   },
                   
                   // computed 中定义的属性也能被监视
                   info: {
                       handler(newValue, oldValue) {
                           console.log("info值被修改了", newValue, oldValue);
                       }
                   },
                   // 监视多级结构中某个属性的变化
                   "numbers.x": {
                       handler(newValue, oldValue) {
                           console.log("numbers.x 值被修改了", newValue, oldValue);
                       }
                   },
                   //监视多级结构中所有属性的变化
                   numbers: {
                       deep: true,
                       handler(newValue, oldValue) {
                           console.log("numbers 值被修改了", newValue, oldValue);
                       }
                   }
               }
           })
       </script>
   </body>
   </html>
   ```

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>天气案例-监视属性-简写</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h2>今天天气很{{info}}</h2>
           <button @click="changeWeather">切换天气</button>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           const vm = new Vue({
               el: "#root",
               data: {
                   isHot: true
               },
               computed: {
                   info() {
                       return this.isHot ? "炎热":"凉爽"
                   }
               },
               methods: {
                   changeWeather() {
                       this.isHot = !this.isHot
                   }
               },
               watch: {
                   // 正常写法
                   // isHot: {
                   //     // 在初始化时调用 handler 一次
                   //     immediate: true,
                   //     handler(newValue, oldValue) {
                   //         console.log("isHot 值被修改了", newValue, oldValue);
                   //     }
                   // },
   
                   // 简写
                   // 简写的缺点时不能写属性信息
                   // isHot(newValue, oldValue) {
                   //     console.log("isHot 值被修改了", newValue, oldValue);
                   // }
               },
           });
   
           // 正常写法
           // vm.$watch("isHot", {
           //     // 初始化的时候让 handler 调用一下
           //     immediate: true,
           //     // handler 什么时候被调用？当isHot值发生变化时
           //     handler(newValue, oldValue) {
           //         console.log("isHot 值被修改了", newValue, oldValue);
           //     }
           // })
           // 简写
           vm.$watch("isHot", function(newValue, oldValue) {
               console.log("isHot 值被修改了", newValue, oldValue);
           })
       </script>
   </body>
   </html>
   ```

### 1.8 `class` 与 `style` 绑定

#### 1.8.1 理解

1. 在应用界面中，某个(些)元素的样式是变化的
2. `class/style` 绑定就是专门用来实现动态样式效果的技术

#### 1.8.2 `class` 绑定

1. `:class='xxx'`
2. 表达式是字符串：`'classA'`
3. 表达式是对象：`{classA:isA,classB:isB}`
4. 表达式是数组：`['classA','classB']`

#### 1.8.3 `style` 绑定

1. `:style="{color:activeColor,fontSize:fontSize+'px'}"`
2. 其中 `activeColor/fontSize` 是 `data` 属性

#### 1.8.4 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>绑定样式</title>
    <style>
        .basic{
            width: 400px;
            height: 100px;
            border: 1px solid black;
        }
        
        .happy{
            border: 4px solid red;;
            background-color: rgba(255, 255, 0, 0.644);
            background: linear-gradient(30deg,yellow,pink,orange,yellow);
        }
        .sad{
            border: 4px dashed rgb(2, 197, 2);
            background-color: gray;
        }
        .normal{
            background-color: skyblue;
        }

        .box1{
            background-color: yellowgreen;
        }
        .box2{
            font-size: 30px;
            text-shadow:2px 2px 10px red;
        }
        .box3{
            border-radius: 20px;
        }
    </style>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        绑定样式：
            1. class样式
                写法:class="xxx" xxx可以是字符串、对象、数组。
                    字符串写法适用于：类名不确定，要动态获取。
                    对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
                    数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
            2. style样式
                :style="{fontSize: xxx}"其中xxx是动态值。
                :style="[a,b]"其中a、b是样式对象。
            3. 二者的区别：
                :class 动态绑定 class 的名称，然后专门在 <style></style> 中去设置对应 class 的样式
                :style 动态绑定 style 的效果，直接把 css 写在里面

     -->
    <div id="root">

        <!-- 绑定 class 样式（字符串写法），适用于：样式的类名不确定，需要动态指定 -->
        <div class="basic" :class="mood" @click="changeMood1">{{name}}</div> </br>

        <!-- 绑定 class 样式（数组写法），适用于：要绑定的样式个数不确定、名字也不确定-->
        <div class="basic" :class="moodArr">{{name}}</div> </br>

        <!-- 绑定 class 样式（对象写法），适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
        <div class="basic" :class="moodObj">{{name}}</div> </br>
        
        <!-- 绑定 style 样式（对象写法） -->
        <div class="basic" :style="{fontSize: '40px', color: 'orange'}">{{name}}</div> </br>
        <div class="basic" :style="styleObj">{{name}}</div> </br>

        <!-- 绑定 style 样式（数组写法） -->
        <div class="basic" :style="styleArr">{{name}}</div> </br>


    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {
                name: "Hello World",
                mood: "happy",
                moodArr: ["box1", "box2", "box3"],
                moodObj: {
                    box1: true,
                    box2: false,
                    box3: true
                },
                styleObj: {
                    fontSize: "40px",
                    color: "red"
                },
                styleArr: [
                    {
                        fontSize: "40px",
                        color: "blue"
                    },
                    {
                        backgroundColor: "green"
                    }
                ]
            },
            methods: {
                changeMood1() {
                    this.mood = "sad"
                },
            },
        })
    </script>
</body>
</html>
```

### 1.9 条件渲染

#### 1.9.1 条件渲染指令

1. `v-if` 与 `v-else`
2. `v-show`

#### 1.9.2 比较 `v-if` 与 `v-show`

1. 如果需要频繁切换 `v-show` 较好
2. 当条件不成立时，`v-if` 的所有子节点不会解析(项目中使用)

#### 1.9.3 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>条件渲染</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        条件渲染：
            1.v-if
                写法：
                        (1).v-if="表达式" 
                        (2).v-else-if="表达式"
                        (3).v-else="表达式"
                适用于：切换频率较低的场景。
                特点：不展示的 DOM 元素直接被移除。
                注意：v-if 可以和: v-else-if、v-else 一起使用，但要求结构不能被“打断”。

            2.v-show
                写法：v-show="表达式"
                适用于：切换频率较高的场景。
                特点：不展示的 DOM 元素未被移除，仅仅是使用样式隐藏掉
                
            3.备注：使用 v-if 时，元素可能无法获取到，而使用 v-show 一定可以获取到。

    -->
    <div id="root">
        <!-- 使用 v-show 来做条件渲染 -->
        <!-- <h2 style="display: none;"> 欢迎来到百度</h2> -->
        <h2 v-show="false"> 欢迎来到{{name}}</h2>
        <h2 v-show=" 1 === 1"> 欢迎来到{{name}}</h2>
        
        <!-- 使用 v-if 来做条件渲染 -->
        <h2 v-if="false"> 欢迎来到{{name}}</h2>
        <h2 v-if="2 === 2"> 欢迎来到{{name}}</h2>

        <!-- v-if与template的配合使用 -->
        <template v-if="n === 1">
            <h2>Angular</h2>
            <h2>React</h2>
            <h2>Vue</h2>
        </template>


    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {
                name: "百度",
                n: 1
            }
        })
    </script>
</body>
</html>
```

### 1.10 列表渲染

#### 1.10.1 列表显示指令

1. 遍历数组：`v-for/index`
2. 遍历对象：`v-for/key`

#### 1.10.2 示例代码

1. 基本列表

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>基本列表</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <!-- 
           v-for指令:
               1.用于展示列表数据
               2.语法：v-for="(item, index) in xxx" :key="yyy"
               3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
       -->
       <div id="root">
           <!-- 遍历数组 -->
           <h2>遍历数组</h2>
           <!-- 用 id 作为 key -->
           <!-- <ul v-for="p in personList" :key = "p.id">
               <li>{{p.name}} - {{p.age}}</li>
           </ul> -->
           <!-- 用索引 index 作为 key -->
           <ul v-for="(p, index) in personList" :key = "index">
               <li>{{p.name}} - {{p.age}}</li>
           </ul>
           <hr/>
           
           <!-- 遍历对象 -->
           <h2>遍历对象</h2>
           <!-- 注意：key 在后面，value 在前面 -->
           <ul v-for="(v, k) in car" ::key="k">
               <li>{{k}} - {{v}}</li>
           </ul>
           <hr/>
           
           <!-- 遍历字符串 -->
           <h2>遍历字符串</h2>
           <ul v-for="(char, index) in str" :key="index">
               <ul>{{index}} - {{char}}</ul>
           </ul>
           <hr/>
   
           <!-- 遍历指定次数 -->
           <h2>遍历指定次数</h2>
           <ul v-for="i in 5">
               <ul>{{i}}</ul>
           </ul>
   
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   personList: [
                       {id: "001", name: "张三", age: 18},
                       {id: "002", name: "李四", age: 19},
                       {id: "003", name: "王五", age: 20},
                   ],
                   car: {
                       name: "奥迪 A8",
                       price: "80万",
                       color: "黑色"
                   },
                   str: "hello world"
               }
           })
       </script>
   </body>
   </html>
   ```

2. `key` 的原理

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>key的原理</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <!-- 
           面试题：react、vue 中的 key 有什么作用？（key 的内部原理）
               1. 虚拟 DOM 中 key 的作用：
                   key 是虚拟 DOM 对象的标识，当数据发生变化时，Vue 会根据【新数据】生成【新的虚拟 DOM】, 
                   随后 Vue 进行【新虚拟 DOM】与【旧虚拟 DOM】的差异比较，比较规则如下：
               2.对比规则：
                   (1).旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key：
                       ①.若虚拟 DOM 中内容没变, 直接使用之前的真实 DOM！
                       ②.若虚拟 DOM 中内容变了, 则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM。
                   (2).旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key
                       创建新的真实DOM，随后渲染到到页面。
               3. 用 index 作为 key 可能会引发的问题：
                   1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                                   会产生没有必要的真实 DOM 更新 ==> 界面效果没问题, 但效率低。
                   2. 如果结构中还包含输入类的 DOM：
                                   会产生错误 DOM 更新 ==> 界面有问题。
               4. 开发中如何选择 key?:
                   1.最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号、学号等唯一值。
                   2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
                       使用 index 作为 key 是没有问题的。
       -->
       <div id="root">
           <h2>遍历数组</h2>
           <button @click="add">在前面添加一个赵六</button>
           <!-- <ul v-for="(p, index) in personList" :key = "p.id"> -->
           <ul v-for="(p, index) in personList" :key = "index">
               <li>
                   {{p.name}} - {{p.age}}
                   <input type="text"></input>
               </li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   personList: [
                       {id: "001", name: "张三", age: 18},
                       {id: "002", name: "李四", age: 19},
                       {id: "003", name: "王五", age: 20},
                   ],
               },
               methods: {
                   add() {
                       this.personList.unshift({
                           id: "004", name: "赵六", age: 38
                       })
                   }
               },
           })
       </script>
   </body>
   </html>
   ```

3. 列表过滤

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>列表过滤</title></title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h2>遍历数组</h2>
           <input type="text" placeholder="输入名字进行过滤" v-model="keyWord"></input>
           <ul v-for="(p, index) in filterPersonList" ::key="index">
               <li>{{p.name}} - {{p.age}} - {{p.sex}}</li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   keyWord:'',
                   personList:[
                       {id:'001',name:'马冬梅',age:19,sex:'女'},
                       {id:'002',name:'周冬雨',age:20,sex:'女'},
                       {id:'003',name:'周杰伦',age:21,sex:'男'},
                       {id:'004',name:'温兆伦',age:22,sex:'男'}
                   ],
                   filterPersonList: []
               },
               // 用 comouted 实现
               computed: {
                   // filterPersonList() {
                   //     return this.personList.filter((item) => {
                   //         return item.name.indexOf(this.keyWord) > -1
                   //     })
                   // }
               },
               // 用 watch 实现
               watch: {
                   keyWord: {
                       immediate: true,
                       handler(val) {
                           this.filterPersonList = this.personList.filter((item) => {
                               return item.name.indexOf(this.keyWord) > -1
                           })
                       }
                   }
               }
           })
       </script>
   </body>
   </html>
   ```

4. 列表排序

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>列表排序</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h2>遍历数组</h2>
           <input type="text" placeholder="输入名字进行过滤" v-model="keyWord"></input>
           <button @click="sortType = 1">升序排序</button></button>
           <button @click="sortType = 2">降序排列</button></button>
           <button @click="sortType = 0">原序排序</button></button>
           <ul v-for="(p, index) in filterPersonList" ::key="index">
               <li>{{p.name}} - {{p.age}} - {{p.sex}}</li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   keyWord:'',
                   personList:[
                       {id:'001',name:'马冬梅',age:19,sex:'女'},
                       {id:'002',name:'周冬雨',age:20,sex:'女'},
                       {id:'003',name:'周杰伦',age:21,sex:'男'},
                       {id:'004',name:'温兆伦',age:22,sex:'男'}
                   ],
                   sortType: 1
               },
                // 用 comouted 实现
               computed: {
                   filterPersonList() {
                       const arr = this.personList.filter((item) => {
                           return item.name.indexOf(this.keyWord) > -1
                       })
                       if (this.sortType) {
                           arr.sort((p1, p2) => {
                               return this.sortType === 1 ? p1.age - p2.age : p2.age - p1.age
                           })
                       }
                       return arr
                   }
               },
           })
       </script>
   </body>
   </html>
   ```

5. 更新时的一个问题

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>更新时的一个问题</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h2>人员列表</h2>
           <button @click="updateMa">更新马冬梅的信息</button>
           <ul>
               <li v-for="p in personList" :key="p.id">
                   {{p.name}} - {{p.age}} - {{p.sex}}
               </li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   personList: [
                       {id:'001',name:'马冬梅',age:19,sex:'女'},
                       {id:'002',name:'周冬雨',age:20,sex:'女'},
                       {id:'003',name:'周杰伦',age:21,sex:'男'},
                       {id:'004',name:'温兆伦',age:22,sex:'男'}
                   ]
               },
               methods: {
                   updateMa() {
                       // 奏效的写法
                       // this.personList[0].name = "马老师"
                       // this.personList[0].age = 50
                       // this.personList[0].sex = "男"
   
                       // 不奏效的写法
                       this.personList[0] = {name: "马老师", age: 50, sex: "男"}
                   }
               },
           })
       </script>
   </body>
   </html>
   ```

6. `Vue` 监测数据改变的原理-对象

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Vue 数据检测改变的原理-对象</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h2>学校名称: {{name}}</h2>
           <h2>学校地址: {{address}}</h2>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   name: "北京大学",
                   address: "北京",
                   student: {
                       name: "tom",
                       age: {
                           rAge: 40,
                           sAge: 18
                       },
                       friends: [
                           {name: "jack", age: 38}
                       ]
                   }
               }
           })
       </script>
   </body>
   </html>
   ```

7. 模拟一个数据监测

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>模拟一个数据检测</title>
   </head>
   <body>
       <div id="root">
   
       </div>
       <script>
           let data = {
               name: "北京大学",
               address: "北京",
               student: {
                   name: "tom",
                   age: 18
               }
           }
   
           // 创建一个监视的实例对象，用于监视 data 中属性的变化
           const obs = new Observer(data);
   
           // 准备一个 vm 实例对象
           let vm = {}
           vm._data = data = obs
   
           function Observer(obj) {
               // 汇总对象中所有的属性形成一个数组
               const keys = Object.keys(obj);
   
               // 遍历
               keys.forEach((k) => {
                   Object.defineProperty(this, k, {
                       get() {
                           return obj[k]
                       },
                       set(val) {
                           obj[k] = val;
                       }
                   })
               })
           }
           // 存在的问题是对于深层次的属性无法生成 get set 如：student 中的属性
       </script>
   </body>
   </html>
   ```

8. `Vue.set` 的使用

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Vue.set的使用</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h1>学校信息</h1>
           <h2>学校名称：{{shcool.name}}</h2>
           <h2>学校地址：{{shcool.address}}</h2>
           <hr/>
           <h1>学生信息</h1>
           <button @click="addSex">添加性别</button>
           <h2>学生姓名：{{student.name}}</h2>
           <h2>学生年龄：真实-{{student.age.rAge}} 对外-{{student.age.sAge}}</h2>
           <h2 v-if="student.sex">学生性别：{{student.sex}}</h2>
           <h2>学生朋友</h2>
           <ul>
               <li v-for="(f, index) in student.friends" :key="index">
                   {{f.name}} - {{f.age}}
               </li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   shcool: {
                       name: "北京大学",
                       address: "北京"
                   },
                   student: {
                       name: "tom",
                       age: {
                           rAge: 40,
                           sAge: 18
                       },
                       friends: [
                           {name: "jerry", age: 35},
                           {name: "tony", age: 36}
                       ]
                   }
               },
               methods: {
                   addSex() {
                       // 写法一
                       // Vue.set(this.student, 'sex', "男")
                       // 写法二
                       this.$set(this.student, 'sex', "女")
                   }
               },
           })
       </script>
   </body>
   </html>
   ```

9. `Vue` 监测数据改变的原理-数组

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Vue监测数据改变的原理-数组</title>
       <script src="../js/vue.js"></script>
   </head>
   <body>
       <div id="root">
           <h1>学校信息</h1>
           <h2>学校名称：{{school.name}}</h2>
           <h2>学校地址：{{school.address}}</h2>
           <h2>校长是：{{school.leader}}</h2>
           <hr/>
           <h1>学生信息</h1>
           <button @click="addHobby">在最前面添加一个爱好</button>
           <button @click="updateHobby">修改第一个爱好</button>
           <h2>姓名：{{student.name}}</h2>
           <h2 v-if="student.sex">性别：{{student.sex}}</h2>
           <h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
           <h2>爱好</h2>
           <ul>
               <li v-for="(h,index) in student.hobby" :key="index">
                   {{h}}
               </li>
           </ul>
           <h2>朋友们</h2>
           <ul>
               <li v-for="(f,index) in student.friends" :key="index">
                   {{f.name}}--{{f.age}}
               </li>
           </ul>
       </div>
   
       <script>
           // 阻止 vue 在启动时生成生产提示
           Vue.config.productionTip = false
   
           new Vue({
               el: "#root",
               data: {
                   school:{
   					name: "北京大学",
   					address: "北京",
   				},
   				student:{
   					name: "tom",
   					age:{
   						rAge: 40,
   						sAge: 29,
   					},
   					hobby: ["抽烟", "喝酒", "烫头"],
   					friends: [
   						{ name: "jerry", age: 35},
   						{ name: "tony", age: 36}
   					]
   				}
               },
               methods: {
                   addHobby() {
                       this.student.hobby.unshift("睡觉")
                   },
                   updateHobby() {
                       // 不起作用
                       // this.student.hobby[0] = "唱跳"
                       
                       // 方式一
                       // Vue.set(this.student.hobby, 0, '唱跳')
   
                       // 方式二
                       // this.$set(this.student.hobby, 0, "唱跳")
   
                       // 方式三
                       this.student.hobby.splice(0, 1, "唱跳")
   
                   }
               },
           })
       </script>
   </body>
   </html>
   ```

10. 总结 `Vue` 的数据监测

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>总结Vue中的数据监测</title>
        <script src="../js/vue.js"></script>
    </head>
    <body>
        <!-- 
            Vue监视数据的原理：
                1. Vue会监视 data 中所有层次的数据。
    
                2. 如何监测对象中的数据？
                    通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据。
                    (1).对象中后追加的属性，Vue 默认不做响应式处理
                    (2).如需给后添加的属性做响应式，请使用如下API：
                        Vue.set(target，propertyName/index，value) 或 
                        vm.$set(target，propertyName/index，value)
    
                3. 如何监测数组中的数据？
                    通过包裹数组更新元素的方法实现，本质就是做了两件事：
                        (1).调用原生对应的方法对数组进行更新。
                        (2).重新解析模板，进而更新页面。
    
                4.在 Vue 修改数组中的某个元素一定要用如下方法：
                    1.使用这些 API: push()、pop()、shift()、unshift()、splice()、sort()、reverse()
                    2.Vue.set() 或 vm.$set()
                特别注意：Vue.set() 和 vm.$set() 不能给 vm 或 vm的根数据对象 添加属性！！！
        -->
        <div id="root">
            <h1>学生信息</h1>
            <button @click="addSex">添加性别</button> <br/>
            <button @click="updateSex">修改性别</button> <br/>
            <button @click="addFriend">在列表首位添加一个朋友</button> <br/>
            <button @click="updateFirstFriendName">修改第一个朋友的名字为：赵六</button> <br/>
            <button @click="addHobby">添加一个爱好</button> <br/>
            <button @click="updateHobby">修改第一个爱好为：篮球</button> <br/>
            <button @click="removeRap">过滤掉爱好中的rap</button> <br/>
            <h2>姓名: {{ student.name }}</h2>
            <h2>年龄: {{ student.age }}</h2>
            <h2 v-if="student.sex">性别: {{ student.sex }}</h2>
            <h2>爱好: </h2>
            <ul>
                <li v-for="(h, index) in student.hobby" :key="index">
                    {{ h }}
                </li>
            </ul>
            <h2>朋友: </h2>
            <ul>
                <li v-for="(f, index) in student.friends" :key="index">
                    {{ f.name }} - {{f.age}}
                </li>
            </ul>
        </div>
    
        <script>
            // 阻止 vue 在启动时生成生产提示
            Vue.config.productionTip = false
    
            new Vue({
                el: "#root",
                data: {
                    student: {
                        name: "张三",
                        age: 18,
                        hobby: ["唱", "跳", "rap"],
                        friends: [
                            { name: "李四", age: 20},
                            { name: "王五", age: 19},
                        ]
                    }
                },
                methods: {
                    addSex() {
                        // 不起作用
                        // this.student.sex = "男"
    
                        // 方式一
                        // Vue.set(this.student, "sex", "男")
    
                        // 方式二
                        this.$set(this.student, "sex", "男")
                    },
                    updateSex() {
                        this.student.sex = "女"
                    },
                    addFriend() {
                        this.student.friends.unshift({ name: "老王", age: 28})
                    },
                    updateFirstFriendName() {
                        this.student.friends[0].name = "赵六"
                    },
                    addHobby() {
                        this.student.hobby.push("篮球")
                    },
                    updateHobby() {
                        // 不起作用
                        // this.student.hobby[0] = "篮球"
    
                        // 方式一
                        // Vue.set(this.student.hobby, 0, "篮球")
    
                        // 方式二
                        // this.$set(this.student.hobby, 0, "篮球")
    
                        // 方式三
                        this.student.hobby.splice(0, 1, "篮球")
                    },
                    removeRap() {
                        this.student.hobby = this.student.hobby.filter(item => {
                            return item !== "rap"
                        })
                    }
                },
            })
        </script>
    </body>
    </html>
    ```

### 1.11 收集表单数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>收集表单数据</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        收集表单数据：
            若：<input type="text"/>，则 v-model收集的是 value 值，用户输入的就是 value 值。
            若：<input type="radio"/>，则 v-model收集的是value值，且要给标签配置 value 值。
            若：<input type="checkbox"/>
                1.没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值）
                2.配置 input 的 value 属性:
                    (1)v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）
                    (2)v-model 的初始值是数组，那么收集的的就是 value 组成的数组
            备注：v-model的三个修饰符：
                lazy：失去焦点再收集数据
                number：输入字符串转为有效的数字
                trim：输入首尾空格过滤
    -->
    <div id="root">
        <form @submit.prevent="demo">
            <!-- 账号这么写的好处是：点击账号时，鼠标光标会自动定位到输入框内 -->
            <label for="account">账号：</label><input type="text" id="account" v-model.trim="userInfo.account"></input></br>
            年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
            密码：<input type="password" v-model="userInfo.password"></input></br>
            性别：
            <input type="radio" name="sex" v-model="userInfo.sex" value="male">男</input>
            <input type="radio" name="sex" v-model="userInfo.sex" value="female">女</input></br>
            爱好：
            <input type="checkbox"  v-model="userInfo.hobby" value="chang">唱</input>
            <input type="checkbox"  v-model="userInfo.hobby" value="tiao">跳</input>
            <input type="checkbox"  v-model="userInfo.hobby" value="rap">Rap</input></br>
            所属校区
            <select v-model="userInfo.city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select>
            <br/><br/>
            其他信息：
            <textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
            <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.baidu.com">《用户协议》</a></br>
            <button>提交</button>
        </form>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        new Vue({
            el: "#root",
            data: {
                userInfo:{
					account: '',
					age: 18,
					password: '',
					sex: '',
					hobby: [],
					city: '',
					other: '',
					agree: ''
				}
            },
            methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}

        })
    </script>
</body>
</html>
```

### 1.12 过滤器


#### 1.12.1 理解过滤器

1. 功能：对要显示的数据进行特定格式化后再显示
2. 注意：并没有改变原本的数据，是产生新的对应的数据

#### 1.12.2 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>过滤器</title>
    <script src="../js/vue.js"></script>
    <script src="../js/dayjs.min.js"></script>
</head>
<body>
    <!-- 
        过滤器：
            定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
            语法：
                1.注册过滤器：Vue.filter(name,callback) 或 new Vue{ filters: {} }
                2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
            备注：
                1.过滤器也可以接收额外参数、多个过滤器也可以串联
                2.并没有改变原本的数据, 是产生新的对应的数据
    -->
    <div id="root">
        <h2>显示格式化后的时间</h2>
        <!-- 计算属性实现 -->
        <h3>计算属性实现，现在是{{ fmtTime }}</h3>
        <!-- methods 方法实现 -->
        <h3>计算属性实现，现在是{{ getFmtTime() }}</h3>
        <!-- 过滤器实现 -->
        <h3>过滤器实现，现在是{{ fmtTime | timeFormat }}</h3>
        <!-- 过滤器实现（传参） -->
        <h3>过滤器实现，现在是{{ fmtTime | timeFormat2("YYYY-MM-DD") | strSlice }}</h3>

    </div>

    <div id="root2">
        <h2>显示格式化后的时间</h2>
        <!-- 过滤器实现（传参） -->
        <h3>过滤器实现，现在是{{ msg | strSlice }}</h3>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false
        // 定义全局过滤器
        Vue.filter('strSlice', function(value) {
            return value.slice(0, 4)
        })

        new Vue({
            el: "#root",
            data: {
                time: Date.now()
            },
            computed: {
                fmtTime() {
                    return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
                }
            },
            methods: {
                getFmtTime() {
                    return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
                }
            },
            // 局部过滤器
            filters: {
                timeFormat() {
                    return dayjs(this.time).format('YYYY_MM_DD HH:mm:ss')
                },
                timeFormat2(val) {
                    return dayjs(this.time).format(val)
                },
                // strSlice(value) {
                //     return value.slice(0, 4)
                // }
            }
        })

        new Vue({
            el: "#root2",
            data: {
                msg: "hello world"
            }
        })
    </script>
</body>
</html>
```

### 1.13 内置指令与自定义指令

#### 1.13.1 常用内置指令

1. `v-text`: 更新元素的 `textContent`
2. `v-html`: 更新元素的 `innerHTML`
3. `v-if`: 如果为 `true`, 当前标签才会输出到页面
4. `v-else`: 如果为 `false`, 当前标签才会输出到页面
5. `v-show`: 通过控制 `display` 样式来控制显示/隐藏
6. `v-for`: 遍历数组/对象
7. `v-on`: 绑定事件监听,一般简写为 @
8. `v-bind`: 绑定解析表达式，可以省略 `v-bind`
9. `v-model`: 双向数据绑定
10. `v-cloak`: 防止闪现，与 `css` 配合: `[v-cloak]{display:none}`

#### 1.13.2 自定义指令

1. 注册全局指令

   ```javascript
   Vue.directive('my-directive',function(el,binding){
   	el.innerHTML=binding.value.toupperCase()
   })
   ```
   
2. 注册局部指令

   ```javascript
   directives:{
       'my-directive':{
           bind(el,binding){
           	el.innerHTML = binding.value.toupperCase()
           }
       }
   }
   ```

3. 使用指令
   ```javascript
   v-my-directive='xxx'
   ```

### 1.14 Vue实例生命周期

#### 1.14.1 生命周期流程图

![lifecycle.png](https://v2.cn.vuejs.org/images/lifecycle.png)

#### 1.14.2 vue生命周期分析

1. 初始化显示
   - `beforeCreate()`
   - `created()`
   - `beforeMount()`
   - `mounted()`
2. 更新状态: `this.xxx=value`
   - `beforeUpdate()`
   - `updated()`


3. 销毁 `Vue` 实例: `vm.$destory()`
   - `beforeDestory()`
   - `destoryed()`

#### 1.14.3 示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>分析生命周期</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <h2 v-text="n"></h2>
        <h2>n 的值: {{ n }}</h2>
        <button @click="addN">点我 n + 1</button> <br/>
        <button @click="destroy">点我销毁 Vm</button>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        const vm = new Vue({
            el: "#root",
            data: {
                n: 1
            },
            methods: {
                addN() {
                    this.n++ 
                },
                destroy() {
                    console.log("bye...bye... ");
                    // 销毁 vm 的方式
                    this.$destroy()
                }
            },
            watch: {
                n() {
                    console.log("n 的值发生改变");
                }
            },
            // 数据监测、数据代理之前，此时无法通过 vm 访问到 data 中的数据、methods 中的方法
            beforeCreate() {
                console.log("beforeCreate... ")
                console.log("beforeCreate... ", this, this.n) // this.n undefined
                // debugger;
            },
            // 数据监测、数据代理之后，此时可以通过 vm 访问到 data 中的数据、methods 中的方法
            created() {
                console.log("created... ");
                console.log("created... ", this, this.n);
                // debugger;
            },
            // 此时页面呈现的是未经 Vue 编译的 DOM 结构，所有对 DOM 的操作，最终都不奏效
            beforeMount() {
                console.log("beforeMount... ");
                // debugger; // 模板尚未解析
            },
            // 此时页面中呈现的经 Vue 编译的 DOM，对 DOM 的操作均有效（尽可能避免）
            // 至此初始化过程结束
            // 一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件等初始化工作
            mounted() {
                console.log("mounted... ")
                // debugger;
            },
            // 此时数据是新的，但页面是旧的，即页面尚未和数据保持同步
            beforeUpdate() {
                console.log("beforeUpdate... ")
                // debugger;
            },
            // 此时数据是新的，但页面也是新的，即页面和数据保持同步
            updated() {
                console.log("updated... ")
                // debugger;
            },
            // 此时 Vm 中的所有 data、methods、指令等等，都处于可用状态，马上要执行销毁过程
            // 一般在此进行：关闭定时器、取消订阅消息、解绑自定义事件等
            beforeDestroy() {
                console.log("beforeDestroy... ")
                // debugger;
            },
            // 销毁 vm 实例
            destroyed() {
                console.log("destroyed... ")
            },
        })
    </script>
</body>
</html>
```

#### 1.14.4 常用的生命周期方法

1. `mounted()`: 发送 `ajax` 请求，启动定时器等异步任务
2. `beforeDestory()`: 做收尾工作，如：清除定时器



## 2. `Vue` 组件化编程

### 2.1 模块与组件、模块化与组件化

#### 2.1.1 模块

1. 理解：向外提供特定功能的 `js` 程序，一般就是一个 `js` 文件
2. 为什么：`js` 文件很多很复杂
3. 作用：复用 `js`，简化 `js` 的编写，提高 `js` 运行效率

#### 2.1.2 组件

1. 理解：用来实现局部(特定)功能效果的代码集合( `html/css/js/image`.....)
2. 为什么：一个界面的功能很复杂
3. 作用：复用编码，简化项目编码，提高运行效率

#### 2.1.3 模块化

当应用中的 `js` 都以模块来编写的，那这个应用就是一个模块化的应用。

#### 2.1.4 组件化

当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用。

### 2.2 非单文件组件

#### 2.2.1 说明

1. 模板编写没有提示
2. 没有构建过程，无法将 `ES6` 转换成 `ES5`
3. 不支持组件的 `CSS`
4. 真正开发中几乎不用

#### 2.2.2 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>基本使用</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        Vue中使用组件的三大步骤：
            一、定义组件(创建组件)
            二、注册组件
            三、使用组件(写组件标签)

			一、如何定义一个组件？
                使用 Vue.extend(options) 创建，其中 options 和 new Vue(options) 时传入的那个 options 几乎一样，但也有点区别；
                    区别如下：
                        1.el 不要写，为什么？ ——— 最终所有的组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务哪个容器。
                        2.data 必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
                    备注：使用 template 可以配置组件结构。

			二、如何注册组件？
                1.局部注册：靠 new Vue 的时候传入 components 选项
                2.全局注册：靠 Vue.component('组件名',组件)

			三、编写组件标签：
                <school></school>
    -->
    <div id="root">
        <!-- <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{studentAge}}</h2> -->

        <!-- 第三步：使用组件 -->
        <xuexiao></xuexiao>
        <hr></hr>
        <student></student>
    </div>

    <div id="root2">
        <xuexiao></xuexiao>
        <hr></hr>
        <student></student>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 第一步：创建组件
        const school = Vue.extend({
            template: `
                <div>
                    <h2>学校名称：{{schoolName}}</h2>
                    <h2>学校地址：{{schoolAddress}}</h2>
                </div>`,
            data() {
                return {
                    schoolName: "厦门大学",
                    schoolAddress: "厦门",
                }
            }
        })

        // 第一步：创建组件
        const student = Vue.extend({
            template: `
                <div>
                    <h2>学生姓名：{{studentName}}</h2>
                    <h2>学生年龄：{{studentAge}}</h2>
                </div>`,
            // 组件定义时，一定不要写 el 配置项，因为最终所有的组件都要被一个 vm 管理，由 vm 决定服务于哪个容器
            // el: "#rtoot",
            data() {
                return {
                    studentName: "李四",
                    studentAge: 22,
                }
            }
        })

        // 全局注册组件
        Vue.component("xuexiao", school)
        Vue.component("student", student)

        new Vue({
            el: "#root",
            data: {
                schoolName: "北京大学",
                schoolAddress: "北京",
                studentName: "张三",
                studentAge: 18,
            },
            
            // 第二步：注册组件
            components: {
                xuexiao: school,
                student
            }
        })

        new Vue({
            el: "#root2",
            data: {

            }
        })
    </script>
</body>
</html>
```

#### 2.2.3 注意事项



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>几个注意点</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        几个注意点：
            1.关于组件名:
                一个单词组成：
                    第一种写法(首字母小写)：school
                    第二种写法(首字母大写)：School
                多个单词组成：
                    第一种写法( kebab-case 命名)：my-school
                    第二种写法(CamelCase 命名)：MySchool (需要 Vue 脚手架支持)
                备注：
                    (1).组件名尽可能回避 HTML 中已有的元素名称，例如：h2、H2 都不行。
                    (2).可以使用 name 配置项指定组件在开发者工具中呈现的名字。

            2.关于组件标签:
                第一种写法：<school></school>
                第二种写法：<school/>
                    备注：不用使用脚手架时，<school/> 会导致后续组件不能渲染。

            3.一个简写方式：
                const school = Vue.extend(options) 可简写为：const school = options
    -->
    <div id="root">
        <h2>{{ message }}</h2>
        <!-- 写法一：首字母小写 -->
        <school></school>

        <!-- 写法二：首字母大写 -->
        <School></School>

        <!-- 写法三 -->
        <!-- 不用脚手架时，当使用多个组件，会导致后续组件不能渲染 -->
        <school />
        <school />
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 定义组件
        // const school = Vue.extend({
        //     name: "MySchool",
        //     template: `
        //         <div>
        //             <h2>学校名称：{{ name }}</h2>
        //             <h2>学校地址：{{ address }}</h2>
        //         </div>
        //     `,
        //     data() {
        //         return {
        //             name: "北京大学",
        //             address: "北京"
        //         }
        //     }
        // })
        // 定义组件
        const school = {
            name: "MySchool",
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            }
        }

        new Vue({
            el: "#root",
            data: {
                message: "欢迎学习 Vue!"
            },
            // 注册组件
            components: {
                school
            }
        })
    </script>
</body>
</html>
```

#### 2.2.4 组件的嵌套

![components.png](https://v2.cn.vuejs.org/images/components.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>组件的嵌套</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- <h2>{{ message }}</h2>
        
        <hello></hello>

        <school></school> -->

    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false


        // 定义学生组件
        const student = Vue.extend({
            template: `
                <div>
                    <h2>学生名称：{{ name }}</h2>
                    <h2>学生年龄：{{ age }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    age: 20
                }
            }
        })

        // 定义组件
        const school = Vue.extend({
            name: "MySchool",
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                    <student></student>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            },
            components: {
                student
            }
        })

        // 定义 hello 组件
        const hello = Vue.extend({
            template: `
                <div>
                    <h2> Hello World </h2>
                </div>
            `,
        })

        const app = ({
            template: `
                <div>
                    <h2>{{ message }}</h2>
                    
                    <school></school>

                    <hello></hello>
                </div>
            `,
            data() {
                return {
                    message: "欢迎学习 Vue!"
                }
            },
            // 注册组件
            components: {
                school, hello   
            }
        })

        new Vue({
            el: "#root",
            template: `
                <app></app>
            `,
            // data: {
            //     message: "欢迎学习 Vue!"
            // },
            // 注册组件
            components: {
                app
            }
        })
    </script>
</body>
</html>
```

#### 2.2.5 VueComponent

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VueComponent</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        关于VueComponent：
            1.school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是 Vue.extend 生成的。

            2.我们只需要写 <school/> 或 <school></school>，Vue 解析时会帮我们创建 school 组件的实例对象，即 Vue 帮我们执行的：new VueComponent(options)。

            3.特别注意：每次调用 Vue.extend，返回的都是一个全新的 VueComponent

            4.关于this指向：
                (1).组件配置中：
                    data 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【 VueComponent 实例对象】。
                (2).new Vue(options)配置中：
                    data 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【 Vue 实例对象】。

            5.VueComponent 的实例对象，以后简称 vc（也可称之为：组件实例对象）。
                Vue的实例对象，以后简称vm。
    -->
    <div id="root">
        <school></school>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        //定义school组件
		const school = Vue.extend({
			name: "school",
			template:`
				<div>
					<h2>学校名称：{{ name }}</h2>	
					<h2>学校地址：{{ address }}</h2>	
					<button @click="showName">点我提示学校名</button>
				</div>
			`,
			data(){
				return {
					name: "北京大学",
					address: '北京'
				}
			},
			methods: {
				showName(){
                    // 组件中的 this 是 VueComponent 实例
					console.log('showName', this)
				}
			},
		})

        const test = Vue.extend({
			template: `<span>atguigu</span>`
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`
				<div>
					<h2>{{ msg }}</h2>
					<test></test>	
				</div>
			`,
			data(){
				return {
					msg: '你好啊！'
				}
			},
			components:{ test }
		})


		console.log('@', school)
		console.log('#', hello)
        
        // false 说明两个是不同的 VueComponent 实例
        console.log(school === hello);

        const vm = new Vue({
            el: "#root",
            data: {
                
            },
            components: {
                school, hello
            }
        })
    </script>
</body>
</html>
```

#### 2.2.6 内置关系

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>一个重要的内置关系</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        1.一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
        2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法。
    -->
    <div id="root">
        <school></school>

        <hello></hello>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 定义 school 组件
        const school = Vue.extend({
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            }
        })

        const hello = Vue.extend({
            template: `
                <div>
                    <h2>Hello World</h2>
                </div>
            `,
            data() {
                return {
                }
            }
        })

        console.log(school.prototype.__proto__ === Vue.prototype);

        new Vue({
            el: "#root",
            data: {
                
            },
            components: {
                school, hello
            }
        })

        // 定义一个构造函数
        function Demo() {
            this.a = 1
            this.b = 2
        }

        const d = new Demo()

        // 显示原型属性
        console.log(Demo.prototype);
        
        // 隐式原型属性高 
        console.log(d.__proto__);

        console.log(Demo.prototype === d.__proto__);

        Demo.prototype.x = 99

        console.log(d.__proto__.x);


</script>
</body>
</html>
```

### 2.3 单文件组件

#### 2.3.1 一个.vue文件的组成( 3 个部分)

1. 模板页面

   ```vue
   <template>
   页面模板
   </template>
   ```

2. `JS` 模块对象

   ```javascript
   <script>
       export default{
       data(){
           return{}
       },
       methods:{},
       computed:{},
       components:{}
       }
   </script>
   ```

3. 样式

   ```css
   <style>
   	样式定义
   </style>
   ```

4. 示例代码

   ```vue
   <template>
       <div>
           <h2>学生姓名：{{ name }}}</h2>
           <h2>学生年龄：{{ age }}}</h2>
       </div>
   </template>
   
   <script>
   export default {
       name: "Student",
       data() {
           return {
               name: "张三",
               age: 18
           }
       }
   }
   </script>
   
   <style>
   
   </style>
   ```

#### 2.3.2 基本使用

1. 引入组件

   ```javascript
   <script>
   import School from "./School.vue";
   import Student from "./Student.vue";
   
   export default {
     name: "App",
     components: {
       School,
       Student,
     },
   };
   </script>
   ```

2. 使用组件标签

   ```vue
   <template>
     <div>
       <School></School>
       <Student></Student>
     </div>
   </template>
   ```

   


## 3. 使用 `Vue` 脚手架

### 3.1 初始化脚手架

#### 3.1.1 说明

1. `Vue` 脚手架是 `Vue` 官方提供的标准化开发工具（开发平台）
2. 最新的版本是 `4.x`
3. [文档](https://cli.vuejs.org/zh/)

#### 3.1.2 具体步骤

1. 第一步（仅第一次执行）：全局安装 `@vue/cli`

   ```bash
   npm install -g @vue/cli
   ```

2. 第二步： 切换到要创建项目的目录 ，然后使用命令创建项目
   
      ```bash 
      vue create xxxx
      ```
      
      xxxx: 项目名
      
3. 第三步：启动项目

      ```bash
      npm run serve
      ```

4. 备注：

      1. 如出现：下载缓慢请配置淘宝镜像：

         ```bash
         npm config set registry https://registry.npm.taobao.org
         ```

      2. `Vue` 脚手架隐藏了所有 `webpack` 相关的配置，若想查看具体的 `webpack`配置，请执行：

         ```bash
         vue inspect > output.js
         ```

#### 3.1.3 模板项目的结构

```
├──node_modules
├──public
│ ├──favicon.ico:页签图标
│ └──index.html:主页面
├──src
│ ├──assets:存放静态资源
│ │ └──logo.png
│ │──component:存放组件
│ │ └──HelloWorld.vue
│ │──App.vue:汇总所有组件
│ │──main.js:入口文件
├──.gitignore:git版本管制忽略的配置
├──babel.config.js:babel的配置文件
├──package.json:应用包配置文件
├──README.md:应用描述文件
├──package-lock.json：包版本控制文件
```

#### 3.1.4 不同版本的 `Vue`


1. `vue.js` 与 `vue.runtime.xxx.js` 的区别：
    1. `vue.js` 是完整版的 `Vue`，包含：核心功能 + 模板解析器。
    2. `vue.runtime.xxx.js` 是运行版的 `Vue`，只包含：核心功能；没有模板解析器
2. 因为 `vue.runtime.xxx.js` 没有模板解析器，所以不能使用 `template` 这个配置项，需要使用 `render` 函数接收到的 `createElement` 函数去指定具体内容

#### 3.1.5 `vue.config.js` 配置文件

1. 使用 `vue inspect > output.js` 可以查看到Vue脚手架的默认配置。

2. 使用 `vue.config.js` 可以对脚手架进行个性化定制，[详情](https://cli.vuejs.org/zh)



### 3.2 `ref`

#### 3.2.1 使用说明

1. 被用来给元素或子组件注册引用信息（id 的替代者）
2. 应用在 `html` 标签上获取的是真实 `DOM` 元素，应用在组件标签上是组件实例对象（`vc`）
3. 使用方式：
    1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
    2. 获取：```this.$refs.xxx```

### 3.3 `props`

#### 3.3.1 使用说明


1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        	name:{
        	type:String, //类型
        	required:true, //必要性
        	default:'老王' //默认值
        	}
        }
        ```

    > 备注：`props` 是只读的，`Vue` 底层会监测你对 `props` 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 `props` 的内容到 `data` 中一份，然后去修改 `data` 中的数据。
    
#### 3.3.2 代码示例

父组件 `App` 中使用子组件 `Student`，并传参数

```vue
<template>
<div id="app">
    <!-- 注意：属性前面有没有加 : 的区别，没加就是表示传的参数是字符串，加了就是表示具体的类型值 -->
    <!-- <Student studentName="张三" studentSex="男" studentAge="18"/> -->
    <hr />
    <Student studentName="张三" studentSex="男" :studentAge="18"/>
    <hr />
    <Student  studentSex="男" :studentAge="20"/>

    </div>
</template>
<script>
    import Student from "./components/Student.vue";

    export default {
        components: { Student }
    };
</script>
```

`Student` 组件接收父组件传来的参数

```vue
<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名: {{ studentName }}</h2>
    <h2>学生性别: {{ studentSex }}</h2>
    <!-- <h2>学生年龄: {{ studentAge + 1 }}</h2> -->
    <h2>学生年龄: {{ age + 1 }}</h2>
    <button @click="addAge">点我年龄 +10 </button>
  </div>
</template>

<script>
export default {
  name: "Student",
  // 接收参数的简要写法
  // props: ['studentName', 'studentSex', 'studentAge'],

  // 接受参数 + 指定类型的写法
  // props: {
  //   studentName: String,
  //   studentSex: String,
  //   // 指令类型为数值类型，当传入的类型不是数值类型时就会报错
  //   // Expected Number with value 18, got String with value "18".
  //   studentAge: Number, 
  // },

  // 接收参数 + 指定类型 + 指定是否必传 + 指定默认值
  props: {
    studentName: {
      // 指定类型是字符串
      type: String,
      // 指定默认值
      default: "李四"
    },
    studentSex: {
      type: String,
      // 指定必传
      required: true
    },
    studentAge: {
      type: Number
    }
  },
  
  data() {
    return {
      msg: "我是一名学生",
      age: this.studentAge
    };
  },

  methods: {
    addAge() {
      // props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。
      // 警告 
      // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      // this.studentAge += 10;
      this.age += 10
    }
  }
};
</script>
```

### 3.4 混入

#### 3.4.1 使用说明

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

    第一步定义混入：

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    第二步使用混入：
    ​	- 全局混入：```Vue.mixin(xxx)```
    ​	- 局部混入：```mixins:['xxx']	```

#### 3.4.2 代码示例

定义混入 `mixin.js`

```javascript
// 定义一个混入配置信息
// 说明：如果混入中配置的数据、方法，在组件中有同样的数据定义、方法名称，会加载组件中的数据和方法，混入中的数据和方法就不起作用
const mixin1 = {
    data() {
        return {
            x: 200,
            y: 100
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
// 说明：生命周期中的函数，如果混入、组件中都有配置的话，二者都会执行
const mixin2 = {
    mounted() {
        console.log("mixin 中的 mounted... ")
    },
}

export {
    mixin1,
    mixin2
}
```

在组件中使用混入：

```vue
<template>
  <div>
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1 } from "@/mixin";

export default {
  name: "School",
  // 混入配置项
  mixins: [mixin1],
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    // showName() {
    //   alert(this.name);
    // },
  },
};
</script>
```

```vue
<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1, mixin2 } from "../mixin";
export default {
  name: "Student",
  mixins: [mixin1, mixin2],

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
      x: 1000,
    };
  },
  methods: {
    showName() {
      console.log("student... ");
      alert(this.name + "hello world");
    },
  },
  mounted() {
    console.log("student 中的 mounted... ");
  },
};
</script>
```

### 3.5 插件

#### 3.5.1 使用说明

1. 功能：用于增强 `Vue`

2. 本质：包含 `install` 方法的一个对象，`install` 的第一个参数是 `Vue`，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

    ```js
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 使用插件：```Vue.use()```

#### 3.5.2 代码示例

定义插件 `plugins.js`

```javascript
export default {
    install(Vue) {
        console.log(Vue, "@@@@@");

        // 全局定义过滤器
        Vue.filter("strSlice", function (value) {
            return value.slice(0, 4)
        })

        // 全局定义指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时 一上来
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            updated(element, binding) {
                element.value = binding.value
            },
        })
        // 给 Vue 原型上添加一个方法 vm、vc 都能使用
        Vue.prototype.hello = () => {
            console.log("hello world ");
        }
    },

}
```

在 `main.js` 中使用插件

```javascript
// 引入插件
import plugins from './plugins'

// 使用插件
Vue.use(plugins)

```

### 3.6 `scoped` 样式

1. 作用：让样式在局部生效，防止冲突。

2. 写法：

   ```css
   <style scoped>
     .demo {
       background-color: orange;
       // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
       .title {
         font-size: 40px;
       }
     }
   </style>
   ```

### 3.7 组件化编码流程

1. 组件化编码流程：
   1. 拆分静态组件：组件要按照功能点拆分，命名不要与 `html` 元素冲突。
   2. 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
        1. 一个组件在用：放在组件自身即可。
        2. 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。
        3. 实现交互：从绑定事件开始。
2. `props` 适用于：
   1. 父组件 ==> 子组件 通信
   2. 子组件 ==> 父组件 通信（要求父先给子一个函数）
3. 使用 `v-model` 时要切记：`v-model` 绑定的值不能是 `props` 传过来的值，因为 `props` 是不可以修改的！
4. `props` 传过来的若是对象类型的值，修改对象中的属性时 `Vue` 不会报错，但不推荐这样做。

### 3.8 `webStorage`

#### 3.8.1 使用说明

1. 存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）

2. 浏览器端通过 `Window.sessionStorage` 和 `Window.localStorage` 属性来实现本地存储机制

3. 相关API：
    1. ```xxxxxStorage.setItem('key', 'value');```
        该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
    2. ```xxxxxStorage.getItem('person');```
        ​该方法接受一个键名作为参数，返回键名对应的值
    3. ```xxxxxStorage.removeItem('key');```
        ​该方法接受一个键名作为参数，并把该键名从存储中删除
    4. ``` xxxxxStorage.clear()```

        该方法会清空存储中的所有数据

4. 备注：
    1. `SessionStorage` 存储的内容会随着浏览器窗口关闭而消失
    2. `LocalStorage` 存储的内容，需要手动清除才会消失
    3. ```xxxxxStorage.getItem(xxx)``` 如果 xxx 对应的 `value` 获取不到，那么 `getItem` 的返回值是 `null`
    4. ```JSON.parse(null)``` 的结果依然是 `null`

#### 3.8.2 代码示例

`LocalStorage`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>localStorage 浏览器本地存储</title>
</head>
<body>
    <div>
        <h2>localStorage 浏览器本地存储</h2>
        <button onclick="save()">点我保存一个数据</button>
        <button onclick="read()">点我读取一个数据</button>
        <button onclick="remove()">点我删除一个数据</button>
        <button onclick="clearAll()">点我清空数据</button>
    </div>

    <script type="text/javascript">
        let person = {name: "张三", age: 19}

        // localStorage 保存数据时最终都是 字符串
        function save() {
            // 保存字符串
            localStorage.setItem("name", "张三")
            // 保存数字
            localStorage.setItem("age", 18)
            // 保存对象数据
            // localStorage.setItem("person", person)
            localStorage.setItem("person", JSON.stringify(person))
        }

        function read() {
            // 读取字符串
            console.log(localStorage.getItem("name"))
            // 读取数字
            console.log(localStorage.getItem("age"))
            // 读取对象
            console.log(localStorage.getItem("person"))
            console.log(JSON.parse(localStorage.getItem("person")))
        }

        function remove() {
            // 删除字符串
            localStorage.removeItem("name")
            // 移除数字
            localStorage.removeItem("age")
            // 移除对象
            localStorage.removeItem("person")
        }

        function clearAll() {
            console.log("clear...");
            localStorage.clear()
        }
    </script>
</body>
</html>
```

`SessionStorage`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sessionStorage 浏览器本地存储</title>
</head>
<body>
    <div>
        <h2>sessionStorage 浏览器本地存储</h2>
        <button onclick="save()">点我保存一个数据</button>
        <button onclick="read()">点我读取一个数据</button>
        <button onclick="remove()">点我删除一个数据</button>
        <button onclick="clearAll()">点我清空数据</button>
    </div>

    <script type="text/javascript">
        let person = {name: "张三", age: 19}

        // sessionStorage 保存数据时最终都是 字符串
        function save() {
            // 保存字符串
            sessionStorage.setItem("name", "张三")
            // 保存数字
            sessionStorage.setItem("age", 18)
            // 保存对象数据
            // sessionStorage.setItem("person", person)
            sessionStorage.setItem("person", JSON.stringify(person))
        }

        function read() {
            // 读取字符串
            console.log(sessionStorage.getItem("name"))
            // 读取数字
            console.log(sessionStorage.getItem("age"))
            // 读取对象
            console.log(sessionStorage.getItem("person"))
            console.log(JSON.parse(sessionStorage.getItem("person")))
        }

        function remove() {
            // 删除字符串
            sessionStorage.removeItem("name")
            // 移除数字
            sessionStorage.removeItem("age")
            // 移除对象
            sessionStorage.removeItem("person")
        }

        function clearAll() {
            console.log("clear...");
            sessionStorage.clear()
        }
    </script>
</body>
</html>
```


### 3.9 组件的自定义事件

#### 3.9.1 使用说明
1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（<span style="color:red">事件的回调在 A 中</span>）。

3. 绑定自定义事件：

    1. 第一种方式，在父组件中：```<Demo @helloWorld="test"/>```  或 ```<Demo v-on:helloWorld="test"/>```

    2. 第二种方式，在父组件中：

        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('helloWorld', this.test)
        }
        ```

    3. 若想让自定义事件只能触发一次，可以使用 ```once``` 修饰符，或 ```$once``` 方法。

4. 触发自定义事件：```this.$emit('helloWorld',数据)```		

5. 解绑自定义事件```this.$off('helloWorld')```

6. 组件上也可以绑定原生 `DOM` 事件，需要使用 ```native``` 修饰符。

7. 注意：通过 ```this.$refs.xxx.$on('helloWorld',回调)``` 绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则 `this` 指向会出问题！

#### 3.9.2 代码示例

父组件 `	App`

```vue
<template>
  <div id="app" class="app">
    <h1>学校名称是：{{ schoolName }}</h1>
    <h1>学生姓名是：{{ studentName }}</h1>

    <!-- 通过 props 来实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 第一种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 @ 或者 v-on -->
    <!-- <Student @getStudentName="getStudentName" /> -->
    
    <!-- 第二种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 ref-->
    <Student ref="student" />
    
    <!-- 通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据，只触发一次 -->
    <!-- <Student @getStudentName.once="getStudentName"/> -->
    <!-- <Student ref="student" /> -->
    
    <!-- 使用组件原生的方法 -->
    <!-- <Student @click.native="show" /> -->
    
    <!-- <Student @getStudentName="getStudentName" @getDemo="getDemo" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: { School, Student },
  data() {
    return {
      schoolName: "",
      studentName: "",
    };
  },

  methods: {
    // 接收 School 子组件传递来的数据
    getSchoolName(name) {
      console.log("App 组件收到了学校名称", name);
      this.schoolName = name;
    },

    // 接收 Student 子组件传递来的数据
    getStudentName(name) {
      console.log("App 组件收到了学生姓名", name);
      this.studentName = name;
    },

    // 接收多个数据
    getDemo(...params) {
      console.log(...params);
    },

    show() {
      alert(123)
    }
  },

  mounted() {
    // 写法一
    this.$refs.student.$on("getStudentName", (name) => {
      // 普通函数写法 此时 this 是 VueComponent 实例 Student
      // 箭头函数写法 此时 this 是 vm 
      console.log(this,"@@@", name);
       this.studentName = name
    })
    // 写法二
    // this.$refs.student.$on("getStudentName", this.getStudentName)
    // this.$refs.student.$once("getStudentName", this.getStudentName)
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
```

子组件 `School`

```vue
<template>
  <div class="school">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="sendSchoolName">把学校名称给 App 组件</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
```

子组件 `Student`

```vue
<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给 App 组件</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前组件实例</button>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 触发 student 组件实例的 getStudentName 事件
      this.$emit("getStudentName", this.name);
      this.$emit("getDemo", 1, 2, 3, 4);
    },
    // 解绑自定义事件
    unbind() {
      // 解绑一个自定义事件
      // this.$off("getStudentName");

      // 解绑多个自定义事件
      this.$off(["getStudentName", "getDemo"]);
    },
    // 销毁当前组件实例
    death() {
      // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
      this.$destroy()
    }
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>
```

### 3.10 全局事件总线

#### 3.10.1 使用说明
1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

   1. 接收数据：A 组件想接收数据，则在 A 组件中给 `$bus` 绑定自定义事件，事件的<span style="color:red">回调留在 A 组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在 `beforeDestroy` 钩子中，用 `$off` 去解绑<span style="color:red">当前组件所用到的</span>事件。

#### 3.10.2 代码示例

在 `main.js` 中安装全局事件总线

```javascript
import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})
```

在组件 `School` 中挂载全局事件

```vue
<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  // 在组件挂载时绑定一个事件
  mounted() {
    this.$bus.$on("getStudentName", (data) => {
      // 此时 this 是 VueComponent 的实例 School
      console.log(this);
      console.log("School 组件收到了数据:", data);
    });
  },
  // 在组件销毁前解绑事件
  beforeDestroy() {
    this.$bus.$off("getStudentName")
  }
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>
```

在 `Student` 组件中触发全局事件

```vue
<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生名字给 School 组件</button>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 触发事件
      this.$bus.$emit("getStudentName", this.name)
    }
  },
};
</script>

<!-- <style>
  .demo {
    background-color: orange;
  }
</style> -->
<!-- 不指定，默认使用 css -->
<!--  scoped: 表示样式只对指定的组件起作用-->
<!-- <style scoped>
  .demo {
    background-color: orange;
  }
</style> -->

<!-- lang: 指定用什么样式  -->
<!-- less 需要引入 less-loader:npm install less-loader 指定版本：npm install less-loader@7 -->
<!-- npm view webpack versions 查看 webpack 版本命令，同理： -->
<style lang="less" scoped>
  .demo {
    background-color: orange;
    // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
    .title {
      font-size: 40px;
    }
  }
</style>
```

### 3.11 消息订阅与发布

#### 3.11.1 说明使用
1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>

2. 它包含以下操作：

   1. 订阅消息--对应绑定事件监听
   2. 发布消息--分发事件
   3. 取消消息订阅--解绑事件监听

3. `PubSub.js`

   1. [在线文档](https://github.com/mroderick/PubSubJS)
   2. 安装：
   3. 相关语法：
      - `import PubSub from 'pubsub-js'` : 引入
      -  `PubSub.subscribe(‘msgName’, functon(msgName, data){})`: 订阅
      -  `PubSub.publish(‘msgName’,data)`: 发布消息，触发订阅的回调函数调用
      -  `PubSub.unsubscribe(token)`: 取消消息的订阅

4. 使用步骤：

   1. 安装 `pubsub`：```npm i pubsub-js```

   2. 引入: ```import pubsub from 'pubsub-js'```

   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```

   4. 提供数据：```pubsub.publish('xxx',数据)```

   5. 最好在 `beforeDestroy` 钩子中，用 ```PubSub.unsubscribe(pid)``` 去<span style="color:red">取消订阅。</span>

#### 3.11.2 代码示例

`School` 组件订阅消息

```vue
<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  mounted() {
    // 订阅消息
    const pubId = pubsub.subscribe("sendStudentName", (messageName, data) => {
      // 箭头函数写法 此时 this 是 VueComponent 实例 School
      console.log(this);
      console.log(messageName, data);
    })
    // pubsub.subscribe("sendStudentName", function (messageName, data) {
    //   // 普通函数写法，此时 this undefined
    //   console.log(this);
    //   console.log(messageName, data);
    // });
  },
  beforeDestroy() {
    // 取消订阅消息
    // 取消订阅消息时要用 pubId 去取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>
```

 `Student` 组件消费消息

```vue
<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给 School 组件</button>
  </div>
</template>

<script>
// 引入消息订阅
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 发布消息
      // 第一个参数是消息名
      pubsub.publish("sendStudentName", this.name);
    },
  },
};
</script>

<!-- <style>
  .demo {
    background-color: orange;
  }
</style> -->
<!-- 不指定，默认使用 css -->
<!--  scoped: 表示样式只对指定的组件起作用-->
<!-- <style scoped>
  .demo {
    background-color: orange;
  }
</style> -->

<!-- lang: 指定用什么样式  -->
<!-- less 需要引入 less-loader:npm install less-loader 指定版本：npm install less-loader@7 -->
<!-- npm view webpack versions 查看 webpack 版本命令，同理： -->
<style lang="less" scoped>
.demo {
  background-color: orange;
  // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
  .title {
    font-size: 40px;
  }
}
</style>
```

### 3.12 nextTick


1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 `DOM` 更新结束后执行其指定的回调
3. 什么时候用：当改变数据后，要基于更新后的新 `DOM` 进行某些操作时，要在 `nextTick` 所指定的回调函数中执行
### 3.13 过度与动画

#### 3.13.1 使用说明
1. 作用：在插入、更新或移除 `DOM` 元素时，在合适的时候给元素添加样式类名

3. 写法：

   1. 准备好样式：

      - 元素进入的样式：
        1. `v-enter`：进入的起点
        2. `v-enter-active`：进入过程中
        3. `v-enter-to`：进入的终点
      - 元素离开的样式：
        1. `v-leave`：离开的起点
        2. `v-leave-active`：离开过程中
        3. `v-leave-to`：离开的终点

   2. 使用```<transition>```包裹要过度的元素，并配置 `name` 属性：

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">你好啊！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定 ```key``` 值

#### 3.13.2 代码示例

`transition`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active {
  animation: helloWorld 0.5s linear;
}

.hello-leave-active {
  animation: helloWorld 0.5s linear reverse;
}

@keyframes helloWorld {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
```

`transition-group`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <!-- transition-group 包裹一组标签，需要指定 key -->
    <transition-group name="hello" appear="">
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

/* 进入的起点，离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 离开的起点，进入的重点 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
</style>
```

使用第三方动画库 `Animate.css`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 使用第三方动画库 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
// Animate.css 使用步骤
// 0.官网地址：https://animate.style/
// 1.安装：npm install animate.css --save
// 2.引入： import "animate.css";

import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
```

### 3.14 插槽

#### 3.14.1 使用说明


1. 作用：让父组件可以向子组件指定位置插入 `html` 结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。

2. 分类：默认插槽、具名插槽、作用域插槽
#### 3.14.2 默认插槽

 父组件

```vue
<Category>
    <div>html结构1</div>
</Category>
```

子组件

```vue
<template>
	<div>
        <!-- 定义插槽 -->
        <slot>插槽默认内容...</slot>
    </div>
</template>
```

#### 3.14.3 具名插槽

父组件中

```vue
<Category>
    <template slot="center">
        <div>html结构1</div>
    </template>

    <template v-slot:footer>
        <div>html结构2</div>
    </template>
</Category>
```

子组件中

```vue
<template>
	<div>
        <!-- 定义插槽 -->
        <slot name="center">插槽默认内容...</slot>
        <slot name="footer">插槽默认内容...</slot>
    </div>
</template>
```

#### 3.14.4 作用域插槽

1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（`games` 数据在 `Category` 组件中，但使用数据所遍历出来的结构由 `App` 组件决定）

2. 具体编码：

   父组件中

   ```vue
   <Category>
       <template scope="scopeData">
           <!-- 生成的是ul列表 -->
           <ul>
               <li v-for="g in scopeData.games" :key="g">{{g}}</li>
           </ul>
       </template>
   </Category>
   
   <Category>
       <template slot-scope="scopeData">
           <!-- 生成的是h4标题 -->
           <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
       </template>
   </Category>
   ```

   子组件

   ```vue
   <template>
       <div>
           <slot :games="games"></slot>
       </div>
   </template>
   
   <script>
       export default {
           name:'Category',
           props:['title'],
           //数据在子组件自身
           data() {
               return {
                   games:['红色警戒','穿越火线','劲舞团','超级玛丽']
               }
           },
       }
   </script>
   ```

   


## 4. `Vue` 中的 `Ajax`

### 4.1 使用代理服务器

#### 4.1.1 方式一

在 `vue.config.js` 中添加如下配置：

```javascript
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

#### 4.1.2 方式二
编写 `vue.config.js` 配置具体代理规则：

```javascript
module.exports = {
    devServer: {
        proxy: {
            '/api1': {
                // 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api1': ''}
            },
            '/api2': {
                // 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api2': ''}
            }
        }
	}
}
/*
changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
changeOrigin默认值为true
*/
```
说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

### 4.2 `Vue` 项目中常用的 2 个 `Ajax` 库

#### 4.2.1 `Axios`

1. 说明：通用的 `Ajax` 请求库，官方推荐，使用广泛

2. 安装：`npm install axios`

3. 使用步骤：

   1. 引入

      ```javascript
      import axios from "axios";
      ```

   2. 使用

      ```javascript
      axios.get("http://localhost:8080/api/students").then(
          (response) => {
              console.log("请求成功了", response.data);
          },
          (error) => {
              console.log("请求失败了", error.message);
          }
      );
      ```

#### 4.2.2 `vue-resource`

`Vue` 插件库，`Vue 1.x` 使用广泛，**官方已不维护**


## 5. `Vuex`

### 5.1 理解 `Vuex`

#### 5.1.1 `Vuex` 是什么

1. 概念：专门在 `Vue` 中实现集中式状态（数据）管理的一个 `Vue` 插件，对 `Vue` 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
2. [Github地址](https://github.com/vuejs/vuex)

#### 5.1.2 什么时候使用 `Vuex`

1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态

#### 5.1.3 `Vuex` 工作原理图

<img src="https://vuex.vuejs.org/flow.png" alt="flow.png" style="zoom:67%;" />

![vuex.png](https://vuex.vuejs.org/vuex.png)

### 5.2 搭建 `Vuex` 环境与基本使用

#### 5.2.1 环境 `Vuex` 搭建

1. 创建文件：```src/store/index.js```

   ```javascript
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件
   Vue.use(Vuex)
   
   //准备actions对象——响应组件中用户的动作
   const actions = {}
   //准备mutations对象——修改state中的数据
   const mutations = {}
   //准备state对象——保存具体的数据
   const state = {}
   
   //创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state
   })
   ```

2. 在 `main.js` 中创建 `vm` 时传入 `store` 配置项

   ```javascript
   ......
   //引入store
   import store from './store'
       ......
       //创建vm
       new Vue({
           el:'#app',
           render: h => h(App),
           store
       })
   ```

#### 5.2.2 基本使用

1. 初始化数据、配置 `actions`、配置 `mutations`，操作文件 `store.js`

   ```javascript
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //引用Vuex
   Vue.use(Vuex)
   
   const actions = {
       //响应组件中加的动作
       jia(context,value){
           // console.log('actions中的jia被调用了',miniStore,value)
           context.commit('JIA',value)
       },
   }
   
   const mutations = {
       //执行加
       JIA(state,value){
           // console.log('mutations中的JIA被调用了',state,value)
           state.sum += value
       }
   }
   
   //初始化数据
   const state = {
       sum:0
   }
   
   //创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state,
   })
   ```

2. 组件中读取 `Vuex` 中的数据：`$store.state.sum`

3.  组件中修改 `Vuex` 中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`

   > 备注：若没有网络请求或其他业务逻辑，组件中也可以越过 `actions`，即不写  `dispatch`，直接编写 `commit`

### 5.3 `Vuex` 核心概念和API

#### 5.3.1 `state`

1. `Vuex` 管理的状态对象

2. 它应该是唯一的

3. 示例代码：

   ```javascript
   const state = {
       sum:0
   }
   ```

#### 5.3.2 `actions`

1. 值为一个对象，包含多个响应用户动作的回调函数

2. 通过 `commit()` 来触发 `mutation` 中函数的调用，间接更新 `state`

3. 如何触发 `actions` 中的回调？

   在组件中使用：`$store.dispatch('对应的action回调名') ` 触发

4. 可以包含异步代码（定时器,ajax等等）
   
5. 示例代码：

     ```javascript
     const actions = {
         //响应组件中加的动作
         jia(context,value){
             // console.log('actions中的jia被调用了',miniStore,value)
             context.commit('JIA',value)
         },
     }
     ```

#### 5.3.3 `mutations`


1. 值是一个对象，包含多个直接更新 `state` 的方法

2. 谁能调用 `mutations` 中的方法？如何调用？

   在 `action` 中使用： `commit('对应的mutations方法名') ` 触发

3. `mutations` 中方法的特点：不能写异步代码、只能单纯的操作 `state`

4. 示例代码：

   ```javascript
   const mutations = {
       //执行加
       JIA(state,value){
           // console.log('mutations中的JIA被调用了',state,value)
           state.sum += value
       }
   }
   ```

#### 5.3.4 `getters`


1. 概念：当 `state` 中的数据需要经过加工后再使用时，可以使用 `getters` 加工。

2. 在 `store.js` 中追加 `getters` 配置

   ```js
   // 准备 getters —— 用于对 state 中的数据进行加工
   const getters = {
   	bigSum(state){
   		return state.sum * 10
   	}
   }
   
   // 创建并暴露store
   export default new Vuex.Store({
   	......
   	getters
   })
   ```

3. 组件中读取数据：`$store.getters.bigSum`

### 5.4 四个 `map` 方法的使用

#### 5.4.1 `mapState` 方法

<strong>`mapState` 方法：</strong>用于帮助我们映射 `state` 中的数据为计算属性

```javascript
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

#### 5.4.2 `mapGetters` 方法

<strong>`mapGetters` 方法：</strong>用于帮助我们映射 `getters` 中的数据为计算属性

```javascript
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```

#### 5.4.3 `mapActions` 方法

<strong>`mapActions` 方法：</strong>用于帮助我们生成与 `actions` 对话的方法，即：包含 `$store.dispatch(xxx)` 的函数

```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

#### 5.4.4 `mapMutations` 方法

<strong>`mapMutations` 方法：</strong>用于帮助我们生成与 `mutations` 对话的方法，即：包含 `$store.commit(xxx)` 的函数

```javascript
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```


> 备注：`mapActions` 与 `mapMutations` 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。
### 5.5 模块化+命名空间
1. 业务场景中需要包含多个 `module`，一个 `module` 是一个 `store` 的配置对象，与一个组件（包含有共享数据）对应
2. 目的：让代码更好维护，让多种数据分类更加明确

进行模块化：

1. 修改 `store.js`

   ```javascript
   const countAbout = {
       namespaced:true,//开启命名空间
       state: {x: 1},
       mutations: { ... },
       actions: { ... },
       getters: {
           bigSum(state){
               return state.sum * 10
           }
       }
   }
      
   const personAbout = {
       namespaced:true,//开启命名空间
       state:{ ... },
       mutations: { ... },
       actions: { ... }
   }
      
   const store = new Vuex.Store({
       modules: {
           countAbout,
           personAbout
       }
   })
   ```

2. 开启命名空间后，组件中读取 `state` 数据

   ```javascript
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

3. 开启命名空间后，组件中读取 `getters` 数据

   ```javascript
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

4. 开启命名空间后，组件中调用 `dispatch`

   ```javascript
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

5. 开启命名空间后，组件中调用 `commit`

   ```javascript
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

   

## 6. `vue-router`

### 6.1 相关理解

#### 6.1.1 `vue-router` 的理解

`Vue` 的一个插件库，专门用来实现 `SPA` 应用

#### 6.1.2 对 `SPA` 应用的理解

1. 单页 `Web` 应用（single page web application，SPA）
2. 整个应用只有一个完整的页面
3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4. 数据需要通过 `Ajax` 请求获取


#### 6.1.3 路由的理解

1. 什么是路由

   1. 一个路由就是一组映射关系（`key-value`）
      1. `key` 为路径,  `value` 可能是 `function` 或 `component`

2. 路由分类

   1. 后端路由：
      1. 理解：`value` 是 `function` , 用于处理客户端提交的请求
      2. 工作过程：服务器接收到一个请求时,根据请求路径找到匹配的函数来处理请求,返回响应数据

   2.前端路由：

   1. 理解：`value` 是 `component`，用于展示页面内容
   2. 工作过程：当浏览器的路径改变时,对应的组件就会显示。

### 6.2 基本路由

#### 6.2.1 安装与使用


1. 安装 `vue-router`，命令：`npm install vue-router`

2. 应用插件：`Vue.use(VueRouter)`

3. 编写 `router` 配置项：

   ```javascript
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
       routes:[
           {
               path:'/about',
               component:About
           },
           {
               path:'/home',
               component:Home
           }
       ]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（`active-class` 可配置高亮样式）

   ```vue
    <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

6. 几个注意点：
	
	1. 路由组件通常存放在 `pages` 文件夹，一般组件通常存放在 `components` 文件夹
	2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
	3. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息
	4. 整个应用只有一个 `router`，可以通过组件的 `$router` 属性获取到

#### 6.2.2 总结
编写使用路由的 3 步
1. 定义路由组件
2. 注册路由
3. 使用路由

### 6.3 嵌套（多级）路由


1. 配置路由规则，使用 `children` 配置项：

   ```javascript
   routes:[
      	{
      		path:'/about',
      		component:About,
      	},
      	{
      		path:'/home',
      		component:Home,
      		children:[ //通过children配置子级路由
      			{
      				path:'news', //此处一定不要写：/news
      				component:News
      			},
      			{
      				path:'message',//此处一定不要写：/message
      				component:Message
      			}
      		]
      	}
      ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```
### 6.4 路由传参

#### 6.4.1 路由的 `query` 参数


1. 传递参数

   ```vue
   <!-- 跳转并携带query参数，to的字符串写法 -->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
   				
   <!-- 跳转并携带query参数，to的对象写法 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```
#### 6.4.2 命名路由


1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                          name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```
#### 6.4.3 路由的 `params` 参数

1. 配置路由，声明接收 `params` 参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', //使用占位符声明接收params参数
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>
   				
   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

   > 特别注意：路由携带 `params` 参数时，若使用 `to` 的对象写法，则不能使用 `path` 配置项，必须使用 `name` 配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

#### 6.4.4 路由的 `props` 配置
作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

#### 6.4.5 `<router-link>` 的 `replace` 属性


1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为 `push` 和 `replace`，`push` 是追加历史记录，`replace` 是替换当前记录。路由跳转时候默认为 `push`
3. 开启 `replace` 模式： `<router-link replace .......>News</router-link>`

### 6.5 编程式路由导航

1. `this.$router.push(path)`: 相当于点击路由链接(可以返回到当前路由界面)
2. `this.$router.replace(path)`: 用新路由替换当前路由(不可以返回到当前路由界面)
3. `this.$router.back()`: 请求(返回)上一个记录路由
4. `this.$router.go(-1)`: 请求(返回)上一个记录路由
5. `this.$router.go( 1 )`: 请求下一个记录路由


## 7. Vue UI组件库

#### 7.1 移动端常用UI组件库

1. [Vant](https://youzan.github.io/vant)
2. [CubeUI](https://didi.github.io/cube-ui)
3. [MintUI](http://mint-ui.github.io)

#### 7.2 PC端常用UI组件库

1. [Element UI](https://element.eleme.cn)
2. [IViewUI](https://www.iviewui.com)



## 8. `Vue3` 快速上手

<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

### 8.1 `Vue3` 简介

- 2020年9月18日，`Vue.js` 发布 `3.0` 版本，代号：`One Piece`（海贼王）
- 耗时2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位贡献者](https://github.com/vuejs/vue-next/graphs/contributors) 
- [github 上的 tags](https://github.com/vuejs/vue-next/releases/tag/v3.0.0)

### 8.2 `Vue3` 带来了什么

1. 性能的提升

   - 打包大小减少41%
   - 初次渲染快55%, 更新渲染快133%
   - 内存减少54%
   - ......

2. 源码的升级

   - 使用 `Proxy` 代替 `defineProperty` 实现响应式
   - 重写虚拟 `DOM` 的实现和 `Tree-Shaking`
   - ......

3. 拥抱 `TypeScript`

   `Vue3` 可以更好的支持 `TypeScript`

4. 新的特性

   - `Composition API`（组合 API）
   - `setup` 配置 `ref` 与 `reactive`
   - `watch` 与 `watchEffect`
   - `provide` 与 `inject`
   - ......

5. 新的内置组件

   - `Fragment` 
   - `Teleport`
   - `Suspense`

6. 其他改变

   - 新的生命周期钩子
   - `data` 选项应始终被声明为一个函数
   - 移除 `keyCode` 支持作为 `v-on` 的修饰符
   - ......



## 9. 创建 `Vue3` 工程

### 9.1 使用 `vue-cli` 创建

[官方文档](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 9.2 使用 `vite` 创建

[官方文档](https://v3.cn.vuejs.org/guide/installation.html#vite)

[vite官网](https://vitejs.cn)

- 什么是 `vite`？—— 新一代前端构建工具。

- 优势如下：
  - 开发环境中，无需打包操作，可快速的冷启动
  - 轻量快速的热重载（`HMR`）
  - 真正的按需编译，不再等待整个应用编译完成
  
- 传统构建与 `vite` 构建对比图

  ![image-20221024104852570](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/vue/vue3_start/image-20221024104852570.png)
  
  ![image-20221024104903568](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/vue/vue3_start/image-20221024104903568.png)

```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

## 10. 常用 `Composition API`

[官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

### 10.1 拉开序幕的 `setup`

#### 10.1.1 使用说明

1. 理解：`Vue3` 中一个新的配置项，值为一个函数
2. `setup` 是所有<strong style="color:#DD5145">`Composition API`（组合API）</strong><i style="color:gray;font-weight:bold">“ 表演的舞台 ”</i>
3. 组件中所用到的：数据、方法等等，均要配置在 `setup` 中
4. `setup` 函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用（重点关注！）
   2. <span style="color:#aad">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>
5. 注意点：
   1. 尽量不要与 `Vue2.x` 配置混用
      - `Vue2.x` 配置（`data`、`methos`、`computed` ...）中<strong style="color:#DD5145">可以访问到</strong> `setup` 中的属性、方法
      - 但在 `setup` 中<strong style="color:#DD5145">不能访问到 </strong>`Vue2.x` 配置（`data`、`methos`、`computed` ...）
      - 如果有重名，`setup` 优先
   2. `setup` 不能是一个 `async` 函数，因为返回值不再是 `return` 的对象，而是 `promise`, 模板看不到 `return` 对象中的属性。（后期也可以返回一个`Promise` 实例，但需要 `Suspense` 和异步组件的配合）

#### 10.1.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话(Vue3 所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="sayWelcome">说话(Vue2
    所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="test1">
    测试一下在 Vue2 的配置中去读取 Vue3 中的数据、方法
  </button>
  <br />
  <br />
  <button @click="test2">
    测试一下在 Vue3 的配置中去读取 Vue2 中的数据、方法
  </button>
</template>

<script>
import { h } from "vue";

export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎学习 vue");
    },
    test1() {
      console.log(this.sex);
      // 可以正确取到
      console.log(this.name);
      // 可以正确取到
      console.log(this.age);
      // 可以正确取到
      console.log(this.sayHello);
    },
  },

  // 此处只是暂时测试一下 setup，暂时不考虑响应式的问题
  setup() {
    let name = "张三";
    let age = 18;

    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊!`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      // undefined
      console.log(this.sex);
      // undefined
      console.log(this.sayWelcome);
    }

    // 返回一个对象——常用
    // return {
    //   name,
    //   age,
    //   sayHello,
    //   test2,
    // };

    // 返回一个渲染函数
    return () => h("h1", "欢迎学习 Vue");
  },
};
</script>
```

### 10.2 `ref` 函数

#### 10.2.1 使用说明

- 作用：定义一个响应式的数据
- 语法: `const xxx = ref(initValue)`
  - 创建一个包含响应式数据的<strong style="color:#DD5145">引用对象（`reference` 对象，简称 `ref` 对象）</strong>
  - `JS` 中操作数据： `xxx.value`
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型
  - 基本类型的数据：响应式依然是靠 `Object.defineProperty()` 的 `get` 与 `set` 完成的
  - 对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了 `Vue3.0` 中的一个新函数——  `reactive` 函数

#### 10.2.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪资：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k"
    })

    function changeInfo() {
      console.log("@@@", name);
      name.value = "李四";
      age.value = 98;

      job.value.type = "UI设计师";
      job.value.salary = "6k"

    }

    // 返回一个对象——常用
    return {
      name,
      age,
      job,
      changeInfo
    };

  },
};
</script>
```

### 10.3 `reactive` 函数

#### 10.3.1 使用说明

- 作用：定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用 `ref` 函数）
- 语法：`const 代理对象= reactive(源对象)` 接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（`Proxy` 的实例对象，简称 `proxy` 对象）</strong>
- `reactive` 定义的响应式数据是“深层次的”
- 内部基于 `ES6` 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作

#### 10.3.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试 c 的数据：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",

  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ["抽烟", "喝酒", "烫头"]
    })

    function changeInfo() {
      console.log("@@@", name);
      person.name = "李四";
      person.age = 98;

      person.job.type = "UI设计师";
      person.job.salary = "6k"
      person.job.a.b.c = 999

      // 此处数组修改注意与 Vue2 的区别
      person.hobby[0] = "篮球"

    }

    // 返回一个对象——常用
    return {
      person,
      changeInfo
    };

  },
};
</script>
```

### 10.4 Vue 中的响应式原理

#### 10.4.1 `Vue2.x` 的响应式

- 实现原理：

  - 对象类型：通过 `Object.defineProperty()` 对属性的读取、修改进行拦截（数据劫持）

  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）

    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    ```

- 存在问题：

  - 新增属性、删除属性,，界面不会更新
  - 直接通过下标修改数组，界面不会自动更新

#### 10.4.2 `Vue3.0` 的响应式

- 实现原理: 

  - 通过 `Proxy`（代理）:  拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等

  - 通过 `Reflect`（反射）:  对源对象的属性进行操作

  - `MDN` 文档中描述的 `Proxy` 与 `Reflect`：

    - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

    - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

      ```js
      new Proxy(data, {
      	// 拦截读取属性值
          get (target, prop) {
          	return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
          	return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
          	return Reflect.deleteProperty(target, prop)
          }
      })
      
      proxy.name = 'tom'   
      ```
  
- 代码示例

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
      <script type="text/javascript">
          // 源数据
          let person = {
              name: '张三',
              age: 18
          }
  
          // 模拟 Vue2 中实现响应式
          // let p= {}
  
          // Object.defineProperty(p, 'name', {
          //     get() {
          //         // 有人读取 name 时调用
          //         return person.name
          //     },
          //     set(value) {
          //         // 有人修改 name 时调用
          //         console.log('有人修改了 name 属性，要去更新页面!');
          //         person.name = value
          //     }
          // })
          // Object.defineProperty(p, 'age', {
          //     get() {
          //         // 有人读取 age 时调用
          //         return person.age
          //     },
          //     set(value) {
          //         // 有人修改 name 时调用
          //         console.log('有人修改了 age 属性，要去更新页面!');
          //         person.age = value
          //     }
          // })
  
          // 模拟 Vue3 中实现响应式
          // const p = new Proxy(person, {
          //     // 有人读取 p 的某个属性时调用
          //     get(target, propName) {
          //         console.log(`有人读取了 p 身上的 ${propName} 属性`);
          //         return Reflect.get(target, propName)
          //     },
          //     // 有人修改了 p 的某个属性、或给 p 追加某个属性时调用
          //     set(target, propName, value) {
          //         console.log(`有人修改了 p 身上的 ${propName} 属性`);
          //         Reflect.set(target, propName, value)
          //     },
          //     // 有人删除 p 身上的某个属性时调用
          //     deleteProperty(target, propName) {
          //         console.log(`有人删除了 p 身上的 ${propName} 属性`);
          //         return Reflect.deleteProperty(target, propName)
          //     }
          // })
  
          let obj = {
              a: 1,
              b: 2
          }
  
          // 通过 Object.defineProperty 去操作
          // try {
          //     Object.defineProperty(obj, 'c', {
          //         get() {
          //             return 3;
          //         }
          //     })
      
          //     Object.defineProperty(obj, 'c', {
          //         get() {
          //             return 4;
          //         }
          //     })
          // } catch (error) {
          //     console.log(error);
          // }
  
          // 通过 Reflect.defineProperty 去操作
          const x1 = Reflect.deleteProperty(obj, 'c', {
              get() {
                  return 3;
              }
          })
          console.log('x1', x1);
  
          const x2 = Reflect.defineProperty(obj, 'c', {
              get() {
                  return 4;
              }
          })
  
          console.log('x2', x2);
  
          if (x2) {
              console.log('某某某操作成功了');
          } else {
              console.log('某某某操作失败了');
          }
      </script>
  </body>
  </html>
  ```

### 10.5 `reactive` 对比 `ref`

-  从定义数据角度对比：
   -  `ref` 用来定义：<strong style="color:#DD5145">基本类型数据</strong>
   -  `reactive` 用来定义：<strong style="color:#DD5145">对象（或数组）类型数据</strong>
   -  备注：`ref` 也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>，它内部会自动通过 `reactive` 转为<strong style="color:#DD5145">代理对象</strong>
-  从原理角度对比：
   -  `ref` 通过 `Object.defineProperty()` 的 `get` 与 `set` 来实现响应式（数据劫持）
   -  `reactive` 通过使用 <strong style="color:#DD5145">`Proxy`</strong> 来实现响应式（数据劫持）, 并通过 <strong style="color:#DD5145">`Reflect`</strong> 操作<strong style="color:orange">源对象</strong>内部的数据
-  从使用角度对比：
   -  `ref` 定义的数据：操作数据<strong style="color:#DD5145">需要</strong> `.value`，读取数据时模板中直接读取<strong style="color:#DD5145">不需要</strong> `.value`
   -  `reactive` 定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong> `.value`

### 10.6 `setup` 的两个注意点

#### 10.6.1 使用说明

- `setup` 执行的时机
  - 在 `beforeCreate` 之前执行一次，`this` 是 `undefined`

- `setup` 的参数
  - `props`：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
  - `context`：上下文对象
    - `attrs`: 值为对象，包含：组件外部传递过来，但没有在 `props` 配置中声明的属性, 相当于 `this.$attrs`
    - `slots`: 收到的插槽内容, 相当于 `this.$slots`
    - `emit`: 分发自定义事件的函数, 相当于 `this.$emit`

#### 10.6.2 代码示例

```vue
<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下 Demo 组件的 hello 事件</button>
</template>

<script>
export default {
  name: "Demo",
  props: ["message"],
  emits: ["hello"],
  setup(props, context) {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----", this);

    // 数据
    let person = {
      name: "张三",
      age: 18,
    };

    console.log(props, context);
    // props
    // console.log("props", props);
    // 相当于 Vue2 中的 $attrs
    // console.log("attrs", context.attrs);
    // 触发自定义事件
    // console.log("emit", context.emit);
    // 插槽
    console.log("slots", context.slots);

    function test() {
      context.emit("hello", person.name);
    }

    return {
      person,
      test,
    };
  },
  beforeCreate() {
    console.log("-----beforeCreate-----");
  },
};
</script>
```

### 10.7 计算属性与监视

#### 10.7.1 `computed` 函数

- 与 `Vue2.x` 中 `computed` 配置功能一致

- 写法：

  ```js
  import {computed} from 'vue'
  
  setup(){
      ...
  	//计算属性——简写
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //计算属性——完整
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```
  
- 代码示例

  ```vue
  <template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName" />
    <br />
    名：<input type="text" v-model="person.lastName" />
    <br />
    全名：<input type="text" v-model="person.fullName" />
  </template>
  
  <script>
  import { reactive, computed } from "@vue/reactivity";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let person = reactive({
        firstName: "张",
        lastName: "三",
      });
  
      // 计算属性-简写
      // person.fullName = computed(() => {
      //   return person.firstName + "-" + person.lastName;
      // });
  
      // 计算属性-完整写法（考虑读和写）
      person.fullName = computed({
        get() {
          return person.firstName + "-" + person.lastName;
        },
        set(value) {
          const arr = value.split("-");
          person.firstName = arr[0];
          person.lastName = arr[1];
        },
      });
  
      return {
        person,
        // fullName,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

#### 10.7.2 `watch` 函数

- 与 `Vue2` 中 `watch` 配置功能一致

- 两个小“坑”：

  - 监视 `reactive` 定义的响应式数据时：`oldValue` 无法正确获取、强制开启了深度监视（`deep` 配置失效）
  - 监视 `reactive` 定义的响应式数据中某个属性时：`deep` 配置有效。

  ```js
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{
  	console.log('sum变化了',newValue,oldValue)
  },{immediate:true})
  
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{
  	console.log('sum或msg变化了',newValue,oldValue)
  }) 
  
  /* 情况三：监视reactive定义的响应式数据
  			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
  			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  */
  watch(person,(newValue,oldValue)=>{
  	console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  
  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(()=>person.job,(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true}) 
  
  //情况五：监视reactive定义的响应式数据中的某些属性
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```
  
- 代码示例

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 +1</button>
    <hr />
    <h2>当前的信息为：{{ message }}</h2>
    <button @click="message += '~'">点我修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { ref, reactive, watch } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let sum = ref(0);
  
      let message = ref("hello");
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      // 情况一：监听 ref 所定义的一个响应式数据
      // watch(
      //   sum,
      //   (newValue, oldValue) => {
      //     console.log("sum 的值变化了", newValue, oldValue);
      //   },
      //   {
      //     immediate: true,
      //   }
      // );
  
      // 情况二：监听 ref 所定义的多个响应式数据
      // watch([sum, message], (newValue, oldValue) => {
      //   console.log("sum 或 message 的值变化了", newValue, oldValue);
      // });
  
      // 情况三：监听 reactive 所定义的一个响应式数据的全部属性
      // 1.注意：此处无法活得 oldValue
      // 2,注意：强制开启了深度监视（deep: false 配置无效）
      // watch(
      //   person,
      //   (newValue, oldValue) => {
      //     console.log("person 的值变化了", newValue, oldValue);
      //   },
      //   // 此时 deep 配置无效
      //   {
      //     deep: true,
      //   }
      // );
  
      // 情况四：监听 reactive 所定义的一个响应式数据中的某个属性
      // watch(
      //   () => person.name,
      //   (newValue, oldValue) => {
      //     console.log("person 中的 name 属性的值变化了", newValue, oldValue);
      //   }
      // );
  
      // 情况五:监听 reactive 所定义的一个响应式数据中的某些属性
      // watch([() => person.name, () => person.age], (newValue, oldValue) => {
      //   console.log("person 的 name 或 age 属性的值变化了", newValue, oldValue);
      // });
  
      // 特殊情况:
      watch(
        () => person.job,
        (newValue, oldValue) => {
          console.log("person 的 job 属性的值发生变化了", newValue, oldValue);
        },
        // 此处由于监视的是 reactive 所定义的对象中的某个属性,所哟 deep 配置有效
        {
          deep: true,
        }
      );
  
      return {
        sum,
        message,
        person,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

#### 10.7.3 `watchEffect` 函数

- `watch` 的套路是：既要指明监视的属性，也要指明监视的回调

- `watchEffect` 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性

- `watchEffect` 有点像 `computed`：

  - 但 `computed` 注重的计算出来的值（回调函数的返回值），所以必须要写返回值
  - 而 `watchEffect` 更注重的是过程（回调函数的函数体），所以不用写返回值

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
  ```
  
- 代码示例：

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 +1</button>
    <hr />
    <h2>当前的信息为：{{ message }}</h2>
    <button @click="message += '~'">点我修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { reactive, ref, watch, watchEffect } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let sum = ref(0);
  
      let message = ref("hello");
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      watch(
        sum,
        (newValue, oldValue) => {
          console.log("sum 的值变化了", newValue, oldValue);
        },
        {
          immediate: true,
        }
      );
  
      watchEffect(() => {
        // 当 sum/person.job.j1,salary 的值发生变化时,执行回调
        const x1 = sum.value;
        const x2 = person.job.j1.salary;
        console.log("所指定的回调执行了", x1, x2);
      });
  
      return {
        sum,
        message,
        person,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

### 10.8 生命周期

### 10.8.1 使用说明

- `Vue3` 中可以继续使用 `Vue2` 中的生命周期钩子，但有有两个被更名：
  - `beforeDestroy` 改名为 `beforeUnmount`
  - `destroyed` 改名为 `unmounted`
- `Vue3` 也提供了 `Composition API` 形式的生命周期钩子，与 `Vue2` 中钩子对应关系如下：
  - `beforeCreate` ===> `setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`  ===> `onMounted`
  - `beforeUpdate` ===> `onBeforeUpdate`
  - `updated`  ===> `onUpdated`
  - `beforeUnmount`  ===> `onBeforeUnmount`
  - `unmounted` ==> `onUnmounted`

### 10.8.2 代码示例

```vue
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 +1</button>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    let sum = ref(0);

    // 通过组合式 API 的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("-----onBeforeMount-----");
    });
    onMounted(() => {
      console.log("-----onMounted-----");
    });
    onBeforeUpdate(() => {
      console.log("-----onBeforeUpdate-----");
    });
    onUpdated(() => {
      console.log("-----onUpdated-----");
    });
    onBeforeUnmount(() => {
      console.log("-----onBeforeUnmount-----");
    });
    onUnmounted(() => {
      console.log("-----onUnmounted-----");
    });

    return {
      sum,
    };
  },
  // 通过配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log("-----beforeCreate-----");
  // },
  // created() {
  //   console.log("-----created-----");
  // },
  // beforeMount() {
  //   console.log("-----beforeMount-----");
  // },
  // mounted() {
  //   console.log("-----mounted-----");
  // },
  // beforeUpdate() {
  //   console.log("-----beforeUpdate-----");
  // },
  // updated() {
  //   console.log("-----updated-----");
  // },
  // beforeUnmount() {
  //   console.log("-----beforeUnmount-----");
  // },
  // unmounted() {
  //   console.log("-----unmounted-----");
  // },
};
</script>
```

### 10.9 自定义 `hook` 函数

### 10.9.1 使用说明

- 什么是 `hook`？—— 本质是一个函数，把 `setup` 函数中使用的 `Composition API` 进行了封装
- 类似于 `Vue2` 中的 `mixin`
- 自定义 `hook` 的优势：复用代码，让 `setup` 中的逻辑更清楚易懂

#### 10.9.2 代码示例

创建 `js` 文件

```javascript
import {
    reactive,
    onMounted,
    onBeforeUnmount
} from 'vue';

export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })

    // 实现鼠标“打点”相关的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY);
    }

    // 实现鼠标“打点”相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}
```

引入使用

```vue
<template>
  <h2>我是 Test 组件</h2>
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>
<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "Test",
  setup() {
    let point = usePoint();

    return {
      point,
    };
  },
};
</script>
```

### 10.10 `toRef`

#### 10.10.1 使用说明

- 作用：创建一个 `ref` 对象，其 `value` 值指向另一个对象中的某个属性
- 语法：```const name = toRef(person,'name')```
- 应用:   要将响应式对象中的某个属性单独提供给外部使用时。


- 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```

#### 10.10.2 代码示例

```vue
<template>
  <h2>信息：{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <!-- <h2>薪资：{{ salary }}</h2> -->
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '@'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary"),
      ...toRefs(person),
    };
  },
};
</script>
```

## 11. 其它 `Composition API`

### 11.1 `shallowReactive` 与 `shallowRef`

- `shallowReactive`：只处理对象最外层属性的响应式（浅响应式）

- `shallowRef`：只处理基本数据类型的响应式，不进行对象的响应式处理

- 什么时候使用?
  -  如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> `shallowReactive`
  -  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> `shallowRef`
  
- 代码示例：

  ```vue
  <template>
    <h2>当前 x.y 的值是：{{ x.y }}</h2>
    <button @click="x = { y: 888 }">点我替换 x</button>
    <button @click="x.y++">点我 x.y + 1</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { shallowReactive, shallowRef } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      console.log("-----setup-----");
  
      // let person = reactive({
      //   name: "张三",
      //   age: 18,
      //   job: {
      //     j1: {
      //       salary: 20,
      //     },
      //   },
      // });
      // 只考虑第一层数据的响应式。此种情况下，修改薪资就不起作用了
      let person = shallowReactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      let x = shallowRef({
        y: 0,
      });
      console.log("*****", x);
  
      return {
        person,
        x,
      };
    },
  };
  </script>
  ```

### 11.2 `readonly` 与 `shallowReadonly`

- `readonly`: 让一个响应式数据变为只读的（深只读）

- `shallowReadonly`：让一个响应式数据变为只读的（浅只读）

- 应用场景：不希望数据被修改时

- 代码示例：

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 ++</button>
    <h2>{{ person }}</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { ref, reactive, readonly, shallowReadonly } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      console.log("-----setup-----");
      let sum = ref(0);
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      // 数据不修改，页面也不更新
      // person = readonly(person);
  
      // 数据不修改，页面也不更新，只作用第一层属性，可以作用于第二层以上的属性，如可以修改薪资
      // person = shallowReadonly(person);
  
      // sum = readonly(sum);
  
      sum = shallowReadonly(sum);
  
      return {
        sum,
        person,
      };
    },
  };
  </script>
  ```

### 11.3 `toRaw` 与 `markRaw`

#### 11.3.1 使用说明

- `toRaw`：
  - 作用：将一个由 `reactive` 生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
- `markRaw`：
  - 作用：标记一个对象，使其永远不会再成为响应式对象
  - 应用场景:
    1.  有些值不应被设置为响应式的，例如复杂的第三方类库等
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

#### 11.3.2 代码示例

```vue
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 ++</button>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <h2 v-show="person.car">车辆：{{ person.car }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的 person</button>
  <button @click="addCar">添加一台车</button>
  <button @click="person.car.name += '@'">修改车的名字</button>
  <button @click="changeCarPrice">修改车的价格</button>
</template>

<script>
import { ref, reactive, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");
    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    function addCar() {
      let car = {
        name: "奔驰",
        price: 40,
      };
      // 添加的 car 是响应式数据
      // person.car = car;

      // 添加的 car 不是响应式数据，但是数据可以修改
      person.car = markRaw(car);
    }

    function changeCarPrice() {
      person.car.price++;
      console.log(person.car);
    }

    return {
      sum,
      person,
      showRawPerson,
      addCar,
      changeCarPrice,
    };
  },
};
</script>
```

### 11.4 `customRef`

- 作用：创建一个自定义的 `ref`，并对其依赖项跟踪和更新触发进行显式控制

- 实现防抖效果：

  ```vue
  <template>
  	<input type="text" v-model="keyword">
  	<h3>{{keyword}}</h3>
  </template>
  
  <script>
  	import {ref,customRef} from 'vue'
  	export default {
  		name:'Demo',
  		setup(){
  			// let keyword = ref('hello') //使用Vue准备好的内置ref
  			//自定义一个myRef
  			function myRef(value,delay){
  				let timer
  				//通过customRef去实现自定义
  				return customRef((track,trigger)=>{
  					return{
  						get(){
  							track() //告诉Vue这个value值是需要被“追踪”的
  							return value
  						},
  						set(newValue){
  							clearTimeout(timer)
  							timer = setTimeout(()=>{
  								value = newValue
  								trigger() //告诉Vue去更新界面
  							},delay)
  						}
  					}
  				})
  			}
  			let keyword = myRef('hello',500) //使用程序员自定义的ref
  			return {
  				keyword
  			}
  		}
  	}
  </script>
  ```

### 11.5 `provide` 与 `inject`

#### 11.5.1 使用介绍

- 作用：实现<strong style="color:#DD5145">祖与后代组件间</strong>通信

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

  1. 祖组件中：

     ```js
     setup(){
     	......
         let car = reactive({name:'奔驰',price:'40万'})
         provide('car',car)
         ......
     }
     ```

  2. 后代组件中：

     ```js
     setup(props,context){
     	......
         const car = inject('car')
         return {car}
     	......
     }
     ```

#### 11.5.2 代码示例

父组件 `App` 

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <div class="app">
    <h1>我是 App 组件（祖），{{ name }} - {{ price }}W</h1>
    <button @click="price++">修改车的价格</button>
    <Children />
  </div>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
import Children from "./components/Children.vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    // 给自己的后代传递数据
    provide("car", car);

    return {
      ...toRefs(car),
    };
  },
  components: { Children },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
```

子组件 `children`

```vue
<template>
  <div class="children">
    <h1>我是 Children 组件（子）</h1>
    <Son />
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "Children",
  components: { Son },
  setup() {},
};
</script>
<style scoped>
.children {
  background-color: skyblue;
  padding: 10px;
}
</style>
```

孙子组件 `Son`

```vue
<template>
  <div class="son">
    <h1>我是 Son 组件（孙） {{ car.name }} - {{ car.price }}W</h1>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Son",
  setup() {
    // 注入上代传来的数据
    let car = inject("car");

    return {
      car,
    };
  },
};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
```

### 11.6 响应式数据的判断

#### 11.6.1 使用说明

- `isRef`: 检查一个值是否为一个 `ref` 对象
- `isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
- `isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
- `isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

#### 11.6.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>我是 App 组件</h1>
</template>

<script>
import {
  reactive,
  ref,
  isReactive,
  isRef,
  readonly,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    let sum = ref(0);

    let car2 = readonly(car);

    // true
    console.log(isReactive(car));
    // true
    console.log(isRef(sum));
    // true
    console.log(isReadonly(car2));
    // true
    console.log(isProxy(car));
    // false
    console.log(isProxy(sum));
  },
};
</script>
```

## 12. `Composition API` 的优势

### 12.1 `Options API` 存在的问题

使用传统 `Options API` 中，新增或者修改一个需求，就需要分别在 `data`，`methods`，`computed` 里修改 

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:600px;float:left" />
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="zoom:50%;width:560px;left" /> 
</div>


















### 12.2 `Composition API` 的优势

我们可以更加优雅的组织我们的代码、函数，让相关功能的代码更加有序的组织在一起

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
















## 13. 新的组件

### 13.1 `Fragment`

- 在 `Vue2` 中：组件必须有一个根标签
- 在 `Vue3` 中：组件可以没有根标签，内部会将多个标签包含在一个 `Fragment` 虚拟元素中
- 好处：减少标签层级，减小内存占用

### 13.2 `Teleport`

- 什么是 `Teleport`？—— `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件 `html` 结构</strong>移动到指定位置的技术。

  ```vue
  <teleport to="移动位置">
  	<div v-if="isShow" class="mask">
  		<div class="dialog">
  			<h3>我是一个弹窗</h3>
  			<button @click="isShow = false">关闭弹窗</button>
  		</div>
  	</div>
  </teleport>
  ```

### 13.3 `Suspense`

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

  - 异步引入组件

    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```

  - 使用 `Suspense` 包裹组件，并配置好 `default` 与 `fallback`

    ```vue
    <template>
    	<div class="app">
    		<h3>我是App组件</h3>
    		<Suspense>
    			<template v-slot:default>
    				<Child/>
    			</template>
    			<template v-slot:fallback>
    				<h3>加载中.....</h3>
    			</template>
    		</Suspense>
    	</div>
    </template>
    ```

## 14. 其他

### 14.1 全局 `API` 的转移

- `Vue2.x` 有许多全局 `API` 和配置

  - 例如：注册全局组件、注册全局指令等

    ```js
    //注册全局组件
    Vue.component('MyButton', {
      data: () => ({
        count: 0
      }),
      template: '<button @click="count++">Clicked {{ count }} times.</button>'
    })
    
    //注册全局指令
    Vue.directive('focus', {
      inserted: el => el.focus()
    }
    ```

- `Vue3` 中对这些 `API` 做出了调整：

  - 将全局的 `API`，即：`Vue.xxx` 调整到应用实例（`app`）上

    | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)                        |
    | ------------------------ | ------------------------------------------- |
    | Vue.config.xxxx          | app.config.xxxx                             |
    | Vue.config.productionTip | <strong style="color:#DD5145">移除</strong> |
    | Vue.component            | app.component                               |
    | Vue.directive            | app.directive                               |
    | Vue.mixin                | app.mixin                                   |
    | Vue.use                  | app.use                                     |
    | Vue.prototype            | app.config.globalProperties                 |

### 14.2 其他改变

- `data` 选项应始终被声明为一个函数

- 过度类名的更改：

  - `Vue2.x` 写法

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - `Vue3.x` 写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    
    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- <strong style="color:#DD5145">移除 </strong>`keyCode` 作为 `v-on` 的修饰符，同时也不再支持 `config.keyCodes`

- <strong style="color:#DD5145">移除</strong> `v-on.native` 修饰符

  - 父组件中绑定事件

    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```

  - 子组件中声明自定义事件

    ```vue
    <script>
      export default {
        emits: ['close']
      }
    </script>
    ```

- <strong style="color:#DD5145">移除</strong>过滤器（`filter`）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 `JavaScript`” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。
