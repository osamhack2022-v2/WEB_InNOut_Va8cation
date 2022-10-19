<!--https://sun-22.tistory.com/m/66-->
<template>
  <div class="pa-5">
    <v-row>
      <v-col cols="12" md="6" class="mb-4">
        <v-sheet height="500">
          <v-calendar
                  ref="calendar"
                  dark
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
  <div class="pa-5">
    <v-row>
        <v-col cols="12" md="6" class="mb-4">
            <v-sheet height="500">
                <v-calendar
                        ref="calendar"
                        dark
                ></v-calendar>
            </v-sheet>
        </v-col>
    </v-row>
</div>
</template>


<script>
export default {
  name: "OutStatus",
  data() {
  }
};
</script>


<style scoped lang="scss">
</style>