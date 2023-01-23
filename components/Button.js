export default function Button({ text }) {
  return (
    <button className="btn btn-blue order-2 h-[46px] w-[161px] text-center">
      <p className="text-white">{text}</p>
    </button>
  );
}
