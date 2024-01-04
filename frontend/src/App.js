import { Routes, Route } from "react-router-dom";
import { Home, Login, Public, Personal } from "./containers/public";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
  }, []);

  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
