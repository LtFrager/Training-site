<template>
  <v-app>
    <div class="navbar">
      <ul>
        <li>
          <nuxt-link to="/">
            home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            about
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/news">
            news
          </nuxt-link>
        </li>
      </ul>
    </div>

    <v-content style="margin-top:70px;">
      <nuxt />
    </v-content>

    <footer>
      <div class="footer__bg">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 md3>
              <h2 class="footer__title">
                ABOUT OUR CLUB
              </h2>
              <p class="footer__text">
                Sportek is a universal gym where everyone becomes an athlete. We work for you to have better shape and
                stronger health!
              </p>
            </v-flex>
            <v-flex xs12 sm6 md3>
              <h2 class="footer__title">
                CONTACT US
              </h2>

              <p class="footer__text">
                4096 N Highland St, Arlington VA 32101, USA<br>
                school@company.com<br>
                800 1234 56 78
              </p>
            </v-flex>
            <v-flex>
              <h2 class="footer__title text-xs-center">
                map placeholder
              </h2>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="footer__bottom">
        <v-container>
          <p class="copy">
            © 2019 Sportek. All rights reserved.
          </p>
        </v-container>
      </div>
    </footer>

  </v-app>
</template>

<script>

</script>

<style lang="scss">
  .footer__bg {
    background: #232a35;
    font-size: 14px;
    line-height: 24px;
    padding: 94px 0 29px;

    .footer__title {
      font-size: 16px;
      line-height: 1.2307;
      font-weight: 400;
      color: #b3bbc1;
      font-style: normal;
      letter-spacing: 3px;
      margin-bottom: 26px;
    }

    .footer__text {
      font-size: 14px;
      line-height: 24px;
      color: #b3bbc1;
    }
  }

  .footer__bottom {
    padding: 33px 0 18px;
    background: #1c222b;
    color: #b3bbc1;

    .copy {
      font-size: 14px;
      margin-bottom: 20px;
      margin-top: 7px;
      text-align: right;
    }
  }

  .navbar {
    background: #030409;
    height: 70px;
    width: 100%;
    position: fixed;
    z-index: 99;
  }

  body {
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

  * {
    font-family: 'Montserrat', sans-serif;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese');
</style>