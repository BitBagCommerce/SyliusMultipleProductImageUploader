(self["webpackChunk"] = self["webpackChunk"] || []).push([["image-uploader-entry"],{

/***/ "./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!**************************************************************************************************************************!*\
  !*** ./assets/admin/js/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \**************************************************************************************************************************/
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
webpackContext.id = "./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

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

exports.default = class extends _stimulus.Controller {
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

        if (imageDiv.firstChild) {
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

const app = exports.app = (0, _stimulusBridge.startStimulusApp)(__webpack_require__("./assets/admin/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js"], () => (__webpack_exec__("./assets/admin/js/entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9jb250cm9sbGVycy9zeWxpdXNfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvZW50cnkuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsInRhcmdldHMiLCJjb25uZWN0IiwiY2xlYXIiLCJwcmV2aWV3Q2xlYXJCdXR0b25UYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRUYXJnZXQiLCJldmVudCIsIm9uSW5wdXRDaGFuZ2UiLCJfZGlzcGF0Y2hFdmVudCIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwicGxhY2Vob2xkZXJUYXJnZXQiLCJwcmV2aWV3VGFyZ2V0IiwiY29udGFpbmVyVGFyZ2V0IiwiaW5uZXJIVE1MIiwiY29sbGVjdGlvbnNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWxldG9yIiwiaW1hZ2VEaXYiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsIkFycmF5IiwiZnJvbSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsImZsZXhXcmFwIiwidHlwZSIsImluZGV4T2YiLCJwcmV2aWV3SG9sZGVyIiwiY3JlYXRlRWxlbWVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsInByZXZpZXciLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImNsaWNrIiwiY29sbGVjdGlvbnNFbGVtZW50IiwiX3BvcHVsYXRlSW1hZ2VQcmV2aWV3IiwiaW1hZ2VUYXJnZXQiLCJjb2xsZWN0aW9uVGFyZ2V0IiwiRmlsZVJlYWRlciIsInJlYWRlciIsImJhY2tncm91bmRJbWFnZSIsInJlc3VsdCIsImltZyIsInNyYyIsInJlYWRBc0RhdGFVUkwiLCJwYXlsb2FkIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsInVzZXJFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJhcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1KOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7O0FDRFk7Ozs7OztBQUViOztrQkFFZSxjQUFjQSxvQkFBZCxDQUF5QjtBQUN0QixTQUFQQyxPQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsYUFBVixFQUF5QixTQUF6QixFQUFvQyxvQkFBcEMsRUFBMEQsV0FBMUQsQ0FBSDs7QUFFZEMsU0FBTyxHQUFHO0FBQ04sU0FBS0MsS0FBTDtBQUVBLFNBQUtDLHdCQUFMLENBQThCQyxnQkFBOUIsQ0FBK0MsT0FBL0MsRUFBd0QsTUFBTSxLQUFLRixLQUFMLEVBQTlEO0FBRUEsU0FBS0csV0FBTCxDQUFpQkQsZ0JBQWpCLENBQWtDLFFBQWxDLEVBQTZDRSxLQUFELElBQVcsS0FBS0MsYUFBTCxDQUFtQkQsS0FBbkIsQ0FBdkQ7O0FBRUEsU0FBS0UsY0FBTCxDQUFvQixrQkFBcEI7QUFDSDs7QUFFRE4sT0FBSyxHQUFHO0FBQ0osU0FBS0csV0FBTCxDQUFpQkksS0FBakIsR0FBeUIsRUFBekI7QUFDQSxTQUFLSixXQUFMLENBQWlCSyxLQUFqQixDQUF1QkMsT0FBdkIsR0FBaUMsT0FBakM7QUFDQSxTQUFLQyxpQkFBTCxDQUF1QkYsS0FBdkIsQ0FBNkJDLE9BQTdCLEdBQXVDLE9BQXZDO0FBQ0EsU0FBS0UsYUFBTCxDQUFtQkgsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE1BQW5DO0FBRUEsU0FB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL3N5bGl1c19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvYWRtaW4vanMvY29udHJvbGxlcnMvc3lsaXVzX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvYWRtaW4vanMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ3BsYWNlaG9sZGVyJywgJ3ByZXZpZXcnLCAncHJldmlld0NsZWFyQnV0dG9uJywgJ2NvbnRhaW5lciddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMucHJldmlld0NsZWFyQnV0dG9uVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbGVhcigpKTtcblxuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50KSk7XG5cbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnZHJvcHpvbmU6Y29ubmVjdCcpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJpdGVtXCJdJylcblxuICAgICAgICBjb2xsZWN0aW9uc0VsZW1lbnRzLmZvckVhY2goc2VsZXRvciA9PiB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2VsZXRvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlRGl2ID0gc2VsZXRvci5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJkcm9wem9uZS1pbWFnZS12aWV3XCJdJyk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZXRvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNsZWFyJyk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcykuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lclRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG5cbiAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgJiYgZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlld0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdIb2xkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzIwcHgnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZCgnZHJvcHpvbmUtcHJldmlldy1pbWFnZScpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdIb2xkZXIuYXBwZW5kQ2hpbGQocHJldmlldyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdkcm9wem9uZS1wcmV2aWV3LWZpbGVuYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGZpbGUubmFtZTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3SG9sZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuYXBwZW5kQ2hpbGQocHJldmlld0hvbGRlcik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1jb2xsZWN0aW9uPVwiYWRkXCJdJykuY2xpY2soKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLWNvbGxlY3Rpb249XCJpdGVtXCJdOmxhc3QtY2hpbGQnKVxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlSW1hZ2VQcmV2aWV3KGZpbGUsIHByZXZpZXcsIGNvbGxlY3Rpb25zRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ2Ryb3B6b25lOmNoYW5nZScsIGZpbGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUltYWdlUHJldmlldyhmaWxlLCBpbWFnZVRhcmdldCwgY29sbGVjdGlvblRhcmdldCkge1xuICAgICAgICBpZiAodHlwZW9mIEZpbGVSZWFkZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGltYWdlVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgaW1hZ2VUYXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBldmVudC50YXJnZXQucmVzdWx0ICsgJ1wiKSc7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCBpbWFnZURpdiA9IGNvbGxlY3Rpb25UYXJnZXQucXVlcnlTZWxlY3RvcignW2lkPVwiZHJvcHpvbmUtaW1hZ2Utdmlld1wiXScpO1xuICAgICAgICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuXG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCA9IG51bGwsIGNhbkJ1YmJsZSA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdXNlckV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIHVzZXJFdmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlLCBwYXlsb2FkKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudCh1c2VyRXZlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpOyJdLCJzb3VyY2VSb290IjoiIn0=