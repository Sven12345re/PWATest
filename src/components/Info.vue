<template>
  <ion-card v-if="info">
    <ion-card-header>
      <ion-card-subtitle>
        {{info}}
      </ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script>
export default {
  name: "Info",
  props: ['info']
}
</script>

<style scoped>

</style>