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
        align-self: center;
        &:nth-child(1) {
          width: 30px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          width: 350px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(6) {
          width: 63px;
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
    @media screen and (max-width: 767px) {
      .easy-row {
        flex-direction: column;
        align-items: stretch;
        padding-bottom: 18px;
      }
      .easy-cell {
        &:nth-child(1) {
          width: 18px !important;
          padding-bottom: 0;
          margin-bottom: -35px;
          align-self: flex-start;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          width: 230px !important;
          padding-top: 0 !important;
          padding-bottom: 8px !important;
          align-self: center;
        }
        &:nth-child(6) {
          width: 90px !important;
          margin-top: -23px;
          align-self: flex-end;
          text-align: right;
        }
      }
    }
</style>