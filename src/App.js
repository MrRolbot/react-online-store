import Collections from './components/collections/Collections';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import Offer from './components/offer/Offer';
import Testimonials from './components/testimonials/Testimonials';
import Cart from './components/cart/Cart';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Offer />
      <Collections />
      <Testimonials />
      <Newsletter />
      <Footer />
      <Routes>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
