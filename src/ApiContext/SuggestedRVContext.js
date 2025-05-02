import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SuggestedRVContext = createContext(null);

export const SuggestedRVProvider = ({ children }) => {
  const [vehicleType, setVehicleType] = useState("");
  const [suggestedRVs, setSuggestedRVs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!vehicleType) return;

    const fetchSuggestedRVs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://rvlistingbackend.campingx.net/main/get_suggested_rv?vehicle_type=${encodeURIComponent(vehicleType)}`
        );
        if (response.data && Array.isArray(response.data.data)) {
          setSuggestedRVs(response.data.data);
        } else {
          setSuggestedRVs([]);
        }
      } catch (err) {
        console.error("Failed to fetch suggested RVs:", err);
        setError("Failed to fetch RVs");
        setSuggestedRVs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestedRVs();
  }, [vehicleType]);

  return (
    <SuggestedRVContext.Provider
      value={{ vehicleType, setVehicleType, suggestedRVs, loading, error }}
    >
      {children}
    </SuggestedRVContext.Provider>
  );
};

export const useSuggestedRV = () => {
  const context = useContext(SuggestedRVContext);
  if (!context) {
    throw new Error("useSuggestedRV must be used within a SuggestedRVProvider");
  }
  return context;
};
