import React ,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'
import NewBookForm from './NewBookForm';
const BookList = () => {
const {books} = useContext(BookContext)

const list = books.length>0 ? books.map( book => (
   <BookDetails book={book} key={book.id}></BookDetails>
) ) :(<div className='collection-item'><h4>Nie ma żadnej książki</h4></div>)
    return  (
         <div>
            
       <div className='book-list collection' >{list}</div>
          <NewBookForm></NewBookForm>
         </div>
    )
    }

export default BookList;
