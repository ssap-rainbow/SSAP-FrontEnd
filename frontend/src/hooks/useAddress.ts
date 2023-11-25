import { useEffect, useState } from "react";

const useAddress = (latitude, longitude) => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (latitude && longitude) {
      // 주소-좌표 변환 객체를 생성
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.coord2Address(
        latitude,
        longitude,
        (result: any, status: any) => {
          console.log("주소-좌표 변환", latitude, longitude);
          if (status === window.kakao.maps.services.Status.OK) {
            // 지번 주소
            const jibunAddress = result[0].address
              ? result[0].address.address_name
              : "";

            console.log("지번 주소: ", jibunAddress);

            setAddress(jibunAddress);
          }
        },
      );
    } else {
      console.log("위치 좌표를 못받아왔습니다.");
    }
  }, [latitude, longitude]);

  return { address };
};

export default useAddress;
