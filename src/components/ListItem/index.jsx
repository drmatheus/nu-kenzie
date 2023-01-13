import "./style.css";

export function Li({ setEntries, type, id, name, value }) {
  function deleteItem(event) {
    setEntries((oldEntries) => {
      return oldEntries.filter((entry) => entry.id != event.target.id);
    });
  }

  let liClass = `itemList ${type}`;
  return (
    <li className={liClass} key={id}>
      <div className="divItem">
        <h2>{name}</h2>
        <span>R$ {value.toFixed(2)}</span>
        <button
          onClick={(event) => deleteItem(event)}
          id={id}
          className="buttonClose"
        ></button>
      </div>
      <span>{type}</span>
    </li>
  );
}
