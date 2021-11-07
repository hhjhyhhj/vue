<template>
  <div>
    <h2>
       {{blog.id}} -{{blog.title}}
    </h2>
  </div>
</template>

<script>
// 一个组件对象就是一个小的vm
// 组件内的回调函数的this是组件对象
// 模板中获取数据读取组件对象的对应属性值
//在vue里，通过props(父组件传递给子组件)的数据必须要进行声明
export default{
  //声明接收父组件传过来的属性
  //接收的所有标签属性都会成为组件对象的属性
  props:['blog']
  }
</script>

<style></style>