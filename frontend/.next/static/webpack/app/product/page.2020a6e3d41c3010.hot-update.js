"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/page",{

/***/ "(app-pages-browser)/./services/useGetProduct.js":
/*!***********************************!*\
  !*** ./services/useGetProduct.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCreateProduct: function() { return /* binding */ useCreateProduct; },\n/* harmony export */   useDeleteProduct: function() { return /* binding */ useDeleteProduct; },\n/* harmony export */   useGetProduct: function() { return /* binding */ useGetProduct; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\nvar _s = $RefreshSig$();\n\nconst fetcher = async (url)=>{\n    const response = await fetch(url, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            // İzin verilen origin(ler). Gerekirse burayı güvenlik kurallarınıza göre özelleştirebilirsiniz.\n            \"Access-Control-Allow-Origin\": \"http://localhost:3000\"\n        }\n    });\n    if (!response.ok) {\n        throw new Error(\"Network response was not ok\");\n    }\n    return response.json();\n};\nconst useGetProduct = ()=>{\n    _s();\n    const { data, error, isLoading, mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"http://localhost:3001/api/products/\", fetcher);\n    return {\n        data,\n        error,\n        isLoading\n    };\n};\n_s(useGetProduct, \"VRI3YSxoWYZ/jyoKeeIu/AvyMKw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\nconst useCreateProduct = async (data)=>{\n    try {\n        const response = await fetch(\"http://localhost:3001/api/products/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        return response;\n    } catch (e) {\n        console.log(e);\n    }\n};\nconst useDeleteProduct = async (productId)=>{\n    try {\n        const response = await fetch(\"http://localhost:3001/api/products/\".concat(productId), {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (response.ok) {\n            return response.json();\n        } else {\n            console.error(\"\\xdcr\\xfcn silme başarısız oldu\");\n            throw new Error(\"\\xdcr\\xfcn silme başarısız oldu\");\n        }\n    } catch (error) {\n        console.error(\"\\xdcr\\xfcn silinirken hata oluştu:\", error);\n        throw error;\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlcnZpY2VzL3VzZUdldFByb2R1Y3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDeEIsTUFBTUMsVUFBVSxPQUFPQztJQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GLEtBQUs7UUFDOUJHLFFBQVE7UUFDUkMsU0FBUztZQUNMLGdCQUFnQjtZQUNoQixnR0FBZ0c7WUFDaEcsK0JBQStCO1FBQ25DO0lBQ0o7SUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUVBLE9BQU9MLFNBQVNNLElBQUk7QUFDeEI7QUFFQSxNQUFNQyxnQkFBZ0I7O0lBQ2xCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFLEdBQUdkLCtDQUFNQSxDQUFDLHVDQUF1Q0M7SUFDekYsT0FBTztRQUNIVTtRQUFNQztRQUFPQztJQUNqQjtBQUNKO0dBTE1IOztRQUN5Q1YsMkNBQU1BOzs7QUFLckQsTUFBTWUsbUJBQW1CLE9BQU9KO0lBQzVCLElBQUk7UUFDQSxNQUFNUixXQUFXLE1BQU1DLE1BQU0sdUNBQXVDO1lBQ2hFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBRXBCO1lBQ0FVLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1A7UUFDekI7UUFDQSxPQUFPUjtJQUNYLEVBQUUsT0FBT2dCLEdBQUc7UUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtBQUNKO0FBQ0EsTUFBTUcsbUJBQW1CLE9BQU9DO0lBQzVCLElBQUk7UUFDQSxNQUFNcEIsV0FBVyxNQUFNQyxNQUFNLHNDQUFnRCxPQUFWbUIsWUFBYTtZQUM1RWxCLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUVBLElBQUlILFNBQVNJLEVBQUUsRUFBRTtZQUNiLE9BQU9KLFNBQVNNLElBQUk7UUFDeEIsT0FBTztZQUNIVyxRQUFRUixLQUFLLENBQUM7WUFDZCxNQUFNLElBQUlKLE1BQU07UUFDcEI7SUFDSixFQUFFLE9BQU9JLE9BQU87UUFDWlEsUUFBUVIsS0FBSyxDQUFDLHNDQUFnQ0E7UUFDOUMsTUFBTUE7SUFDVjtBQUNKO0FBRTREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL3VzZUdldFByb2R1Y3QuanM/ZmVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIC8vIMSwemluIHZlcmlsZW4gb3JpZ2luKGxlcikuIEdlcmVraXJzZSBidXJhecSxIGfDvHZlbmxpayBrdXJhbGxhcsSxbsSxemEgZ8O2cmUgw7Z6ZWxsZcWfdGlyZWJpbGlyc2luaXouXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IHVzZUdldFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nLCBtdXRhdGUgfSA9IHVzZVNXUignaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9wcm9kdWN0cy8nLCBmZXRjaGVyKVxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGEsIGVycm9yLCBpc0xvYWRpbmdcbiAgICB9XG59XG5jb25zdCB1c2VDcmVhdGVQcm9kdWN0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Byb2R1Y3RzLycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLy8gR2VyZWtpcnNlIGRpxJ9lciBiYcWfbMSxa2xhcsSxIGJ1cmF5YSBla2xleWluXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxufVxuY29uc3QgdXNlRGVsZXRlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ8OccsO8biBzaWxtZSBiYcWfYXLEsXPEsXogb2xkdScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfDnHLDvG4gc2lsbWUgYmHFn2FyxLFzxLF6IG9sZHUnKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ8OccsO8biBzaWxpbmlya2VuIGhhdGEgb2x1xZ90dTonLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IHVzZUdldFByb2R1Y3QsIHVzZUNyZWF0ZVByb2R1Y3QsIHVzZURlbGV0ZVByb2R1Y3QgfSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwianNvbiIsInVzZUdldFByb2R1Y3QiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJtdXRhdGUiLCJ1c2VDcmVhdGVQcm9kdWN0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiY29uc29sZSIsImxvZyIsInVzZURlbGV0ZVByb2R1Y3QiLCJwcm9kdWN0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./services/useGetProduct.js\n"));

/***/ })

});