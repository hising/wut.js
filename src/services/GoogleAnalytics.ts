import {HttpClient} from "../http/client";

interface GoogleAnalyticsParam {
    [key: string]: any;
}

interface ViewArea {
    width: number;
    height: number;
}

type HttpMethod = "post" | "get";

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


enum GaParams {
    ProtocolVersion = "v",
    TrackingId = "tid",
    ClientId = "cid",
    HitType = "t",
    AnonymizeIP = "aip",
    DataSource = "ds",
    QueueTime = "qt",
    CacheBuster = "z",
    UserId = "uid",
    SessionControl = "sc",
    IPOverride = "uip",
    UserAgentOverride = "ua",
    GeoOverride = "geoid",
    DocumentReferrer = "dr",
    CampaignName = "cn",
    CampaignSource = "cs",
    CampaignMedium = "cm",
    CampaignKeyword = "ck",
    CampaignContent = "cc",
    CampaignId = "ci",
    GoogleAdsId = "gclid",
    GoogleDisplayAdsId = "dclid",
    ScreenResolution = "sr",
    ViewportSize = "vp",
    DocumentEncoding = "de",
    ScreenColors = "sd",
    UserLanguage = "ul",
    JavaEnabled = "je",
    FlashVersion = "fl",
    NonInteractionHit = "ni",
    DocumentLocationURL = "dl",
    DocumentHostName = "dh",
    DocumentPath = "dp",
    DocumentTitle = "dt",
    ScreenName = "cd",
    ContentGroup = "cg%d",
    LinkId = "linkid",
    ApplicationName = "an",
    ApplicationID = "aid",
    ApplicationVersion = "av",
    ApplicationInstallerID = "aiid",
    EventCategory = "ec",
    EventAction = "ea",
    EventLabel = "el",
    EventValue = "ev",
    TransactionID = "ti",
    TransactionAffiliation = "ta",
    TransactionRevenue = "tr",
    TransactionShipping = "ts",
    TransactionTax = "tt",
    ItemName = "in",
    ItemPrice = "ip",
    ItemQuantity = "iq",
    ItemCode = "ic",
    ItemCategory = "iv",
    ProductSKU = "pr%did",
    ProductName = "pr%dnm",
    ProductBrand = "pr%dbr",
    ProductCategory = "pr%dca",
    ProductVariant = "pr%dva",
    ProductPrice = "pr%dpr",
    ProductQuantity = "pr%dqt",
    ProductCouponCode = "pr%dcc",
    ProductPosition = "pr%dps",
    ProductCustomDimension = "pr%dcd%d",
    ProductCustomMetric = "pr%dcm%d",
    ProductAction = "pa",
    CouponCode = "tcc",
    ProductActionList = "pal",
    CheckoutStep = "cos",
    CheckoutStepOption = "col",
    ProductImpressionListName = "il%dnm",
    ProductImpressionSKU = "il%dpi%did",
    ProductImpressionName = "il%dpi%dnm",
    ProductImpressionBrand = "il%dpi%dbr",
    ProductImpressionCategory = "il%dpi%dca",
    ProductImpressionVariant = "il%dpi%dva",
    ProductImpressionPosition = "il%dpi%dps",
    ProductImpressionPrice = "il%dpi%dpr",
    ProductImpressionCustomDimension = "il%dpi%dcd%d",
    ProductImpressionCustomMetric = "il%dpi%dcm%d",
    PromotionId = ""
};

export class GoogleAnalytics {
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
    private _trackingId: string;
    private _protocolVersion: number;
    private readonly params: GoogleAnalyticsParam;
    private readonly transient: GoogleAnalyticsParam;
    private clientId: string;
    private endpoint: string;
    private client: HttpClient;
    private method: HttpMethod;

    constructor(trackingId: string) {
        this._trackingId = trackingId;
        this.clientId = "";
        this.params = {};
        this.transient = {};
        this._protocolVersion = 1;
        this.endpoint = "https://www.google-analytics.com/collect";
        this.client = new HttpClient();
        this.method = "post";

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
        this.transient[GaParams.CacheBuster] = Math.round(new Date().getTime() / 1000);
    }

    public optOut(isOptOut: boolean) {

    }

    public trackEvent(
        eventCategory: string,
        eventAction: string,
        eventLabel?: string,
        eventValue?: number
    ) {}

    public trackPageView(path?: string, url?: string, title?: string) {}

    public trackScreenView(screenName: string) {}
    public trackSocialInteraction(
        network: string,
        action: string,
        target: string
    ) {}
    public setUserTiming(
        category: string,
        variable: string,
        timeMs: number,
        label?: string
    ) {}
    public trackException(description: string, fatal?: boolean) {}

    public setCustomDimension(dimensionIndex: number, value: string) {}
    public setCustomMetric(metricIndex: number, value: number) {}

    public setClientId() {}
    public setUserId() {}

    public startSession() {

    }
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
}
