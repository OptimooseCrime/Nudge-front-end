<template>
    <div id='Users'>

    </div>
</template>

<script>
export default {
  name: 'Users',
  
  created() {
     this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get('/echo/json/').then(function(response) {
        this.foo = 'bar';
      });
    }
  },
  data: {
    foo: 'foo'
  },

}

</script>