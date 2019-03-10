<template>
    <div>
        <div v-for="(item,i) in data" :key="i">
            <v-parallax height="540" :src="item.img">
                <v-container>
                    <v-layout column justify-center align-center fill-height>
                        <h2 class="title-promo">
                            {{item.title}}
                            <span>{{item.subtitle}}</span>
                        </h2>

                        <button class="std__button">read more</button>
                    </v-layout>
                </v-container>
            </v-parallax>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    .title-promo {
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
</style>