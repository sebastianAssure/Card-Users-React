import { lazy, Suspense, useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";
import ExpensiveComponent from "./components/ExpensiveComponent";
const Modal = lazy(() => import("./components/Modal"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main className="flex flex-col justify-center h-screen bg-black">
      <div className="p-8 text-center">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-700"
        >
          Open Modal
        </button>
      </div>
      {isOpen && (
        <Suspense fallback={<p className="text-white text-center">Loading modal....</p>}>
          <Modal onClose={closeModal}>
            <h2 className="text-xl font-bold mb-2">Test</h2>
            <p>Content that may change depending on the children.</p>
          </Modal>
        </Suspense>
      )}
      <ToDoList />
      <ExpensiveComponent></ExpensiveComponent>
    </main>
  );
}
export default App;
