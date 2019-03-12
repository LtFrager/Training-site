<template>
    <footer>
        <div class="footer__bg">
            <v-container grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md3>
                        <h2 class="footer__title">
                            ABOUT OUR CLUB
                        </h2>
                        <p class="footer__text">
                            Sportek is a universal gym where everyone becomes an athlete. We work for you to have
                            better shape and
                            stronger health!
                        </p>
                    </v-flex>
                    <v-flex xs12 sm6 md3>
                        <h2 class="footer__title">
                            CONTACT US
                        </h2>

                        <ul class="tab_list">
                            <li v-for="(item,i) in  locationData" :key="i" class="tab" @click="myActive = item.active, center = item.position"
                                v-bind:class="{ active:  myActive == item.active }">
                                {{item.title}}
                            </li>
                        </ul>

                        <ul v-for="(item,i) in  locationData" :key="i" v-if="myActive == item.active">
                            <li class="footer__text" v-for="(item2,i) in item.contacts" :key="i">
                                {{item2}}
                            </li>
                        </ul>
                    </v-flex>
                    <v-flex>
                        <GmapMap class="map-size" v-bind:center="center" v-bind:zoom="14" :options="options">
                            <GmapMarker v-for="(item, index) in  locationData" v-bind:key="index" v-bind:position="item.position"
                                @click="center=item.position" />
                        </GmapMap>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="footer__bottom">
            <v-container>
                <p class="copy">
                    © 2019 Sportek. All rights reserved.
                </p>
            </v-container>
        </div>
    </footer>
</template>
<script>
    export default {
        data() {
            return {
                center: {
                    lat: 50.4547,
                    lng: 30.5238
                },
                myActive: 1,

                locationData: [{
                        active: 1,
                        title: 'Place 1',
                        contacts: ['Place 1 4096 N Highland St, Arlington VA 32101, USA',
                            'Place 1 school@company.com',
                            'Place 1 800 1234 56 78'
                        ],
                        position: {
                            lat: 50.4547,
                            lng: 30.5238
                        }
                    },
                    {
                        active: 2,
                        title: 'Place 2',
                        contacts: ['Place 2 4096 N Highland St, Arlington VA 32101, USA',
                            'Place 2 school@company.com',
                            'Place 2 800 1234 56 78'
                        ],
                        position: {
                            lat: 40.727805,
                            lng: -73.812917,
                        }
                    },
                    {
                        active: 3,
                        title: 'Place 3',
                        contacts: ['Place 3 4096 N Highland St, Arlington VA 32101, USA',
                            'Place 3 school@company.com',
                            'Place 3 800 1234 56 78'
                        ],
                        position: {
                            lat: 23.086436,
                            lng: 113.293079,
                        }
                    },
                ],
                options: {
                    disableDefaultUI: true,
                    // scrollwheel: false,
                    styles: [{
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#212121"
                            }]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#212121"
                            }]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#9e9e9e"
                            }]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#bdbdbd"
                            }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#181818"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "color": "#1b1b1b"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#2c2c2c"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#8a8a8a"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#373737"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#3c3c3c"
                            }]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#4e4e4e"
                            }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#616161"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#757575"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#000000"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "color": "#3d3d3d"
                            }]
                        }
                    ]
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .footer__bg {
        background: #232a35;
        font-size: 14px;
        line-height: 24px;

        .footer__title {
            font-size: 16px;
            line-height: 1.2307;
            font-weight: 400;
            color: #b3bbc1;
            font-style: normal;
            letter-spacing: 3px;
            margin-bottom: 26px;
            padding-top: 40px;
        }

        .footer__text {
            font-size: 14px;
            line-height: 24px;
            color: #b3bbc1;
        }

        .tab_list {
            display: flex;
            justify-content: space-between;

            .tab {
                cursor: pointer;
                color: white;
                text-decoration: none;
                font-size: 12px;
                letter-spacing: 1px;
                vertical-align: top;
                text-transform: uppercase;
                transition: 1s;

                &.active {
                    color: #f47070;
                    transition: 1s;
                }
            }
        }
    }

    .footer__bottom {
        background: #1c222b;
        color: #b3bbc1;

        .copy {
            font-size: 14px;
            margin-bottom: 20px;
            margin: 7px 0;
            text-align: right;
        }
    }

    .map-size {
        max-width: 100%;
        height: 300px;
    }



    ul {
        list-style-type: none;
        padding: 0px;
    }
</style>