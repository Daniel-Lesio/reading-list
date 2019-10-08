import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import 'materialize-css/dist/css/materialize.min.css';
import Bg from './assets/bg.jpg'
function App() {
  console.log(Bg)
  return (
    <div id="app" >
      <BookContextProvider>
        <Navbar></Navbar>
        <div className="container">
        <BookList></BookList>
        </div>
      </BookContextProvider>
    </div>
  );
}


export default App;
