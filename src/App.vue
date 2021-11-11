<template>
  <div>
    <div>click {{count}} times,count is {{evenOrOdd}}</div>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='incrementIfOdd'>increment if odd</button>
    <button @click='incrementAsync'>increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">

/*
store对象
  1.state：包含所有的state数据的对象
  2.getters：包含所有getter计算属性的对象
  3.dispatch(actionName,data)
  3.commit(mutationName,data)

*/ 
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    data(){
      return {
      }
    },
    computed:{
    //  count(){
    //    return this.$store.state.count
    //  },
    //  evenOrOdd(){
    //    return this.$store.getters.evenOrOdd
    //  }
    //mapState(['count']) ===> 对象
    ...mapState(['count']), // 相当于count(){    return this.$store.state['count']},
    ...mapGetters(['evenOrOdd']) // 相当于evenOrOdd(){ return this.$store.getters['evenOrOdd']}
    },

    mounted(){
      
    },
    methods:{
      // increment(){
      //   this.$store.commit("INCREMENT")
      // },
      // decrement(){
      //   this.$store.commit("DECREMENT")
      // },
      ...mapMutations({
        increment:'INCREMENT',
        decrement:'DECREMENT',
      }),
     
      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd')
      //   },
      // incrementAsync(){
      //    this.$store.dispatch('incrementAsync')
      // }},
      ...mapActions(['incrementIfOdd','incrementAsync']),
    
    components:{
    }
  }}


</script>

<style scoped>

 
</style>
