export type User = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  isFavorite: boolean;
};

export type UserProps = {
  name: string;
  age: number;
  onClick: () => void;
}