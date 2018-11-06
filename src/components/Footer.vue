<template>
    <div id='Footer'>
        <footer>{{ message }}</footer>
    </div>
</template>


<script>
    export default{
        name:'Footer',
        data(){
            return{
                message:'Copyright "Nudge Focus, Inc" July 2018'
            }
        }
    }   
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #Footer{
        font-family: 'Raleway', sans-serif;
        background-color: #6f42c1;
        
    }
</style>
