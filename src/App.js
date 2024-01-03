import { Routes, Route } from "react-router-dom";
import { Home, Login, Public } from "./containers/public";
import path from "./ultis/path";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
