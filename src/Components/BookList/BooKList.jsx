import React from 'react';
import { useGlobalContext } from '../../Context';
import Book from '../BookList/Book'
import Loding from '../Loader/Loader'
import Coverimg from "../images/cover_not_found.jpg";
import "./BookList.css"

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BooKList = () => {
  const { books, loding, resultTitle} = useGlobalContext();
  const bookwithcover = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : Coverimg
    }
  });
  // console.log(bookwithcover);

  if (loding) return <Loding />;

  return (
    <section className='booklist'>
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {
            bookwithcover.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>

  )
}

export default BooKList