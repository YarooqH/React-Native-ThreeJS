import React, { Suspense, useEffect, useRef, useState } from 'react'
import {View, Text, Button} from 'react-native';
// import { Text } from '@react-three/drei/native';
import {ExpoWebGLRenderingContext, GLView} from 'expo-gl';
// import { Renderer, TextureLoader } from 'expo-three';
import { useFrame, Canvas, useLoader, useThree, extend } from '@react-three/fiber/native'
import { useGLTF, Environment, useAnimations, useTexture } from '@react-three/drei/native'
import OrbitControlsView from 'expo-three-orbit-controls';
import iphoneModelPath from './assets/iphone.glb'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import kickPath from './assets/RyanKick.glb';
import Model from './RyanKick';
import path from './assets/scene.glb';
import im from './assets/Penalty1.glb';
import myModel from './assets/Penalty1.glb';
import path1 from './assets/scene-1.glb';
import micky from './assets/micky.glb';
import walkig from './assets/walking.glb';
import stacy from './assets/stacy.glb';
import stacyTex from './assets/stacy.jpg';
// import {Ipgone} from './Iphone.js';
import * as THREE from 'three';
// import { OrbitControls } from '@react-three/drei/native';
// import { OrbitControls } from 'three/examples/js/controls/OrbitControls';
import useControls from 'r3f-native-orbitcontrols'

import { MeshBasicMaterial } from 'three';
// extend ({OrbitControls})

function Models({ url, ...rest }) {
  const { scene } = useGLTF(url)
  useFrame(() => (scene.rotation.y += 0.01,scene.rotation.x += 0.001, scene.rotation.z += 0.001 ))
  return <primitive {...rest} object={scene} />
}

function Ipgone({url, ...rest}) {
  let myGroup = useRef();
  const { scene, nodes, materials } = useGLTF(url);

  useFrame(() => {
    myGroup.current.rotation.x += 0.01;
  });
  // try{
    // useFrame(() => (scene.rotation.y += 0.01, scene.rotation.x += 0.001, scene.rotation.z += 0.001 ))
    // useEffect(() => {
    //   nodes.forEach(element => {
    //     element.rotation.y += 0.01;        
    //   });
    //   // scene.rotation.y += 0.01;
    // });
    // useEffect(() => {
    //   scene.rotation.y += 0.01;
    // })

    return (
      // <primitive {...rest} object={scene} />
      <group ref={myGroup} {...rest} dispose={null} object={scene}>
        <group position={[0, -0.03, 0.11]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Mesh_0.geometry} material={materials['Mat.10']} />
          <mesh geometry={nodes.Mesh_0_1.geometry} material={materials['Mat.2']} />
          <mesh geometry={nodes.Mesh_0_2.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Mesh_0_3.geometry} material={materials['Mat.1']} />
          <mesh geometry={nodes.Mesh_0_4.geometry} material={materials['Mat.6_2_1']} />
          <mesh geometry={nodes.Mesh_0_5.geometry} material={materials['Mat.6']} />
          <mesh geometry={nodes.Mesh_0_6.geometry} material={materials.Mat} />
          <mesh geometry={nodes.Mesh_0_7.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Mesh_0_8.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Mesh_0_9.geometry} material={materials['Mat.7']} />
          <mesh geometry={nodes.Mesh_0_10.geometry} material={materials['Mat.6_1']} />
          <mesh geometry={nodes.Mesh_0_11.geometry} material={materials['Mat.5']} />
          <mesh geometry={nodes.Mesh_0_12.geometry} material={materials['default']} />
          <mesh geometry={nodes.Mesh_0_13.geometry} material={materials['Mat.6_2']} />
          <mesh geometry={nodes.Mesh_0_14.geometry} material={materials['Mat.9']} />
          <mesh geometry={nodes.Mesh_0_15.geometry} material={materials['Mat.8']} />
          <mesh geometry={nodes.Mesh_0_16.geometry} material={materials['Mat.6_2.002']} />
          <mesh geometry={nodes.Mesh_0_17.geometry} material={materials['Mat.003']} />
        </group>
        <group position={[0, -0.03, 0.11]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Mesh_38.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Mesh_38_1.geometry} material={materials['Mat.10']} />
        </group>
        <mesh geometry={nodes.Screen.geometry} material={materials['Mat.003']} position={[0, -0.03, 0.11]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
    )
  // } catch(e) {
  //   console.log("Errorski: ",  e);
  // }
}

function JustKick({url, ...rest}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(url);
  const { ref, actions, names } = useAnimations(animations)
  useFrame(() => {
    actions[names[0]].play();
  })
  // const { actions } = useAnimations(animations, group)
  return (
    // <primitive {...rest} object={scene} />
    <group ref={ref} {...rest} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} position={[-0.4,-1.5,0]} scale={0.02}>
          <primitive object={nodes.mixamorigHips} />
          {/* <mesh geometry={nodes.mixamorigHips} /> */}
          <skinnedMesh name="Beta_Joints" geometry={nodes.Beta_Joints.geometry} material={materials.Beta_Joints_MAT1} skeleton={nodes.Beta_Joints.skeleton} />
          <skinnedMesh name="Beta_Surface" geometry={nodes.Beta_Surface.geometry} material={materials.Beta_HighLimbsGeoSG3} skeleton={nodes.Beta_Surface.skeleton} />
          {/* <mesh geometry={nodes.Beta_Joints.geometry} material={materials.Beta_Joints_MAT1}  />
          <mesh geometry={nodes.Beta_Surface.geometry} material={materials.Beta_HighLimbsGeoSG3}  /> */}
        </group>
      </group>
    </group>
  )
}

function OriginalKick({url, ...rest}, props) {
  // const group = useRef()
  const { nodes, materials, animations } = useGLTF(url);
  const { ref, actions, names } = useAnimations(animations)  
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={ref} {...rest} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} skeleton={nodes.EyeLeft.skeleton} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} skeleton={nodes.EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} skeleton={nodes.Wolf3D_Head.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} skeleton={nodes.Wolf3D_Teeth.skeleton} />
          {/* <mesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeLeft.skeleton} />
          <mesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeRight.skeleton} />
          <mesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.008']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <mesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.008']} skeleton={nodes.Wolf3D_Head.skeleton} />
          <mesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.008']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <mesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.008']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <mesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.008']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <mesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.008']} skeleton={nodes.Wolf3D_Teeth.skeleton} /> */}
        </group>
      </group>
    </group>
  );
}


const newComp = () => {
  const [gltf] = useLoader(GLTFLoader, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(iphoneModelPath);
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} />;
}

function Walk({url, ...rest}) {
  const group = useRef()
  const { nodes, animations } = useGLTF(url)
  const { ref, actions, names } = useAnimations(animations)
  useFrame(() =>{
    console.log(actions);
  })
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Beta_Joints" geometry={nodes.Beta_Joints.geometry} skeleton={nodes.Beta_Joints.skeleton} />
          <skinnedMesh name="Beta_Surface" geometry={nodes.Beta_Surface.geometry} skeleton={nodes.Beta_Surface.skeleton} />
          {/* <mesh geometry={nodes.Beta_Joints.geometry} material={materials.Beta_Joints_MAT1}/>
          <mesh geometry={nodes.Beta_Surface.geometry} material={materials.Beta_HighLimbsGeoSG3}/> */}
        </group>
      </group>
    </group>
  )
}

function StacyModel({url, url1}, props) {
  // Fetch model and a separate texture
  const { nodes, animations } = useGLTF(url)
  const texture = useTexture(url1)
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations)

  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(8)

  useFrame((state, delta) =>{
    actions[names[index]].play();
    // Reset and fade in animation after an index has been changed
    // console.log(index);
    // In the clean-up phase, fade it out
    // return () => actions[names[index]].fadeOut(0.5)
  })

  // useEffect(() => {
  //   console.log(index);
  // }, [index]);
  // useFrame(() => {
  //   // Reset and fade in animation after an index has been changed
  //   actions[names[index]].play()
  //   // In the clean-up phase, fade it out
  //   // return () => actions[names[index]].fadeOut(0.5)
  //   // actions[names[2]].play();
  // })

  
  return (
    <group onClick={(event) => setIndex((index + 1) % names.length)} ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0,-4,0]} scale={0.04}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
          
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


function Cam () {
  const [camera, setCamera] = useState<THREE.Camera | null>(null);    
    return(
      <View style={{ flex: 1 }}>
        <OrbitControlsView style={{ flex: 1 }} camera={camera}>
          <Canvas gl={{ physicallyCorrectLights: true }} onCreated={({ camera }) => setCamera(camera)}></Canvas>
        </OrbitControlsView>
     </View>
    )
}

function myCam() {
  const [camera, setCamera] = useState<Camera | null>(null);

  function Camera(props) {
    const { camera } = useThree();
    
    useEffect(() => {
      setCamera(camera);
    }, []);

    return <perspectiveCamera ref={camera} {...props} />;
  }
}

// const Orbit = () => {
//   const { camera, gl } = useThree()
//   useEffect(() => {
   
//     const controls = new OrbitControls(camera, gl.domElement)

//     controls.minDistance = 3
//     controls.maxDistance = 20
//     return () => {
//       controls.dispose()
//     }
//   }, [camera, gl])
//   return null
// }

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};


// useGLTF.preload(iphoneModelPath)

export default function App() {
  const [camera, setCamera] = useState(null);

  function zoom(constant, camera){
    camera.position.x = camera.position.x * constant;
    camera.position.y = camera.position.y * constant;
    camera.position.z = camera.position.z * constant;
  }

  function Camera(props) {
    const { camera } = useThree();

    // const controls = useRef();
    // useFrame(state => controls.current.update());

    useEffect(() => {
      setCamera(camera);
      // zoom(1, camera);
    });


    // useFrame(() => {
    //   zoom(1, camera)
    // })
    return (
      <perspectiveCamera {...camera} />
    );
  }

  // useEffect(() => {
    // zoom(0.1, camera);
  // }, [camera])
  // const newThree = useThree();
  // const [camera, setCamera] = useState<THREE.Camera | null>(null);
  // const [cam, setCam] = useState();
  // setCam(useThree());

  const[OrbitControls, events] = useControls();

  // <View  style={{ flex: 1 }}>
  return (
    <View style={{flex: 1}} {...events}>
    {/* <OrbitControlsView
          style={{ flex: 1 }}
          camera={camera}
          // enableZoom={true}
          // zoom={true}
        >  */}
    <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [0, 0, 16], fov: 50 }} onCreated={(state) => {
      const _gl = state.gl.getContext()
      const pixelStorei = _gl.pixelStorei.bind(_gl)
      _gl.pixelStorei = function(...args) {
        const [parameter] = args
        switch(parameter) {
          case _gl.UNPACK_FLIP_Y_WEBGL:
            return pixelStorei(...args)
        }
      }
    }}>
      {/* <OrbitControlsView> */}
      {/* <color attach="background" args={[0x00eeff]} /> */}
      <color attach="background" args={[0x999999]} />
      {/* <ambientLight /> */}
      {/* <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} /> */}
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />
        {/* <Cam /> */}
      <Suspense>
        {/* <OrbitControls enabled={true} rotateSpeed={2} /> */}
        <Environment preset="park" />
        {/* <OriginalKick url={kickPath} /> */}
        {/* <Model /> */}
        {/* <Factory /> */}
        {/* <Models url={iphoneModelPath} /> */}
        {/* <Models url={iphoneModelPath} /> */}
        {/* <Models url={walking} /> */}
        {/* <Models url={im} /> */}
        {/* <Models url={micky} /> */}
        {/* <Models url={path1} /> */}
        {/* <Ipgone url={iphoneModelPath} /> */}
        <StacyModel url={stacy} url1={stacyTex} />
        {/* <Walk url={walkig} /> */}
        {/* <Orbit /> */}
        {/* <JustKick url={myModel}/> */}
        {/* <newComp /> */}
        {/* <Kicks /> */}
        </Suspense>
      {/* <Button title="Click me"></Button> */}
        {/* <Camera /> */}
      {/* <CameraControls /> */}
      <OrbitControls />
    
      </Canvas>
    {/* </OrbitControlsView> */}
    </View>
    
  )
}
