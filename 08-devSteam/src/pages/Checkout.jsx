import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Checkout = () => {
  const [carrinho, setCarrinho] = useState([]);
  const navigate = useNavigate();

  const total = carrinho.reduce(
    (acc, item) =>
      acc + (item.preco - (item.preco * item.desconto) / 100) * item.quantidade,
    0
  );

  useEffect(() => {
    const itensCarrinho = localStorage.getItem("devcarrinho");
    itensCarrinho ? setCarrinho(JSON.parse(itensCarrinho)) : navigate("/");
  }, [navigate]);

  const handleConfirmar = () => {
    alert("Compra confirmada! Obrigado 😊");
    localStorage.removeItem("devcarrinho");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">Finalizar compra!</h2>
      <hr />
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {carrinho.map((item) => (
              <li
                key={item.id}
                className="list-group d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6 className="my-0">{item.titulo}</h6>
                  <small>Qtd: {item.quantidade}</small>
                </div>
                <span className="text-decoration-line-through">
                  R$ {item.preco.toFixed(2)}
                </span>
                <span>
                  R${" "}
                  {(item.preco - (item.preco * item.desconto) / 100).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between mb-3">
            <strong>Total:</strong>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>
          <button className="btn btn-success w-100" onClick={handleConfirmar}>
            Confirmar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;