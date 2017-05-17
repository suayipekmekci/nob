import React from 'react'
import axios from 'axios';
var accessToken = "test";
var postFunction = {
    getVerificationType: function() {
      var number = location.href;
      number = number + '';
      var regexp = /.*\/(.*?)\?/;
      if(number.match(regexp)){
        var n = number.match(regexp)[1];
        return n;
      }else{
        var n = number.split("/");
        return n[n.length - 1];
      }
    },
    getVerificationCode: function() {
      var number = location.href;
      number = number + '';
      var n = number.split("id=");
          return n[1];
    },
    delete_cookie: function(name) {
        window.location.pathname = "/"
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setTimeout(function(){ location.reload(); }, 100);
    },
    cookieCheck: function(cname){
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
    },
    accessParams: function() {
        return this.cookieCheck("access_token");
    },
    accessTokenParams: function() {
        accessToken = this.accessParams();
        return accessToken;
    },
    postParams: function(event) {
        event.preventDefault(); // Let's stop this event.
        event.stopPropagation(); // Really this time.
        var elem = event.target.elements;
        const fullParams = {};
        for (var i = 0; i < elem.length; i++) {
            if(elem[i].name !== ""){
              fullParams[elem[i].name] = elem[i].value
            }
        }
        /*if (accessToken == "test" || accessToken == undefined) {*/
            fullParams["access_token"] = this.cookieCheck("access_token");
      //  }
        return fullParams;
    },
    invitePostParams: function(event, code) {
        event.preventDefault(); // Let's stop this event.
        event.stopPropagation(); // Really this time.
        var elem = event.target.elements;
        const fullParams = {};
        for (var i = 0; i < elem.length; i++) {
            if(elem[i].name !== ""){
              fullParams[elem[i].name] = elem[i].value
            }
        }
        /*if (accessToken == "test" || accessToken == undefined) {*/
            fullParams["invite_token"] = code;
      //  }
        return fullParams;
    },
    postType: function(url, params) {
        var querystring = require('querystring');
        return axios.post(url, querystring.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(({data}) => {
            var statusCode = data.status;
            if (accessToken.length == 0 || accessToken == "test" || accessToken == undefined) {
                accessToken = data.access_token;
                var now = new Date();
                var time = now.getTime();
                var expireTime = time + 1000*3600;
                now.setTime(expireTime);
                var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
                document.cookie = 'access_token='+data.access_token+';expires='+now.toGMTString();
            }
              return data;
        }).catch((error) => {
            return error;
        })
    },
    verificationPostType: function(url, params) {
        var querystring = require('querystring');
        return axios.post(url, querystring.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(({data}) => {
          var now = new Date();
          var time = now.getTime();
          var expireTime = time + 1000*3600;
          now.setTime(expireTime);
          var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
          document.cookie = 'access_token='+data.access_token+';expires='+now.toGMTString();
          return data;
        }).catch((error) => {
            return error;
        })
    },
    getType: function(url, params) {
      var querystring = require('querystring');
      return axios.get(url, querystring.stringify(params), {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      }).then(({data}) => {
          if (accessToken == "") {
              accessToken = data.access_token;
          } else {}
          return data;
      }).catch((err) => {
          return err;
      })
    }
}

export default postFunction;
