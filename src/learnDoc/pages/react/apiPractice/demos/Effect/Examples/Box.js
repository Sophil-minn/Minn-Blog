import { useRef, useEffect } from "react";

export default function Box({ setIsIn }) {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log("entry.isIntersecting: ", entry.isIntersecting);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setIsIn(true);
      } else {
        setIsIn(false);
        console.log("出来了。。。。");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    });
    observer.observe(div, {
      threshold: 2.0,
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}
