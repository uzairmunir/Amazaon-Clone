import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContextValue, useStateValue } from './context/Context';
import { useAuth } from './context/AuthContext';
import { auth } from './../Firebase';

function Header() {
  const handelUser = () => {
    if (currentUser) {
      auth.signOut();
    }
  };
  const { currentUser } = useAuth();
  let [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        {/* NavBar Image */}
        <Link to='/'>
          <img
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            className='header-logo'
          />
        </Link>

        {/* NavBar Toggler Button */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* NavBar Input Box */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          {/* NavBar Search Button */}
          <button className='btn btn-success'>Search</button>
          {/* NavBar Link Items */}
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              {/* NavBar List Item 1 */}
              <div>
                <Link
                  to={!currentUser && '/login'}
                  className='link-items'
                  onClick={handelUser}
                >
                  <span className='option-one'>Hello</span>
                  <span className='option-two'>
                    {currentUser ? 'SignOut' : 'SignIn'}
                  </span>
                </Link>
              </div>
            </li>
            <li className='nav-item active'>
              {/* NavBar List Item 2 */}
              <div>
                <Link to='/login' className='link-items'>
                  <span className='option-one'>Returns</span>
                  <span className='option-two'>&Orders</span>
                </Link>
              </div>
            </li>
            <li className='nav-item active'>
              {/* NavBar List Item 3 */}
              <div>
                <Link to='/login' className='link-items'>
                  <span className='option-one'>Your</span>
                  <span className='option-two'>Prime</span>
                </Link>
              </div>
            </li>
            <li className='nav-item active'>
              {/* NavBar List Item 4 */}
              <div>
                <Link to='/cart' className='link-items'>
                  <b>ShoppingCart</b>
                  <span>{basket.length}</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
