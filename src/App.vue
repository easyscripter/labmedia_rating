<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="title-container col-lg-12 col-xs-12">
            <h1 class="title-container_title">Рейтинг</h1>
        </div>
        <div class="form-container-group col-md-8  col-lg-8 col-xs-12">
            <altero-field
              v-model="searchByName"
              field-name="Найти пользователя"
            ></altero-field>
        </div>
        <div class="form-container-group col-md-5 col-lg-5 col-xs-12">
            <easy-select
              :options="filterOptions"
              name="Город"
              @select="getOption"
              :selected="selectedOption"
            ></easy-select>
        </div>
        <easy-table
          class="content-container_table-container col-lg-8 col-md-8 col-xs-12"
          :columns-name="columnsName"
          :data-rows="usersFound"
        />
        <div
          ref="cardContainer"
          class="content-container_card-container firstMd co-lg-4 col-md-4 col-xs-12"
        >
          <easy-card
            card-title="№1, Gwenborough"
            :card-data="cardData"
          ></easy-card>
          <easy-card
            card-title="№2, McKenziehaven"
            :card-data="cardData"
          ></easy-card>
          <easy-card
            card-title="№3, Wisokyburgh"
            :card-data="cardData"
          ></easy-card>
          <easy-card
            card-title="№4, South Elvis"
            :card-data="cardData"
          ></easy-card>
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
  name: "App",
  components: {
    EasyTable,
    AlteroField,
    EasySelect,
    EasyCard,
  },
  data() {
    return {
      columnsName: ", ZipCode , , City, Street, Suite",
      users: [],
      searchByName: "",
      selectedOption: "Город",
      cardData: {
        position: "1",
        suite: "Suite 879",
      },
    };
  },
  computed: {
    filterOptions() {
      return this.getUnique(
        this.users.map((user, index) => {
          return { name: user.address.city, value: index };
        })
      );
    },
    filteredUsers() {
      return this.users.filter((user) => {
        if (this.selectedOption === "Город") return true;
        else
          return user.address.city
            .toLowerCase()
            .includes(this.selectedOption.toLowerCase().trim());
      });
    },
    usersFound() {
      return this.filteredUsers.filter((user) => {
        if (this.selectedOption === "Город") return true;
        else
          return user.name
            .toLowerCase()
            .includes(this.searchByName.toLowerCase().trim());
      });
    },
  },
  mounted() {
    this.fetchUsers();
    Stickyfill.add(this.$refs.cardContainer);
  },
  methods: {
    async fetchUsers() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => console.error(error));
    },
    getOption(option) {
      if (option === "Очистить") {
        this.selectedOption = "Город";
      } else {
        this.selectedOption = option.name;
      }
    },
    getUnique(arr) {
      return Array.from(new Set(arr));
    },
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title-container {
    &_title {
      font-family: $font;
      font-size: 50px;
      text-align: left;
      color: #000000;
    }
  }
  .form-container {
    margin-bottom: 50px;
  }
  .content-container_card-container {
    position: sticky;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    top: 0;
  }
}
@media screen and (max-width: 767px) {
  .content-container_card-container {
    position: relative !important;
  }
}
</style>
