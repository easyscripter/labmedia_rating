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
      width: 100%;
      height: 134px;
      margin-top: 1px;
      padding: 10px 18px 15px 18px;
      background-color: #C882FF;
      font-family: $font;
      font-size: 13px;
      text-align: left;
      color: #ffffff;
      &-title {
        margin-left: 8px;
        word-break: break-all;
        font-weight: normal;
        font-size: 13px;
        color: #ffffff;
      }
      &-body {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .position, .suite {
        word-break: break-all;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .position p, .suite p {
        margin: 3px;
      }
      .position p:nth-child(1), .suite p:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
      }
      .position p:nth-child(2), .suite p:nth-child(2) {
        color: rgba(255, 255, 255, 0.65);
      }

      button {
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        color: #ffffff;
        cursor: pointer;
        text-align: left;
        margin-left: 3px;
      }
    }
</style>