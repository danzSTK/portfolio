import { useRef } from "react";

import LocomotiveScrollProvider from "./provider/LocomotiveScrollProvider";

import Header from "./components/Header";
import Home from "./pages/Home";

import { GlobalStyle } from "./styles";

function App() {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <LocomotiveScrollProvider containerRef={containerRef}>
      <Header />
      <main ref={containerRef}>
        <Home />
      </main>
      <GlobalStyle />
    </LocomotiveScrollProvider>
  );
}

export default App;
