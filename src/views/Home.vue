<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>PWA with Ion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Test v-on:get-weather="getWeatherInfo" />
      <Info v-bind:info="info"></Info>
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '../components/Test';
import Info from "@/components/Info";
export default {
  name: 'Home',
  components: {
    Test,
    Info
  },
  data() {
    return {
      info: null
    }
  },
  methods: {
    getWeatherInfo(weather) {
      this.info = weather.main
    }
  }
}
</script>
