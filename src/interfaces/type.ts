import type { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  isFavorite: boolean;
};

export type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number };

export type ModalProps = {
    onClose: () => void;
    children?: ReactNode;
}
