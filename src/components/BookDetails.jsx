import React , {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    console.log(book)
    const { removeBook } =   useContext(BookContext)
    
    return (
        <div className='collection-item' onClick={ ()=>{ removeBook(book.id) } }>
            <div className="">
            <h4 className='text-center'>{book.title}</h4>
            <p>{ book.author }</p>
            </div>
        </div>
        
    );
}


export default BookDetails;
