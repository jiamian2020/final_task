
function weather(data){
    var dateDayname = document.getElementById("date-dayname");
    var dateDay = document.getElementById("date-day");
    var location = document.getElementById("location");
    //天气图标
    var weahterL = document.getElementById("weather-l");
    var weatherTemp = document.getElementById("weather-temp");
    var weatherDesc = document.getElementById("weather-desc");

    dateDayname.innerHTML = 'Week '+data.forecasts[0].casts[0].week;
    dateDay.innerHTML = data.forecasts[0].casts[0].date;
    location.innerHTML = data.forecasts[0].city;
    weatherTemp.innerHTML = data.forecasts[0].casts[0].daytemp + "℃";
    weatherDesc.innerHTML = data.forecasts[0].casts[0].dayweather;
    //这个图标等下封装一个函数，来判断用什么图标
    //weahterL.innerHTML = weatherIcon(1);

    var dayWind = document.getElementById("daywind");
    var nightWind = document.getElementById("nightwind")
    var windPower = document.getElementById("windpower");

    dayWind.innerHTML = data.forecasts[0].casts[0].daywind;
    nightWind.innerHTML = data.forecasts[0].casts[0].nightwind;
    windPower.innerHTML = data.forecasts[0].casts[0].daypower;

    var day1 = document.getElementById("day1");
    var span1 = day1.getElementsByTagName("span");

    var day2 = document.getElementById("day2");
    var span2 = day2.getElementsByTagName("span");

    var day3 = document.getElementById("day3");
    var span3 = day3.getElementsByTagName("span");

    var day4 = document.getElementById("day4");
    var span4 = day4.getElementsByTagName("span");

    //span1[0].innerHTML = weatherIcon(1);
    span1[1].innerHTML = 'Week '+data.forecasts[0].casts[0].week;
    span1[2].innerHTML = data.forecasts[0].casts[0].daytemp + "℃";

    //span2[0].innerHTML = weatherIcon(2);
    span2[1].innerHTML = 'Week '+data.forecasts[0].casts[1].week;
    span2[2].innerHTML = data.forecasts[0].casts[1].daytemp + "℃";

    //span3[0].innerHTML = weatherIcon(3);
    span3[1].innerHTML = 'Week '+data.forecasts[0].casts[2].week;
    span3[2].innerHTML = data.forecasts[0].casts[2].daytemp + "℃";

    //span4[0].innerHTML = weatherIcon(4);
    span4[1].innerHTML = 'Week '+data.forecasts[0].casts[3].week;
    span4[2].innerHTML = data.forecasts[0].casts[3].daytemp + "℃";

    function weatherIcon(t){
        if(data.weather[t - 1].icon1.search("yin") != -1){
            return "&#xe624;";
        }
        if(data.weather[t - 1].icon1.search("duoyun") != -1){
            return "&#xe618;";
        }
        if(data.weather[t - 1].icon1.search("qing") != -1){
            return "&#xe61f;";
        }
        if(data.weather[t - 1].icon1.search("xiaoyu") != -1){
            return "&#xe622;";
        }
        if(data.weather[t - 1].icon1.search("zhongyu") != -1){
            return "&#xe685;";
        }
        if(data.weather[t - 1].icon1.search("dayu") != -1 || data.weather[0].icon1.search("baoyu") != -1){
            return "&#xe644;";
        }
        if(data.weather[t - 1].icon1.search("zhenyu") != -1){
            return "&#xe642;";
        }
    }

}


window.onload = function(){

    var btn = document.getElementById("location-button");
    var city = document.getElementById("city");


    var script = document.createElement("script");
            script.src = `https://query.asilu.com/weather/gaode?city=${"北京"}&callback=weather`;
            document.body.appendChild(script);
    btn.onclick = function(){
        if(city.value){
            var script = document.createElement("script");
            script.src = `https://query.asilu.com/weather/gaode?city=${city.value}&callback=weather`;

            document.body.appendChild(script);
        }else{
            alert("请输入城市名称!");
        }
    }
}