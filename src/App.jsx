import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/ContactUs'
import './App.css';
import Villas from './Pages/Villas/Villas';
import VillaIzara from './Pages/VillaIzara/VillaIzara';
import Blogs from './Pages/Blogs/Blogs';
import Blog from './Pages/Blogs/Blog';
import Thankyou from './Pages/Thankyou/Thankyou';
import UdaipurPage from './Pages/Udaipur/UdaipurPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* sabhi pages Layout ke andar render honge */}
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="villas" element={<Villas />} />
          <Route path="Blogs" element={<Blogs />} />

          <Route path="villasIzara" element={<VillaIzara />} />
          <Route path="ThankYou" element={<Thankyou />} />
          <Route path="blog/:id" element={<Blog />} />

          <Route path='destinations/udaipur' element={<UdaipurPage />} />

          {/* 404 page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
