import axios from 'axios';

const axiosInit = axios.create({
    baseURL: "http://localhost:5050/",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getItems = async (params = {}) =>{ 
  let answer = await axios.get('http://localhost:5050/', { params });
  answer = answer.data;
  console.log(answer);
  return answer;
};

export const getItemById = async (id) => {
  console.log(id);
  return (await axiosInit.get(`/${id}`)).data;
};