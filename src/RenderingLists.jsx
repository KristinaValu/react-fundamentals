const listForRender = [
  { value: 3, name: "List item value 3" },
  { value: 4, name: "List item value 4" },
  { value: 10, name: "List item value 10" },
  { value: 13, name: "List item value 13" },
  { value: 62, name: "List item value 62" },
  { value: 22, name: "List item value 22" },
  { value: 47, name: "List item value 47" },
  { value: 7, name: "List item value 7" },
  { value: 8, name: "List item value 8" },
];

export default function List({ isEven }) {
  if (isEven) {
    const filtered = listForRender.filter((item) => item.value % 2 === 0);
    const filteredList = filtered.map((item) => <li>{item.name}</li>);
    return (
      <section>
        <h1>Filtered list:</h1>
        <ul>{filteredList}</ul>
      </section>
    );
  }
  const list = listForRender.map((item) => <li>{item.name}</li>);
  return (
    <section>
      <h1>Full list:</h1>
      <ul>{list}</ul>
    </section>
  );
}
