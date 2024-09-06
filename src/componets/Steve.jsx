import React from 'react'
import { useGLTF, useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
function Steve() {
  let model = useGLTF("/minecraft_-_steve.glb");
  let meshes={};
    model.scene.traverse(e =>{    
        meshes[e.name]=e;
    });
    console.log(meshes);
    let data= useScroll();
    // useFrame((state,delta)=>{
    //   meshes.Sketchfab_model.rotation.x=THREE.MathUtils.degToRad(360 - (data.offset*90));
    // })
    meshes.RootNode.rotation.z=0;
    meshes.RootNode.rotation.y=0;
    meshes.RootNode.rotation.x=180;
    useFrame((state,delta)=>{
      meshes.Sketchfab_model.rotation.z=THREE.MathUtils.degToRad(540 - (data.offset*360));
      meshes.Sketchfab_Scene.rotation.z=THREE.MathUtils.degToRad(540 - (data.offset*360));
    })
  return (
    <group position={[0,-4,20]}>
    <primitive object={model.scene} />
    </group>
  )
}

export default Steve
