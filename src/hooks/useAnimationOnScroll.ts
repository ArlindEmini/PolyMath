import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function useAnimationOnScroll() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
}

export default useAnimationOnScroll;
