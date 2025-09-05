import { useState } from "react";
import type { Book } from "../types/Book";

interface Props {
  addBook: (book: Book) => void;
}

export default function BookForm({ addBook }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState<number>(2025);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ id: Date.now(), title, author, year });
    setTitle("");
    setAuthor("");
    setYear(2025);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        className="border p-2 w-full"
        placeholder="Tên sách"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Tác giả"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Năm xuất bản"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Thêm sách
      </button>
    </form>
  );
}
