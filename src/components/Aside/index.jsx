import "./style.css";
import { Button } from "../Buttons";
import { useState } from "react";

export function Aside({ setEntries, entries }) {
  const [nameEntry, setNameEntry] = useState("");
  const [valueEntry, setValueEntry] = useState("");
  const [typeEntry, setTypeEntry] = useState("Entrada");

  function createNewEntry(event) {
    event.preventDefault();

    setEntries((oldEntries) => [
      ...oldEntries,
      {
        name: nameEntry,
        type: typeEntry,
        id: Math.random(),
        value: parseFloat(valueEntry),
      },
    ]);

    setNameEntry("");
    setValueEntry("");
  }

  function myTotal() {
    const expenses = entries.filter((entry) => entry.type === "Entrada");
    const income = entries.filter((entry) => entry.type === "Despesa");

    const totalExpenses = expenses
      .map((entry) => entry.value)
      .reduce((totalValue, value) => totalValue + value, 0);
    const totalIncome = income
      .map((entry) => entry.value)
      .reduce((totalValue, value) => totalValue + value, 0);

    return totalExpenses - totalIncome;
  }

  function RenderTotal() {
    return (
      <div className="aside">
        <div className="divTotal">
          <span className="title3">Valor total:</span>
          <span className="title3 colorMain">$ {myTotal().toFixed(2)}</span>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    );
  }

  return (
    <aside>
      <form onSubmit={createNewEntry} className="aside">
        <label htmlFor="description">
          Descrição
          <input
            placeholder="Digite aqui sua descrição"
            required
            className="input"
            onChange={(event) => setNameEntry(event.target.value)}
            type="text"
            name="description"
            value={nameEntry}
          />
        </label>
        <span>Ex: Compra de Roupas</span>
        <div className="divValueAndType">
          <label htmlFor="value">
            Valor
            <input
              placeholder="0,00"
              required
              className="input"
              onChange={(event) => setValueEntry(event.target.value)}
              type="number"
              step="0.01"
              name="value"
              value={valueEntry}
            />
          </label>

          <label htmlFor="type">
            Tipo de Valor
            <select
              className="input"
              onChange={(event) => setTypeEntry(event.target.value)}
              name="type"
              id=""
              defaulvalue={typeEntry}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </label>
        </div>

        <Button
          type="submit"
          className="button buttonMain"
          text="Inserir Valor"
        />
      </form>

      {entries.length > 0 && <RenderTotal />}
    </aside>
  );
}
