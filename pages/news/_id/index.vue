<template>
    <v-container class="news">
        <h2 class="std__title text__black">
            <span class="subtitle">{{news.date}}</span>
            {{news.title}}
        </h2>

        <div>
            <img :src="news.img" alt="img">
            <p class="std__text">
                Want a hotter, healthier body and a longer, happier life? Cycling is a perfect activity, we create
                content that engages and informs, and we complement it with practical tools to make living healthy
                an easier and sustainable process. We started a tradition when our doors first opened in 2007 of
                doing introductions at the beginning of each class – a tradition which has been adopted by Sportek
                gyms all over the country.
            </p>
            <p class="std__text">
                We create content that engages and informs, and we complement it with practical tools to make
                living healthy an easier and sustainable process. We started a tradition when our doors first
                opened in 2007 of doing introductions at the beginning of each class – a tradition which has been
                adopted by Sportek gyms all over the country. Also, while many of our workouts are timed and
                competitive, it is all done in a supportive and team-oriented environment. Welcome!
            </p>
            <p class="std__text">
                There’s nothing better than having your very own coach and mentor. Need an extra push? Our personal
                trainers are certified experts in exercise physiology, anatomy, training program development,
                exercise application and fitness assessments. They work for you no matter your age or fitness
                level.
            </p>
            <p class="std__text">
                The importance of will-power is recognized by most men, yet few deliberately give any time or
                thought to its development. Why we resist one thing and yield to another may be due to "the
                strongest motive," but what more particularly concerns us in the study of self-confidence is in
                what way this mighty power can be built and directed.
            </p>
            <p class="std__text">
                Gym caters for all levels of fitness. Among its most impressive aspects are the variety of classes
                such as spinning for cardio fitness and Body Pump for burning off the excess weight. The gym
                instructors are another plus point – professional, knowledgeable, dedicated and friendly. The
                equipment is all brand new and state of the art.
            </p>
        </div>

         <button class="std__button" @click="$router.push('/news/')">Back to news</button>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                news: {
                    img: '/img/index/news/img1.jpg',
                    date: 'Feb 11, 2019',
                    title: 'WHAT DOES DISCIPLINE LOOK LIKE?',
                    media: ['/img/index/news/img1.jpg', '/img/index/news/img1.jpg', '/img/index/news/img1.jpg',
                        '/img/index/news/img1.jpg'
                    ]
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .news {
        padding-top: 60px;
        padding-bottom: 40px;
        min-height: 80vh;
    p{
       text-indent: 1.5em;
       margin-bottom: 32px;
    }
        img {
            float: left;
            margin-right: 30px;
            margin-bottom: 30px;
            max-width: 50%;

            @media screen and (max-width: 600px) {
                max-width: 100%;
                margin: 0;
                padding-bottom: 12px;
            }
        }
    button{
        margin: auto;
    }
    }
</style>