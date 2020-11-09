import { apiUrl } from "../config/endpoint";

import axios from "axios";
class Book {
  url = `${apiUrl}/books`;
  async create(data) {
    try {
      const res = await axios.post(this.url, data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getBooks() {
    try {
      const res = await axios.get(this.url);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteBook(bookId) {
    console.log(bookId);
    try {
      const res = await axios.delete(`${this.url}/${bookId}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateRating(bookId, rating) {
    try {
      const res = await axios.put(`${this.url}/rating/${bookId}`, {
        rating: rating,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getBooksById(bookId) {
    try {
      const res = await axios.get(`${this.url}/${bookId}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
const BookService = new Book();
export default BookService;
