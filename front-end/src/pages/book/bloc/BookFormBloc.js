import { useNavigate, useParams } from "react-router-dom";

const BookFormBloc = (bookRepository) => {

  let {
    getBook,
    createBook,
    updateBook,
  } = bookRepository();

    let params = useParams();
    const navigate = useNavigate();

    const getDataById = async() => {
        const response = await getBook(params.id)
        return response;
      }
      
    
      const handleUpdate = async(values) => {
        try{
        const res =  await updateBook(values)
        console.log("SUBMIT RES: ",res);
        navigate("/books")
        }catch(error){
          console.log(error);
        }
      }
    
      const handleAdd = async (values) => {
        try{
           let res = await createBook(values)
          navigate("/protected/books");
        } catch (error) {
          console.error(error);
        }
    }

    return {
        params,
        getDataById,
        handleAdd,
        handleUpdate
    }
}

export default BookFormBloc;