import { useState } from "react";
import type { Book } from "../types/Book";

interface Props {
  book: Book;
  onUpdate: (book: Book) => void;
  onCancel: () => void;
}

export default function UpdateModal({ book, onUpdate, onCancel }: Props) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);

  const handleUpdate = () => {
    onUpdate({ ...book, title, author, year });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="font-bold mb-2">Cập nhật sách</h2>
        <input
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <div className="mt-4 space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Lưu
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
