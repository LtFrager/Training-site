<template>
    <div>
        <h2 class="std__title text__black" v-for="i in titleData" :key="i">
            <span class="subtitle">{{i.subtitle}}</span>
            {{i.title}}
        </h2>

        <ul class="promo__list">
            <li v-for="(item,i) in data" :key="i">
                <div>
                    <div class="list__icon">
                        {{item.icon}}
                    </div>
                </div>
                <div class="list__text">
                    <p class="text__black std__text">{{item.title}}</p>
                    <p class="text_grey std__text">{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['data','titleData']
}
</script>

<style lang="scss" scoped>
    .promo__list {
        padding: 0px;
        list-style-type: none;

        li {
            display: flex;
            margin-bottom: 36px;

            .list__icon {
                background: #f47070;
                color: white;
                font-size: 36px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                line-height: 82px;
                height: 82px;
                width: 82px;
                margin-right: 30px;
                text-align: center;
            }

            .list__text {
                // display: flex;

                .text__black {
                    text-transform: uppercase;
                    margin: 0px;
                }
            }
        }

    }
</style>