/*
1. O usuário pode adicionar novos contadores.

2. Cada contador começa em 0.

3. Cada contador deve ter:
   - botão +
   - botão -
   - botão reset

4. O contador não pode ficar negativo.

5. Mostrar o valor total somando todos os contadores.

6. Mostrar:
"No counters yet"
quando não houver nenhum contador.

7. Se todos os contadores estiverem em 0 mostrar:

"All counters are zero"
*/
import { useState } from "react";

export default function ReactCodingExercise1() {
  const [counters, setCounters] = useState([])

  const handleAddCounter = () => {
    setCounters(prevCounters => {
      // const newId = prevCounters.length > 0 ? Math.max(...prevCounters.map(counter => counter.id)) + 1 : 1;
      return [ ...prevCounters, {
        // id: newId,
        id: Date.now(),
        value: 0
      }]
    })
  }

  const handleClearCounters = () => {
    setCounters([]);
  }

  const totalCounters = counters.reduce((total, counter) => total + counter.value, 0);

  const handleIncrementCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        return { ...counter, value: counter.value + 1 }
      }
      return counter;
    }))
  }

  const handleDecrementCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        return { ...counter, value: Math.max(0, counter.value - 1) }
      }
      return counter;
    }))
  }

  const handleResetCounter = (id) => {
    setCounters(prevCounters => prevCounters.map(counter => {
      if (counter.id === id) {
        return { ...counter, value: 0 }
      }
      return counter;
    }))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.length === 0 ? (
        <p>No counters yet</p>
      ) : (
        <div>
          {counters.map((counter) => (
            <div key={counter.id} style={{ display: "flex", gap: "10px", alignItems: "center", margin: "5px 0" }}>
              <span>{counter.value}</span>
              <button onClick={() => handleIncrementCounter(counter.id)}>+</button>
              <button onClick={() => handleDecrementCounter(counter.id)}>-</button>
              <button onClick={() => handleResetCounter(counter.id)}>Reset</button>
            </div>
          ))}
        </div>
      )}
      {counters.length > 0 && counters.every(counter => counter.value === 0) && (
        <p>All counters are zero</p>
      )}
      {counters.length !== 0 && (
        <p>Total: {totalCounters}</p>
      )}
      <button onClick={handleClearCounters}>Reset number of counters</button>
    </div>
  );
}