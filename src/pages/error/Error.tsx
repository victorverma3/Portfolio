import "./Error.css";
import tom from "../../images/tom.png";
import Footer from "../../components/Footer/Footer";

const Error = () => {
  return (
    <>
      <img className="errorImage" src={tom} alt="error loading image"></img>
      <Footer />
    </>
  );
};

export default Error;
