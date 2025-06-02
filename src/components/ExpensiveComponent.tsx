import { useState, useMemo } from "react";

export default function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 🔁 Calculamos solo cuando cambia el texto
  const metrics = useMemo(() => {
    console.log("⏳ Recalculating metrics...");
    
    const words = text.trim().split(/\s+/).filter(Boolean);
    const totalCharacters = text.length;
    const totalWords = words.length;
    const readingTime = totalWords / 200; // 200 palabras por minuto
    const averageWordLength =
      totalWords > 0
        ? words.reduce((sum, word) => sum + word.length, 0) / totalWords
        : 0;

    return {
      totalCharacters,
      totalWords,
      readingTime,
      averageWordLength,
    };
  }, [text]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl text-white font-bold mb-2">Character Counter Tool</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        className="w-full p-2 border rounded mb-4 text-white border-teal-500 outline-none"
        rows={6}
        style={{ resize: "both", overflow: "auto" }}
      />

      <div className="space-y-2">
        <p className="text-white"><strong>Total characters:</strong> {metrics.totalCharacters}</p>
        <p className="text-white"><strong>Total words:</strong> {metrics.totalWords}</p>
        <p className="text-white"><strong>Reading time:</strong> {metrics.readingTime.toFixed(2)} min</p>
        <p className="text-white"><strong>Avg. word length:</strong> {metrics.averageWordLength.toFixed(2)} chars</p>
      </div>

      <hr className="my-4" />

      <h3 className="text-lg text-white font-semibold">Expample Counter</h3>
      <p className="text-white">Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 px-4 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}
