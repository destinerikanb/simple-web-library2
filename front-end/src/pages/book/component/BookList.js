import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../layout/Loading";

export const BookList = ({ bloc }) => {
  const navigate = useNavigate();
  const { list, isLoading, getBook, handleDelete } = bloc();

  useEffect(() => {
    console.log("masuk useeffect");
  
      getBook(false);
}, []);


  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => navigate(`form`)}
      >
        Add Book
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>Book List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => navigate(`form/${data.id}`)}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(data)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

