import Accordion from "../accordion/Accordion";
import Slider from "../slider/Slider";
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-inner">

        <div className="testimonials-left">
          <div className="header">
            <h1 className="title">TRUSTED CLIENTS</h1>
            <h5 className="description">Lorem ipsum doret sit asd dkalsd</h5>
          </div>
          <Slider />
        </div>

        <div className="testimonials-right">
          <div className="header">
            <h1 className="title">WHY CHOOSE US</h1>
            <h5 className="description">Lorem ipsum doret sit asd dkalsd</h5>
          </div>
          <div>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
