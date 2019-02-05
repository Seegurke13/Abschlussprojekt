(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-size: .875rem; }\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom; }\n/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */ }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky; } }\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333; }\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999; }\n.sidebar .nav-link.active {\n  color: #007bff; }\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n  color: inherit; }\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase; }\n/*\n * Content\n */\n[role=\"main\"] {\n  padding-top: 133px;\n  /* Space for fixed navbar */ }\n@media (min-width: 768px) {\n  [role=\"main\"] {\n    padding-top: 48px;\n    /* Space for fixed navbar */ } }\n/*\n * Navbar\n */\n.navbar-brand {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25); }\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0; }\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1); }\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL3N0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRTtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWiw0QkFBMkIsRUFDNUI7QUFFRDs7R0FFRztBQUVIO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sVUFBUztFQUNULFFBQU87RUFDUCxhQUFZO0VBQUUsdUJBQXVCO0VBQ3JDLGtCQUFpQjtFQUFFLHNCQUFzQjtFQUN6Qyw4Q0FBNEMsRUFDN0M7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sMkJBQTBCO0VBQzFCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQUUsOERBQThELEVBQ2pGO0FBRTJEO0VBQzFEO0lBQ0UseUJBQXdCO0lBQ3hCLGlCQUFnQixFQUNqQixFQUFBO0FBR0g7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaO0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsWUFBVyxFQUNaO0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7QUFFRDs7RUFFRSxlQUFjLEVBQ2Y7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQiwwQkFBeUIsRUFDMUI7QUFFRDs7R0FFRztBQ1JIO0VEV0UsbUJBQWtCO0VBQUUsNEJBQTRCLEVBQ2pEO0FBRUQ7RUNURTtJRFdFLGtCQUFpQjtJQUFFLDRCQUE0QixFQUNoRCxFQUFBO0FBR0g7O0dBRUc7QUFFSDtFQUNFLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixzQ0FBb0M7RUFDcEMsK0NBQTZDLEVBQzlDO0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLFlBQVc7RUFDWCwyQ0FBeUM7RUFDekMsdUNBQXFDLEVBQ3RDO0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsZ0RBQThDLEVBQy9DIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbi5mZWF0aGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4vKlxuICogU2lkZWJhclxuICovXG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiA0OHB4IDAgMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkpIHtcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgfVxufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKlxuICogQ29udGVudFxuICovXG5cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiAxMzNweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgW3JvbGU9XCJtYWluXCJdIHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xuICB9XG59XG5cbi8qXG4gKiBOYXZiYXJcbiAqL1xuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbn1cblxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBmb250LXNpemU6IC44NzVyZW07IH1cblxuLmZlYXRoZXIge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207IH1cblxuLypcbiAqIFNpZGViYXJcbiAqL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC8qIEJlaGluZCB0aGUgbmF2YmFyICovXG4gIHBhZGRpbmc6IDQ4cHggMCAwO1xuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqLyB9XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkge1xuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5OyB9IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7IH1cblxuLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjOTk5OyB9XG5cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwN2JmZjsgfVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi8qXG4gKiBDb250ZW50XG4gKi9cbltyb2xlPVwibWFpblwiXSB7XG4gIHBhZGRpbmctdG9wOiAxMzNweDtcbiAgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqLyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICAgIC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi8gfSB9XG5cbi8qXG4gKiBOYXZiYXJcbiAqL1xuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxuXG4ubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map