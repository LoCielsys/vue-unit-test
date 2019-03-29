<template>
  <div>
    <h3>Counter.vue</h3>
    <span class="num">{{ count }}</span>
    <button @click="increment">自增</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    // 自增
    increment () {
      this.count++
    },
    // 异步自增
    async incrementAsync () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.count++
          resolve()
        }, 1000)
      })
    }
  }
}
</script>
