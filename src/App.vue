<template>
  <div id="app">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <h1 class="title">Рейтинг</h1>
        </div>
        <div class="col-md-9 col-sm-12 col-xs-12">
          <div class="col-md-12 ">
            <altero-field v-model="searchByName" field-name="Найти пользователя"></altero-field>
          </div>
          <div class="col-md-12">
            <easy-select :options="filterOptions" name="Город" @select="getOption" :selected="selectedOption"></easy-select>
          </div>
        </div>
        <div class="col-md-3 col-sm-0 col-xs-0"></div>
        <div class="col-md-9 col-sm-12 col-xs-12">
          <easy-table :columns-name="columnsName" :data-rows="usersFound"/>
        </div>
        <div class="col-md-3">
          <div class="card-container">
              <easy-card card-title="№1, Gwenborough" :card-data="cardData"></easy-card>
              <easy-card card-title="№3, Wisokyburgh" :card-data="cardData"></easy-card>
              <easy-card card-title="№2, McKenziehaven" :card-data="cardData"></easy-card>
              <easy-card card-title="№4, South Elvis" :card-data="cardData"></easy-card>
          </div>
        </div>
        <div class="col-md-12 footer"></div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import EasyTable from "@/components/EasyTable";
import AlteroField from "@/components/AlteroField";
import EasySelect from "@/components/EasySelect";
import EasyCard from "@/components/EasyCard";

export default {
  name: 'App',
  components: {
    EasyTable,
    AlteroField,
    EasySelect,
    EasyCard
  },
  data() {
    return {
      columnsName: ", ZipCode , , City, Street, Suite",
      users: [],
      searchByName: '',
      selectedOption: 'Город',
      cardData: {
        position: '1',
        suite: 'Apt.556'
      }
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
  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    position:-webkit-sticky;
    position:sticky;
    top: 0;
  }
  .footer {
    width: 100%;
    height: 1200px;
    border: 1px solid #000000;
  }
}
</style>
