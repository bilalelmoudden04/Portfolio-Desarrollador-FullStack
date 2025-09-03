import Navbar from "./componentes/Navbar";
import About from "./paginas/About";
import Hero from "./paginas/Hero";
import Proyectos from "./paginas/Proyectos";
import Tecnologias from "./paginas/Tecnologias";
import Experiencia from "./paginas/Experiencia";
import Formacion from "./paginas/Formacion";
import Contacto from "./paginas/Contacto";  
import Footer from "./componentes/Footer";
  
export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Proyectos />
        <Tecnologias />
        <Experiencia />
        <Formacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
