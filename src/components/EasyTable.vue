<template>
  <div class="easy-table">
    <div class="easy-table-header">
      <p
        class="easy-table-header-row"
        v-for="(name, index) in columnsNameArray"
        :key="index"
      >
        {{ name }}
      </p>
    </div>
    <div class="easy-table-body">
      <easy-row
        v-for="(user, index) in dataRows"
        :key="index"
        :cell-data="
          `${user.id},${user.address.zipcode},${user.name},
      ${user.address.city}, ${user.address.street}, ${user.address.suite}`
        "
      ></easy-row>
      <div class="easy-static-row">
        <div class="easy-static-cell-first">
          11
        </div>
        <div class="easy-static-cell">
          <div class="easy-static-children-row">
            <div class="easy-static-cell"></div>
            <div class="easy-static-cell">
              76495-2509
            </div>
            <div class="easy-static-cell">
              Oleg Petrov
            </div>
            <div class="easy-static-cell">
              Alabama
            </div>
            <div class="easy-static-cell">
              Nigger Street
            </div>
            <div class="easy-static-cell">
              Hata35
            </div>
          </div>
          <div class="easy-static-children-row">
            <div class="easy-static-cell"></div>
            <div class="easy-static-cell">
              31245
            </div>
            <div class="easy-static-cell">
              Grisha Ivanov
            </div>
            <div class="easy-static-cell">
              Kanzas City
            </div>
            <div class="easy-static-cell">
              Alhambra Drive
            </div>
            <div class="easy-static-cell">
              Suite71
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="easy-static-cell">
          <div class="easy-static-cell-children">76495-2509</div>
          <div class="easy-static-cell-children">31245</div>
        </div>
        <div class="easy-static-cell">
          <div class="easy-static-cell-children">Oleg Petrov</div>
          <div class="easy-static-cell-children">Grisha Ivanov</div>
        </div>
        <div class="easy-static-cell">
          <div class="easy-static-cell-children">Alabama</div>
          <div class="easy-static-cell-children">Kanzas City</div>
        </div>
        <div class="easy-static-cell">
          <div class="easy-static-cell-children">Nigger Street</div>
          <div class="easy-static-cell-children">Alhambra Drive</div>
        </div>
        <div class="easy-static-cell">
          <div class="easy-static-cell-children">Hata35</div>
          <div class="easy-static-cell-children">Suite71</div>
        </div>
      </div> -->
      <button class="easy-table-body_show-more-btn">Показать еще</button>
    </div>
  </div>
</template>

<script>
"use strict";
import EasyRow from "@/components/EasyRow";

export default {
  name: "EasyTable",
  components: {
    EasyRow,
  },
  props: {
    columnsName: {
      required: true,
      type: String,
    },
    dataRows: {
      type: Array,
      required: true,
    },
  },
  computed: {
    columnsNameArray: function() {
      return this.columnsName.split(",");
    },
  },
};
</script>

<style lang="scss" scoped>
.easy-table {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 20px;
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
        width: 40px;
        padding-top: 20px;
      }
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        width: 340px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      &:nth-child(6) {
        width: 68px;
        padding-top: 20px;
      }
    }
  }
  &-body {
    &_show-more-btn {
      margin-top: 24px;
      font-size: 22px;
      font-weight: normal;
      color: rgba(110, 110, 110, 0.65);
      border: none;
      border-bottom: 1px dashed rgba(110, 110, 110, 0.65);
      outline: none;
    }
    .easy-static-row {
      display: flex;
      align-items: center;
      font-family: $font;
      font-weight: 500;
      border-bottom: 1px solid rgba(129, 129, 129, 0.5);
      .easy-static-cell {
        width: 99%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &-first {
          width: 2%;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
      .easy-static-children-row {
        display: flex;
        align-items: center;
        font-family: $font;
        font-weight: 500;
        width: inherit;
        border-bottom: 1px solid rgba(129, 129, 129, 0.5);
        .easy-static-cell:nth-child(1) {
          width: 10px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .easy-static-cell:nth-child(2),
        .easy-static-cell:nth-child(3),
        .easy-static-cell:nth-child(4),
        .easy-static-cell:nth-child(5) {
          width: 350x;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .easy-static-cell:nth-child(6) {
          text-align: right;
          width: 68px;
          padding-top: 20px;
          padding-bottom: 20px;
          text-align: right;
        }
        .easy-static-cell:nth-child(4) {
          color: rgba(129, 129, 129, 0.8);
        }
        .easy-static-cell:nth-child(5) {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .easy-table {
    &-header {
        display: none !important;
    }
    .easy-static-children-row {
      flex-direction: column;
      align-items: stretch;
      
      .easy-static-cell {
        width: 99%;
        display: flex;
        flex-direction: column;

        &-first {
          padding-bottom: 0;
          margin-bottom: -35px;
          align-self: flex-start;
        }
      }
      .easy-static-cell:nth-child(1) {
        width: 18px !important;
        margin-bottom: -20px;
      }
      .easy-static-cell:nth-child(2),
      .easy-static-cell:nth-child(3),
      .easy-static-cell:nth-child(4),
      .easy-static-cell:nth-child(5) {
        width: 320px;
        padding-top: 0 !important;
        padding-bottom: 8px !important;
      }

      .easy-static-cell:nth-child(6) {
        width: 50px !important;
        align-self: flex-end;
        
      }
    }
  }
}
</style>
