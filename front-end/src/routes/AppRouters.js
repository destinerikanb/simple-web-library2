import { Outlet, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/layout/NotFoundPage";
import { Home } from "../pages/home/Home";
import { BookList } from "../pages/book/component/BookList";
import { BookForm } from "../pages/book/component/BookForm";
import BookListBloc from "../pages/book/bloc/BookListBloc";
import BookService from "../pages/book/service/BookService";
import BookFormBloc from "../pages/book/bloc/BookFormBloc";

const AppRouters = () => {
  return (
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="books" element={<Outlet/>}>
          <Route index element={<BookList bloc={() => BookListBloc(BookService)}/>}/>
          <Route path="form" element={<BookForm bloc={() => BookFormBloc(BookService)}/>}/>
          <Route path="form/:id" element={<BookForm bloc={() => BookFormBloc(BookService)}/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  )
};

export default AppRouters;