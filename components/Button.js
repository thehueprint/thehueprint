export default function Button({ text }) {
  return (
    <button className="order-2 h-[46px] w-[161px] bg-slate-900 text-center">
      <p className="font-cuprum text-sm font-bold text-white">{text}</p>
    </button>
  );
}
