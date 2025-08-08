// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/220000.json";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(weather) {
       console.log(weather);
       // 画面に書き出す
       document.getElementById("publishingOffice").lastElementChild.textContent = weather.publishingOffice;
       document.getElementById("reportDatetime").lastElementChild.textContent = weather.reportDatetime;
       document.getElementById("targetArea").lastElementChild.textContent = weather.targetArea;
       document.getElementById("headlineText").lastElementChild.textContent = weather.headlineText;
       document.getElementById("text").lastElementChild.innerHTML = weather.text.replace(/\n\n/g, '<br>');
   });
