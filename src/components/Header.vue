<template>
    <div id="Header">
        <b-col></b-col>
        <b-col class='poop'>
            <img src="../assets/logo-web-04.png" width="300px"/>
         
        </b-col>
        <b-col></b-col>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css?family=Raleway');
     
    .poop {
        padding: 10px;
        font-family: 'Raleway', sans-serif;
    }

    img {
margin: 5px;
    }

</style>
