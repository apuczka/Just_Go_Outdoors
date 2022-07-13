import './App.css';
import Headers from "./components/Headers";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (

      <div>

          <Headers id='page-wrap'/>

          <Section />
          <Contact />
          <Footer />
      </div>

  );
}

export default App;
