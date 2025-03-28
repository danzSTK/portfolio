import LocomotiveScroll from "locomotive-scroll";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef
} from "react";

type LocomotiveScrollContextType = {
  /* containerRef: React.MutableRefObject<HTMLElement | null> */
  locomotiveScroll: React.MutableRefObject<LocomotiveScroll | null>
} | null

type LocomotiveScrollProps = {
  containerRef: React.MutableRefObject<HTMLElement | null>
}

// eslint-disable-next-line react-refresh/only-export-components
export const LocomotiveScrollContext =
  createContext<LocomotiveScrollContextType>(null);

const LocomotiveScrollProvider: FC<
  PropsWithChildren<LocomotiveScrollProps>
> = ({ children, containerRef }) => {
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    locomotiveScroll.current = new LocomotiveScroll({
      lenisOptions: {
        content: containerRef.current as HTMLElement,
        smoothWheel: true
      }
    });
    return () => {
      locomotiveScroll.current?.destroy();
    };
  }, [containerRef]);

  return (
    <LocomotiveScrollContext.Provider value={{ locomotiveScroll }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};

export default LocomotiveScrollProvider;
