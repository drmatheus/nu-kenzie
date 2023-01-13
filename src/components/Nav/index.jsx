import "./style.css";

export function Nav({ setFilter }) {
  function handleFilterChange(e) {
    setFilter(e.target.id);
  }

  return (
    <nav className="navigation">
      <h2>Resumo Financeiro</h2>
      <label
        name="Todos"
        className="button"
        htmlFor="Todos"
        onClick={handleFilterChange}
      >
        Todos
        <input
          className="hide"
          type="radio"
          id="Todos"
          name="filter"
          defaultChecked
        />
      </label>
      <label
        name="Entrada"
        className="button"
        htmlFor="Entrada"
        onClick={handleFilterChange}
      >
        Entradas
        <input className="hide" type="radio" name="filter" id="Entrada" />
      </label>
      <label
        name="Despesa"
        className="button"
        htmlFor="Despesa"
        onClick={handleFilterChange}
      >
        Despesas
        <input className="hide" type="radio" name="filter" id="Despesa" />
      </label>
    </nav>
  );
}
