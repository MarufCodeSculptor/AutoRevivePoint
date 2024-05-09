import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Fooer";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
  return (
 <div className="min-h-96   border border-blue-800 inter">
       <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
     <Footer></Footer>
 </div>
  );
};

export default Root;