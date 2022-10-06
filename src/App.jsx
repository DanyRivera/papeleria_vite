import { useState, useEffect } from "react";
import Header from "./components/Header";
import HorariosContacto from "./components/HorariosContacto";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import Up from "./components/Up";

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (offsetY > 105) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  }, [offsetY])


  return (
    <>
      <Header />
      <Servicios />
      <div>
        <h3 className="font-fredoka mt-32 mb-12 text-center text-3xl text-primary">¿Donde Nos Ubicamos?</h3>

        <div className="-md:my-16 md:mx-28" id="ubicacion">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d285.8437925587934!2d-98.2037114086761!3d18.997653347027253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spapeleria!5e0!3m2!1ses-419!2smx!4v1663638414562!5m2!1ses-419!2smx" className="border-0 w-full h-[60vh]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

      <HorariosContacto />

      <Footer />

      {mostrar && <Up />}
    </>
  )
}

export default App
