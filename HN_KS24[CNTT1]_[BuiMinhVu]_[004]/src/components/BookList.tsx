import { useState } from "react";
import type { Book } from "../types/Book";
import ConfirmModal from "./ConfirmModal";
import UpdateModal from "./UpdateModal";

interface Props {
  books: Book[];
  deleteBook: (id: number) => void;
  updateBook: (book: Book) => void;
}

export default function BookList({ books, deleteBook, updateBook }: Props) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  return (
    <div>
      {books.length === 0 && <p>Chưa có sách nào</p>}
      <ul className="">
        {books.map((book) => (
          <li key={book.id} className="">
            <div>
              <strong>{book.title}</strong> - {book.author} ({book.year})
            </div>
            <div className="">
              <button className="" onClick={() => setSelectedBook(book)}>
                Update
              </button>
              <button className="" onClick={() => setDeleteId(book.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal xóa */}
      {deleteId && (
        <ConfirmModal
          onConfirm={() => {
            deleteBook(deleteId);
            setDeleteId(null);
          }}
          onCancel={() => setDeleteId(null)}
        />
      )}

      {/* Modal cập nhật */}
      {selectedBook && (
        <UpdateModal
          book={selectedBook}
          onUpdate={(b) => {
            updateBook(b);
            setSelectedBook(null);
          }}
          onCancel={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
}
