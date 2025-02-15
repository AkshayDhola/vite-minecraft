import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Steve from "./componets/Steve";
function App() {
  return (
    <>
    <div className="w-full h-screen bg-black">
      <div className="absolute w-3/4 flex justify-between items-center py-4 top-0 left-1/2 -translate-x-1/2">
        <img className="w-1/5 object-cover" src="mine.svg" alt="" />
        <div className="w-1/3 justify-between flex">
          {["games", "shop", "community", "support"].map((e) => {
            return (
              <h6 href="" className="text-white font-[400] text-sm capitalize">
                {e}
              </h6>
            );
          })}
        </div>
      </div>
      <div className="absolute flex flex-col items-center w-4/5  text-white top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="mask text-7xl tracking-tight font-[700]">
          Say Hello to Steve
        </h3>
      </div>
      <Canvas
        className="hideThis w-full h-screen"
        camera={{ fov: 12, position: [0, -10, 220] }}
      >
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
          ]}
        />
        <ScrollControls pages={7}>
          <Steve />
        </ScrollControls>
      </Canvas>
    </div>
    </>
  );
}

export default App;
