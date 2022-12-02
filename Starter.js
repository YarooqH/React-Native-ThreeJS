import React, {useState, useEffect, Suspense} from 'react';
import OrbitControlsView from 'expo-three-orbit-controls';
import { useFrame, Canvas, useThree } from '@react-three/fiber/native';
import { useGLTF, Environment, useAnimations, useTexture } from '@react-three/drei/native';
import stacy from './assets/stacy.glb';
import stacyTex from './assets/stacy.jpg';

function StacyModel({url, url1}, props) {
    const { nodes, animations } = useGLTF(url)
    const texture = useTexture(url1)
    const { ref, actions, names } = useAnimations(animations)
    useFrame(() => {
      actions[names[1]].play();
    })
    
    return (
      <group ref={ref} {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} position={[0,-4,0]} scale={0.04}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            geometry={nodes.stacy.geometry}
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}>
            <meshStandardMaterial map={texture} map-flipY={false} skinning />
          </skinnedMesh>
        </group>
      </group>
    )
  }

function Starter() {
    const [camera, setCamera] = useState(null);

    function Camera(props) {
        const { camera } = useThree();
        useEffect(() => {
        setCamera(camera);
        }, []);
        return (
        <perspectiveCamera {...camera} />
        );
    }
  
  return (
    <OrbitControlsView
      style={{ flex: 1 }}
      camera={camera}
    > 
    <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }} onCreated={(state) => {
      const _gl = state.gl.getContext() // This code is for gl.pixelstorei() doesn't support this parameter yet! console bug
      const pixelStorei = _gl.pixelStorei.bind(_gl)
      _gl.pixelStorei = function(...args) {
        const [parameter] = args
        switch(parameter) {
          case _gl.UNPACK_FLIP_Y_WEBGL:
            return pixelStorei(...args)
        }
      }
    }}>
      <color attach="background" args={[0xe2a4df]} />
      <ambientLight />
        <Suspense>
            <Environment preset="park" />
            <StacyModel url={stacy} url1={stacyTex} />
        </Suspense>
        <Camera />
      </Canvas>
    </OrbitControlsView>
  )
}

export default Starter