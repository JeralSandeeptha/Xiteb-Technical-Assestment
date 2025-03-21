import "./WelcomeSection.scss";
import bg from "../../assets/images/welcome-bg.png";
import { welcomeData } from "../../data/welcome.data";

const WelcomeSection = () => {
  return (
    <div className="welcome">
      <div className="welcome-inner">
        <div className="welcome-left">
          <img src={bg} alt="background-image" className="welcome-background-image"/>
        </div>

        <div className="welcome-right">
            <div className="box"></div>
            <h1 className="welcome-title">{welcomeData.title} <span className="span">{welcomeData.span}</span></h1>
            <h5 className="welcome-description">{welcomeData.desc_one}</h5>
            <h5 className="welcome-description">{welcomeData.desc_two}</h5>
            <button className="welcome-button">{welcomeData.button_text}</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
