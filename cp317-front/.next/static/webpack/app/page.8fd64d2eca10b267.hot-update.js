"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/hello-world/test-component.tsx":
/*!********************************************!*\
  !*** ./app/hello-world/test-component.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst TestComponent = ()=>{\n    _s();\n    const [showComponent, setShowComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setShowComponent(!showComponent),\n                children: \"Show Time\"\n            }, void 0, false, {\n                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/hello-world/test-component.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            showComponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrentTime, {}, void 0, false, {\n                fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/hello-world/test-component.tsx\",\n                lineNumber: 16,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/hello-world/test-component.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TestComponent, \"v8uOQmp8J3Jt+KlaUc7QfXKxL5U=\");\n_c = TestComponent;\nconst CurrentTime = ()=>{\n    _s1();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //const [message, setMessage] = useState<string>('');\n    //const [loading, setLoading] = useState<boolean>(true);\n    //const [error, setError] = useState<string | null>(null)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //define the funciton\n        const fetchTime = async ()=>{\n            console.log(\"fetchtime!\");\n            // use django api back end to fetch time in real-time\n            try {\n                const res = await fetch(\"http://127.0.0.1:8000/api/time/\");\n                const data = await res.json();\n                setTime(data.time);\n            } catch (error) {\n                console.error(\"time fucky\", error);\n            }\n        };\n        //actual fetching\n        fetchTime(); // init fetch\n        const intervalID = setInterval(fetchTime, 1000); // every so ofetn\n        return ()=>clearInterval(intervalID);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"The current time is: \",\n                time\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shayan/Documents/Cp317Proj/cp317-front/app/hello-world/test-component.tsx\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s1(CurrentTime, \"PsMgnLgzzQiamQWS0F3M3yb0/nk=\");\n_c1 = CurrentTime;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"TestComponent\");\n$RefreshReg$(_c1, \"CurrentTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWxsby13b3JsZC90ZXN0LWNvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBTTVDLE1BQU1FLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0osK0NBQVFBLENBQUM7SUFFbkQscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTUgsaUJBQWlCLENBQUNEOzBCQUFnQjs7Ozs7O1lBR3hEQSwrQkFBaUIsOERBQUNLOzs7Ozs7Ozs7OztBQUd6QjtHQVhNTjtLQUFBQTtBQWFOLE1BQU1NLGNBQWM7O0lBQ2hCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQyxxREFBcUQ7SUFDckQsd0RBQXdEO0lBQ3hELHlEQUF5RDtJQUV6REMsZ0RBQVNBLENBQUM7UUFDTixxQkFBcUI7UUFDckIsTUFBTVUsWUFBWTtZQUVkQyxRQUFRQyxHQUFHLENBQUM7WUFDWixxREFBcUQ7WUFDckQsSUFBSTtnQkFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU07Z0JBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtnQkFDM0JQLFFBQVFNLEtBQUtQLElBQUk7WUFDckIsRUFBRSxPQUFPUyxPQUFNO2dCQUNYTixRQUFRTSxLQUFLLENBQUMsY0FBY0E7WUFDaEM7UUFHSjtRQUNBLGlCQUFpQjtRQUNqQlAsYUFBYSxhQUFhO1FBRTFCLE1BQU1RLGFBQWFDLFlBQVlULFdBQVcsT0FBTyxpQkFBaUI7UUFDbEUsT0FBTyxJQUFNVSxjQUFjRjtJQUUvQixHQUFHLEVBQUU7SUFLTCxxQkFDSTtrQkFDQSw0RUFBQ0c7O2dCQUFFO2dCQUFzQmI7Ozs7Ozs7O0FBR2pDO0lBdkNNRDtNQUFBQTtBQXlDTiwrREFBZU4sYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaGVsbG8td29ybGQvdGVzdC1jb21wb25lbnQudHN4PzMxOTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFJlc3BvbnNle1xuICAgIHRpbWU6IHN0cmluZztcbn1cblxuY29uc3QgVGVzdENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dDb21wb25lbnQsIHNldFNob3dDb21wb25lbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd0NvbXBvbmVudCghc2hvd0NvbXBvbmVudCl9PlxuICAgICAgICBTaG93IFRpbWVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dDb21wb25lbnQgJiYgPEN1cnJlbnRUaW1lIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ3VycmVudFRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy9jb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgICAvL2NvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIC8vY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9kZWZpbmUgdGhlIGZ1bmNpdG9uXG4gICAgICAgIGNvbnN0IGZldGNoVGltZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaHRpbWUhXCIpXG4gICAgICAgICAgICAvLyB1c2UgZGphbmdvIGFwaSBiYWNrIGVuZCB0byBmZXRjaCB0aW1lIGluIHJlYWwtdGltZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS90aW1lLycpXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZShkYXRhLnRpbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0aW1lIGZ1Y2t5XCIsIGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfTtcbiAgICAgICAgLy9hY3R1YWwgZmV0Y2hpbmdcbiAgICAgICAgZmV0Y2hUaW1lKCk7IC8vIGluaXQgZmV0Y2hcblxuICAgICAgICBjb25zdCBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZmV0Y2hUaW1lLCAxMDAwKTsgLy8gZXZlcnkgc28gb2ZldG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPHA+VGhlIGN1cnJlbnQgdGltZSBpczoge3RpbWV9PC9wPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdENvbXBvbmVudDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0Q29tcG9uZW50Iiwic2hvd0NvbXBvbmVudCIsInNldFNob3dDb21wb25lbnQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiQ3VycmVudFRpbWUiLCJ0aW1lIiwic2V0VGltZSIsImZldGNoVGltZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/hello-world/test-component.tsx\n"));

/***/ })

});