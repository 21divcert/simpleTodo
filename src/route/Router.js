import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import Edit from "../page/Edit";
import New from "../page/New";
import NotFound from "../page/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
