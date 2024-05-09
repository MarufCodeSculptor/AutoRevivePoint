import axios from "axios";
import { useParams } from "react-router-dom";

const Checkout = () => {
   const {id} =useParams();
     axios.get(`http://localhost:5000/services/${id}`).then(data=> console.log(data.data)).catch(error=> console.log(error));
   
  return (
    <div className="flex items-center justify-center bg-[#031926] min-h-96 my-10">
      <h2 className="p-5 text-5xl font-bold capitalize  text-center bg-[#9381ff] rounded-lg shadow-xl">
        Checkout loading please wait
      </h2>
    </div>
  );
};

export default Checkout;
