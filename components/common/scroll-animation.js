import { useEffect, useRef, useState } from "react";

function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn = ({ from, to, children, className, style = {}, animStyle = { transition: "600ms ease-in-out" } }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={
        onScreen
          ? {
            ...animStyle,
            ...to,
            ...style
          }
          : {
            ...animStyle,
            ...from,
            ...style
          }
      }
    >
      {children}
    </div>
  );
};

const FadeIn = ({ children, className, animStyle= { transition: ".75s ease-in-out" }, style = {} }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }} className={className} style={style} animStyle={animStyle}>
    {children}
  </AnimateIn>
);

const FadeUp = ({ children, className }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    className={className}
  >
    {children}
  </AnimateIn>
);

const ScaleIn = ({ children, className }) => (
  <AnimateIn
    from={{ scale: "0" }}
    to={{ scale: "1" }}
    className={className}
    animStyle={{ transition: ".75s ease-in-out" }}
  >
    {children}
  </AnimateIn>
);

const ScrollAnimation = {
  FadeIn,
  FadeUp,
  ScaleIn
}

export default ScrollAnimation;
