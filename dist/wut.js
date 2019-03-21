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

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(2);
var google_1 = __webpack_require__(3);
var GoogleAnalytics = /** @class */ (function () {
    function GoogleAnalytics(trackingId, trackerParams) {
        var _a;
        if (trackerParams === void 0) { trackerParams = {}; }
        this._trackingId = trackingId;
        this._transient = {};
        this._protocolVersion = 1;
        this.endpoint = "https://www.google-analytics.com/collect";
        this.client = new client_1.HttpClient();
        this.method = "post";
        this._enableTracking = true;
        this._lastTracked = {};
        this.params = (_a = {},
            _a[google_1.GaParams.TrackingId] = trackingId,
            _a[google_1.GaParams.ProtocolVersion] = trackerParams.protocolVersion || this._protocolVersion,
            _a[google_1.GaParams.ClientId] = trackerParams.clientId || this.getClientId(),
            _a[google_1.GaParams.UserId] = trackerParams.userId || this.getUserId(),
            _a);
    }
    GoogleAnalytics.prototype.anonymizeIp = function (anonymize) {
        if (anonymize) {
            this.params[google_1.GaParams.AnonymizeIP] = 1;
        }
        else if (this.params.hasOwnProperty(google_1.GaParams.AnonymizeIP)) {
            delete this.params.aip;
        }
    };
    GoogleAnalytics.prototype.send = function () {
        // If POST - Payload no longer than 8192 bytes
        // IF GET - encoded URL must be no longer than 8000 Bytes
    };
    GoogleAnalytics.prototype.setCacheBuster = function () {
        this._transient[google_1.GaParams.CacheBuster] = Math.round(new Date().getTime() / 1000);
    };
    GoogleAnalytics.prototype.optOut = function (isOptOut) {
        this._enableTracking = !isOptOut;
    };
    GoogleAnalytics.prototype.trackEvent = function (eventCategory, eventAction, eventLabel, eventValue, nonInteractive) {
        var _a;
        var params = (_a = {},
            _a[google_1.GaParams.EventCategory] = eventCategory,
            _a[google_1.GaParams.EventAction] = eventAction,
            _a);
        if (eventLabel)
            params[google_1.GaParams.EventLabel] = eventLabel;
        if (eventValue)
            params[google_1.GaParams.EventValue] = eventValue;
        if (nonInteractive)
            params[google_1.GaParams.NonInteractionHit] = nonInteractive;
        this.track("event", params);
    };
    GoogleAnalytics.prototype.trackPageView = function (path, url, title) {
        var params = {};
        if (path)
            params[google_1.GaParams.DocumentPath] = path;
        if (url)
            params[google_1.GaParams.DocumentLocationURL] = url;
        if (title)
            params[google_1.GaParams.DocumentTitle] = title;
        this.track("pageview", params);
    };
    GoogleAnalytics.prototype.trackScreenView = function (screenName) {
        var _a;
        var params = (_a = {},
            _a[google_1.GaParams.ScreenName] = screenName,
            _a);
        this.track("screenview", params);
    };
    GoogleAnalytics.prototype.trackSocialInteraction = function (network, action, target) {
        var _a;
        var params = (_a = {},
            _a[google_1.GaParams.SocialNetwork] = network,
            _a[google_1.GaParams.SocialAction] = action,
            _a[google_1.GaParams.SocialActionTarget] = target,
            _a);
        this.track("social", params);
    };
    GoogleAnalytics.prototype.setUserTiming = function (category, variable, timeMs, label) {
        var _a;
        var params = (_a = {},
            _a[google_1.GaParams.UserTimingCategory] = category,
            _a[google_1.GaParams.UserTimingVariableName] = variable,
            _a[google_1.GaParams.UserTimingTime] = timeMs,
            _a);
        if (label) {
            params[google_1.GaParams.UserTimingLabel] = label;
        }
        this.track("timing", params);
    };
    GoogleAnalytics.prototype.trackException = function (description, fatal) {
        var _a;
        var params = (_a = {},
            _a[google_1.GaParams.ExceptionDescription] = description,
            _a);
        if (typeof fatal !== "undefined") {
            params[google_1.GaParams.IsExceptionFatal] = fatal;
        }
        this.track("exception", params);
    };
    GoogleAnalytics.prototype.setCustomDimension = function (dimensionIndex, value) {
        var keyName = google_1.GaParams.CustomDimension.replace("%d", dimensionIndex.toString());
        this.transient[keyName] = value;
    };
    GoogleAnalytics.prototype.setCustomMetric = function (metricIndex, value) {
        var keyName = google_1.GaParams.CustomMetric.replace("%d", metricIndex.toString());
        this.transient[keyName] = value;
    };
    GoogleAnalytics.prototype.setClientId = function (clientId) {
        this.params[google_1.GaParams.ClientId] = clientId;
    };
    GoogleAnalytics.prototype.setUserId = function (userId) {
        this.params[google_1.GaParams.UserId] = userId;
    };
    GoogleAnalytics.prototype.startSession = function () {
        this._transient[google_1.GaParams.SessionControl] = "start";
    };
    GoogleAnalytics.prototype.endSession = function () {
        this._transient[google_1.GaParams.SessionControl] = "end";
    };
    GoogleAnalytics.prototype.overrideIpAddress = function (ipAddress) {
        this.params[google_1.GaParams.IPOverride] = ipAddress;
    };
    GoogleAnalytics.prototype.overrideUserAgent = function (userAgent) {
        this.params[google_1.GaParams.UserAgentOverride] = userAgent;
    };
    GoogleAnalytics.prototype.overrideGeo = function (geoid) {
        this.params[google_1.GaParams.GeoOverride] = geoid;
    };
    GoogleAnalytics.prototype.setReferrer = function (referrer) {
        this._transient[google_1.GaParams.DocumentReferrer] = referrer;
    };
    GoogleAnalytics.prototype.setCampaignName = function (campaignName) {
        this._transient[google_1.GaParams.CampaignName] = campaignName;
    };
    GoogleAnalytics.prototype.setCampaignSource = function (campaignSource) {
        this._transient[google_1.GaParams.CampaignSource] = campaignSource;
    };
    GoogleAnalytics.prototype.setCampaignMedium = function (campaignMedium) {
        this._transient[google_1.GaParams.CampaignMedium] = campaignMedium;
    };
    GoogleAnalytics.prototype.setCampaignKeyword = function (campaignKeyword) {
        this._transient[google_1.GaParams.CampaignKeyword] = campaignKeyword;
    };
    GoogleAnalytics.prototype.setCampaignContent = function (campaignContent) {
        this._transient[google_1.GaParams.CampaignContent] = campaignContent;
    };
    GoogleAnalytics.prototype.setCampaignId = function (campaignId) {
        this._transient[google_1.GaParams.CampaignId] = campaignId;
    };
    GoogleAnalytics.prototype.setCampaignData = function (campaign) {
        if (campaign.name)
            this.setCampaignName(campaign.name);
        if (campaign.source)
            this.setCampaignSource(campaign.source);
        if (campaign.medium)
            this.setCampaignMedium(campaign.medium);
        if (campaign.content)
            this.setCampaignContent(campaign.content);
        if (campaign.keyword)
            this.setCampaignKeyword(campaign.keyword);
        if (campaign.id)
            this.setCampaignId(campaign.id);
    };
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
    GoogleAnalytics.prototype.setSocialNetwork = function (socialNetwork) {
        this._transient[google_1.GaParams.SocialNetwork] = socialNetwork;
    };
    GoogleAnalytics.prototype.setSocialAction = function (socialAction) {
        this._transient[google_1.GaParams.SocialAction] = socialAction;
    };
    GoogleAnalytics.prototype.setSocialActionTarget = function (socialActionTarget) {
        this._transient[google_1.GaParams.SocialActionTarget] = socialActionTarget;
    };
    GoogleAnalytics.prototype.track = function (hitType, params) {
        var _a;
        if (!this._enableTracking) {
            console.log("Tracking Disabled");
            return;
        }
        var toTrack = this.mergeTransient(hitType, params);
        this._lastTracked = __assign((_a = {}, _a[google_1.GaParams.HitType] = hitType, _a), toTrack);
        console.log(this._lastTracked);
    };
    GoogleAnalytics.prototype.mergeTransient = function (eventType, params) {
        var transient = this.getTransientAndDelete(eventType);
        return __assign({}, this.params, params, transient);
    };
    GoogleAnalytics.prototype.getTransientAndDelete = function (hitType) {
        // TODO: Filter based on hitType
        var transient = this._transient;
        this._transient = {};
        return transient;
    };
    Object.defineProperty(GoogleAnalytics.prototype, "transient", {
        get: function () {
            return this._transient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleAnalytics.prototype, "trackingId", {
        get: function () {
            return this._trackingId;
        },
        set: function (value) {
            this._trackingId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleAnalytics.prototype, "protocolVersion", {
        get: function () {
            return this._protocolVersion;
        },
        set: function (value) {
            this._protocolVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleAnalytics.prototype, "enableTracking", {
        get: function () {
            return this._enableTracking;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleAnalytics.prototype, "lastTracked", {
        get: function () {
            return this._lastTracked;
        },
        enumerable: true,
        configurable: true
    });
    GoogleAnalytics.prototype.getClientId = function () {
        return "";
    };
    GoogleAnalytics.prototype.getUserId = function () {
        return "";
    };
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpClient = /** @class */ (function () {
    function HttpClient(settings) {
        if (settings === void 0) { settings = {}; }
    }
    HttpClient.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(url)];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error getting " + url, error_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpClient.prototype.post = function (url, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var fetchSettings, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetchSettings = {
                            body: JSON.stringify(params),
                            method: "POST"
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(url, fetchSettings)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error posting to " + url, error_2);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Based on https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
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
    GaParams["ProductImpressionName"] = "il%dpi%dnm";
    GaParams["ProductImpressionBrand"] = "il%dpi%dbr";
    GaParams["ProductImpressionCategory"] = "il%dpi%dca";
    GaParams["ProductImpressionVariant"] = "il%dpi%dva";
    GaParams["ProductImpressionPosition"] = "il%dpi%dps";
    GaParams["ProductImpressionPrice"] = "il%dpi%dpr";
    GaParams["ProductImpressionCustomDimension"] = "il%dpi%dcd%d";
    GaParams["ProductImpressionCustomMetric"] = "il%dpi%dcm%d";
    GaParams["PromotionId"] = "";
    GaParams["SocialNetwork"] = "sn";
    GaParams["SocialAction"] = "sa";
    GaParams["SocialActionTarget"] = "st";
    GaParams["UserTimingCategory"] = "utc";
    GaParams["UserTimingVariableName"] = "utv";
    GaParams["UserTimingTime"] = "utt";
    GaParams["UserTimingLabel"] = "utl";
    GaParams["ExceptionDescription"] = "exd";
    GaParams["IsExceptionFatal"] = "exf";
    GaParams["CustomDimension"] = "cd%d";
    GaParams["CustomMetric"] = "cm%d";
})(GaParams = exports.GaParams || (exports.GaParams = {}));
var ICampaignData = /** @class */ (function () {
    function ICampaignData() {
    }
    return ICampaignData;
}());
exports.ICampaignData = ICampaignData;


/***/ })
/******/ ]);
});
//# sourceMappingURL=wut.js.map