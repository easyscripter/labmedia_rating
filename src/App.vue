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
        <div class="main-container col-md-12">
          <div class="row">
            <div class="col-md-9">
              <easy-table :columns-name="columnsName" :data-rows="usersFound"/>
            </div>
            <div class="col-md-3">
              <div class="card-container" ref="cardContainer">
                <easy-card card-title="№1, Gwenborough" :card-data="cardData"></easy-card>
                <easy-card card-title="№3, Wisokyburgh" :card-data="cardData"></easy-card>
                <easy-card card-title="№2, McKenziehaven" :card-data="cardData"></easy-card>
                <easy-card card-title="№4, South Elvis" :card-data="cardData"></easy-card>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import EasyTable from "@/components/EasyTable";
import AlteroField from "@/components/AlteroField";
import EasySelect from "@/components/EasySelect";
import EasyCard from "@/components/EasyCard";
import * as Stickyfill from "stickyfilljs";

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
    // window.addEventListener('scroll', this.stickingPosition);
    Stickyfill.add(this.$refs.cardContainer);
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
    // stickingPosition() {
    //   const offset = this.$refs.cardContainer.getBoundingClientRect();
    //   if (window.pageYOffset > (offset.top + 150)) {
    //     this.$refs.cardContainer.style.position = 'fixed';
    //     this.$refs.cardContainer.style.top = 0;
    //   } else {
    //     this.$refs.cardContainer.style.position = 'relative';
    //     this.$refs.cardContainer.style.top = '';
    //   }
    //
    //   if (window.pageYOffset >= (offset.bottom - 300)) {
    //     this.$refs.cardContainer.style.position = 'relative';
    //     this.$refs.cardContainer.style.top = 0;
    //   }
    // }
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
    position: sticky;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    top: 0;
  }
  .main-container {
    margin-bottom: 500px;
  }
  .footer {
    width: 100%;
    height: 100px;
    border: 1px solid #000000;
  }
}
</style>
