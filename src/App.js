import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Review from "./component/Review/Review";
import Errow from "./component/Errow-page/Errow";
import Mange from "./component/Manage/Mange";
import DetalisProduct from "./component/Product-details/DetalisProduct";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/product/:productKey" element={<DetalisProduct/>} />
        <Route path="/manage" element={<Mange />} />
        <Route path="*" element={<Errow />} />
      </Routes>
    </div>
  );
}

export default App;
