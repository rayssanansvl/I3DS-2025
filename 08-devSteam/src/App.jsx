import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const[contador, setContador] = useState(0);

  const handleAddCarrinho = () => {
    setContador(contador + 1);
}

  return (
    <>
      <Header contadorJogos={contador} />
      <Promotion onAddCarrinho={handleAddCarrinho} />
    </>
  );
}

export default App;