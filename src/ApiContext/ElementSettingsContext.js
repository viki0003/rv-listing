import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ElementSettingsContext = createContext();

export const ElementSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://rvlistingbackend.campingx.net/main/get_admin_settings')
      .then((res) => {
        setSettings(res.data.settings);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch element settings:', err);
        setError('Failed to fetch settings');
        setLoading(false);
      });
  }, []);

  return (
    <ElementSettingsContext.Provider value={{ settings, loading, error }}>
      {children}
    </ElementSettingsContext.Provider>
  );
};

export const useElementSettings = () => {
  const context = useContext(ElementSettingsContext);
  if (!context) {
    throw new Error('useElementSettings must be used within an ElementSettingsProvider');
  }
  return context;
};
