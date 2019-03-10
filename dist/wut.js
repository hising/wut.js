(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Wut.js", [], factory);
	else if(typeof exports === 'object')
		exports["Wut.js"] = factory();
	else
		root["Wut.js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GoogleAnalytics_1 = __webpack_require__(/*! ./services/GoogleAnalytics */ "./src/services/GoogleAnalytics.ts");
var Wut = /** @class */ (function () {
    function Wut() {
        this.wow = "a";
        this.google = new GoogleAnalytics_1.GoogleAnalytics("fsdfsdfs");
    }
    return Wut;
}());
exports.Wut = Wut;


/***/ }),

/***/ "./src/services/GoogleAnalytics.ts":
/*!*****************************************!*\
  !*** ./src/services/GoogleAnalytics.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GoogleAnalytics = /** @class */ (function () {
    function GoogleAnalytics(trackingId) {
        this.protocolVersion = 1;
        this.params = {};
        this.trackingId = trackingId;
        this.clientId = "";
    }
    GoogleAnalytics.prototype.anonymizeIp = function (anonymize) {
        if (anonymize) {
            this.params["aip"] = 1;
        }
        else if (this.params.hasOwnProperty("aip")) {
            delete this.params.aip;
        }
    };
    GoogleAnalytics.prototype.setCacheBuster = function () { };
    GoogleAnalytics.prototype.trackEvent = function (eventCategory, eventAction, eventLabel, eventValue) { };
    GoogleAnalytics.prototype.trackPageView = function () { };
    GoogleAnalytics.prototype.trackScreenView = function () { };
    GoogleAnalytics.prototype.setClientId = function () { };
    GoogleAnalytics.prototype.setUserId = function () { };
    GoogleAnalytics.prototype.startSession = function () { };
    GoogleAnalytics.prototype.endSession = function () { };
    GoogleAnalytics.prototype.overrideIpAddress = function (ipAddress) { };
    GoogleAnalytics.prototype.overrideUserAgent = function (userAgent) { };
    GoogleAnalytics.prototype.overrideGeo = function (geoid) { };
    GoogleAnalytics.prototype.setReferrer = function (referrer) { };
    GoogleAnalytics.prototype.setCampaignName = function (campaignName) { };
    GoogleAnalytics.prototype.setCampaignSource = function (campaignSource) { };
    GoogleAnalytics.prototype.setCampaignMedium = function (campaignMedium) { };
    GoogleAnalytics.prototype.setCampaignKeyword = function (campaignKeyword) { };
    GoogleAnalytics.prototype.setCampaignContent = function (campaignContent) { };
    GoogleAnalytics.prototype.setCampaignId = function (campaignId) { };
    GoogleAnalytics.prototype.setGoogleAdsId = function (googleAdsId) { };
    GoogleAnalytics.prototype.setGoogleDisplayAdsId = function (googleDisplayAdsId) { };
    GoogleAnalytics.prototype.setScreenResolution = function (screenResolution) { };
    GoogleAnalytics.prototype.setViewportSize = function (viewportSize) { };
    GoogleAnalytics.prototype.setDocumentEncoding = function (documentEncoding) { };
    GoogleAnalytics.prototype.setScreenColors = function (screenColors) { };
    GoogleAnalytics.prototype.setUserLanguage = function (userLanguage) { };
    GoogleAnalytics.prototype.setJavaEnabled = function (javaEnabled) { };
    GoogleAnalytics.prototype.setFlashVersion = function (flashVersion) { };
    GoogleAnalytics.prototype.setHitType = function (hitType) { };
    GoogleAnalytics.prototype.setNonInteractive = function (isInteractive) { };
    GoogleAnalytics.prototype.setLocationURL = function (locationURL) { };
    GoogleAnalytics.prototype.setHostName = function (hostName) { };
    GoogleAnalytics.prototype.setPath = function (path) { };
    GoogleAnalytics.prototype.setTitle = function (title) { };
    GoogleAnalytics.prototype.setScreenName = function (screenName) { };
    GoogleAnalytics.prototype.setContentGroup = function (contentGroup, value) { };
    GoogleAnalytics.prototype.setLinkID = function (linkID) { };
    GoogleAnalytics.prototype.setAppName = function (appName) { };
    GoogleAnalytics.prototype.setAppId = function (appId) { };
    GoogleAnalytics.prototype.setAppVersion = function (appVersion) { };
    GoogleAnalytics.prototype.setAppInstallerId = function (appInstallerId) { };
    GoogleAnalytics.prototype.setTransactionId = function (transactionId) { };
    GoogleAnalytics.prototype.setTransactionAffiliation = function (transactionAffiliation) { };
    GoogleAnalytics.prototype.setTransactionRevenue = function (transactionRevenue) { };
    GoogleAnalytics.prototype.setTransactionShipping = function (transactionShipping) { };
    GoogleAnalytics.prototype.setTransactionTax = function (transactionTax) { };
    GoogleAnalytics.prototype.setItemName = function (itemName) { };
    GoogleAnalytics.prototype.setItemPrice = function (itemPrice) { };
    GoogleAnalytics.prototype.setItemQuantity = function (itemQuantity) { };
    GoogleAnalytics.prototype.setItemCode = function (itemCode) { };
    GoogleAnalytics.prototype.setItemCategory = function (itemCategory) { };
    GoogleAnalytics.prototype.setProductSKU = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductName = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductBrand = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductCategory = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductVariant = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductPrice = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductQuantity = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductCouponCode = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductPosition = function (productIndex, value) { };
    GoogleAnalytics.prototype.setProductCustomDimension = function (productIndex, dimensionIndex, value) { };
    GoogleAnalytics.prototype.setProductCustomMetric = function (productIndex, metricIndex, value) { };
    GoogleAnalytics.prototype.setProductAction = function (productAction, transactionId, affiliation, revenue, tax, shipping, couponCode, productActionList, checkoutStep, checkoutStepOption) { };
    GoogleAnalytics.prototype.setProductImpressionListName = function (listIndex, value) { };
    GoogleAnalytics.prototype.setProductImpressionSKU = function (listIndex, productIndex, sku) { };
    GoogleAnalytics.prototype.setProductImpressionName = function (listIndex, productIndex, name) { };
    GoogleAnalytics.prototype.setProductImpressionBrand = function (listIndex, productIndex, brand) { };
    GoogleAnalytics.prototype.setProductImpressionCategory = function (listIndex, productIndex, category) { };
    GoogleAnalytics.prototype.setProductImpressionVariant = function (listIndex, productIndex, variant) { };
    GoogleAnalytics.prototype.setProductImpressionPosition = function (listIndex, productIndex, position) { };
    GoogleAnalytics.prototype.setProductImpressionPrice = function (listIndex, productIndex, price) { };
    GoogleAnalytics.prototype.setProductImpressionCustomDimension = function (listIndex, productIndex, customDimensionIndex, value) { };
    GoogleAnalytics.prototype.setProductImpressionCustomMetric = function (listIndex, productIndex, customMetricIndex, value) { };
    GoogleAnalytics.prototype.setPromotionId = function (promoIndex, promotionId) { };
    GoogleAnalytics.prototype.setPromotionName = function (promoIndex, promotionName) { };
    GoogleAnalytics.prototype.setPromotionCreative = function (promoIndex, promotionCreative) { };
    GoogleAnalytics.prototype.setPromotionPosition = function (promoIndex, promotionPosition) { };
    GoogleAnalytics.prototype.setPromotionAction = function (promotionAction) { };
    GoogleAnalytics.prototype.setCurrencyCode = function (currencyCode) { };
    GoogleAnalytics.prototype.setSocialNetwork = function (socialNetwork) { };
    GoogleAnalytics.prototype.setSocialAction = function (socialAction) { };
    GoogleAnalytics.prototype.setSocialActionTarget = function (socialActionTarget) { };
    GoogleAnalytics.prototype.setUserTiming = function (timingCategory, timingVariable, timingTimeMs, timingLabel) { };
    GoogleAnalytics.prototype.setPageLoadTime = function (pageLoadTimeMs) { };
    GoogleAnalytics.prototype.setDNSLookupTime = function (dnsLookupTimeMs) { };
    GoogleAnalytics.prototype.setPageDownloadTime = function (downloadTimeMs) { };
    GoogleAnalytics.prototype.setRedirectResponseTime = function (redirectResponseTimeMs) { };
    GoogleAnalytics.prototype.setTpcConnectTime = function (tpcConnectTimeMs) { };
    GoogleAnalytics.prototype.setServerResponseTime = function (serverResponseTimeMs) { };
    GoogleAnalytics.prototype.setDOMInteractiveTime = function (domInteractiveTimeMs) { };
    GoogleAnalytics.prototype.setContentLoadTime = function (contentLoadTimeMs) { };
    GoogleAnalytics.prototype.setException = function (exceptionDescription, isFatal) { };
    GoogleAnalytics.prototype.setCustomDimension = function (dimensionIndex, value) { };
    GoogleAnalytics.prototype.setCustomMetric = function (metricIndex, value) { };
    GoogleAnalytics.prototype.setContentExperiment = function (experimentId, experimentVariant) { };
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;


/***/ })

/******/ });
});
//# sourceMappingURL=wut.js.map