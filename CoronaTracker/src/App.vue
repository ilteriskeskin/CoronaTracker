<template>
  <div id="app">
    <div class="container">
      <h1>
        Number of Patients with Corona
        <img src="./assets/corona_image.png" alt="corona_image" width="200" height="102">
      </h1>
      <label>Country: </label>
      <v-select :options="options" v-model="country"></v-select>
      <br>
      <button class="btn btn-danger submit-button" @click="getData" v-if="country">Submit</button>
      <div>
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Confirmed</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="i in recovered.length">
            <th scope="row">{{ date[i] }}</th>
            <td>{{ recovered[i] }}</td>
            <td>{{ deaths[i] }}</td>
            <td>{{ confirmed[i] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import "vue-select/dist/vue-select.css";

  export default {
    name: 'app',
    data() {
      return {
        date: [],
        confirmed: [],
        deaths: [],
        recovered: [],
        country: "",
        options: [
          "Afghanistan",
          "Åland Islands",
          "Albania",
          "Algeria",
          "American Samoa",
          "AndorrA",
          "Angola",
          "Anguilla",
          "Antarctica",
          "Antigua and Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia and Herzegovina",
          "Botswana",
          "Bouvet Island",
          "Brazil",
          "British Indian Ocean Territory",
          "Brunei Darussalam",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central African Republic",
          "Chad",
          "Chile",
          "China",
          "Christmas Island",
          "Cocos (Keeling) Islands",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo, The Democratic Republic of the",
          "Cook Islands",
          "Costa Rica",
          "Cote D'Ivoire",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands (Malvinas)",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Guiana",
          "French Polynesia",
          "French Southern Territories",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guadeloupe",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Heard Island and Mcdonald Islands",
          "Holy See (Vatican City State)",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran, Islamic Republic Of",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kiribati",
          "Korea, Democratic People'S Republic of",
          "Korea, Republic of",
          "Kuwait",
          "Kyrgyzstan",
          "Lao People'S Democratic Republic",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libyan Arab Jamahiriya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macao",
          "Macedonia, The Former Yugoslav Republic of",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Marshall Islands",
          "Martinique",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Mexico",
          "Micronesia, Federated States of",
          "Moldova, Republic of",
          "Monaco",
          "Mongolia",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar",
          "Namibia",
          "Nauru",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Niue",
          "Norfolk Island",
          "Northern Mariana Islands",
          "Norway",
          "Oman",
          "Pakistan",
          "Palau",
          "Palestinian Territory, Occupied",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Pitcairn",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russian Federation",
          "RWANDA",
          "Saint Helena",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Pierre and Miquelon",
          "Saint Vincent and the Grenadines",
          "Samoa",
          "San Marino",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia and Montenegro",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Georgia and the South Sandwich Islands",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Svalbard and Jan Mayen",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syrian Arab Republic",
          "Taiwan, Province of China",
          "Tajikistan",
          "Tanzania, United Republic of",
          "Thailand",
          "Timor-Leste",
          "Togo",
          "Tokelau",
          "Tonga",
          "Trinidad and Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks and Caicos Islands",
          "Tuvalu",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "United States Minor Outlying Islands",
          "Uruguay",
          "Uzbekistan",
          "Vanuatu",
          "Venezuela",
          "Viet Nam",
          "Virgin Islands, British",
          "Virgin Islands, U.S.",
          "Wallis and Futuna",
          "Western Sahara",
          "Yemen",
          "Zambia",
          "Zimbabwe"
        ]
      }
    },

    // watch: {
    //   country: function () {
    //     this.getData();
    //   }
    // },

    methods: {
      getCountries() {
        countries = ""
      }
      ,
      getData() {
        this.deaths = [];
        this.confirmed = [];
        this.date = [];
        this.recovered = [];

        fetch("https://pomber.github.io/covid19/timeseries.json")
          .then(response => response.json())
          .then(data => {
            for (let i = 0; i <= data[this.country].length; i++) {
              this.deaths.push(data[this.country][i]['deaths']);
              this.confirmed.push(data[this.country][i]['confirmed']);
              this.recovered.push(data[this.country][i]['recovered']);
              this.date.push(data[this.country][i]['date']);
            }
          })
          .catch(error => {
            console.log('Waiting...')
          });

        // for (let i = 0; i <= this.deaths.length; i++) {
        //   this.totalDeaths += this.deaths[i];
        //   console.log(this.deaths[i]);
        // }
      }
    }
  }
</script>

<style>

  #app {
    margin-top: 7%;
  }

  .submit-button {
    margin-bottom: 1%;
  }
</style>
