import { User, UserAPI } from './userTypes';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    fullName: userAPI.full_name,
    userName: userAPI.username,
    profileUrl: userAPI.profile_url,
    email: userAPI.email,
    isOnline: userAPI.is_online,
  };
}

export const userAdapter = {
  toUser,
};
