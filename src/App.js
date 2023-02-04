import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }

      return book
    })

    setBooks(updatedBooks)
  }

  const createBook = (title) => {
    setBooks([...books, { id: Math.random() * 9999, title: title }])
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
