 /**
  * 格式化时间
  * 返回 2018年07月13日16时44分20秒
  */
 function getDate(dt) {

     //年 
     var year = dt.getFullYear();
     //月 
     var month = dt.getMonth() + 1;
     //日 
     var day = dt.getDate();
     //时 
     var hour = dt.getHours();
     //分 
     var minute = dt.getMinutes();
     //秒
     var second = dt.getSeconds();

     month = month < 10 ? "0" + month : month;

     day = day < 10 ? "0" + day : day;

     hour = hour < 10 ? "0" + hour : hour;

     minute = minute < 10 ? "0" + minute : minute;

     second = second < 10 ? "0" + second : second;

     return year + "年" +
         month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒";
 }