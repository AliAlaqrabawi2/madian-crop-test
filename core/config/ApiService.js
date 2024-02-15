class ApiService {
  static baseUrl = 'http://www.filltext.com';

  static async get(endPoint) {
    try {
      const response = await fetch(`${this.baseUrl}/${endPoint}`);

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        `Error fetching data from ${this.baseUrl}/${endPoint}:`,
        error
      );
      throw error;
    }
  }
}

export default ApiService;
