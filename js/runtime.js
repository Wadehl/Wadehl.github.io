setInterval(() => {
  let create_time = Math.round(new Date('2022-03-01 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second > 0) {
    time[4] = nol(second);
  }
  if ((Number(time[2])<12) && (Number(time[2])>=7)){
    currentTimeHtml ="<img src='https://cdn.jsdelivr.net/gh/Wadehl/web-data/MyBlogdata/img/goodmorning.png' height='130px' weight='200px'></img>"/*+"<div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';*/
  }
  else if((Number(time[2])<14) && (Number(time[2])>=12))
  {
    currentTimeHtml = "<img src='https://cdn.jsdelivr.net/gh/Wadehl/web-data/MyBlogdata/img/goodnoon.png' height='130px' weight='200px'></img>"
  }
  else if((Number(time[2])<18) && (Number(time[2])>=14))
  {
    currentTimeHtml = "<img src='https://cdn.jsdelivr.net/gh/Wadehl/web-data/MyBlogdata/img/goodafternoon.png' height='130px' weight='200px'></img>"
  }
  else if ((Number(time[2])>=18) && (Number(time[2])<23)){
    currentTimeHtml ="<img src='https://cdn.jsdelivr.net/gh/Wadehl/web-data/MyBlogdata/img/goodnight.png' height='130px' weight='200px'></img>" /*+ time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';*/
  }
  else if((Number(time[2]>=23))||((Number(time[2])>=0)&&(Number(time[2]<7)))){
    currentTimeHtml ="<img src='https://cdn.jsdelivr.net/gh/Wadehl/web-data/MyBlogdata/img/goodsleeping.png' height='130px' weight='200px'></img>"
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);
