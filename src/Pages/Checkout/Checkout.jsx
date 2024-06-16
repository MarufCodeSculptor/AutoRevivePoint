import axios from 'axios';

import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
  
  const { title, _id, img, price } = useLoaderData();
  

  const handlePost = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    //  data posting from here
    axios
      .post(`https://auto-revive-point-server.vercel.app/bookings`, booking)
      .then(data => {
        if (data.data.insertedId) {
          alert('successfully posted');
        }
      });
  };

  return (
    <div>
      {/* section header  container */}
      <div className="">
        <h3 className="text-3xl uppercase text-center font-bold ">{}</h3>
      </div>
      {/* fornm container */}
      <div>
        <div className="w-full px-10 my-10    shadow-2xl bg-base-100">
          <form onSubmit={handlePost} className="border p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
