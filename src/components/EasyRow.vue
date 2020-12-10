<template>
  <div class="easy-row">
    <div class="easy-cell" v-for="(data, index) in cellData.split(',')" :key="index">{{data}}</div>
  </div>
</template>

<script>
export default {
  name: "EasyRow",
  props: {
    cellData: {
      type: String,
      required: true,
    },
  },

}
</script>

<style lang="scss" scoped>
    .easy-row {
      display: flex;
      align-items: center;
      font-family: $font;
      font-weight: 500;
      border-bottom: 1px solid rgba(129, 129, 129, 0.5);
      .easy-cell {
        text-align: left;
        padding-right: 15px;
        padding-left: 15px;
        &:nth-child(1), &:nth-child(6) {
          width: 10%;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          width: 25%;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(6) {
          text-align: right;
        }
        &:nth-child(1), &:nth-child(4) {
          color: rgba(129, 129, 129, 0.8);
        }
        &:nth-child(5) {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
</style>