<template>
  <v-app style="background:#fff">
    <div class="navbar">
      <v-container class="layout justify-space-between align-center">
        <div style="width:200px; height:80px; background:#ebebeb;"></div>
        <ul class="nav__list hidden-sm-and-down">
          <li v-for="(item,i) in navigationData" :key="i">
            <nuxt-link :to="item.link">
              {{item.title}}
            </nuxt-link>
          </li>
        </ul>

        <v-btn icon dark @click.stop="drawer = !drawer" color="#030409" class="hidden-md-and-up">
          <v-icon>menu</v-icon>
        </v-btn>
      </v-container>
    </div>

    <v-navigation-drawer v-model="drawer" fixed temporary class="mobile-navbar">
      <v-list class="pt-0" dense>
        <v-list-tile v-for="(item,i) in navigationData" :key="i" @click="$router.push(item.link)" color="#fff">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content style="margin-top:128px;">
      <nuxt />
    </v-content>

    <footer>
      <div class="footer__bg">
        <v-container grid-list-xl>
          <v-layout row wrap grid-list-sm>
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
  export default {
    data() {
      return {
        drawer: null,
        navigationData: [{
            title: 'Home',
            link: '/'
          },
          {
            title: 'About',
            link: '/about'
          },
          {
            title: 'News',
            link: '/news'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mobile-navbar {
    background: #030409;
  }

  .navbar {
    background: #030409;
    width: 100%;
    position: fixed;
    z-index: 3;

    .nav__list {
      list-style-type: none;
      display: flex;
      padding: 0px;

      li {
        margin-left: 20px;

        a {
          color: white;
          text-decoration: none;
          padding: 10px 0;
          font-size: 12px;
          letter-spacing: 1px;
          vertical-align: top;
          text-transform: uppercase;
          transition: 1s;

          &:hover {
            color: #f47070;
            transition: 1s;
          }
        }
      }
    }
  }

  .footer__bg {
    background: #232a35;
    font-size: 14px;
    line-height: 24px;
    padding: 68px 0 18px;

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
    background: #1c222b;
    color: #b3bbc1;

    .copy {
      font-size: 14px;
      margin-bottom: 20px;
      margin: 7px 0;
      text-align: right;
    }
  }
</style>


<style lang="scss">
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
    border-radius: 4px;
    border: 0px solid transparent;
    font-size: 12px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 10px 30px;
    transition: 0.3s;
    outline: none;

    &:hover {
      background: #232a35;
    }
  }

  * {
    font-family: 'Montserrat', sans-serif;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese');
</style>