<template>
  <div>
    <div class="main__slider">
      <div v-for="(item,i) in data" :key="i" class="slider__item" :style="'background-image:url(' + item.img +')'">
        <v-container>
          <div class="slider__promo">
            <h1 class="slider__title">
              <span>{{item.orangeTitle}}</span>
              {{item.title}}
            </h1>
            <p class="slider__text">{{item.text}}</p>
            <button class="std__button">Read more</button>
          </div>
        </v-container>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props:['data'],
    mounted() {
      $('.main__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        slidesToShow: 1,
      });
    }
  }
</script>

<style lang="scss" scoped>
  .main__slider {
    .slider__item {
      height: calc(80vh - 70px);
      width: 100%;
      background-position: center;
      background-size: cover;
      display: flex !important;
      align-items: center;

      .slider__promo {
        max-width: 700px;
        width: 58%;
        min-width: 288px;
        padding: 15px;
        

        .slider__title {
          color: #fff;
          font-size: 80px;
          line-height: 1.125;
          margin-bottom: 25px;
          text-transform: uppercase;

          @media screen and(max-width: 768px) {
            font-size: 36px;
          }

          span {
            color: #f47070;
          }
        }

        .slider__text {
          color: #fff;
          font-size: 18px;
          margin: 0 0 30px;

        }
      }
    }
  }

  .slick-slide{
    .slider__promo {
    opacity: 0!important;
    transition: 1s;
    }
  }
  .slick-active {
    .slider__promo {
      opacity: 1 !important;
      transition: 2s;
      transition-delay: 1s;
    }
  }
</style>