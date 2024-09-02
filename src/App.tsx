import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { About } from "./Sections/About/About";
import { Contact } from "./Sections/Contact/Contact";
import { Hero } from "./Sections/Hero/Hero";
import { Portfolio } from "./Sections/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
