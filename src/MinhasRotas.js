import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Letreiro from "./Components/Semana_01/Letreiro/Letreiro";
import Relogio from "./Components/Semana_01/Relogio/Relogio";
import Contador from "./Components/Semana_02/Contador/Contador";
import ComponentesAulas from "./Components/Semana_03/Scripts";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Components/Semana_01/Letreiro/Letreiro"
          element={<Letreiro />}
        />
        <Route
          path="/Components/Semana_01/Relogio/Relogio"
          element={<Relogio />}
        />
        <Route
          path="/Components/Semana_02/Contador/Contador"
          element={<Contador />}
        />
        <Route
          path="/Components/Semana_03/Scripts/index"
          element={<ComponentesAulas />}
        />
      </Routes>
    </BrowserRouter>
  );
}
