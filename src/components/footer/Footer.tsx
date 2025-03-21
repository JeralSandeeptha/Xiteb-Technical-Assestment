import { footerImages } from "../../data/footerimages.data";
import { socialMedia } from "../../data/social.data";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-header">
          <div className="footer-header-left">
            <h1 className="footer-header-title">Weekly Newsletter</h1>
            <h5 className="footer-header-desc">
              There are many valdations for passsages of lorem ipsum available.
            </h5>
          </div>
          <div className="footer-header-right">
            <input type="text" className="text-input" />
            <button className="input-button">SUSBCRIBE</button>
          </div>
        </div>

        <div className="footer-middle">
          <div className="section">
            <h2 className="footer-title">About Us</h2>
            <div className="link-container-two">
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
            </div>
          </div>
          <div className="section">
            <h2 className="footer-title">About Us</h2>
            <div className="link-container-two">
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
            </div>
          </div>
          <div className="section">
            <h2 className="footer-title">About Us</h2>
            <div className="link-container-two">
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
              <h5 className="link">Lorem Ipsum</h5>
            </div>
          </div>
          <div className="section">
            <h2 className="footer-title">About Us</h2>
            <div className="link-container">
              {
                footerImages.map((image) => {
                  return (
                    <img src={image} alt="image" className="footer-image"/>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="footer-lower">
          <div className="company-details">
            <h5>Copyright @ 2021 | All Rights Reserved. Site by Xiteb&copy;</h5>
          </div>
          <div className="logos">
            {socialMedia.map((socail) => {
              return (
                <div className="logo-container">
                  <img src={socail.logo} alt={socail.logo} className="logo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
