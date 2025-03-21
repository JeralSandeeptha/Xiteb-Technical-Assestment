import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className="content">
          <h5 className='sub-title'>LOGISTIC</h5>
          <h1 className='title'>Best Shipping <span>Partner</span></h1>
          <h5 className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h5>
          <button className='cta'>DISCOVER MORE</button>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  )
}

export default Hero;
