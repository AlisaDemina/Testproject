import './App.css';
import {Menu} from "./components/Menu";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {Loader} from "./components/Loader";
import {ChooseUs} from "./components/ChooseUs";
import {VirtualAsServices} from "./components/VirtualAsServices";
import {VirtualAsServicesEnd} from "./components/VirtualAsServicesEnd";
import {Testimonial} from "./components/Testimonial";
import {Proceduce} from "./components/Proceduce";
import {Price} from "./components/Price";
import {Blog} from "./components/Blog";
import {Message} from "./components/Message";


function App() {
  return (
    <div>
      <Menu/>
      <Main/>
      <ChooseUs/>
      <VirtualAsServices/>
      <VirtualAsServicesEnd/>
      <Testimonial/>
      <Proceduce/>
      <Price/>
      <Blog/>
      <Message/>
      <Footer/>
      <Loader/>
    </div>
  );
}

export default App;
