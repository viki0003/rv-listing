import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BrandImagesContext = createContext();

export const BrandImagesProvider = ({ children }) => {
  const [brandImages, setBrandImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://rvlistingbackend.campingx.net/main/file_upload')
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setBrandImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load brand images');
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <BrandImagesContext.Provider value={{ brandImages, loading, error }}>
      {children}
    </BrandImagesContext.Provider>
  );
};

export const useBrandImages = () => {
  const context = useContext(BrandImagesContext);
  if (!context) {
    throw new Error('useBrandImages must be used within a BrandImagesProvider');
  }
  return context;
};
