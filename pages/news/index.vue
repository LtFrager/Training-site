<template>
    <v-container>
        <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="std__title text__black text-xs-center">
            <span data-aos="slide-up" data-aos-delay="800" data-aos-duration="1000" class="subtitle">all news</span>
            Our club news
        </h2>
        <news :data="newsData" />
    </v-container>
</template>
<script>
    import News from '@/components/News'
    export default {
        components: {
            News
        },
        data() {
            return {
                newsData: [{
                        img: '/img/index/news/img1.jpg',
                        date: 'Feb 11, 2019',
                        title: 'WHAT DOES DISCIPLINE LOOK LIKE?',
                        link: '/news/id',
                        text: 'Most of us can agree that discipline is one of the most ...',
                    },
                    {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/news/id',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                        {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/news/id',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                        {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/news/id',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                          {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/news/id',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },

                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>