(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(2),l=n.n(c),s=(n(14),n(3)),r=n(4),o=n(6),m=n(5),u=n(7);n(15);function d(e){var t=e/36e5,n=e/6e4%60,a=e/1e3%60;return{hours:t<10?"0".concat(parseInt(t)):parseInt(t),minutes:n<10?"0".concat(parseInt(n)):parseInt(n),seconds:a<10?"0".concat(parseInt(a)):parseInt(a)}}function p(e){return i.a.createElement("div",{className:"time"},i.a.createElement("h1",null,e.time.hours,":"),i.a.createElement("p",null,"Hour"))}function h(e){return i.a.createElement("div",{className:"time"},i.a.createElement("h1",null,e.time.minutes,":"),i.a.createElement("p",null,"Minute"))}function v(e){return i.a.createElement("div",{className:"time"},i.a.createElement("h1",null,e.time.seconds),i.a.createElement("p",null,"Second"))}var E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleStartClick=function(e){n.state.pending?(clearInterval(n.intervalId),n.setState({pending:!n.state.pending})):(n.setState({pending:!n.state.pending}),n.intervalId=setInterval(function(){n.setState({timeMilliseconds:n.state.timeMilliseconds+1e3,time:d(n.state.timeMilliseconds+1e3)})},1e3))},n.handleResetClick=function(e){clearInterval(n.intervalId),n.setState({pending:!1,timeMilliseconds:0,time:d(0)})},n.state={pending:!1,timeMilliseconds:38768668,time:d(38768668)},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"d-flex"},i.a.createElement(p,{time:this.state.time}),i.a.createElement(h,{time:this.state.time}),i.a.createElement(v,{time:this.state.time})),i.a.createElement("div",{className:"man-buttons"},i.a.createElement("button",{onClick:this.handleStartClick},this.state.pending?"Stop":"Start"),i.a.createElement("button",{onClick:this.handleResetClick},"Reset")))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2e5269e2.chunk.js.map