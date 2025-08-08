// 静岡(220000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/220000.json";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(weather) {
       console.log(weather);
       const date = new Date(weather.reportDatetime);
       const formatDatetime = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
       const text = weather.text.replace(/\n\n/g, '<br>').replace(/　/g, '');
       // 画面に書き出す
       document.getElementById("publishingOffice").lastElementChild.textContent = weather.publishingOffice;
       document.getElementById("reportDatetime").lastElementChild.textContent = formatDatetime;
       document.getElementById("targetArea").lastElementChild.textContent = weather.targetArea;
       document.getElementById("headlineText").lastElementChild.textContent = weather.headlineText;
       document.getElementById("text").lastElementChild.innerHTML = text;
   });
