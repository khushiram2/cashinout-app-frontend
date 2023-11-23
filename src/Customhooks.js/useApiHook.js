import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5900";

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const Token=window.localStorage.getItem("token")
  const api = axios.create({
    baseURL: BASE_URL, 
  });

  api.interceptors.request.use(
    (config) => {
        if((config.url!=="/auth/register"||config.url!=="/auth/login") &&  Token){
            config.headers.Authorization=Token
            return config
        }
        return config;   
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchData = async (endpoint, method = 'get', body = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.request({
        url: `${endpoint}`,
        method,
        data: body,
      });

      setData(response.data);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createData = async (endpoint, newData) => {
    await fetchData(endpoint, 'post', newData);
  };

  const readData = async (endpoint) => {
    await fetchData(endpoint, 'get');
  };

  const updateData = async (endpoint, updatedData) => {
    await fetchData(endpoint, 'put', updatedData);
  };

  const deleteData = async (endpoint) => {
    await fetchData(endpoint, 'delete');
  };

  return {
    data,
    loading,
    error,
    createData,
    readData,
    updateData,
    deleteData,
  };
};

export default useApi;
