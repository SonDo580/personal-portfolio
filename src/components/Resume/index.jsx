import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(
      "https://www.topcv.vn/xem-cv/VwwHDVZQBAUFVQBRAVdVVAVXVwAKClQLBlMFWQ4b8b",
      "_blank"
    );

    navigate("/");
  }, []);

  return null;
}

export default Resume;
