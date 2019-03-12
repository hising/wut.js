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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GaParams;
(function (GaParams) {
    GaParams["ProtocolVersion"] = "v";
    GaParams["TrackingId"] = "tid";
    GaParams["ClientId"] = "cid";
    GaParams["HitType"] = "t";
    GaParams["AnonymizeIP"] = "aip";
    GaParams["DataSource"] = "ds";
    GaParams["QueueTime"] = "qt";
    GaParams["CacheBuster"] = "z";
    GaParams["UserId"] = "uid";
    GaParams["SessionControl"] = "sc";
    GaParams["IPOverride"] = "uip";
    GaParams["UserAgentOverride"] = "ua";
    GaParams["GeoOverride"] = "geoid";
    GaParams["DocumentReferrer"] = "dr";
    GaParams["CampaignName"] = "cn";
    GaParams["CampaignSource"] = "cs";
    GaParams["CampaignMedium"] = "cm";
    GaParams["CampaignKeyword"] = "ck";
    GaParams["CampaignContent"] = "cc";
    GaParams["CampaignId"] = "ci";
    GaParams["GoogleAdsId"] = "gclid";
    GaParams["GoogleDisplayAdsId"] = "dclid";
    GaParams["ScreenResolution"] = "sr";
    GaParams["ViewportSize"] = "vp";
    GaParams["DocumentEncoding"] = "de";
    GaParams["ScreenColors"] = "sd";
    GaParams["UserLanguage"] = "ul";
    GaParams["JavaEnabled"] = "je";
    GaParams["FlashVersion"] = "fl";
    GaParams["NonInteractionHit"] = "ni";
    GaParams["DocumentLocationURL"] = "dl";
    GaParams["DocumentHostName"] = "dh";
    GaParams["DocumentPath"] = "dp";
    GaParams["DocumentTitle"] = "dt";
    GaParams["ScreenName"] = "cd";
    GaParams["ContentGroup"] = "cg%d";
    GaParams["LinkId"] = "linkid";
    GaParams["ApplicationName"] = "an";
    GaParams["ApplicationID"] = "aid";
    GaParams["ApplicationVersion"] = "av";
    GaParams["ApplicationInstallerID"] = "aiid";
    GaParams["EventCategory"] = "ec";
    GaParams["EventAction"] = "ea";
    GaParams["EventLabel"] = "el";
    GaParams["EventValue"] = "ev";
    GaParams["TransactionID"] = "ti";
    GaParams["TransactionAffiliation"] = "ta";
    GaParams["TransactionRevenue"] = "tr";
    GaParams["TransactionShipping"] = "ts";
    GaParams["TransactionTax"] = "tt";
    GaParams["ItemName"] = "in";
    GaParams["ItemPrice"] = "ip";
    GaParams["ItemQuantity"] = "iq";
    GaParams["ItemCode"] = "ic";
    GaParams["ItemCategory"] = "iv";
    GaParams["ProductSKU"] = "pr%did";
    GaParams["ProductName"] = "pr%dnm";
    GaParams["ProductBrand"] = "pr%dbr";
    GaParams["ProductCategory"] = "pr%dca";
    GaParams["ProductVariant"] = "pr%dva";
    GaParams["ProductPrice"] = "pr%dpr";
    GaParams["ProductQuantity"] = "pr%dqt";
    GaParams["ProductCouponCode"] = "pr%dcc";
    GaParams["ProductPosition"] = "pr%dps";
    GaParams["ProductCustomDimension"] = "pr%dcd%d";
    GaParams["ProductCustomMetric"] = "pr%dcm%d";
    GaParams["ProductAction"] = "pa";
    GaParams["CouponCode"] = "tcc";
    GaParams["ProductActionList"] = "pal";
    GaParams["CheckoutStep"] = "cos";
    GaParams["CheckoutStepOption"] = "col";
    GaParams["ProductImpressionListName"] = "il%dnm";
    GaParams["ProductImpressionSKU"] = "il%dpi%did";
    GaParams["ProductImpressionName"] = "il<listIndex>pi<productIndex>nm";
    GaParams["ProductImpressionBrand"] = "il<listIndex>pi<productIndex>br";
    GaParams["ProductImpressionCategory"] = "il<listIndex>pi<productIndex>ca";
    GaParams["ProductImpressionVariant"] = "il<listIndex>pi<productIndex>va";
    GaParams["ProductImpressionPosition"] = "il<listIndex>pi<productIndex>ps";
    GaParams["ProductImpressionPrice"] = "il<listIndex>pi<productIndex>pr";
    GaParams["ProductImpressionCustomDimension"] = "il<listIndex>pi<productIndex>cd<dimensionIndex>";
    GaParams["ProductImpressionCustomMetric"] = "il<listIndex>pi<productIndex>cm<metricIndex>";
    GaParams["PromotionId"] = "";
})(GaParams || (GaParams = {}));
;
var GoogleAnalytics = /** @class */ (function () {
    function GoogleAnalytics(trackingId) {
        this.trackingId = trackingId;
        this.clientId = "";
        this.params = {};
        this.transient = {};
        this.protocolVersion = 1;
        this.endpoint = "https://www.google-analytics.com/collect";
    }
    GoogleAnalytics.prototype.anonymizeIp = function (anonymize) {
        if (anonymize) {
            this.params["aip"] = 1;
        }
        else if (this.params.hasOwnProperty("aip")) {
            delete this.params.aip;
        }
    };
    GoogleAnalytics.prototype.send = function () {
        // If POST - Payload no longer than 8192 bytes
        // IF GET - encoded URL must be no longer than 8000 Bytes
    };
    GoogleAnalytics.prototype.setCacheBuster = function () {
        this.transient[GaParams.CacheBuster] = Math.round(new Date().getTime() / 1000);
    };
    GoogleAnalytics.prototype.optOut = function (isOptOut) {
    };
    GoogleAnalytics.prototype.trackEvent = function (eventCategory, eventAction, eventLabel, eventValue) { };
    GoogleAnalytics.prototype.trackPageView = function (path, url, title) { };
    GoogleAnalytics.prototype.trackScreenView = function (screenName) { };
    GoogleAnalytics.prototype.trackSocialInteraction = function (network, action, target) { };
    GoogleAnalytics.prototype.setUserTiming = function (category, variable, timeMs, label) { };
    GoogleAnalytics.prototype.trackException = function (description, fatal) { };
    GoogleAnalytics.prototype.setCustomDimension = function (dimensionIndex, value) { };
    GoogleAnalytics.prototype.setCustomMetric = function (metricIndex, value) { };
    GoogleAnalytics.prototype.setClientId = function () { };
    GoogleAnalytics.prototype.setUserId = function () { };
    GoogleAnalytics.prototype.startSession = function () {
    };
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
    GoogleAnalytics.prototype.setPageLoadTime = function (pageLoadTimeMs) { };
    GoogleAnalytics.prototype.setDNSLookupTime = function (dnsLookupTimeMs) { };
    GoogleAnalytics.prototype.setPageDownloadTime = function (downloadTimeMs) { };
    GoogleAnalytics.prototype.setRedirectResponseTime = function (redirectResponseTimeMs) { };
    GoogleAnalytics.prototype.setTpcConnectTime = function (tpcConnectTimeMs) { };
    GoogleAnalytics.prototype.setServerResponseTime = function (serverResponseTimeMs) { };
    GoogleAnalytics.prototype.setDOMInteractiveTime = function (domInteractiveTimeMs) { };
    GoogleAnalytics.prototype.setContentLoadTime = function (contentLoadTimeMs) { };
    GoogleAnalytics.prototype.setContentExperiment = function (experimentId, experimentVariant) { };
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;


/***/ })
/******/ ]);
});
//# sourceMappingURL=wut.js.map