import { useEffect, useRef, useState } from "react";

export default function FadeInFromLeftSection({ children }) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        setVisible(false);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        });

        observer.observe(domRef.current);

        return () => {
            try {
                observer.unobserve(domRef.current);
            } catch {
                
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-from-left-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};
