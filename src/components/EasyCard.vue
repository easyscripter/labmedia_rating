<template>
  <div class="easy-card">
    <p class="easy-card-title">{{cardTitle}}</p>
    <div class="easy-card-body">
      <div class="position">
        <p>{{cardData.position}}</p>
        <p>место</p>
      </div>
      <div class="suite">
        <p>{{cardData.suite}}</p>
        <p>Suite</p>
      </div>
    </div>
    <div class="easy-card-footer">
      <button>Показать в списке</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EasyCard",
  props: {
    cardTitle: {
      type: String,
      default: 'Заголовок карточки'
    },
    cardData: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
    .easy-card {
      width: 164px;
      height: 136px;
      margin-top: 1px;
      padding: 10px 9px 15px 10px;
      background-color: #C882FF;
      font-family: $font;
      font-size: 13px;
      color: #ffffff;
      &-title {
        word-break: break-all;
      }
      &-body {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .position, .suite {
        width: 50%;
        word-break: break-all;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .position p, .suite p {
        margin: 2px;
      }
      .position p:nth-child(1), .suite p:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
      }

      button {
        background-color: transparent;
        outline: none;
        border: none;
        color: #ffffff;
        cursor: pointer;
      }
    }
</style>