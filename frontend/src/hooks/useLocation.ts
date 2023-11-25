import { useState, useEffect } from "react";

interface LocationProps {
  location: {
    latitude: number | null;
    longitude: number | null;
  };
  error: string | null;
}

const useCurrentLocation = (): LocationProps => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // GeoLocation을 이용해서 접속 위치를 얻어오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setError("위치 정보를 가져오는데 실패했습니다.");
      },
      { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 },
    );
  }, []);

  return { location, error };
};

export default useCurrentLocation;
