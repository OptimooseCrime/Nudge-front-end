<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >


      <!-- Slides with image only -->
      <b-carousel-slide text ="The gFam">    
        <img slot="img" class="d-block img-fluid w-100" 
             src="" alt="image slot">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <b-carousel-slide text ="I thought I was going to be an astronaught">    
        <img slot="img" class="d-block img-fluid w-100" 
             src="" alt="image slot">
      </b-carousel-slide>

            <!-- Slides with img slot -->
      <b-carousel-slide text="Shredding">    
        <img slot="img" class="d-block img-fluid w-100" 
             src="" alt="image slot" img-height="300px">
      </b-carousel-slide>

    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

  </div>
</template>

<style>

</style>


<script>
export default {
    name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->