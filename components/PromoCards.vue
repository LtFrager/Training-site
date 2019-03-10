<template>
    <v-container>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm4 v-for="(item,i) in data" :key="i">
                <v-card hover class="promo__item">
                    <div class="item__img" :style="'background-image:url(' + item.img +')'">
                        <nuxt-link :to="item.link" class="item__img-link">
                        </nuxt-link>
                    </div>
                    <v-card-text>
                        <h6 class="item__category">
                            {{item.category}}
                        </h6>
                        <h3 class="item__title">
                            <nuxt-link :to="item.link">
                                {{item.title}}
                            </nuxt-link>
                        </h3>
                        <p class="item__text">
                            {{item.text}}
                        </p>
                        <v-card-actions v-if="item.link">
                            <v-spacer></v-spacer>
                            <nuxt-link to="/" class="item__arrow-link">
                                Read more
                            </nuxt-link>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    .promo__item {
        cursor: default;
        background: #232a35;
        color: #fff;
        margin: 0px 12px;

        @media screen and (max-width: 768px) {
            margin: 4px 4px;
        }

        @media screen and (max-width: 600px) {
            margin: 8px 0px;
        }

        .item__img {
            height: 280px;
            background-position: center;
            background-size: cover;
            position: relative;

            .item__img-link {
                position: absolute;
                width: 100%;
                height: 100%;
                background: none;
                transition: .5s;

                &:hover {
                    background: rgba(244, 112, 112, 0.3);
                    transition: .5s;
                }
            }
        }

        .item__category {
            color: #f47070;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 3px;
            margin-bottom: 4px;
            text-transform: uppercase;
        }

        .item__title {
            margin-bottom: 27px;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 24px;
                line-height: 1.2307;
                text-transform: uppercase;

                &:hover {
                    color: #f47070;
                }
            }

            &:after {
                content: '';
                display: block;
                width: 100%;
                max-width: 30px;
                border-bottom: 1px solid #f47070;
                margin: 19px 0 0;
            }
        }

        .item__text {
            font-size: 14px;
            line-height: 24px;
        }

        .item__arrow-link {
            color: #f47070;
            text-decoration: none;
            font-size: 14px;
            transition: 1s;

            &:hover {
                color: #fff;
                transition: .3s;
            }
        }
    }
</style>