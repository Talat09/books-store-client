import { Outlet } from "react-router-dom";
import Header from "../component/Shared/Header/Header";
import Footer from "../component/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
