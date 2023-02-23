(self["webpackChunk"] = self["webpackChunk"] || []).push([["image-uploader-entry"],{

/***/ "./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!****************************************************************************************************************************!*\
  !*** ./assets/admin/js/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./sylius_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/admin/js/controllers/sylius_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/admin/js/controllers.json":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/admin/js/controllers.json ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/admin/js/controllers/sylius_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/admin/js/controllers/sylius_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _stimulus = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
exports["default"] = class extends _stimulus.Controller {
  static targets = ['input', 'placeholder', 'preview', 'previewClearButton', 'container'];
  connect() {
    this.clear();
    this.previewClearButtonTarget.addEventListener('click', () => this.clear());
    this.inputTarget.addEventListener('change', event => this.onInputChange(event));
    this._dispatchEvent('dropzone:connect');
  }
  clear() {
    this.inputTarget.value = '';
    this.inputTarget.style.display = 'block';
    this.placeholderTarget.style.display = 'block';
    this.previewTarget.style.display = 'none';
    this.containerTarget.innerHTML = '';
    const collectionsElements = document.querySelectorAll('[data-form-collection="item"]');
    collectionsElements.forEach(seletor => {
      if (null !== seletor) {
        const imageDiv = seletor.querySelector('[id="dropzone-image-view"]');
        if (null !== imageDiv && imageDiv.firstChild) {
          seletor.remove();
        }
      }
    });
    this._dispatchEvent('dropzone:clear');
  }
  onInputChange(event) {
    Array.from(event.target.files).forEach(file => {
      if (typeof file === 'undefined') {
        return;
      }
      this.inputTarget.style.display = 'none';
      this.placeholderTarget.style.display = 'none';
      this.previewTarget.style.display = 'flex';
      this.containerTarget.style.display = 'flex';
      this.containerTarget.style.flexWrap = 'wrap';
      if (file.type && file.type.indexOf('image') !== -1) {
        const previewHolder = document.createElement('div');
        previewHolder.style.display = 'flex';
        previewHolder.style.alignItems = 'center';
        previewHolder.style.marginRight = '20px';
        const preview = document.createElement('div');
        preview.classList.add('dropzone-preview-image');
        previewHolder.appendChild(preview);
        const name = document.createElement('div');
        name.classList.add('dropzone-preview-filename');
        name.textContent = file.name;
        previewHolder.appendChild(name);
        this.containerTarget.appendChild(previewHolder);
        document.querySelector('[data-form-collection="add"]').click();
        const collectionsElement = document.querySelector('[data-form-collection="item"]:last-child');
        this._populateImagePreview(file, preview, collectionsElement);
      }
      this._dispatchEvent('dropzone:change', file);
    });
  }
  _populateImagePreview(file, imageTarget, collectionTarget) {
    if (typeof FileReader === 'undefined') {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      imageTarget.style.display = 'block';
      imageTarget.style.backgroundImage = 'url("' + event.target.result + '")';
      const img = document.createElement("img");
      img.src = event.target.result;
      const imageDiv = collectionTarget.querySelector('[id="dropzone-image-view"]');
      imageDiv.appendChild(img);
    });
    reader.readAsDataURL(file);
  }
  _dispatchEvent(name, payload = null, canBubble = false, cancelable = false) {
    const userEvent = document.createEvent('CustomEvent');
    userEvent.initCustomEvent(name, canBubble, cancelable, payload);
    this.element.dispatchEvent(userEvent);
  }
};

/***/ }),

/***/ "./assets/admin/js/entry.js":
/*!**********************************!*\
  !*** ./assets/admin/js/entry.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.app = undefined;
var _stimulusBridge = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
const app = exports.app = (0, _stimulusBridge.startStimulusApp)(__webpack_require__("./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js"], () => (__webpack_exec__("./assets/admin/js/entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQTtBQUVPLE1BQU1rRSxHQUFHLEdBQUFyRSxXQUFBLEdBQUcsSUFBQXNFLGdDQUFnQixFQUFDbkUscUpBSW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvY29udHJvbGxlcnMvc3lsaXVzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9zeWxpdXNfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2FkbWluL2pzL2NvbnRyb2xsZXJzL3N5bGl1c19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2FkbWluL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ3BsYWNlaG9sZGVyJywgJ3ByZXZpZXcnLCAncHJldmlld0NsZWFyQnV0dG9uJywgJ2NvbnRhaW5lciddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcblxuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50KSk7XG5cbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y29ubmVjdCcpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJpdGVtXCJdJylcblxuICAgICAgICBjb2xsZWN0aW9uc0VsZW1lbnRzLmZvckVhY2goc2VsZXRvciA9PiB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2VsZXRvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGl2ID0gc2VsZXRvci5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJkcm9wem9uZS1pbWFnZS12aWV3XCJdJyk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGltYWdlRGl2ICYmIGltYWdlRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZXRvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNsZWFyJyk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcykuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG5cbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgJiYgZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlld0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdIb2xkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzIwcHgnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZCgnZHJvcHpvbmUtcHJldmlldy1pbWFnZScpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdIb2xkZXIuYXBwZW5kQ2hpbGQocHJldmlldyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdkcm9wem9uZS1wcmV2aWV3LWZpbGVuYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGZpbGUubmFtZTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuYXBwZW5kQ2hpbGQocHJldmlld0hvbGRlcik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1jb2xsZWN0aW9uPVwiYWRkXCJdJykuY2xpY2soKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJpdGVtXCJdOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUsIHByZXZpZXcsIGNvbGxlY3Rpb25zRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNoYW5nZScsIGZpbGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlLCBpbWFnZVRhcmdldCwgY29sbGVjdGlvblRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBldmVudC50YXJnZXQucmVzdWx0ICsgJ1wiKSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURpdiA9IGNvbGxlY3Rpb25UYXJnZXQucXVlcnlTZWxlY3RvcignW2lkPVwiZHJvcHpvbmUtaW1hZ2Utdmlld1wiXScpO1xuICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuXG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IG51bGwsIGNhbkJ1YmJsZSA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdXNlckV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIHVzZXJFdmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlLCBwYXlsb2FkKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudCh1c2VyRXZlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGltdWx1cyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiQ29udHJvbGxlciIsInRhcmdldHMiLCJjb25uZWN0IiwiY2xlYXIiLCJwcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJfZGlzcGF0Y2hFdmVudCIsInN0eWxlIiwiZGlzcGxheSIsInBsYWNlaG9sZGVyVGFyZ2V0IiwicHJldmlld1RhcmdldCIsImNvbnRhaW5lclRhcmdldCIsImlubmVySFRNTCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2VsZXRvciIsImltYWdlRGl2IiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJyZW1vdmUiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJmbGV4V3JhcCIsInR5cGUiLCJpbmRleE9mIiwicHJldmlld0hvbGRlciIsImNyZWF0ZUVsZW1lbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luUmlnaHQiLCJwcmV2aWV3IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJuYW1lIiwidGV4dENvbnRlbnQiLCJjbGljayIsImNvbGxlY3Rpb25zRWxlbWVudCIsIl9wb3B1bGF0ZUltYWdlUHJldmlldyIsImltYWdlVGFyZ2V0IiwiY29sbGVjdGlvblRhcmdldCIsIkZpbGVSZWFkZXIiLCJyZWFkZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXN1bHQiLCJpbWciLCJzcmMiLCJyZWFkQXNEYXRhVVJMIiwicGF5bG9hZCIsImNhbkJ1YmJsZSIsImNhbmNlbGFibGUiLCJ1c2VyRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImVsZW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiX3N0aW11bHVzQnJpZGdlIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9