import { Link } from "react-router-dom";
import "../Styles/landing.css";
import heroImage from "../Images/Hero 3.jpeg";
import logo from "../Images/Logo/Florella-white.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src={heroImage} alt="Hero 2" />
        </div>
        <div className="hero-content">
          <div className="row-1">
            <img src={logo} alt="Florella Logo" className="florella-logo" />
          </div>
          <div className="row-2">
            <div className="blooms-col-1">
              <p>Blooms</p>
              <Link to="/products#blooms-section" className="blooms-btn">
                View our blooms
              </Link>
            </div>
            <div className="blooms-col-2">
              <p className="amp">&</p>
            </div>
            <div className="blooms-col-3">
              <p>Bakes</p>
              <Link to="/products#bakes-section" className="bakes-btn">
                View our bakes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
