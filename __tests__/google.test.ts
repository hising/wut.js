import {GoogleAnalytics} from "../src";

test("initialize google analytics correctly", () => {
    const google = new GoogleAnalytics("ua-1111111");
    expect(google.trackingId).toBe("ua-1111111");
    expect(google.protocolVersion).toBe(1);
});

