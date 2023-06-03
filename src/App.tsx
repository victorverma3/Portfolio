import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="top">
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
}

export default App;
