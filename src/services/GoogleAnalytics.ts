interface GoogleAnalyticsParam {
    [key: string]: any;
}

interface ViewArea {
    width: number;
    height: number;
}

type HitType =
    | "pageview"
    | "screenview"
    | "event"
    | "transaction"
    | "item"
    | "social"
    | "exception"
    | "timing";

type ProductAction =
    | "detail"
    | "click"
    | "add"
    | "remove"
    | "checkout"
    | "checkout_option"
    | "purchase"
    | "refund";

export class GoogleAnalytics {
    private trackingId: string;
    private protocolVersion: number = 1;
    private params: {[key: string]: any} = {};
    private clientId: string;

    constructor(trackingId: string) {
        this.trackingId = trackingId;
        this.clientId = "";
    }

    public anonymizeIp(anonymize: boolean) {
        if (anonymize) {
            this.params["aip"] = 1;
        } else if (this.params.hasOwnProperty("aip")) {
            delete this.params.aip;
        }
    }

    public setCacheBuster() {}

    public trackEvent(
        eventCategory: string,
        eventAction: string,
        eventLabel?: string,
        eventValue?: number
    ) {}
    public trackPageView() {}
    public trackScreenView() {}
    public setClientId() {}
    public setUserId() {}

    public startSession() {}
    public endSession() {}

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

    public setScreenResolution(screenResolution: ViewArea) {}
    public setViewportSize(viewportSize: ViewArea) {}
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

    public setUserTiming(
        timingCategory: string,
        timingVariable: string,
        timingTimeMs: number,
        timingLabel?: string
    ) {}
    public setPageLoadTime(pageLoadTimeMs: number) {}
    public setDNSLookupTime(dnsLookupTimeMs: number) {}
    public setPageDownloadTime(downloadTimeMs: number) {}
    public setRedirectResponseTime(redirectResponseTimeMs: number) {}
    public setTpcConnectTime(tpcConnectTimeMs: number) {}
    public setServerResponseTime(serverResponseTimeMs: number) {}
    public setDOMInteractiveTime(domInteractiveTimeMs: number) {}
    public setContentLoadTime(contentLoadTimeMs: number) {}

    public setException(exceptionDescription: string, isFatal?: boolean) {}

    public setCustomDimension(dimensionIndex: number, value: string) {}
    public setCustomMetric(metricIndex: number, value: number) {}

    public setContentExperiment(experimentId: string, experimentVariant: string) {}
}
