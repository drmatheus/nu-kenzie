/*import userEvent from "@testing-library/user-event";*/
import "./App.css";
import { Header } from "./components/Header";
import { Li } from "./components/ListItem";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";
import { LandingPage } from "./components/LandingPage";
import { useEffect, useState } from "react";

function App() {
  const [buttonState, setButtonState] = useState(true);

  function HomePage(props) {
    const [entries, setEntries] = useState(
      JSON.parse(localStorage.getItem("@Nukenzi:expenses")) || []
    );
    const [filter, setFilter] = useState("Todos");
    const entriesFiltered = getEntriesFiltered();

    useEffect(() => {
      setEntries(JSON.parse(localStorage.getItem("@Nukenzi:expenses")));
    }, [setEntries]);

    localStorage.setItem("@Nukenzi:expenses", JSON.stringify(entries));

    function getEntriesFiltered() {
      if (filter === "Todos") {
        return entries;
      } else {
        const filtered = entries.filter((entry) => entry.type === filter);
        return filtered;
      }
    }

    function RenderAllCards() {
      return entriesFiltered.map((entry) => {
        return (
          <Li
            setEntries={setEntries}
            name={entry.name}
            type={entry.type}
            id={entry.id}
            value={entry.value}
          />
        );
      });
    }

    function NoCards() {
      return (
        <div className="warning">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <div className="noCards"></div>
        </div>
      );
    }

    return (
      <div>
        <Header page={props.page} />

        <div className="container">
          <Aside setEntries={setEntries} entries={entries} />
          <div>
            <Nav setFilter={setFilter} />

            <ul>{entries.length ? <RenderAllCards /> : <NoCards />}</ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {buttonState ? (
        <LandingPage page={setButtonState} />
      ) : (
        <HomePage page={setButtonState} />
      )}
    </div>
  );
}

export default App;
