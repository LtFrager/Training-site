<template>
    <v-container>
        <h2 class="std__title text__black text-xs-center">
            <span class="subtitle">all news</span>
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
                        link: '/news/1',
                        text: 'Most of us can agree that discipline is one of the most ...',
                    },
                    {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                        {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                        {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },
                          {
                        img: '/img/index/news/img2.jpg',
                        date: 'Feb 11, 2019',
                        title: 'PERFECT PRACTICE MAKES PERFECT',
                        link: '/',
                        text: 'What are your goals in CrossFit? Are they to be the best ...'
                    },

                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>