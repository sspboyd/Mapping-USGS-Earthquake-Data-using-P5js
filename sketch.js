var mapImg;

var lat = 0;
var lng = 0;

var clat = 0;
var clon = 0;

// 31.2N 121.5E
// 49.3N, 123.1W
var lat = 49.3;
var lon = -123.1;
var zoom = 1;

var earthquakes;

function preload() {
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic3NwYm95ZCIsImEiOiJjamx3ZG41ZWcxNW5uM2tyNnJweWJrbXp3In0.ajwQgPkvPoNxbGozKtTTFA");
    // earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv")
    earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv")

}


function mercX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
}

function mercY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
}

function setup() {
    createCanvas(1024, 512);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapImg, 0, 0);

    var cx = mercX(clon);
    var cy = mercY(clat);

for(var i=0; i<earthquakes.length; i++){
    var data = earthquakes[i].split(/,/);
    // console.log(data);
    var lat = data[1];
    var lon = data[2];
    var mag = data[4];
    mag = pow(10, mag);
    mag = sqrt(mag);
    var magMax = sqrt(pow(10,10));
    var d = map(mag,0,magMax,0,180);
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    fill(199, 47, 255, 123);
stroke(199,47,255);
    ellipse(x, y, d, d);

}



}
