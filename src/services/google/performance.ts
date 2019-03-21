export class GooglePerformance {
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
