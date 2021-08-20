import { useState } from 'react';

export default function useHttp () {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (config, applyFn) => {
    setIsLoading(true);
    setError(null);

    try {
      let response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        header: config.header ? config.header : {},
        body: config.body ? JSON.stringify(config.body) : null
      })
  
      let data = await response.json();
  
      applyFn(data);

    } catch (error) {
      setError(error.message);
    }
    
    setIsLoading(false);
  }

  return { isLoading, error, sendRequest }
}