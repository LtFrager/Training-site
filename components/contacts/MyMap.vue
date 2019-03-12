<template>

    <v-layout row wrap align-center>
        <v-flex>
            <h1 class="my_title">
                Contact Us
            </h1>
            <div class="my_tabs">
                <ul class="tab_list">
                    <li v-for="(item,i) in myLocation" :key="i" class="tab" @click="myActive = item.active, center = item.position"
                        v-bind:class="{ active:  myActive == item.active }">
                        {{item.title}}
                    </li>
                </ul>

                <div class="tab_content">
                    <div class="tab_item" v-for="(item,i) in myLocation" :key="i" v-if="myActive == item.active">
                        <div class="tab_title">
                            {{item.tabTitle}}
                        </div>
                        <ul>
                            <li v-for="(item2,i) in item.location" :key="i">
                                {{item2}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </v-flex>
        <v-flex>
            <GmapMap class="map-size" v-bind:center="center" v-bind:zoom="14" :options="options">
                <GmapMarker v-for="(item, index) in myLocation" v-bind:key="index" v-bind:position="item.position"
                    @click="center=item.position" />
            </GmapMap>
        </v-flex>
    </v-layout>
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

                myLocation: [{
                        active: 1,
                        title: 'Kyiv',
                        tabTitle: 'Global Message Services Ukraine LLC',
                        location: ['Kuiv, Stepan Bandera, 33', '02066', 'Ukraine'],
                        position: {
                            lat: 50.4547,
                            lng: 30.5238
                        }
                    },
                    {
                        active: 2,
                        title: 'New york',
                        tabTitle: 'Global Message Services New york LLC',
                        location: ['New york', '02066', 'New york'],
                        position: {
                            lat: 40.727805,
                            lng: -73.812917,
                        }
                    },
                    {
                        active: 3,
                        title: 'Guangzhou',
                        tabTitle: 'Global Message Services Guangzhou LLC',
                        location: ['Guangzhou', '02066', 'Guangzhou'],
                        position: {
                            lat: 23.086436,
                            lng: 113.293079,
                        }
                    },
                    {
                        active: 4,
                        title: 'Barcelona',
                        tabTitle: 'Global Message Services barcelona LLC',
                        location: ['Guangzhou', '02066', 'Guangzhou'],
                        position: {
                            lat: 41.399126,
                            lng: 2.178029
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
    .map-size {
        max-width: 100%;
        min-width: 500px;
        height: 500px;

        @media screen and (max-width: 640px) {
            width: 500px;
            min-width: auto;
        }

        @media screen and (max-width: 400px) {
            height: 400px;
        }

        @media screen and (max-width: 370px) {
            height: 300px;
        }
    }


    .my_tabs {
        .tab_list {
            display: flex;
            justify-content: space-between;
            max-width: 320px;

            .tab {
                display: inline;
                cursor: pointer;
                color: #ffffff;
                font-family: "SuisseIntl-SemiBold";
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;

                &.active {
                    color: #3db565;
                }
            }
        }

        .tab_content {

            .tab_item {
                margin-top: 52px;

                .tab_title {
                    color: #ffffff;
                    font-family: "SuisseIntl-Light";
                    font-size: 26px;
                    font-weight: 300;
                    line-height: 20px;
                    margin-bottom: 32px;
                }

                ul {
                    li {
                        color: #ffffff;
                        font-size: 11px;
                        line-height: 20px;
                        font-family: "SuisseIntl-Light";
                        font-weight: 300;
                        letter-spacing: 0.5px;
                    }
                }
            }
        }

        ul {
            list-style-type: none;
            padding: 0px;
        }
    }
</style>