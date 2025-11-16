export default function Pagination({ current, total, onChange }) {
  const pages = [...Array(total).keys()].map(i => i + 1);

  return (
    <div>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          style={{ fontWeight: p === current ? "bold" : "normal" }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
