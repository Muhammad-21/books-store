import axios from "axios";

export default class BooksService{
    static async getBooks(){
        const response = await axios.post('http://45.8.249.57/bookstore-api/books',{header:'Content-Type: application/json'})
        return response.data
    }
}