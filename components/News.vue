<template>
    <v-layout row wrap justify-center>
        <v-flex xs12 sm4 v-for="(item,i) in data" :key="i">
            <v-card hover class="news__item">
                <div class="item__img" :style="'background-image:url(' + item.img +')'">
                    <nuxt-link :to="item.link" class="item__img-link">
                    </nuxt-link>
                </div>
                <v-card-text>
                    <h6 class="item__date">
                        {{item.date}}
                    </h6>
                    <h3 class="item__title">
                        <nuxt-link :to="item.link">
                            {{item.title}}
                        </nuxt-link>
                    </h3>
                    <p class="text_grey std__text">
                        {{item.text}}
                    </p>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <nuxt-link :to="item.link" class="item__arrow-link">
                            Read more
                        </nuxt-link>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    .news__item {
        cursor: default;
        margin: 12px;

        @media screen and (max-width: 768px) {
            margin: 4px;
        }

        @media screen and (max-width: 600px) {
            margin: 8px;
        }

        .item__img {
            height: 220px;
            background-position: center;
            background-size: cover;
            position: relative;

            .item__img-link {
                position: absolute;
                width: 100%;
                height: 100%;
                background: none;
            }
        }

        .item__date {
            color: #f47070;
            font-size: 12px;
            line-height: 18px;
            font-weight: 400;
        }

        .item__title {

            a {
                text-decoration: none;
                text-transform: uppercase;
                color: #232a35;
                font-size: 18px;
                line-height: 1.2307;
                font-weight: 700;
                transition: 1s;

                &:hover {
                    color: #f47070;
                    transition: .3s;
                }
            }
        }

        .item__arrow-link {
            color: #f47070;
            text-decoration: none;
            font-size: 14px;
            transition: 1s;

            &:hover {
                color: #232a35;
                font-weight: 700;
                transition: .3s;
            }
        }
    }
</style>