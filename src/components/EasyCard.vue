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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1px;
      padding: 18px 16px;
      background-color: #C882FF;
      font-family: $font;
      font-size: 13px;
      text-align: left;
      color: #ffffff;
      &-title {
        font-weight: normal;
        font-size: 13px;
        color: #ffffff;
      }
      &-body {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .position p, .suite p {
        margin: 4px;
        white-space: nowrap;
      }
      .position p:nth-child(1), .suite p:nth-child(1) {
        font-size: 18px;
        font-weight: 600;
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
        border-bottom: 1px dashed #ffffff;
        white-space: nowrap;
      }
    }
    @media screen and (max-width: 767px) {
      .easy-card {
        padding-top: 0;
        padding-bottom: 13px;
        position: relative;
        &-title {
          position: absolute;
          bottom: 57px;
        }
        &-body {
          margin-top: 0;
          flex-direction: row-reverse;
          .position {
            position: relative;
            top: 22px;
            p:nth-child(1) {
              font-size: 22px;
              text-align: right;
            }
          }
          .suite {
              display: none;
          }
        }
        &-footer {
          button {
            position: relative;
            bottom: 10px;
          }
        }
      }
      
    }
</style>