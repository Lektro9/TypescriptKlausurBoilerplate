import { getRepository } from 'typeorm';
import { User } from './models/User';

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: 'Lars',
    lastName: 'Jamesons',
    age: 23,
  });
  await userRepo.save(user).catch((err) => {
    console.log('Error: ', err);
  });
  console.log('new user with id: ', user.id);
};
