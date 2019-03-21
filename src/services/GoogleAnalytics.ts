import {
    GaProps,
    HitType,
    HttpMethod,
    ICampaignData,
    IGoogleAnalyticsParam,
    IGoogleParams,
    IViewArea
} from "../constants/google";
import {HttpClient} from "../http/client";

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

    constructor(trackingId: string, trackerParams: IGoogleParams = {}) {
        this._trackingId = trackingId;
        this._transient = {};
        this._protocolVersion = 1;
        this.endpoint = "https://www.google-analytics.com/collect";
        this.client = new HttpClient();
        this.method = "post";
        this._enableTracking = true;
        this._lastTracked = {};

        this.params = {
            [GaProps.TrackingId]: trackingId,
            [GaProps.ProtocolVersion]:
                trackerParams.protocolVersion || this._protocolVersion,
            [GaProps.ClientId]: trackerParams.clientId || this.getClientId(),
            [GaProps.UserId]: trackerParams.userId || this.getUserId()
        };
    }

    public anonymizeIp(anonymize: boolean) {
        if (anonymize) {
            this.params[GaProps.AnonymizeIP] = 1;
        } else if (this.params.hasOwnProperty(GaProps.AnonymizeIP)) {
            delete this.params.aip;
        }
    }

    public send() {
        // If POST - Payload no longer than 8192 bytes
        // IF GET - encoded URL must be no longer than 8000 Bytes
    }

    public setCacheBuster() {
        this._transient[GaProps.CacheBuster] = Math.round(
            new Date().getTime() / 1000
        );
    }

    public optOut(isOptOut: boolean) {
        this._enableTracking = !isOptOut;
    }

    public trackEvent(
        eventCategory: string,
        eventAction: string,
        eventLabel?: string,
        eventValue?: number,
        nonInteractive?: boolean
    ) {
        const params: IGoogleAnalyticsParam = {
            [GaProps.EventCategory]: eventCategory,
            [GaProps.EventAction]: eventAction
        };
        if (eventLabel) params[GaProps.EventLabel] = eventLabel;
        if (eventValue) params[GaProps.EventValue] = eventValue;
        if (nonInteractive) params[GaProps.NonInteractionHit] = nonInteractive;
        this.track("event", params);
    }

    public trackPageView(path?: string, url?: string, title?: string) {
        const params: IGoogleAnalyticsParam = {};
        if (path) params[GaProps.DocumentPath] = path;
        if (url) params[GaProps.DocumentLocationURL] = url;
        if (title) params[GaProps.DocumentTitle] = title;
        this.track("pageview", params);
    }

    public trackScreenView(screenName: string) {
        const params = {
            [GaProps.ScreenName]: screenName
        };
        this.track("screenview", params);
    }
    public trackSocialInteraction(
        network: string,
        action: string,
        target: string
    ) {
        const params = {
            [GaProps.SocialNetwork]: network,
            [GaProps.SocialAction]: action,
            [GaProps.SocialActionTarget]: target
        };
        this.track("social", params);
    }

    public setUserTiming(
        category: string,
        variable: string,
        timeMs: number,
        label?: string
    ) {
        const params: IGoogleAnalyticsParam = {
            [GaProps.UserTimingCategory]: category,
            [GaProps.UserTimingVariableName]: variable,
            [GaProps.UserTimingTime]: timeMs
        };

        if (label) {
            params[GaProps.UserTimingLabel] = label;
        }

        this.track("timing", params);
    }

    public trackException(description: string, fatal?: boolean) {
        const params: IGoogleAnalyticsParam = {
            [GaProps.ExceptionDescription]: description
        };

        if (typeof fatal !== "undefined") {
            params[GaProps.IsExceptionFatal] = fatal;
        }

        this.track("exception", params);
    }

    public setCustomDimension(index: number, value: string) {
        const keyName = GaProps.CustomDimension.replace("%d", index.toString());
        this.transient[keyName] = value;
    }
    public setCustomMetric(index: number, value: number) {
        const keyName = GaProps.CustomMetric.replace("%d", index.toString());
        this.transient[keyName] = value;
    }

    public setClientId(clientId: any) {
        this.params[GaProps.ClientId] = clientId;
    }

    public setUserId(userId: any) {
        this.params[GaProps.UserId] = userId;
    }

    public startSession() {
        this._transient[GaProps.SessionControl] = "start";
    }

    public endSession() {
        this._transient[GaProps.SessionControl] = "end";
    }

    public overrideIpAddress(ipAddress: string) {
        this.params[GaProps.IPOverride] = ipAddress;
    }
    public overrideUserAgent(userAgent: string) {
        this.params[GaProps.UserAgentOverride] = userAgent;
    }
    public overrideGeo(geoid: string) {
        this.params[GaProps.GeoOverride] = geoid;
    }

    public setReferrer(referrer: string) {
        this._transient[GaProps.DocumentReferrer] = referrer;
    }
    public setCampaignName(campaignName: string) {
        this._transient[GaProps.CampaignName] = campaignName;
    }

    public setCampaignSource(campaignSource: string) {
        this._transient[GaProps.CampaignSource] = campaignSource;
    }

    public setCampaignMedium(campaignMedium: string) {
        this._transient[GaProps.CampaignMedium] = campaignMedium;
    }

    public setCampaignKeyword(campaignKeyword: string) {
        this._transient[GaProps.CampaignKeyword] = campaignKeyword;
    }

    public setCampaignContent(campaignContent: string) {
        this._transient[GaProps.CampaignContent] = campaignContent;
    }

    public setCampaignId(campaignId: string) {
        this._transient[GaProps.CampaignId] = campaignId;
    }

    public setCampaignData(campaign: ICampaignData) {
        if (campaign.name) this.setCampaignName(campaign.name);
        if (campaign.source) this.setCampaignSource(campaign.source);
        if (campaign.medium) this.setCampaignMedium(campaign.medium);
        if (campaign.content) this.setCampaignContent(campaign.content);
        if (campaign.keyword) this.setCampaignKeyword(campaign.keyword);
        if (campaign.id) this.setCampaignId(campaign.id);
    }

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

    public setSocialNetwork(socialNetwork: string) {
        this._transient[GaProps.SocialNetwork] = socialNetwork;
    }

    public setSocialAction(socialAction: string) {
        this._transient[GaProps.SocialAction] = socialAction;
    }

    public setSocialActionTarget(socialActionTarget: string) {
        this._transient[GaProps.SocialActionTarget] = socialActionTarget;
    }

    private track(hitType: HitType, params: any) {
        if (!this._enableTracking) {
            return;
        }

        const toTrack = this.mergeTransient(hitType, params);
        this._lastTracked = {
            [GaProps.HitType]: hitType,
            ...toTrack
        };

        // console.log(this._lastTracked);
    }

    private mergeTransient(hitType: HitType, params: {}) {
        return {
            ...this.params,
            ...params,
            ...this.getTransientAndDelete(hitType)
        };
    }

    private getTransientAndDelete(hitType: HitType) {
        // TODO: Filter based on hitType
        const transient: IGoogleAnalyticsParam = this._transient;
        this._transient = {};
        return transient;
    }

    get transient(): IGoogleAnalyticsParam {
        return this._transient;
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

    private getClientId() {
        return "";
    }

    private getUserId() {
        return "";
    }
}
