import "./App.css";
import UserList from "./components/UserList";

function App() {
  const sayHello = (name: string, age: number) => {
    alert("Name: " + name + " Edad: " + age);
  };

  return (
    <UserList />
  );
}
export default App;