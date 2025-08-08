// 静岡(220000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/220000.json";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(weather) {
       console.log(weather);
       const formatDatetime = `${weather.reportDatetime.getFullYear()}/${String(weather.reportDatetime.getMonth() + 1).padStart(2, '0')}/${String(weather.reportDatetime.getDate()).padStart(2, '0')} ${String(weather.reportDatetime.getHours()).padStart(2, '0')}:${String(weather.reportDatetime.getMinutes()).padStart(2, '0')}:${String(weather.reportDatetime.getSeconds()).padStart(2, '0')}`;
       // 画面に書き出す
       document.getElementById("publishingOffice").lastElementChild.textContent = weather.publishingOffice;
       document.getElementById("reportDatetime").lastElementChild.textContent = formatDatetime;
       document.getElementById("targetArea").lastElementChild.textContent = weather.targetArea;
       document.getElementById("headlineText").lastElementChild.textContent = weather.headlineText;
       document.getElementById("text").lastElementChild.innerHTML = weather.text.replace(/\n\n/g, '<br>');
   });
