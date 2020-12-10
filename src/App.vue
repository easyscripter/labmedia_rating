<template>
  <div id="app">
      <div class="row">
        <div class="col-md-12">
          <h1 class="title">Рейтинг</h1>
        </div>
        <div class="col-md-9">
          <div class="col-md-12">
            <altero-field v-model="searchByName" field-name="Найти пользователя"></altero-field>
          </div>
          <div class="col-md-12">
            <easy-select :options="filterOptions" name="Город" @select="getOption" :selected="selectedOption"></easy-select>
          </div>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <easy-table :columns-name="columnsName" :data-rows="usersFound"/>
        </div>
        <div class="col-md-3"></div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import EasyTable from "@/components/EasyTable";
import AlteroField from "@/components/AlteroField";
import EasySelect from "@/components/EasySelect";

export default {
  name: 'App',
  components: {
    EasyTable,
    AlteroField,
    EasySelect
  },
  data() {
    return {
      columnsName: ", ZipCode , , City, Street, Suite",
      users: [],
      searchByName: '',
      selectedOption: 'Город',
    }
  },
  computed: {
    filterOptions() {
      return this.getUnique(this.users.map((user, index) => {
        return {name: user.address.city, value: index };
      }));
    },
    filteredUsers() {
      return this.users.filter(user =>{
            if (this.selectedOption === 'Город') return true;
            else return  user.address.city.toLowerCase().includes(this.selectedOption.toLowerCase().trim());
      });
    },
    usersFound() {
      return this.filteredUsers.filter(user => {
        if (this.selectedOption === 'Город') return true
        else return  user.name.toLowerCase().includes(this.searchByName.toLowerCase().trim());
      });
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => console.error(error));
    },
    getOption(option) {
      if (option === 'Очистить') {
        this.selectedOption = 'Город';
      } else {
        this.selectedOption = option.name;

      }
    },
    getUnique(arr) {
      return Array.from(new Set(arr));
    },
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title {
    font-family: $font;
    font-size: 50px;
    text-align: left;
    color: #000000;
  }
}
</style>
