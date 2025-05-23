import "./App.css";
import { UserCard } from "./components/UserCard";

function App() {
  const sayHello = (name: string, age: number) => {
    alert("Name: " + name + " Edad: " + age);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-cyan-950 p-20 gap-10 min-h-screen">
      <UserCard
        name="Luna Vega"
        age={25}
        onClick={() => sayHello("Luna Vega", 25)}
      />
      <UserCard
        name="Brendan Patel"
        age={30}
        onClick={() => sayHello("Brendan Patel", 30)}
      />
      <UserCard
        name="Kai Chen"
        age={24}
        onClick={() => sayHello("Kai Chen", 24)}
      />
      <UserCard
        name="Pedro Lopez"
        age={35}
        onClick={() => sayHello("Pedro Lopez", 35)}
      />
      <UserCard
        name="Maya Patel"
        age={25}
        onClick={() => sayHello("Maya Patel", 25)}
      />
      <UserCard
        name="Ethan Wright"
        age={22}
        onClick={() => sayHello("Ethan Wright", 22)}
      />
    </div>
  );
}
export default App;