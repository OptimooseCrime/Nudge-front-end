<template>
          
    <div id='TheDash'>
        

        <div class="container">
            <h1> {{ pageTitle }} </h1>
            <h3>{{ greeting }}</h3>
            <h2>Kid(s) currently managed by you</h2>
            <p>{{ found }}</p>
            <b-card>
                <h3>
                    <a href="">Stan Marsh</a>
                </h3> 
                <table style="diplay: inline-block;">
                    <tbody>
                        <tr>
                            <th>ID:</th>
                        </tr>
                        <tr>
                            <td>10054</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>Test Course</th>
                        </tr>
                        <tr>
                            <td>82.5/100</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>Nudge Introductory Course</th>
                        </tr>
                        <tr>
                            <td>0/100</td>
                        </tr>
                    </tbody>
                </table>
            </b-card>
            <!-- image and centered small text -->
            <h2> Create a Kid Account</h2>
            <form action="">
                <input type="text" name="email" placeholder="Email">
                <p>{{info1}}</p>
                <input type="password" name="pw" placeholder="New Password">
                <input type="password" name="pw_confirm" placeholder="Confirm Password">
                <br>
                <button>Submit</button>
            </form>
            <Carousel/>
        </div>
    </div>

</template>

<script>
    import Carousel from '@/components/Carousel'
    export default {
        name:'TheDash',
        components:{
            Carousel
        },  
        data() {
            return{
                pageTitle: 'DASHBOARD',
                greeting: 'Welcome back,',
                found: 'We have found your kids!',
                info1: 'This email is for sign-in purposes only. We will never email your child directly for any reason.'
                };
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #TheDash{
         font-family: 'Raleway', sans-serif;

        /* position:fixed; */
    width:inherit;
    text-shadow: 0 1px black;
    }
</style>
