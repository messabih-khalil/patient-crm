<script>
// ** imports

import { mapGetters } from "vuex";

export default {
  // computed
  computed: {
    ...mapGetters({ client: "clientDetailStore/getClient" }),
  },
};
</script>

<template>
  <div class="header">
    <img src="../../assets/images/avatar.png" alt="" />
    <div>
      <p>{{ client.name }}</p>
      <span>{{ client.phone }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/global.scss";

.header {
  padding: $space-6 $space-5;
  // background-color: $colorFive;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 80px;
    margin-right: 2rem;
  }
  div {
    p {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: $fontColor;
    }

    span {
      color: grey;
      font-size: $text-m;
    }
  }
}
</style>
