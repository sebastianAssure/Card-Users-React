import { type JSX } from 'react';
import type { UserProps } from '../interfaces/User';

export const UserCard: React.FC<UserProps> = ({ name, age, onClick }): JSX.Element => {
  return (
    <div className="min-w-30 max-w-100 h-auto flex flex-col items-center justify-center rounded-3xl py-4 bg-sky-400 hover:bg-sky-500 cursor-pointer" onClick={onClick}>
      <h1 className='text-xl text-gray-700'>{name}</h1>
      <p className='text-md text-gray-600'>{age}</p>
    </div>
  );
}
