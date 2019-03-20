// Based on https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
export enum GaParams {
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
    PromotionId = "",
    SocialNetwork = "sn",
    SocialAction = "sa",
    SocialActionTarget = "st",
    UserTimingCategory = "utc",
    UserTimingVariableName = "utv",
    UserTimingTime = "utt",
    UserTimingLabel = "utl",
    ExceptionDescription = "exd",
    IsExceptionFatal = "exf",
    CustomDimension = "cd%d",
    CustomMetric = "cm%d"
}

export interface IGoogleAnalyticsParam {
    [key: string]: any;
}

export interface IViewArea {
    width: number;
    height: number;
}

export type HttpMethod = "post" | "get";

export type HitType =
    | "pageview"
    | "screenview"
    | "event"
    | "transaction"
    | "item"
    | "social"
    | "exception"
    | "timing";

export type ProductAction =
    | "detail"
    | "click"
    | "add"
    | "remove"
    | "checkout"
    | "checkout_option"
    | "purchase"
    | "refund";
