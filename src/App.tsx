import "./App.css";
import ProfileCard from "./components/ProfileCard";
import type { User } from "./interfaces/User";

const users: User[] = [
  {
    id: 1,
    name: "Luna Vega",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?img=32",
    location: "New York, USA",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Kai Chen",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Toronto, Canada",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Sofia Ramos",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=45",
    location: "Barcelona, Spain",
    isFavorite: true,
  },
  {
    id: 4,
    name: "Ethan Wright",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=58",
    location: "Austin, USA",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Maya Patel",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=25",
    location: "London, UK",
    isFavorite: true,
  },
];

function App() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-20 gap-20">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            avatar={user.avatar}
            isFavorite={user.isFavorite}
            location={user.location}
            name={user.name}
            role={user.role}
            id={user.id}
          ></ProfileCard>
        ))}
      </div>
    </main>
  );
}
export default App;
