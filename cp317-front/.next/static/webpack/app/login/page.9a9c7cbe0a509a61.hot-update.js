/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(()=>{\"use strict\";var e={592:(e,r,t)=>{var n=t(722);var i=Object.create(null);var a=typeof document===\"undefined\";var o=Array.prototype.forEach;function debounce(e,r){var t=0;return function(){var n=this;var i=arguments;var a=function functionCall(){return e.apply(n,i)};clearTimeout(t);t=setTimeout(a,r)}}function noop(){}function getCurrentScriptUrl(e){var r=i[e];if(!r){if(document.currentScript){r=document.currentScript.src}else{var t=document.getElementsByTagName(\"script\");var a=t[t.length-1];if(a){r=a.src}}i[e]=r}return function(e){if(!r){return null}var t=r.split(/([^\\\\/]+)\\.js$/);var i=t&&t[1];if(!i){return[r.replace(\".js\",\".css\")]}if(!e){return[r.replace(\".js\",\".css\")]}return e.split(\",\").map((function(e){var t=new RegExp(\"\".concat(i,\"\\\\.js$\"),\"g\");return n(r.replace(t,\"\".concat(e.replace(/{fileName}/g,i),\".css\")))}))}}function updateCss(e,r){if(!r){if(!e.href){return}r=e.href.split(\"?\")[0]}if(!isUrlRequest(r)){return}if(e.isLoaded===false){return}if(!r||!(r.indexOf(\".css\")>-1)){return}e.visited=true;var t=e.cloneNode();t.isLoaded=false;t.addEventListener(\"load\",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.addEventListener(\"error\",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.href=\"\".concat(r,\"?\").concat(Date.now());if(e.nextSibling){e.parentNode.insertBefore(t,e.nextSibling)}else{e.parentNode.appendChild(t)}}function getReloadUrl(e,r){var t;e=n(e,{stripWWW:false});r.some((function(n){if(e.indexOf(r)>-1){t=n}}));return t}function reloadStyle(e){if(!e){return false}var r=document.querySelectorAll(\"link\");var t=false;o.call(r,(function(r){if(!r.href){return}var n=getReloadUrl(r.href,e);if(!isUrlRequest(n)){return}if(r.visited===true){return}if(n){updateCss(r,n);t=true}}));return t}function reloadAll(){var e=document.querySelectorAll(\"link\");o.call(e,(function(e){if(e.visited===true){return}updateCss(e)}))}function isUrlRequest(e){if(!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(e)){return false}return true}e.exports=function(e,r){if(a){console.log(\"no window.document found, will not HMR CSS\");return noop}var t=getCurrentScriptUrl(e);function update(){var e=t(r.filename);var n=reloadStyle(e);if(r.locals){console.log(\"[HMR] Detected local css modules. Reload all css\");reloadAll();return}if(n){console.log(\"[HMR] css reload %s\",e.join(\" \"))}else{console.log(\"[HMR] Reload all css\");reloadAll()}}return debounce(update,50)}},722:e=>{function normalizeUrl(e){return e.reduce((function(e,r){switch(r){case\"..\":e.pop();break;case\".\":break;default:e.push(r)}return e}),[]).join(\"/\")}e.exports=function(e){e=e.trim();if(/^data:/i.test(e)){return e}var r=e.indexOf(\"//\")!==-1?e.split(\"//\")[0]+\"//\":\"\";var t=e.replace(new RegExp(r,\"i\"),\"\").split(\"/\");var n=t[0].toLowerCase().replace(/\\.$/,\"\");t[0]=\"\";var i=normalizeUrl(t);return r+n+i}}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var i=r[t]={exports:{}};var a=true;try{e[t](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var t=__nccwpck_require__(592);module.exports=t})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLGFBQWEsT0FBTyxjQUFjLGFBQWEsMEJBQTBCLG9DQUFvQyw4QkFBOEIsdUJBQXVCLFFBQVEsa0JBQWtCLFdBQVcsZ0JBQWdCLDhCQUE4QixxQkFBcUIsZ0JBQWdCLG1CQUFtQixpQkFBaUIsZ0NBQWdDLFdBQVcsT0FBTywyQkFBMkIsNkJBQTZCLEtBQUssOENBQThDLG9CQUFvQixNQUFNLFNBQVMsT0FBTyxtQkFBbUIsT0FBTyxZQUFZLGdDQUFnQyxjQUFjLE9BQU8sZ0NBQWdDLE9BQU8sZ0NBQWdDLHFDQUFxQyw0Q0FBNEMsMkNBQTJDLFNBQVMsZ0JBQWdCLElBQUksd0JBQXdCLE9BQU8sWUFBWSxPQUFPLHVCQUF1QixxQkFBcUIsT0FBTyx1QkFBdUIsT0FBTyxnQ0FBZ0MsT0FBTyxlQUFlLG9CQUFvQixpQkFBaUIsc0NBQXNDLGVBQWUsT0FBTyxnQkFBZ0IsNEJBQTRCLEdBQUcsdUNBQXVDLGVBQWUsT0FBTyxnQkFBZ0IsNEJBQTRCLEdBQUcsMkNBQTJDLGtCQUFrQiwyQ0FBMkMsS0FBSyw2QkFBNkIsMkJBQTJCLE1BQU0sT0FBTyxlQUFlLEVBQUUsb0JBQW9CLG9CQUFvQixLQUFLLEdBQUcsU0FBUyx3QkFBd0IsT0FBTyxhQUFhLHdDQUF3QyxZQUFZLHNCQUFzQixZQUFZLE9BQU8sNkJBQTZCLHFCQUFxQixPQUFPLHFCQUFxQixPQUFPLE1BQU0sZUFBZSxRQUFRLEdBQUcsU0FBUyxxQkFBcUIsd0NBQXdDLHNCQUFzQixxQkFBcUIsT0FBTyxhQUFhLEdBQUcseUJBQXlCLHlDQUF5QyxhQUFhLFlBQVksd0JBQXdCLE1BQU0sMERBQTBELFlBQVksNkJBQTZCLGtCQUFrQixvQkFBb0IscUJBQXFCLGFBQWEsZ0VBQWdFLFlBQVksT0FBTyxNQUFNLCtDQUErQyxLQUFLLG9DQUFvQyxhQUFhLDRCQUE0QixTQUFTLHlCQUF5QiwrQkFBK0IsVUFBVSxpQkFBaUIsTUFBTSxjQUFjLGtCQUFrQixTQUFTLGdCQUFnQixzQkFBc0IsV0FBVyxzQkFBc0IsU0FBUyxvREFBb0QsaURBQWlELDJDQUEyQyxRQUFRLHNCQUFzQixnQkFBZ0IsU0FBUyxnQ0FBZ0MsV0FBVyxrQkFBa0IsaUJBQWlCLFlBQVksWUFBWSxXQUFXLElBQUksc0NBQXNDLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLG1FQUFtRSxTQUFTLEtBQUssK0JBQStCLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcz82YjZhIl0sInNvdXJjZXNDb250ZW50IjpbIigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXs1OTI6KGUscix0KT0+e3ZhciBuPXQoNzIyKTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciBhPXR5cGVvZiBkb2N1bWVudD09PVwidW5kZWZpbmVkXCI7dmFyIG89QXJyYXkucHJvdG90eXBlLmZvckVhY2g7ZnVuY3Rpb24gZGVib3VuY2UoZSxyKXt2YXIgdD0wO3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXM7dmFyIGk9YXJndW1lbnRzO3ZhciBhPWZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpe3JldHVybiBlLmFwcGx5KG4saSl9O2NsZWFyVGltZW91dCh0KTt0PXNldFRpbWVvdXQoYSxyKX19ZnVuY3Rpb24gbm9vcCgpe31mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKGUpe3ZhciByPWlbZV07aWYoIXIpe2lmKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3I9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9ZWxzZXt2YXIgdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTt2YXIgYT10W3QubGVuZ3RoLTFdO2lmKGEpe3I9YS5zcmN9fWlbZV09cn1yZXR1cm4gZnVuY3Rpb24oZSl7aWYoIXIpe3JldHVybiBudWxsfXZhciB0PXIuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7dmFyIGk9dCYmdFsxXTtpZighaSl7cmV0dXJuW3IucmVwbGFjZShcIi5qc1wiLFwiLmNzc1wiKV19aWYoIWUpe3JldHVybltyLnJlcGxhY2UoXCIuanNcIixcIi5jc3NcIildfXJldHVybiBlLnNwbGl0KFwiLFwiKS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBSZWdFeHAoXCJcIi5jb25jYXQoaSxcIlxcXFwuanMkXCIpLFwiZ1wiKTtyZXR1cm4gbihyLnJlcGxhY2UodCxcIlwiLmNvbmNhdChlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZyxpKSxcIi5jc3NcIikpKX0pKX19ZnVuY3Rpb24gdXBkYXRlQ3NzKGUscil7aWYoIXIpe2lmKCFlLmhyZWYpe3JldHVybn1yPWUuaHJlZi5zcGxpdChcIj9cIilbMF19aWYoIWlzVXJsUmVxdWVzdChyKSl7cmV0dXJufWlmKGUuaXNMb2FkZWQ9PT1mYWxzZSl7cmV0dXJufWlmKCFyfHwhKHIuaW5kZXhPZihcIi5jc3NcIik+LTEpKXtyZXR1cm59ZS52aXNpdGVkPXRydWU7dmFyIHQ9ZS5jbG9uZU5vZGUoKTt0LmlzTG9hZGVkPWZhbHNlO3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtpZih0LmlzTG9hZGVkKXtyZXR1cm59dC5pc0xvYWRlZD10cnVlO2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0pKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLChmdW5jdGlvbigpe2lmKHQuaXNMb2FkZWQpe3JldHVybn10LmlzTG9hZGVkPXRydWU7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSkpO3QuaHJlZj1cIlwiLmNvbmNhdChyLFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7aWYoZS5uZXh0U2libGluZyl7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfWVsc2V7ZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHQpfX1mdW5jdGlvbiBnZXRSZWxvYWRVcmwoZSxyKXt2YXIgdDtlPW4oZSx7c3RyaXBXV1c6ZmFsc2V9KTtyLnNvbWUoKGZ1bmN0aW9uKG4pe2lmKGUuaW5kZXhPZihyKT4tMSl7dD1ufX0pKTtyZXR1cm4gdH1mdW5jdGlvbiByZWxvYWRTdHlsZShlKXtpZighZSl7cmV0dXJuIGZhbHNlfXZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO3ZhciB0PWZhbHNlO28uY2FsbChyLChmdW5jdGlvbihyKXtpZighci5ocmVmKXtyZXR1cm59dmFyIG49Z2V0UmVsb2FkVXJsKHIuaHJlZixlKTtpZighaXNVcmxSZXF1ZXN0KG4pKXtyZXR1cm59aWYoci52aXNpdGVkPT09dHJ1ZSl7cmV0dXJufWlmKG4pe3VwZGF0ZUNzcyhyLG4pO3Q9dHJ1ZX19KSk7cmV0dXJuIHR9ZnVuY3Rpb24gcmVsb2FkQWxsKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7by5jYWxsKGUsKGZ1bmN0aW9uKGUpe2lmKGUudmlzaXRlZD09PXRydWUpe3JldHVybn11cGRhdGVDc3MoZSl9KSl9ZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KGUpe2lmKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KGUpKXtyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoYSl7Y29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7cmV0dXJuIG5vb3B9dmFyIHQ9Z2V0Q3VycmVudFNjcmlwdFVybChlKTtmdW5jdGlvbiB1cGRhdGUoKXt2YXIgZT10KHIuZmlsZW5hbWUpO3ZhciBuPXJlbG9hZFN0eWxlKGUpO2lmKHIubG9jYWxzKXtjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtyZWxvYWRBbGwoKTtyZXR1cm59aWYobil7Y29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsZS5qb2luKFwiIFwiKSl9ZWxzZXtjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO3JlbG9hZEFsbCgpfX1yZXR1cm4gZGVib3VuY2UodXBkYXRlLDUwKX19LDcyMjplPT57ZnVuY3Rpb24gbm9ybWFsaXplVXJsKGUpe3JldHVybiBlLnJlZHVjZSgoZnVuY3Rpb24oZSxyKXtzd2l0Y2gocil7Y2FzZVwiLi5cIjplLnBvcCgpO2JyZWFrO2Nhc2VcIi5cIjpicmVhaztkZWZhdWx0OmUucHVzaChyKX1yZXR1cm4gZX0pLFtdKS5qb2luKFwiL1wiKX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtpZigvXmRhdGE6L2kudGVzdChlKSl7cmV0dXJuIGV9dmFyIHI9ZS5pbmRleE9mKFwiLy9cIikhPT0tMT9lLnNwbGl0KFwiLy9cIilbMF0rXCIvL1wiOlwiXCI7dmFyIHQ9ZS5yZXBsYWNlKG5ldyBSZWdFeHAocixcImlcIiksXCJcIikuc3BsaXQoXCIvXCIpO3ZhciBuPXRbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLyxcIlwiKTt0WzBdPVwiXCI7dmFyIGk9bm9ybWFsaXplVXJsKHQpO3JldHVybiByK24raX19fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe3ZhciBuPXJbdF07aWYobiE9PXVuZGVmaW5lZCl7cmV0dXJuIG4uZXhwb3J0c312YXIgaT1yW3RdPXtleHBvcnRzOnt9fTt2YXIgYT10cnVlO3RyeXtlW3RdKGksaS5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2E9ZmFsc2V9ZmluYWxseXtpZihhKWRlbGV0ZSByW3RdfXJldHVybiBpLmV4cG9ydHN9aWYodHlwZW9mIF9fbmNjd3Bja19yZXF1aXJlX18hPT1cInVuZGVmaW5lZFwiKV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3ZhciB0PV9fbmNjd3Bja19yZXF1aXJlX18oNTkyKTttb2R1bGUuZXhwb3J0cz10fSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/styles/loginFields.module.css":
/*!******************************************************!*\
  !*** ./app/components/styles/loginFields.module.css ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"container\":\"loginFields_container__f_phZ\"};\n    if(true) {\n      // 1722277562666\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \nmodule.exports.__checksum = \"89398bcd5bb4\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N0eWxlcy9sb2dpbkZpZWxkcy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdNQUFtSSxjQUFjLHNEQUFzRDtBQUNyTyxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N0eWxlcy9sb2dpbkZpZWxkcy5tb2R1bGUuY3NzPzhjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbnRhaW5lclwiOlwibG9naW5GaWVsZHNfY29udGFpbmVyX19mX3BoWlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzIyMjc3NTYyNjY2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9zaGF5YW4vRG9jdW1lbnRzL0NwMzE3UHJvai9jcDMxNy1mcm9udC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi9fbmV4dC9cIixcImVzTW9kdWxlXCI6ZmFsc2UsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgXG5tb2R1bGUuZXhwb3J0cy5fX2NoZWNrc3VtID0gXCI4OTM5OGJjZDViYjRcIlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/styles/loginFields.module.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/LoginFields.tsx":
/*!****************************************!*\
  !*** ./app/components/LoginFields.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/loginFields.module.css */ \"(app-pages-browser)/./app/components/styles/loginFields.module.css\");\n/* harmony import */ var _styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoginFields = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const api = \"http://127.0.0.1:8000/api/signup/\";\n    //handle submission\n    const handleSubmission = async (event)=>{\n        event.preventDefault();\n        const userDetails = {\n            email,\n            password\n        };\n        try {\n            const res = await fetch(api, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(userDetails)\n            });\n            if (!res.ok) {\n                console.log(\"login response not ok\");\n            }\n            const data = await res.json();\n            console.log(\"Success:\", data);\n        } catch (error) {\n            console.log(\"error posting login details: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: \"Loginpage\"\n            }, void 0, false, {\n                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmission,\n                id: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().UserForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().emailInput),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().passInput),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: password,\n                                onChange: (e)=>setPass(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_loginFields_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginButton),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/components/LoginFields.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFields, \"dOBRb0/OLWZm+8D1hsNALHFg4mo=\");\n_c = LoginFields;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFields);\nvar _c;\n$RefreshReg$(_c, \"LoginFields\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xvZ2luRmllbGRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QjtBQUMyQjtBQUNXO0FBTy9ELE1BQU1HLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNJLFVBQVVDLFFBQVEsR0FBR0wsK0NBQVFBLENBQVM7SUFDN0MsTUFBTU0sTUFBYztJQUVwQixtQkFBbUI7SUFDbkIsTUFBTUMsbUJBQW1CLE9BQU9DO1FBQzVCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGNBQTJCO1lBQUNSO1lBQU9FO1FBQVE7UUFFakQsSUFBRztZQUNDLE1BQU1PLE1BQU0sTUFBTUMsTUFBTU4sS0FDSjtnQkFBSU8sUUFBUztnQkFDVEMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3pCO1lBQ3BCLElBQUksQ0FBQ0MsSUFBSU8sRUFBRSxFQUFDO2dCQUNSQyxRQUFRQyxHQUFHLENBQUM7WUFDaEI7WUFDQSxNQUFNQyxPQUFPLE1BQU1WLElBQUlXLElBQUk7WUFDM0JILFFBQVFDLEdBQUcsQ0FBQyxZQUFZQztRQUU1QixFQUFDLE9BQU1FLE9BQU07WUFDVEosUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0c7UUFDakQ7SUFDSjtJQUlGLHFCQUNFLDhEQUFDQztRQUFJQyxJQUFNMUIsaUZBQWdCOzswQkFDbkIsOERBQUM0QjtnQkFBR0MsV0FBVzdCLDhFQUFhOzBCQUFFOzs7Ozs7MEJBQzlCLDhEQUFDK0I7Z0JBQUtDLFVBQVV4QjtnQkFBa0JrQixJQUFLMUIsZ0ZBQWU7O2tDQUNsRCw4REFBQ3lCO3dCQUFJSSxXQUFhN0Isa0ZBQWlCOzswQ0FDL0IsOERBQUNtQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLE9BQU9wQztnQ0FBT3FDLFVBQVUsQ0FBQ0MsSUFBTXJDLFNBQVNxQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHOUUsOERBQUNkO3dCQUFJSSxXQUFZN0IsaUZBQWdCOzswQ0FDN0IsOERBQUNtQztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1FLE9BQU9sQztnQ0FBVW1DLFVBQVUsQ0FBQ0MsSUFBTW5DLFFBQVFtQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHbkUsOERBQUNLO3dCQUFPTixNQUFLO3dCQUFTVCxXQUFZN0IsbUZBQWtCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEU7R0FyRE1FO0tBQUFBO0FBdUROLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvZ2luRmllbGRzLnRzeD9jMjE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvbG9naW5GaWVsZHMubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBVc2VyRGV0YWlsc3tcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmNvbnN0IExvZ2luRmllbGRzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IGFwaTogc3RyaW5nID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvc2lnbnVwLydcblxuICAgIC8vaGFuZGxlIHN1Ym1pc3Npb25cbiAgICBjb25zdCBoYW5kbGVTdWJtaXNzaW9uID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB1c2VyRGV0YWlsczogVXNlckRldGFpbHMgPSB7ZW1haWwsIHBhc3N3b3JkfTtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGV0YWlscylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlcy5vayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHJlc3BvbnNlIG5vdCBvaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIGRhdGEpO1xuXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgcG9zdGluZyBsb2dpbiBkZXRhaWxzOiAnLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZCA9IHtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkxvZ2lucGFnZTwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWlzc2lvbn0gaWQgPXtzdHlsZXMuVXNlckZvcm19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5lbWFpbElucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLnBhc3NJbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSB7c3R5bGVzLmxvZ2luQnV0dG9ufT5Mb2dpbjwvYnV0dG9uPlxuXG5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZpZWxkc1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJMb2dpbkZpZWxkcyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3MiLCJhcGkiLCJoYW5kbGVTdWJtaXNzaW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEZXRhaWxzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsImVycm9yIiwiZGl2IiwiaWQiLCJjb250YWluZXIiLCJoMSIsImNsYXNzTmFtZSIsImhlYWRlciIsImZvcm0iLCJvblN1Ym1pdCIsIlVzZXJGb3JtIiwiZW1haWxJbnB1dCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGFzc0lucHV0IiwiYnV0dG9uIiwibG9naW5CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LoginFields.tsx\n"));

/***/ })

});