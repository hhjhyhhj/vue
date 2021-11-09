<template>
  <div>
    <div class="todo-container">
          <div class="todo-wrap">
            <Header :addTodo="addTodo"/>
            <List :todos="todos" :deleteTodo="deleteTodo"/>
            <Footer :todos="todos"/>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { saveTodos , readTodos } from "./utils/storageUtils";
 export default{//配置对象
  data(){
    return {
        todos:[
          {id:1,title:'a',completed:false},
          {id:2,title:'b',completed:true},
          {id:3,title:'c',completed:false},
        ]
    }
  },
  //声明周期
  mounted(){
    setTimeout(() => {
        //读取local保存的todos，更新todos
        this.todos = readTodos()
    }, 1000);
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    }
  },
  watch:{
    todos:{
      deep:true,//深度监视(本身和内部所有层次的数据)
      //将todo保存到local（以json的形式）
      hanlder(value){
        // localStorage.setItem('todos_key',JSON.stringify(value))
        saveTodos(value)
      }
    }
  },
  components:{
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>