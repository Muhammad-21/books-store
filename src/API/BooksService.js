import axios from "axios";

export default class BooksService{
    static async getBooks(id,str){
        const response = await axios.post('http://45.8.249.57/bookstore-api/books',{
            header:'Content-Type: application/json',
                filters:{
                    categoryId:id,
                    search:str
                }
        })
        return response.data
    }
    static async getCategories(){
        const response = await axios.get('http://45.8.249.57/bookstore-api/books/categories')
        return response.data
    }
}