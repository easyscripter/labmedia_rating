<template>
  <div class="easy-select">
    <p class="easy-select-name" @click="isVisible = !isVisible">{{selected}}</p>
    <transition name="fade">
      <div v-if="isVisible" class="easy-select-options">
        <p @click="selectOption(option)" class="easy-select-option" v-for="option in options" :key="option.value">
          {{option.name}}
        </p>
        <p @click="selectOption('Очистить')" class="easy-select-option">
          Очистить
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "EasySelect",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String
    }
  },
  data() {
    return {
      isVisible: false,
      isClear: false,
    }
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.isVisible = false;
    },
    hideSelect() {
      this.isVisible = false;
    },
  }
}
</script>

<style lang="scss" scoped>
  .easy-select {
    position: relative;
    width: 100%;
    max-width: 1200px;
    font-family: $font;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    color: gray;
    &-name {
      position: relative;
      width: 100%;
      margin: 0;
      padding-bottom: 10px;
      text-align: left;
      border: none;
      border-bottom: 2px solid #8F9399;
      z-index: 6;
      &:after {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        right: 15px;
        top: 0;
        border-top: 2px solid #000000;
        border-right: 2px solid #000000;
        transform: rotate(135deg);

      }
    }
    &-options {
      position: absolute;
      left: 0;
      top: 40px;
      width: 100%;
      text-align: left;
      z-index: 4;
      -webkit-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
      box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
      background-color: #fff;
    }
    &-option {
      padding: 5px;
      &:hover {
        background-color: rgba(34, 60, 80, 0.2);
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>