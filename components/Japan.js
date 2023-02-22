import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../components/three/Box";
import LightBulb from "../components/three/Lightbulb";

function Japan() {
  return (
    <div className="w-auto m-auto">
      {/* <Image className="rounded-xl" src={japan} height={280} width={280}/> */}
      <Canvas
        shadows={true}
        className="h-48"
        camera={{
          position: [-3, 4, 1],
        }}
      >
        <ambientLight color={"teal"} intensity={0.4} />
        <LightBulb position={[-1, 7, 1]} />
        <Box />

        {/* <Floor /> */}
      </Canvas>
    </div>
  );
}

export default Japan;
