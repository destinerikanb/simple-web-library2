import { useState } from "react";

const BookListBloc = (bookRepository) => {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let {
        getBooks,
        deleteBook
    } = bookRepository();
    
    const getBook = async (cond) => {
        try{
            const response = await getBooks();
            setList(response.data.data)
            setIsLoading(cond);
        }catch(error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if(window.confirm(`Are you sure to delete this ${e.name}`)){
        await deleteBook(e.id)
        getBook();
        }else{
            getBook();
        }
    }

    return {
        list,
        isLoading,
        getBook,
        handleDelete
    }
}

export default BookListBloc;