import {HttpClient} from "../http/client";
import {GaParams, HitType, HttpMethod, IGoogleAnalyticsParam, IViewArea, ProductAction} from "../constants/google";

export class GoogleAnalytics {
    private _trackingId: string;
    private _protocolVersion: number;
    private readonly params: IGoogleAnalyticsParam;
    private _transient: IGoogleAnalyticsParam;
    private _lastTracked: IGoogleAnalyticsParam;
    private endpoint: string;
    private client: HttpClient;
    private method: HttpMethod;
    private _enableTracking: boolean;

    constructor(trackingId: string) {
        this._trackingId = trackingId;
        this.params = {
            [GaParams.ClientId]: ""
        };
        this._transient = {};
        this._protocolVersion = 1;
        this.endpoint = "https://www.google-analytics.com/collect";
        this.client = new HttpClient();
        this.method = "post";
        this._enableTracking = true;
        this._lastTracked = {};

        this.params = {
            [GaParams.TrackingId]: trackingId,
            [GaParams.ProtocolVersion]: this._protocolVersion
        };
    }

    public anonymizeIp(anonymize: boolean) {
        if (anonymize) {
            this.params[GaParams.AnonymizeIP] = 1;
        } else if (this.params.hasOwnProperty(GaParams.AnonymizeIP)) {
            delete this.params.aip;
        }
    }

    public send() {
        // If POST - Payload no longer than 8192 bytes
        // IF GET - encoded URL must be no longer than 8000 Bytes
    }

    public setCacheBuster() {
        this._transient[GaParams.CacheBuster] = Math.round(new Date().getTime() / 1000);
    }

    public optOut(isOptOut: boolean) {
        this._enableTracking = !isOptOut;
    }

    public trackEvent(
        eventCategory: string,
        eventAction: string,
        eventLabel?: string,
        eventValue?: number
    ) {
        let params = {
            [GaParams.EventCategory]: eventCategory,
            [GaParams.EventAction]: eventAction
        };

        if (eventLabel) {
            params[GaParams.EventLabel] = eventLabel;
        }

        if (eventValue) {
            params[GaParams.EventValue] = eventValue;
        }

        this.track("event", params);
    }

    public trackPageView(path?: string, url?: string, title?: string) {
        const params = {};

        if (path) {
            params[GaParams.DocumentPath] = path;
        }

        if (url) {
            params[GaParams.DocumentLocationURL] = url;
        }

        if (title) {
            params[GaParams.DocumentTitle] = title;
        }

        this.track("pageview", params);
    }

    public trackScreenView(screenName: string) {
        const params = {
            [GaParams.ScreenName]: screenName
        };
        this.track("screenview", params);
    }
    public trackSocialInteraction(
        network: string,
        action: string,
        target: string
    ) {
        const params = {
            [GaParams.SocialNetwork]: network,
            [GaParams.SocialAction]: action,
            [GaParams.SocialActionTarget]: target
        };
        this.track("social", params);
    }

    public setUserTiming(
        category: string,
        variable: string,
        timeMs: number,
        label?: string
    ) {
        const params = {
            [GaParams.UserTimingCategory]: category,
            [GaParams.UserTimingVariableName]: variable,
            [GaParams.UserTimingTime]: timeMs
        };

        if (label) {
            params[GaParams.UserTimingLabel] = label;
        }

        this.track("timing", params);
    }

    public trackException(description: string, fatal?: boolean) {
        const params = {
            [GaParams.ExceptionDescription]: description
        };

        if (typeof fatal !== 'undefined') {
            params[GaParams.IsExceptionFatal] = fatal
        }

        this.track("exception", params);
    }

    public setCustomDimension(dimensionIndex: number, value: string) {
        const keyName = GaParams.CustomDimension.replace("%d", dimensionIndex);
        this.transient[keyName] = value;
    }
    public setCustomMetric(metricIndex: number, value: number) {
        const keyName = GaParams.CustomMetric.replace("%d", metricIndex);
        this.transient[keyName] = value;
    }

    public setClientId(clientId: any) {
        this.params[GaParams.ClientId] = clientId;
    }

    public setUserId(userId: any) {
        this.params[GaParams.UserId] = userId;
    }

    public startSession() {
        this.transient[GaParams.SessionControl] = "start";
    }

    public endSession() {
        this.transient[GaParams.SessionControl] = "end";
    }

    public overrideIpAddress(ipAddress: string) {}
    public overrideUserAgent(userAgent: string) {}
    public overrideGeo(geoid: string) {}

    public setReferrer(referrer: string) {}
    public setCampaignName(campaignName: string) {}
    public setCampaignSource(campaignSource: string) {}
    public setCampaignMedium(campaignMedium: string) {}
    public setCampaignKeyword(campaignKeyword: string) {}
    public setCampaignContent(campaignContent: string) {}
    public setCampaignId(campaignId: string) {}
    public setGoogleAdsId(googleAdsId: string) {}
    public setGoogleDisplayAdsId(googleDisplayAdsId: string) {}

    public setScreenResolution(screenResolution: IViewArea) {}
    public setViewportSize(viewportSize: IViewArea) {}
    public setDocumentEncoding(documentEncoding: string) {}
    public setScreenColors(screenColors: string) {}
    public setUserLanguage(userLanguage: string) {}
    public setJavaEnabled(javaEnabled: boolean) {}
    public setFlashVersion(flashVersion: string) {}

    public setHitType(hitType: HitType) {}
    public setNonInteractive(isInteractive: boolean) {}

    public setLocationURL(locationURL: string) {}
    public setHostName(hostName: string) {}
    public setPath(path: string) {}
    public setTitle(title: string) {}
    public setScreenName(screenName: string) {}
    public setContentGroup(contentGroup: number, value: string) {}
    public setLinkID(linkID: string) {}

    public setAppName(appName: string) {}
    public setAppId(appId: string) {}
    public setAppVersion(appVersion: string) {}
    public setAppInstallerId(appInstallerId: string) {}

    public setTransactionId(transactionId: string) {}
    public setTransactionAffiliation(transactionAffiliation: string) {}
    public setTransactionRevenue(transactionRevenue: number) {}
    public setTransactionShipping(transactionShipping: number) {}
    public setTransactionTax(transactionTax: number) {}
    public setItemName(itemName: string) {}
    public setItemPrice(itemPrice: number) {}
    public setItemQuantity(itemQuantity: number) {}
    public setItemCode(itemCode: string) {}
    public setItemCategory(itemCategory: string) {}

    public setProductSKU(productIndex: number, value: string) {}
    public setProductName(productIndex: number, value: string) {}
    public setProductBrand(productIndex: number, value: string) {}
    public setProductCategory(productIndex: number, value: string) {}
    public setProductVariant(productIndex: number, value: string) {}
    public setProductPrice(productIndex: number, value: number) {}
    public setProductQuantity(productIndex: number, value: number) {}
    public setProductCouponCode(productIndex: number, value: string) {}
    public setProductPosition(productIndex: number, value: number) {}
    public setProductCustomDimension(
        productIndex: number,
        dimensionIndex: number,
        value: string
    ) {}
    public setProductCustomMetric(
        productIndex: number,
        metricIndex: number,
        value: number
    ) {}

    public setProductAction(
        productAction: ProductAction,
        transactionId?: string,
        affiliation?: string,
        revenue?: number,
        tax?: number,
        shipping?: number,
        couponCode?: string,
        productActionList?: string,
        checkoutStep?: number,
        checkoutStepOption?: string
    ) {}

    public setProductImpressionListName(listIndex: number, value: string) {}
    public setProductImpressionSKU(
        listIndex: number,
        productIndex: number,
        sku: string
    ) {}
    public setProductImpressionName(
        listIndex: number,
        productIndex: number,
        name: string
    ) {}
    public setProductImpressionBrand(
        listIndex: number,
        productIndex: number,
        brand: string
    ) {}
    public setProductImpressionCategory(
        listIndex: number,
        productIndex: number,
        category: string
    ) {}
    public setProductImpressionVariant(
        listIndex: number,
        productIndex: number,
        variant: string
    ) {}
    public setProductImpressionPosition(
        listIndex: number,
        productIndex: number,
        position: number
    ) {}
    public setProductImpressionPrice(
        listIndex: number,
        productIndex: number,
        price: number
    ) {}
    public setProductImpressionCustomDimension(
        listIndex: number,
        productIndex: number,
        customDimensionIndex: number,
        value: string
    ) {}
    public setProductImpressionCustomMetric(
        listIndex: number,
        productIndex: number,
        customMetricIndex: number,
        value: number
    ) {}
    public setPromotionId(promoIndex: number, promotionId: string) {}
    public setPromotionName(promoIndex: number, promotionName: string) {}
    public setPromotionCreative(
        promoIndex: number,
        promotionCreative: string
    ) {}
    public setPromotionPosition(
        promoIndex: number,
        promotionPosition: string
    ) {}
    public setPromotionAction(promotionAction: string) {}
    public setCurrencyCode(currencyCode: string) {}

    public setSocialNetwork(socialNetwork: string) {}
    public setSocialAction(socialAction: string) {}
    public setSocialActionTarget(socialActionTarget: string) {}
    public setPageLoadTime(pageLoadTimeMs: number) {}
    public setDNSLookupTime(dnsLookupTimeMs: number) {}
    public setPageDownloadTime(downloadTimeMs: number) {}
    public setRedirectResponseTime(redirectResponseTimeMs: number) {}
    public setTpcConnectTime(tpcConnectTimeMs: number) {}
    public setServerResponseTime(serverResponseTimeMs: number) {}
    public setDOMInteractiveTime(domInteractiveTimeMs: number) {}
    public setContentLoadTime(contentLoadTimeMs: number) {}
    public setContentExperiment(
        experimentId: string,
        experimentVariant: string
    ) {}

    private track(eventType: HitType, params: any) {
        if (!this._enableTracking) {
            console.log("Tracking Disabled");
            return;
        }

        const toTrack = this.mergeTransient(params);
        this._lastTracked = {
            [GaParams.HitType]: eventType,
            ...toTrack
        };

        console.log(eventType, this.mergeTransient(params));
    }

    private mergeTransient(params: {}) {
        let transient = this.getTransientAndDelete();
        return {...this.params, ...params, ...transient};
    }

    private getTransientAndDelete() {
        const transient = this._transient;
        this._transient = {};
        return transient;
    }

    get transient(): IGoogleAnalyticsParam {
        return this._transient;
    }

    set transient(value: IGoogleAnalyticsParam) {
        this._transient = value;
    }
    get trackingId(): string {
        return this._trackingId;
    }

    set trackingId(value: string) {
        this._trackingId = value;
    }
    get protocolVersion(): number {
        return this._protocolVersion;
    }

    set protocolVersion(value: number) {
        this._protocolVersion = value;
    }

    get enableTracking(): boolean {
        return this._enableTracking;
    }

    get lastTracked(): IGoogleAnalyticsParam {
        return this._lastTracked;
    }
}
