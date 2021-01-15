<template>
  <div class="hello">
    <h2>Search Through Movies By Name</h2>
    <div id="app-instasearch">
      <div class="input-container">
        <!-- <input type="text" placeholder="Type a name" v-model="searchString" @change="getAxios" /> -->
        <input type="text" placeholder="Type a name" v-model="searchString" />
        <button @click="getAxios">Find Movies</button>
      </div>
      <!-- This is commented out so that it can be tested in the future for input box. -->
      <!-- <h1>{{ searchString }}</h1> -->
    </div>

    <div v-for="mo in Movies" :key="mo.movie_id">
      ---------------------------------------------------
      <h4>Movie Id: {{ mo.movie_id }}</h4>
      <h2>Title: {{ mo.title }}</h2>
      <img v-bind:src="mo.poster_image_url" class="image" />
      <p>Popularity Summary: {{ mo.popularity_summary }}</p>
      ---------------------------------------------------
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  props: {
    msg: String
  },
  methods: {
    getAxios: function() {
      return axios
        .get(`http://localhost:5000/api/getMovie/${this.searchString}`)
        .then(response => {
          this.Movies = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      Movies: [
        {
          movie_id: 174435,
          title: "Hi'–Neighbor!",
          poster_image_url:
            "https://image.tmdb.org/t/p/w500/oSHQqpPJh3AokkS7qFK23fkQVxq.jpg",
          popularity_summary: "0.673 out of 1"
        }
      ],
      searchString: ""
    };
  },
  computed: {
    search_text: function() {
      return this.searchString;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  width: 100px;
}
.input-container {
  border-radius: 5px;
  background: #677482;
  padding: 10px;
}
.input-container input {
  border: none;
  /* background: transparent; */
  /* color: white; */
  padding: 6px 15px;
  font-size: 18px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1; /* Firefox */
}

</style>
