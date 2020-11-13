import { path } from "./constant";
import Home from "../pages/home";
import Book from "../pages/book/create";
import { Switch, Route, Redirect } from "react-router-dom";
import BookDetailPage from "../pages/book/detail";
import UpdateBookPage from "../pages/book/update";
const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <Home />
      </Route>
      <Route path={`${path.detailBook}/:bookId`}>
        <BookDetailPage />
      </Route>
      <Route path={path.createBook}>
        <Book />
      </Route>
      <Route path={`${path.updateBook}/:bookId`}>
        <UpdateBookPage />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};
export default Router;
