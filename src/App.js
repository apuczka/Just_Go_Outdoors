import './App.css';
import Headers from "./components/Headers";
import Section from "./components/Section";
import Footer from "./components/Footer";
import background from "./assets/background.jpg";

const backgroundImage = {
    backgroundImage: "url(" + background + ")",
};

function App() {
  return (

      <div>

          <Headers />
          <Section />
          <Footer />
      </div>

  );
}

export default App;
