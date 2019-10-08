import React , { createContext ,useState } from 'react';
import uuid from 'uuid/v1'


export const BookContext = createContext()
const BookContextProvider = (props) => {
    const [books,setBooks ] = useState([
        { id : 1,title : 'Buszujący w zbożu', author : 'J.D.Salinger'},
        { id : 2,title : 'Władca much', author : 'W.Golding'}
    ])
    const addBook = (title,author) => {
        setBooks([...books,{ title : title , author : author , id : uuid() }])
    }
    const removeBook = ( id ) => {
        setBooks(books.filter(book => book.id !== id ))
    }
    return (
        <BookContext.Provider value={ {books ,addBook,removeBook} } >
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
