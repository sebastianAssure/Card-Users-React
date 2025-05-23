import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // Incrementar y decrementar con protección para no bajar de 0
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  // Manejo de teclas ArrowUp y ArrowDown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        increment();
      } else if (event.key === 'ArrowDown') {
        decrement();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpieza
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-10 bg-gray-100 rounded-xl shadow-md w-64 mx-auto mt-10">
      <h1 className="text-3xl font-bold">Counter</h1>
      <p className="text-2xl">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-lg cursor-pointer"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg cursor-pointer"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500">(Usa ↑ o ↓ también)</p>
    </div>
  );
}
