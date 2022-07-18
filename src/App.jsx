import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [on, setOn] = useState(false);

  return (
    <BrowserRouter>
      <animated.div
        className="grid w-screen h-screen place-content-center"
        style={useSpring({
          background: on ? "white" : "black",
        })}
      >
        <animated.div
          className="z-10 text-center text-3xl font-bold rounded-lg hover:shadow-2xl shadow:lg transition-shadow duration-200"
          style={useSpring({
            color: on ? "white" : "black",
            background: on ? "black" : "white",
            transform: on ? "translate3d(40%,0,0)" : "translate3d(-40%,0,0)",
          })}
          onClick={() => {
            setOn(!on);
          }}
        >
          <Routes>
            <Route path="on" element={<Two />} />
            <Route path="/" element={<One />} />
          </Routes>
        </animated.div>
      </animated.div>
    </BrowserRouter>
  );
}

export default App;

export const One = () => (
  <Link to="on">
    <p className="w-20 py-2 ">1</p>
  </Link>
);
export const Two = () => (
  <Link to="/">
    <p className="w-20 py-2 ">2</p>
  </Link>
);
