<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">change</button>
    <div class="reative">
      {{ name }}
    </div>
    <div class="login">
      <p>{{ login.userName }}</p>
      <button @click="login.loginAction">login</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

import { login } from '../composeables/login'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    user: { type: String, default: '' }
  },
  /*
    + setup函数主要替换了vue2中的beforeCreated，created生命周期;
    + setup函数默认接受两个参数props、context
    + 
  */
  setup(props, context) {
    console.log(props, context)
    // vue实例并未初始化完毕，所以设置this为undefined
    console.log(this)

    const message = ref('hello')
    // 一个响应式的基本数据类型
    console.log(message)
    const changeMessage = () => {
      console.log('changeMessage')
      message.value = 'hello vue'
      console.log(message)
    }

    // 定义一个响应式对象
    const user = reactive({
      name: 'li',
      age: 18,
      addres: 'beijing'
    })

    /*
      return返回的数据都可以被模板使用，
      尤其是响应式数据
    */
    return {
      message,
      changeMessage,
      ...toRefs(user), // 直接使用ES6的结构，会使得对象的属性失去响应式
      login
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
