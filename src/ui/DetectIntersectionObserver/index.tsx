import { useCallback, useRef } from "react";

type Props = {
  onProcess: VoidFunction;
  children?: React.ReactNode;
};

const DetectIntersectionObserver = ({ onProcess, children }: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const itemRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onProcess();
      }
    });
    if (node) observerRef.current.observe(node);
  }, []);

  return <div ref={itemRef}>{children}</div>;
};

export default DetectIntersectionObserver;
