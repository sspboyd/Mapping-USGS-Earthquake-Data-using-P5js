var mapImg;

var lat = 0;
var lng = 0;

var clat = 0;
var clon = 0;

// 31.2N 121.5E
var lat = 31.2;
var lng = 121.5;

function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic3NwYm95ZCIsImEiOiJjamx3ZG41ZWcxNW5uM2tyNnJweWJrbXp3In0.ajwQgPkvPoNxbGozKtTTFA");
}


function merX(lon) {
    var a = (128 / PI) * pow(2, zoom);
}

function setup() {
    createCanvas(1024, 512);
    image(mapImg, 0, 0);
}
