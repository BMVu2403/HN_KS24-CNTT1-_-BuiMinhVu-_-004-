interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <p>Bạn có chắc chắn muốn xóa sách này?</p>
        <div className="mt-4 space-x-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            OK
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
