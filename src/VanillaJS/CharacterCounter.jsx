import { useEffect } from "react";

export default function ToggleVisibility() {

  useEffect(() => {
    const textarea = document.querySelector("#text");
    const count = document.querySelector("#count");

    if (!textarea || !count) return;

    // const handleEvent = () => {
    //   count.textContent = `${textarea.value.length} characters`;
    // };
    const handleEvent = (e) => {
      count.textContent = `${e.target.value.length} characters`;
    };

    textarea.addEventListener("input", handleEvent);

    return () => {
      textarea.removeEventListener("input", handleEvent);
    };
  }, []);

  return (
    <div>
      <textarea id="text"></textarea>

      <p id="count">
      0 characters
      </p>
    </div>
  );
}

/*
1. Atualizar enquanto digita
2. Mostrar:

12 characters

3. Usar evento:

input

Não se pode usar qualquer nome de evento.
Eventos DOM sõ nomes específicos definidos pelo browser

Quando eu faço:
textarea.addEventListener("input", handleEvent);

O "input" precisa ser um evento que realmente existe.
Se eu usar "banana" nada vai acontecer.

Eventos mais comuns que você deve lembrar

Eventos de input / forms
input
change
submit
focus
blur

input  → dispara a cada caractere digitado
change → dispara quando o campo perde foco

Eventos de mouse
click
dblclick
mouseover
mouseout
mousedown
mouseup

Eventos de teclado
keydown
keyup
keypress

Eventos de página
load
DOMContentLoaded
resize
scroll

Regra prática para entrevistas

Para inputs de texto, quase sempre use:

input

Para botões:

click

Para forms:

submit

Exemplo clássico de entrevista
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
*/