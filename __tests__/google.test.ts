import {GoogleAnalytics} from "../src";
import {GaParams} from "../src/constants/google";
const google = new GoogleAnalytics("ua-1111111");

test("initialize google analytics correctly", () => {
    expect(google.trackingId).toBe("ua-1111111");
    expect(google.protocolVersion).toBe(1);
});

test("google user should be able to anonymize ip", () => {
    google.anonymizeIp(true);
    expect(google.an)
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
    expect(google.lastTracked).toHaveProperty(GaParams.UserId);
    expect(google.lastTracked).toHaveProperty(GaParams.ClientId);
});

test("google should be able to start and end session", () => {
    google.startSession();
    google.trackEvent("Event", "Wow");
    expect(google.lastTracked).toHaveProperty(GaParams.SessionControl);
    expect(google.lastTracked[GaParams.SessionControl]).toBe("start");
    google.endSession();
    google.trackEvent("Event", "Wow");
    expect(google.lastTracked).toHaveProperty(GaParams.SessionControl);
    expect(google.lastTracked[GaParams.SessionControl]).toBe("end");
});

