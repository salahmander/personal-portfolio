import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { About } from "./Sections/About/About";
import { Contact } from "./Sections/Contact/Contact";
import { Hero } from "./Sections/Hero/Hero";
import { Portfolio } from "./Sections/Portfolio/Portfolio";
import { Services } from "./Sections/Services/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
