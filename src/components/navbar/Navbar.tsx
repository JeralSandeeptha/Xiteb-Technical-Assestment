import { navLinks } from '../../data/navLinks.data';
import './Navbar.scss';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="navbar-inner">
        <div className="left">
            <img src='https://images-marketing.99static.com/images/product-landing/why99d/Why99d_logo-design.png?auto=format&fit=max&w=1920&q=75' alt="logo" className='logo'/>
        </div>
        <div className="right">
            <div className="links">
                {
                    navLinks.map((link) => {
                        return (
                            <h5 className='link'>{link}</h5>
                        )
                    })
                }
            </div>
            <div className="buttons">
                <button className='button-one button'>GET A QUOTE</button>
                <button className='button-two button'>SIGN IN</button>
            </div>
        </div>
      </div>
    </div>
  );
  
}

export default Navbar;