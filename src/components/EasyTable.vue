<template>
  <div class="easy-table">
    <div class="easy-table-header">
      <p class="easy-table-header-row" v-for="(name, index) in columnsNameArray" :key="index">{{name}}</p>
    </div>
    <div class="easy-table-body">
      <easy-row v-for="(user, index) in dataRows" :key="index" :cell-data="`${user.id},${user.address.zipcode},${user.name},
      ${user.address.city}, ${user.address.street}, ${user.address.suite}`"></easy-row>
    </div>
  </div>
</template>

<script>
'use strict'
import EasyRow from "@/components/EasyRow";

export default {
  name: "EasyTable",
  components: {
    EasyRow
  },
  props: {
    columnsName: {
      required: true,
      type: String,
    },
    dataRows: {
      type: Array,
      required: true,
    }
  },
  computed: {
    columnsNameArray: function () {
      return this.columnsName.split(",")
    },
  },
}
</script>

<style lang="scss" scoped>
    .easy-table {
      width: 100%;
      margin-top: 18px;
      font-family: $font;
      font-weight: 500;
      font-size: 0.8em;
      &-header {
        display: flex;
        border-bottom: 1px solid rgba(129, 129, 129, 0.5);
        &-row {
          text-align: left;
          color: rgba(129, 129, 129, 0.8);
          &:nth-child(1) {
            width: 28px;
            padding-top: 20px;
          }
          &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
            width: 340px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          &:nth-child(6) {
            width: 70px;
            padding-top: 20px;
            padding-right: 0;
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .easy-table {
        &-header {
          display: none;
        }
      }
    }
</style>