import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const UsersService = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error(`Error getting data: ${error}`);
    }
  },
};
