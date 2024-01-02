import { useSelector, useDispatch } from "react-redux";

function App() {
  const { test, homeData } = useSelector((state) => state.app);
  console.log("🚀 ~ file: App.js:5 ~ App ~ homeData:", homeData);
  console.log("🚀 ~ file: App.js:5 ~ App ~ test:", test);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
