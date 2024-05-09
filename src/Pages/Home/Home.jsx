import firebaseConfig from '../../firebase/firebase.config';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
  
const Home = () => {
     console.log(firebaseConfig);
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
