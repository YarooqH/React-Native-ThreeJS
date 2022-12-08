/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei/native'
// import  {useGLTFLoader} from '@react-three/drei/native/loaders/useGLTFLoader';
// import React from 'react'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./assets/RyanKick.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeLeft.skeleton} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.008']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.008']} skeleton={nodes.Wolf3D_Head.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.008']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.008']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.008']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.008']} skeleton={nodes.Wolf3D_Teeth.skeleton} />
        </group>
      </group>
    </group>
  );
}

export default Model;

// export function Model(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('./RyanKick.glb')
//   const { actions } = useAnimations(animations, group)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group name="Armature">
//           <primitive object={nodes.Hips} />
//           <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeLeft.skeleton} />
//           <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.008']} skeleton={nodes.EyeRight.skeleton} />
//           <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.008']} skeleton={nodes.Wolf3D_Body.skeleton} />
//           <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.008']} skeleton={nodes.Wolf3D_Head.skeleton} />
//           <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.008']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
//           <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.008']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
//           <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.008']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
//           <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.008']} skeleton={nodes.Wolf3D_Teeth.skeleton} />
//         </group>
//       </group>
//     </group>
//   );
// }

useGLTF.preload('./assets/RyanKick.glb')