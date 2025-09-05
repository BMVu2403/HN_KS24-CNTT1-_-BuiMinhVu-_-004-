interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <div className="">
      <div className="">
        <p>Bạn có chắc chắn muốn xóa sách này?</p>
        <div className="">
          <button className="" onClick={onConfirm}>
            OK
          </button>
          <button className="" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
