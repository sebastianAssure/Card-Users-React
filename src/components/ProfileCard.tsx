import { type JSX } from 'react';
import type { User } from '../interfaces/User';
import { FaStar } from 'react-icons/fa';

const ProfileCard: React.FC<User> = ({ name, role, avatar, location, isFavorite }): JSX.Element => {
  return (
    <div className="flex flex-col items-center rounded-3xl p-4 bg-sky-400 hover:bg-sky-500">
      <img className="rounded-full" src={avatar} alt='user.img' />
      <h1 className='text-xl text-gray-700'>{name}</h1>
      <p className='text-md text-gray-600'>{role}</p>
      <p className='text-md text-gray-600'>{location}</p>
      <p>{ isFavorite && <FaStar className="text-yellow-400 text-2xl" /> }</p>
    </div>
  );
}

export default ProfileCard;