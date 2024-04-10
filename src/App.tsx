import { useContext } from "react";
import "./App.css";
import spinner from "./assets/spinner.svg";
import { ConfigContext } from "./Config";
import { Page as ClassicPage } from "./classic/Page";
import { Page as LibraryPage } from "./library/Page";

function App() {
  const { config, setConfig } = useContext(ConfigContext);
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={config.useLibrary}
            onChange={(e) =>
              setConfig({ ...config, useLibrary: e.target.checked })
            }
          />
          Use Library
        </label>
        <label>
          Cells Count{" "}
          <input
            type="number"
            value={config.cellsCount}
            onChange={(e) =>
              setConfig({ ...config, cellsCount: parseInt(e.target.value) })
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.slowMode}
            onChange={(e) =>
              setConfig({ ...config, slowMode: e.target.checked })
            }
          />
          Slow Mode
        </label>
        <label>
          Slow Count{" "}
          <input
            type="number"
            value={config.slowCount}
            onChange={(e) =>
              setConfig({ ...config, slowCount: parseInt(e.target.value) })
            }
          />
        </label>
        <img
          src={spinner}
          alt="spinner"
          style={{
            color: "red",
          }}
        />
      </header>
      {config.useLibrary ? <LibraryPage /> : <ClassicPage />}
    </>
  );
}

export default App;
