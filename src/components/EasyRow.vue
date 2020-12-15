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
          width: 28px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          width: 340px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        &:nth-child(6) {
          width: 70px;
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
          width: 20px !important;
          padding-top: 20px;
          padding-bottom: 20px;
          align-self: flex-start;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
          width: 230px !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
          align-self: center;
        }
        &:nth-child(6) {
          width: 90px !important;
          margin-top: -20px;
          align-self: flex-end;
          text-align: right;
        }
      }
    }
</style>