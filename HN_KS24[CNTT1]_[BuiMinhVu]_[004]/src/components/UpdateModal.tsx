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
    <div className="">
      <div className="">
        <h2 className="">Cập nhật sách</h2>
        <input
          className=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className=""
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <div className="">
          <button className="" onClick={handleUpdate}>
            Lưu
          </button>
          <button className="" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
