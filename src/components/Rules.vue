<template>
    <div id='Rules'>
        <h1>{{wip}}</h1>
    </div>
</template>

<script>
    export default {
        name:'Rules',

        data(){
            return{
                hdr: 'Wallet',
                wip: 'Work In Progress',
            };
        },
    };
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #Rules{
        font-family: 'Raleway', sans-serif;  
        /* position:fixed; */
        width:inherit;
        display: flex;
        border-radius: 6px;
        color: #7C00FF;
        padding: 10px;
        /* margin: 0 auto 0 auto; */
        justify-content: center;
    }

</style>

