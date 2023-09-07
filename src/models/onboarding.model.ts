export default new class Onboarding {
  constructor() {}

  private apiUrl: string = process.env.API_URL || '';
  private headers: Headers = new Headers();
  private client: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response> = fetch;

  private getApiUrl(route?: string): string {
    return route
    ? this.apiUrl + '/' + route
    : this.apiUrl
  }

  private async onboardingOp(operation: string, endpoint: string, payload?: BodyInit) {
    return this.client(
      this.getApiUrl(endpoint),
      {
        headers: this.headers,
        method: operation,
        body: payload 
      }
    )
  }

  get = async () => this.onboardingOp('GET', '/onboarding');

  remove = async () => this.onboardingOp('DELETE', '/onboarding');

  update = async (body?: BodyInit) => this.onboardingOp('PUT', '/onboarding', body);
}