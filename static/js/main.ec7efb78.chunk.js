(this["webpackJsonp24-hour-project"]=this["webpackJsonp24-hour-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Map-2-icon.708d9ec5.png"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(16),a(3)),u=(a(17),a(18),a(33)),i=a(32),s=a(27),m=(a(19),a(10)),h=a.n(m),d=function(e){var t=Object(n.useState)(h.a),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){!function(){var t="".concat("https://api.nasa.gov/planetary/earth/imagery","?lon=").concat(e.longitude,"&lat=").concat(e.latitude,"&dim=0.10&date=2016-01-01&api_key=").concat("BYJLRhF7aUhylkiuwEYnRjfyTgdlQPb8EyGfBjZr");fetch(t).then((function(e){return e.blob()})).then((function(e){var t=URL.createObjectURL(e);l(t)})).catch((function(e){return console.log(e)}))}()}),[]),r.a.createElement(s.a,{className:"p-2",md:"auto"},r.a.createElement("img",{className:"loc-img",src:c,alt:"map of your area"}))},f=(a(22),a(34)),E=(a(23),function(e){var t=e.weatherData,a=(2.23694*t.wind.speed).toPrecision(2),c=(.03*t.main.pressure).toPrecision(4),l=Object(n.useState)(Math.floor(1.8*(t.main.temp-273.15)+32)),u=Object(o.a)(l,2),i=u[0],m=(u[1],Object(n.useState)(Math.floor(t.main.temp-273.15))),h=Object(o.a)(m,2),d=h[0],E=(h[1],Object(n.useState)("Fahrenheit")),p=Object(o.a)(E,2),b=p[0],g=p[1];return r.a.createElement(s.a,null,r.a.createElement("h4",null,t.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Currently")," ",t.weather[0].main),r.a.createElement("h5",null,"Temperature"),"Fahrenheit"===b?r.a.createElement("div",{className:"temp"},i,"\xb0 ",r.a.createElement(f.a,{className:"ml-2",color:"primary",size:"sm",onClick:function(){g("Celsius")}},"Change to \xb0C")):r.a.createElement("div",{className:"temp"},d,"\xb0 ",r.a.createElement(f.a,{className:"ml-2",color:"secondary",size:"sm",onClick:function(){g("Fahrenheit")}},"Change to \xb0F")),r.a.createElement("h5",null,"Humidity"),r.a.createElement("p",null," ",t.main.humidity,"%"),r.a.createElement("h5",null,"Atmospheric Pressure"),r.a.createElement("p",null," ",c," in"),r.a.createElement("h5",null,"Wind Speed"),r.a.createElement("p",null,a," mph"))}),p=function(e){var t=Object(n.useState)(e.latitude),a=Object(o.a)(t,2),c=a[0],l=(a[1],Object(n.useState)(e.longitude)),u=Object(o.a)(l,2),i=u[0],m=(u[1],Object(n.useState)({})),h=Object(o.a)(m,2),d=h[0],f=h[1];return Object(n.useEffect)((function(){!function(){var e="".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(c,"&lon=").concat(i,"&appid=").concat("203dcab38e74e0dd2117b8d81cc20e68");fetch(e).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return console.log(e)}))}()}),[]),r.a.createElement(s.a,{md:"3"},d.hasOwnProperty("weather")?r.a.createElement(E,{weatherData:d}):"")},b=(a(24),a(28)),g=a(29),j=a(30),O=a(31),v=(a(25),function(e){return r.a.createElement(s.a,{md:"4"},r.a.createElement(b.a,{id:"card",className:"p-2"},r.a.createElement("h3",null,r.a.createElement(g.a,null,e.restaurant.restaurant.name)),r.a.createElement(j.a,null,r.a.createElement("h5",null,"Cuisine"),""!==e.restaurant.restaurant.cuisines?r.a.createElement(O.a,null,e.restaurant.restaurant.cuisines):r.a.createElement(O.a,null,"No Data Available"),r.a.createElement("h5",null,"Average Price"),e.restaurant.restaurant.average_cost_for_two>0?r.a.createElement(O.a,null,"$",e.restaurant.restaurant.average_cost_for_two):r.a.createElement(O.a,null,"No Price Available"),r.a.createElement("h5",null,"Phone Number"),r.a.createElement(O.a,null,e.restaurant.restaurant.phone_numbers),r.a.createElement("h5",null,"Address"),r.a.createElement(O.a,null,e.restaurant.restaurant.location.address),r.a.createElement("h5",null,"Rating"),"Not rated"===e.restaurant.restaurant.user_rating.rating_text?r.a.createElement(O.a,null,"No Rating Available"):r.a.createElement(O.a,null,e.restaurant.restaurant.user_rating.aggregate_rating,", ",e.restaurant.restaurant.user_rating.rating_text))))}),w=function(e){var t=Object(n.useState)(e.latitude),a=Object(o.a)(t,2),c=a[0],l=(a[1],Object(n.useState)(e.longitude)),u=Object(o.a)(l,2),s=u[0],m=(u[1],Object(n.useState)([])),h=Object(o.a)(m,2),d=h[0],f=h[1];return Object(n.useEffect)((function(){!function(){var e="lat=".concat(c,"&lon=").concat(s,"&sort=real_distance&radius=500");fetch("https://developers.zomato.com/api/v2.1/search?"+e,{method:"GET",headers:new Headers({"Content-Type":"application/json","user-key":"ac470f024f2131c285d68377ed5cc6d0"})}).then((function(e){return e.json()})).then((function(e){return f(e.restaurants)})).catch((function(e){return console.log(e)}))}()}),[]),r.a.createElement(i.a,null,d.length>0?d.map((function(e){return r.a.createElement(v,{restaurant:e})})):"")};var y=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),h=m[0],f=m[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),g=b[0],j=b[1],O=Object(n.useState)(!0),v=Object(o.a)(O,2),y=v[0],S=v[1];Object(n.useEffect)((function(){N()}),[]);var N=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(_):(console.log("Geolocation is not supported by this browser."),S(!1))},_=function(e){c(e.coords.latitude),f(e.coords.longitude)};return Object(n.useEffect)((function(){a&&h&&j(!0)}),[a,h]),r.a.createElement("div",null,r.a.createElement("h1",{className:"applicationHeader"},"24 Hour Project"),console.log(g),console.log(y),g?r.a.createElement(u.a,null,r.a.createElement(i.a,{className:"justify-content-center"},r.a.createElement(p,{latitude:a,longitude:h}),r.a.createElement(d,{latitude:a,longitude:h})),r.a.createElement(i.a,{className:"justify-content-center"},r.a.createElement(s.a,null,r.a.createElement(w,{latitude:a,longitude:h})))):r.a.createElement("h2",null,"Geolocation is not supported by this browser."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ec7efb78.chunk.js.map