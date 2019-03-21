export class HttpClient {
    constructor(settings: any = {}) {}

    public async get(url: string) {
        try {
            return await await fetch(url);
        } catch (error) {
            console.error(`Error getting ${url}`, error);
            return null;
        }
    }
    public async post(url: string, params: any = {}) {
        const fetchSettings = {
            body: JSON.stringify(params),
            method: "POST"
        };
        try {
            return await fetch(url, fetchSettings);
        } catch (error) {
            console.error(`Error posting to ${url}`, error);
            return null;
        }
    }
}
