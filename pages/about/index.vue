<template>
    <div>
        <v-parallax style="height:auto" src="/img/about/image1.jpg">
            <v-container>
                <v-layout row align-center fill-height>
                    <v-flex xs12 sm8 md6>
                        <h2 class="std__title text__black">
                            <span class="subtitle">ABOUT</span>
                            WELCOME!
                        </h2>
                        <p class="text__black std__text">We believe achievements start with education and a commitment
                            to small, daily choices..</p>
                        <p class="text_grey std__text">We create content that engages and informs, and we complement it
                            with practical tools to make living healthy an easier and sustainable process. We started a
                            tradition when our doors first opened in 2007 of doing introductions at the beginning of
                            each class – a tradition which has been adopted by Sportek gyms all over the country. Also,
                            while many of our workouts are timed and competitive, it is all done in a supportive and
                            team-oriented environment. Welcome!
                        </p>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>

        <v-container>
            <h2 class="std__title text__black text-xs-center">
                <span class="subtitle">TRAINERS</span>
                TRAINERS
            </h2>
        </v-container>
        <promo-cards :data="promoData" />

        <title-promo :data="titlePromoData" />

        <v-parallax style="height:auto" src="/img/about/image4.jpg">
            <v-container>
                <v-layout row justify-end align-center fill-height>
                    <v-flex xs12 sm6 md5>
                        <promo-list :data="PromoListData" :titleData="PromoListTitle" />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
    </div>
</template>
<script>
    import PromoCards from '@/components/PromoCards'
    import TitlePromo from '@/components/TitlePromo'
    import PromoList from '@/components/PromoList'
    export default {
        components: {
            PromoCards,
            TitlePromo,
            PromoList,
        },
        data() {
            return {
                promoData: [{
                        img: '/img/about/trainers/team-1.jpg',
                        link: '/',
                        category: 'MOVEMENT',
                        title: 'CYCLING & Cardio',
                        text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
                    },
                    {
                        img: '/img/about/trainers/team-2.jpg',
                        link: '/',
                        category: 'MOVEMENT',
                        title: 'CYCLING & Cardio',
                        text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
                    },
                    {
                        img: '/img/about/trainers/team-3.jpg',
                        link: '/',
                        category: 'MOVEMENT',
                        title: 'CYCLING & Cardio',
                        text: 'Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we ...',
                    },
                ],

                titlePromoData: [{
                    img: '/img/about/image3.jpg ',
                    title: 'YOU CAN GO THE DISTANCE',
                    subtitle: 'EVERYDAY OUR ENTIRE TEAM WORKS TO DELIVER YOU OUR SKILLS'
                }],

                PromoListTitle: [{
                    subtitle: 'GLOBAL FITNESS',
                    title: 'FACILITIES'
                }],

                PromoListData: [{
                        icon: '1',
                        title: 'EFFECTIVE GROUP TRAINING',
                        text: 'Group training is a great solution for beginners who want to get better shape.',
                    },
                    {
                        icon: '2',
                        title: '12 PROFESSIONAL TRAINERS',
                        text: 'All our coaches are highly experienced, certified and award-winning.',
                    },
                    {
                        icon: '3',
                        title: '40 COURSES A WEEK',
                        text: 'Everyday our entire team works to deliver you our skills, knowledge and passion.',
                    }
                ],
            }
        }









    }
</script>
<style lang="scss" scoped>
    .welcome__bg {}
</style>