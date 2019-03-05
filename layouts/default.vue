<template>
  <v-app>
    <div class="navbar">

    </div>

    <v-content>
      <nuxt />
    </v-content>

  </v-app>
</template>

<script>

</script>

<style lang="scss">
.navbar{
      background: #030409;
      height: 70px;
      width: 100%;
      position: fixed;
      z-index: 99;
}
body{
  background: #fff;
}
  .std__title {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    .subtitle {
      font-size: 14px;
      line-height: 1.2307;
      font-weight: 600;
      color: #f47070;
      font-style: normal;
      letter-spacing: 2.6px;
    }
  }

  .std__text {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
  }

  .text_grey {
    color: #9f9f9f;
  }

  .text__black {
    color: #232a35;
    font-weight: 700;
  }

  .std__button {
    background: #f47070;
    text-transform: uppercase;
    color: #ffffff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 0px solid transparent;
    font-size: 12px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;

    &:hover {
      background: #232a35;
    }
  }
</style>