import {GoogleAnalytics} from "../src";
import {GaProps} from "../src/constants/google";
const google = new GoogleAnalytics("ua-1111111");
const ipAddress = "127.0.0.1";
const geoId = "geoid";
const userAgent = "Wut.js User-Agent";

test("initialize google analytics correctly", () => {
    expect(google.trackingId).toBe("ua-1111111");
    expect(google.protocolVersion).toBe(1);
});

test("google user should be able to anonymize ip", () => {
    google.anonymizeIp(true);
});

test("google should be able to track an event correctly", () => {
    google.setCacheBuster();
    google.trackEvent("EventCategory", "EventAction");
    expect(google.transient).toEqual({});
});

test("google should be able to track a pageview correctly", () => {
    google.setCacheBuster();
    google.trackPageView("/", "https://google.com", "Google Com");
    expect(google.transient).toEqual({});
});

test("google should be able to track a screenview correctly", () => {
    google.setCacheBuster();
    google.trackScreenView("AppHomeScreen");
    expect(google.transient).toEqual({});
});

test("google should be able to track a social interaction correctly", () => {
    google.setCacheBuster();
    google.trackSocialInteraction("Facebook", "Share", "https://google.com");
    expect(google.transient).toEqual({});
});

test("google should be able to track a user timing correctly", () => {
    google.setCacheBuster();
    google.setUserTiming("Download Times", "downloadPage", 3500);
    expect(google.transient).toEqual({});
});

test("google should be able to track an exception correctly", () => {
    google.trackException("An Error Occured");
    google.trackException("An Error Occured", false);
    google.trackException("An Error Occured", true);
});

test("google should be able to opt out and in a user", () => {
    google.optOut(true);
    expect(google.enableTracking).toBe(false);
    google.optOut(false);
    expect(google.enableTracking).toBe(true);
});

test("google should be able to set custom metrics and dimensions", () => {
    google.setCustomDimension(1, "value");
    google.setCustomMetric(2, 3);
    google.trackEvent("Event With Custom Metric and Dimension", "Wow");
    expect(google.lastTracked).toHaveProperty("cd1");
    expect(google.lastTracked).toHaveProperty("cm2");
});

test("google should be able to set client and user id", () => {
    google.setUserId("User-1");
    google.setClientId("Client-1");
    google.trackEvent("Event", "Wow");
    expect(google.lastTracked).toHaveProperty(GaProps.UserId);
    expect(google.lastTracked).toHaveProperty(GaProps.ClientId);
});

test("google should be able to start and end session", () => {
    google.startSession();
    google.trackEvent("Event", "SessionStart");
    expect(google.lastTracked).toHaveProperty(GaProps.SessionControl);
    expect(google.lastTracked[GaProps.SessionControl]).toBe("start");
    google.endSession();
    google.trackEvent("Event", "SessionEnd");
    expect(google.lastTracked).toHaveProperty(GaProps.SessionControl);
    expect(google.lastTracked[GaProps.SessionControl]).toBe("end");
});

test("google should be able to override ip, userAgent and geo", () => {
    google.overrideIpAddress(ipAddress);
    google.overrideUserAgent(userAgent);
    google.overrideGeo(geoId);

    google.trackEvent("Event", "Wow");

    expect(google.lastTracked[GaProps.GeoOverride]).toBe(geoId);
    expect(google.lastTracked[GaProps.UserAgentOverride]).toBe(userAgent);
    expect(google.lastTracked[GaProps.IPOverride]).toBe(ipAddress);
});

test("google should be able to set referrer", () => {
    google.setReferrer("http://referrer.com");
    google.trackPageView("/my-page");
    expect(google.lastTracked[GaProps.DocumentReferrer]).toBe("http://referrer.com");
});

test("google should be able to handle campaign settings", () => {
    google.setCampaignData({
        name: "MyCampaign",
        source: "Facebook"
    });
    google.trackEvent("Event", "Wow");
});

