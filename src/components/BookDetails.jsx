import React , {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    console.log(book)
    const { dispatch } =   useContext(BookContext)
    
    return (
        <div className='collection-item' style={{ cursor : 'pointer' }}  onClick={ ()=>{ dispatch({type:'REMOVE_BOOK', id : book.id }) } }>
            <div className="">
            <h4 className='text-center'>{book.title}</h4>
            <p>{ book.author }</p>
            </div>
        </div>

    );
}


export default BookDetails;
