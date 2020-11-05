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
  updateDetail() {}
}
const BookService = new Book();
export default BookService;
