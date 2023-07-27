import { HttpClient } from '@/HttpClient/HttpClient';

export class SoloClient {
  static async getTestimonials() {
    try {
      const response = await HttpClient.get('https://jsonplaceholder.typicode.com/comments');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error(`Something went wrong about getting user: ${error}`);
    }
  }
}
