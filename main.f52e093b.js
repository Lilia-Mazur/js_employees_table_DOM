parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l=document.querySelector("body"),c=document.querySelector("table"),i=document.querySelector("tbody"),u=0,s=function(t){return e(i.rows).sort(function(e,n){var a=e.cells[t].innerText.replace(/[$,]/g,""),r=n.cells[t].innerText.replace(/[$,]/g,"");return isNaN(a)?a.localeCompare(r):a-r})},d=function(t){return e(i.rows).sort(function(e,n){var a=e.cells[t].innerText.replace(/[$,]/g,""),r=n.cells[t].innerText.replace(/[$,]/g,"");return isNaN(a)?r.localeCompare(a):r-a})},p=function(e,t,n){var a=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p");a.classList="notification",a.dataset.qa="notification",a.classList.add(n),r.classList="title",r.textContent=e,o.textContent=t,a.append(r),a.append(o),l.append(a),setTimeout(function(){a.remove()},2e3)};c.addEventListener("click",function(t){var n,a=t.target.closest("th");if(a){var r=a.cellIndex;0===u?(n=s(r),u=1):(n=d(r),u=0),i.append.apply(i,e(n))}}),i.addEventListener("click",function(e){var t=e.target.closest("tr"),n=document.querySelector(".active");n?(n.classList.remove("active"),t.classList.add("active")):t.classList.add("active")}),l.insertAdjacentHTML("beforeend",'<form class="new-employee-form"> \n      <label>Name:\n        <input name="name" type="text" data-qa="name">\n      </label>\n      <label>Position:\n        <input name="position" type="text" data-qa="position">\n      </label>\n      <label> Office:\n        <select name="office" data-qa="office" >\n         <option value="Tokyo">Tokyo</option>\n         <option value="Singapore">Singapore</option>\n         <option value="London">London</option>\n         <option value="New York">New York</option>\n         <option value="Edinburgh">Edinburgh</option>\n         <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label>Age:\n        <input name="age" type="number" data-qa="age">\n      </label>\n      <label>Salary:\n        <input name="salary" type="number" data-qa="salary">\n      </label>\n      <button>Save to table</button>\n     </form>');var m=document.querySelector("form");m.addEventListener("submit",function(t){t.preventDefault();var n=new FormData(m),a=document.createElement("tr"),r=[n.get("name"),n.get("position"),n.get("office"),n.get("age"),n.get("salary")];if(n.get("name").length<4)p("Incorrect Name!","Name should have at least 4 letters.","error");else if(n.get("name")&&n.get("position")&&n.get("age")&&n.get("salary"))if(n.get("age")<18||n.get("age")>90)p("Incorrect Age","Age can't be less than 18 or more than 90.","error");else{for(var o=0;o<r.length;o++){var l=document.createElement("td");if(o===r.length-1){var c=parseInt(r[o]);l.textContent="$".concat(c.toLocaleString("en-US"))}else l.textContent=r[o];a.append(l)}i.append(a),p("Added new row.","New data were added to the table.","success");for(var u=0;u<e(m.querySelectorAll("input")).length;u++)m.querySelectorAll("input")[u].value=null}else p("Error","Not all field have data.","error")}),i.addEventListener("dblclick",function(e){var t=e.target,n=t.textContent,a=document.createElement("input");a.classList="cell-input",a.name="text",a.type="text",t.textContent=null,t.append(a),a.focus();var r=document.querySelector(".cell-input");a.addEventListener("keydown",function(e){"Enter"===e.code&&(0===r.value.length&&(t.textContent=n),t.cellIndex<3&&(r.value.length<4?(p("Incorrect Input Data.","Text should have at least 4 letters.","error"),t.textContent=n):t.textContent=r.value),3===t.cellIndex&&(parseInt(r.value)?parseInt(r.value)<18||parseInt(r.value>90)?(p("Incorrect Age","Age can't be less than 18 or more than 90.","error"),t.textContent=n):t.textContent=r.value:(p("Not a number","Add number from 18 to 90.","error"),t.textContent=n)),4===t.cellIndex&&(parseInt(r.value)?t.textContent="\n          $".concat(parseInt(r.value).toLocaleString("en-US")):(p("Not a number","Please add number","error"),t.textContent=n)))}),a.addEventListener("blur",function(e){0===r.value.length&&(t.textContent=n),t.cellIndex<3&&(r.value.length<4?(p("Incorrect Input Data.","Text should have at least 4 letters.","error"),t.textContent=n):t.textContent=r.value),3===t.cellIndex&&(parseInt(r.value)?parseInt(r.value)<18||parseInt(r.value>90)?(p("Incorrect Age","Age can't be less than 18 or more than 90.","error"),t.textContent=n):t.textContent=r.value:(p("Not a number","Add number from 18 to 90.","error"),t.textContent=n)),4===t.cellIndex&&(parseInt(r.value)?t.textContent="\n        $".concat(parseInt(r.value).toLocaleString("en-US")):(p("Not a number","Please add number","error"),t.textContent=n))})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f52e093b.js.map