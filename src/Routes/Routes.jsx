import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Blogs from '../Pages/Blogs/Blogs';
import Contacts from '../Pages/Contacts/Contacts';
import Apoinments from '../Pages/Apoinments/Apoinments';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Checkout from '../Pages/Checkout/Checkout';
import Bookings from '../Pages/Bookings/Booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: 'services/',
        element: <Services></Services>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>,
      },
      {
        path: '/apoinment',
        element: <Apoinments></Apoinments>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>,
      },

      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
