import { useEffect } from "react";

export default function ToggleVisibility() {

  useEffect(() => {
    const button = document.querySelector("#toggle");
    const message = document.querySelector("#message");

    if (!button || !message) return;

    const handleClick = () => {
      message.style.display = message.style.display === "none" ? "block" : "none";
      console.log(message.style.display);
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
        <button id="toggle">Toggle message</button>

        <p id="message">
        Hello world
        </p>
    </div>
  );
}

/*
1. Primeiro clique → esconder o texto
2. Segundo clique → mostrar novamente
3. Continue alternando

querySelector
Serve para selecionar elementos do DOM usando seletores CSS.
Retorna o primeiro elemento que corresponde ao seletor especificado.
Usa o id do elemento para selecioná-lo,por exemplo:
document.querySelector("#toggle") seleciona o elemento com id "toggle".

addEventListener
Serve para adicionar um ouvinte de eventos a um elemento.
Recebe dois argumentos: o tipo de evento e a função a ser
executada quando o evento ocorrer.

removeEventListener
Serve para remover um ouvinte de eventos de um elemento.
Recebe os mesmos argumentos que addEventListener: o tipo de evento e a função a ser removida.
*/