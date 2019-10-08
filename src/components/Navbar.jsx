import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper fixed purple darken-3">
        <div className=" brand large brand-logo center">
          <i className="material-icons">spa</i>  to read :  {books.length} {books.length === 1 ? 'book' :'books'  }   
        </div>
      </nav>
    </div>
  );
}
 
export default Navbar;