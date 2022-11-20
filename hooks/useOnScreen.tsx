import { useEffect, useState, useRef } from 'react';

export function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<any>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isIntercepting = entry.intersectionRatio == 1;
        if (isIntercepting) {
          setIsOnScreen(isIntercepting);
          observerRef.current.disconnect();
        }
      },
      {
        threshold: 1,
      }
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
