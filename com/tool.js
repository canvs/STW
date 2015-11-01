/**
 * author:ZD
 * time:2015/8/19
 */
define(function (a) {

    (function () {
        var globalData = store('globalData');
        if (!globalData) {
            store('globalData', {});
        }
    })();
    function store(itemName, obj) {
      if (obj) {
          if (typeof obj == 'object') {
              obj = JSON.stringify(obj);
              localStorage.setItem(itemName,obj);
          }
      }
      else {
          var data = localStorage.getItem(itemName);
          return JSON.parse(data);
      }
    }
    //重新定义时间的方法
    Date.prototype.toLocaleString = function() {
      var hour = this.getHours();
      var mint = this.getMinutes();
      var year = this.getFullYear();
      var month = this.getMonth()+1;
      var day = this.getDate();
      if (hour<10) {
        hour = '0' + hour;  
      };
      if (mint<10) {
        mint = '0' +mint; 
      };
      if (month<10) {
        month = '0' +  month;  
      };
      if (day<10) {
        day = '0' + day;  
      };


      return hour + ":" + mint + " " + year + "-" + month + "-" + day;
    };
    Date.prototype.toLocaleStrings = function() {
      var hour = this.getHours();
      var mint = this.getMinutes();
      var year = this.getFullYear();
      var month = this.getMonth()+1;
      var day = this.getDate();
      if (hour<10) {
        hour = '0' + hour;  
      };
      if (mint<10) {
        mint = '0' +mint; 
      };
      if (month<10) {
        month = '0' +  month;  
      };
      if (day<10) {
        day = '0' + day;  
      };


      return year + "-" + month + "-" + day+ ' ' + hour + ":" + mint;
    };

    return {

        getItem:  function (itemName) {
          return store(itemName);
        },
        setItem:  function (itemName,obj) {
          store(itemName,obj);
        },
        clearItem: function (itemName) {
          localStorage.removeItem(itemName);
        },
        GetuserAgent: function () {   //获取useragent
            var ua = navigator.userAgent.toLowerCase();
            return ua;
        },
        getQueryStringRegExp: function(url){    //正则解析地址参数

            var reg = new RegExp("(^|\\?|&)"+ url +"=([^&]*)(\\s|&|$)", "i");

            if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, "+")); return "";
        },
        parseDateM: function (tm) {    //时间戳智能版
          return new Date(parseInt(tm) * 1000).toLocaleString(); 
        },
        parseDateD: function (tm) {    //时间戳智能版
          return new Date(parseInt(tm) * 1000).toLocaleStrings(); 
        }
    }
});
