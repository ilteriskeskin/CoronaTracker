<template>
  <div id="app">
    <label>Your Country: </label>
    <input type="text" v-model="country">
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        date: [],
        confirmed: [],
        deaths: [],
        recovered: [],
        countryData: [],
        country: "",
      }
    },
    created() {
      this.getData();
    },

    watch: {
      country: function () {
        this.getData();
      }
    },

    methods: {
      getData() {
        fetch("https://pomber.github.io/covid19/timeseries.json")
          .then(response => response.json())
          .then(data => {
            data[this.country].forEach(({date, confirmed, recovered, deaths}) =>
              console.log((`${date} active cases: ${confirmed - recovered - deaths}`))
            )
          })
        .catch(error => {
          console.log('Waiting...')
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
    margin-right: 20%;
    margin-left: 20%;
  }
</style>
