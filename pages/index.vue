<template>
  <div>

    <main-slider :data="topSliderData" />

    <div class="promo-cards__block">
      <promo-cards :data="promoData" />
    </div>

    <v-parallax height="570" src="/img/index/index1.jpg">
      <v-container>
        <v-layout row justify-end align-center fill-height>
          <v-flex xs12 sm8 md6>
            <h2 class="std__title text__black">
              <span class="subtitle">PROFESSIONAL COACHES</span>
              YOUR TRAINING
            </h2>
            <p class="text__black std__text">My Name is Ben. I will introduce you to our fitness club with a free
              personal training.</p>
            <p class="text_grey std__text">There’s nothing better than having your very own coach and mentor. Need an
              extra push? Our personal trainers are certified experts in exercise physiology, anatomy, training
              program development, exercise application and fitness assessments. They work for you no matter your age
              or fitness level. </p>
            <button class="std__button">choose your trainer</button>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>

    <v-parallax height="auto" src="/img/index/index2.jpg">
      <v-container>
        <div class="our-skils__block">
          <v-layout row column justify-center align-center fill-height>

            <h2 class="std__title">CHECK OUR SKILLS</h2>

            <p class="text_grey std__text">
              We’ve spent over 10 years defining fitness and now we’re reinventing it. Through personalization and
              innovation, we’ve evolved so that you can transform your life. </p>
            <v-layout row wrap style="width: 100%;">
              <v-flex xs12 sm6 md3 class="layout justify-center" v-for="(item,i) in ourSkillsData" :key="i">
                <div>
                  <div class="our-skils__skill">
                    {{item.skillNum}}%
                  </div>
                  <div class="std__title">
                    <span class="subtitle">{{item.skillName}}</span>
                  </div>
                </div>
              </v-flex>
            </v-layout>

          </v-layout>
        </div>
      </v-container>
    </v-parallax>

    <v-parallax height="auto" src="/img/index/index3.jpg">
      <v-container>
        <v-layout row align-center fill-height>
          <v-flex xs12 sm6 md5>
            <promo-list :data="PromoListData" :titleData="PromoListTitle" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>

    <v-parallax height="540" src="/img/index/index4.jpg">
      <v-container>
        <v-layout column justify-center align-center fill-height>
          <h2 class="promo-title__block">
            HEALTH POWER HAPPINESS
            <span>YOUR ESSENTIAL APPROACH TO WORKOUTS</span>
          </h2>

          <button class="std__button">read more</button>
        </v-layout>
      </v-container>
    </v-parallax>


  </div>
</template>
<script>
  import MainSlider from '@/components/main/MainSlider'
  import PromoCards from '@/components/main/PromoCards'
  import PromoList from '@/components/PromoList'
  export default {
    components: {
      MainSlider,
      PromoCards,
      PromoList
    },
    data() {
      return {
        topSliderData: [{
            img: '/img/index/slider/slide-1.jpg',
            orangeTitle: 'Challenge',
            title: 'yourself',
            text: 'Cum sociis natoque penatibus et magnis dis parturient ntesroin vel nibh et elit mollis commodo nec augue natoque penat.',
            buttonLink: ''
          },
          {
            img: '/img/index/slider/slide-2.jpg',
            orangeTitle: 'Never',
            title: 'give up',
            text: ' Every bodybuilder requires a lot of dedication and effort to shape his/her body into something to be proud of. We can give you everything you need for it.',
          },
          {
            img: '/img/index/slider/slide-3.jpg',
            orangeTitle: 'no',
            title: 'pain no gain',
            text: 'Having a perfect body requires a lot of training. Nice-looking body and powerful organism are interconnected – and we can help you with both.',
          },
        ],

        promoData: [{
            img: '/img/index/promo/page-image1.jpg',
            link: '/',
            category: 'MOVEMENT',
            title: 'CYCLING & Cardio',
            text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
          },
          {
            img: '/img/index/promo/page-image2.jpg',
            link: '/',
            category: 'MOVEMENT',
            title: 'CYCLING & Cardio',
            text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
          },
          {
            img: '/img/index/promo/page-image3.jpg',
            link: '/',
            category: 'MOVEMENT',
            title: 'CYCLING & Cardio',
            text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
          },
        ],

        ourSkillsData: [{
            skillNum: '90',
            skillName: 'PROFESSIONALISM',
          },
          {
            skillNum: '90',
            skillName: 'PROFESSIONALISM',
          },
          {
            skillNum: '90',
            skillName: 'PROFESSIONALISM',
          },
          {
            skillNum: '90',
            skillName: 'PROFESSIONALISM',
          }
        ],

        PromoListTitle: [{
          subtitle: 'OUR BENEFITS',
          title: 'EVERYTHING IS POSSIBLE WITH US'
        }],

        PromoListData: [{
            icon: '1',
            title: '40 COURSES A WEEK',
            text: 'Everyday our entire team works to deliver you our skills, knowledge and passion.',
          },
          {
            icon: '2',
            title: '12 PROFESSIONAL TRAINERS',
            text: 'All our coaches are highly experienced, certified and award-winning.',
          },
          {
            icon: '3',
            title: 'EFFECTIVE GROUP TRAINING',
            text: 'Group training is a great solution for beginners who want to get better shape.',
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .promo-title__block {
    font-size: 60px;
    line-height: 1.2307;
    font-weight: 800px;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 14px;

    @media screen and (max-width: 870px) {
      font-size: 38px;
    }

    span {
      font-size: 18px;
      line-height: 1.2307;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 42px;
    }
  }

  .our-skils__block {
    padding: 30px 0px;

    .text_grey {
      margin-bottom: 40px;
      text-align: center;
    }

    .our-skils__skill {
      border-radius: 50%;
      border: 12px solid #f47070;
      display: inline-flex;
      font-size: 36px;
      line-height: 66px;
      padding: 32px;
      margin-bottom: 20px;
    }
  }

  .promo-cards__block {
    position: relative;
    top: -80px;

    @media screen and (max-width: 600px) {}
  }
</style>