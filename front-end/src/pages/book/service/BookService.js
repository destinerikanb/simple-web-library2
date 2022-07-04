import client from "../../../shared/http-client/Client"

const BookService = () => {

 const getBooks = async (data) => {
    const response = await client.get('/books', {params : data})
    return response;
} 

 async function getBook(id){
    const response = await client.get(`/books/${id}`)
    return response;
}

 async function createBook(book){
    const response = await client.post('/books', book)
    return response;
}

 async function updateBook(book){
    const response = await client.put('/books', book)
    return response;
}

 async function deleteBook(id){
    const response = await client.delete(`/books/${id}`)
    return response;
}

return {
   getBooks,
   getBook,
   createBook,
   updateBook,
   deleteBook
}

}

export default BookService;