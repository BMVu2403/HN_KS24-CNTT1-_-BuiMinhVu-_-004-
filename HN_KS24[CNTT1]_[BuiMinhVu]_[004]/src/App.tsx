import { useEffect, useState } from "react";
import type { Book } from "./types/Book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("books");
    if (stored) setBooks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book: Book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const updateBook = (updated: Book) => {
    setBooks(books.map((b) => (b.id === updated.id ? updated : b)));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4"> Quản lý sách</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} updateBook={updateBook} />
    </div>
  );
}

export default App;
