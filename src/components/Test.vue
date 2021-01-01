<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>City:</ion-label>
          <ion-input
              :value="city"
              @input="city = $event.target.value"
              placeholder="Enter a City (London,uk)"
              name="city"
          ></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button
            type="submit"
            color="primary"
            expand="block"
            @submit.prevent="onSubmit()"
        >
          Login
        </ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
import axios from 'axios';
export default {
  name: "Test",
  data() {
    return {
      city:""
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios
          .get( 'https://community-open-weather-map.p.rapidapi.com/weather?q=' + this.city, {
            headers: {
              'x-rapidapi-key':'2d4247ecd1mshffe17d3679a3e93p158fcajsnae21a848c26e'
            }
          })
          .then(response => {
            var result = response.data;
            this.$emit("get-weather", result)
            this.city = ''
          }).catch(error => {
            console.log(error)
            this.city = ''
            this.showAlert();
      })
    },
    showAlert() {
      return this.$ionic.alertController.create({
        header: "Enter City",
        message: "Please enter a valid City",
        buttons: ["OK"]
      }).then( a => a.present())
    }
  }
}
</script>
