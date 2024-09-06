import React from 'react'
import { div } from 'three/webgpu';

function Content() {
    const data=[{
        img:"https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg",
        name:"minecraft",
        pera:"Sandbox Survival, Adventure Single-player + Multiplayer"
    },{
        img:"https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg",
        name:"Minecraft Dungeons",
        pera:"Dungeon Crawl, Action RPG Single-player + Multiplayer"
    },{
        img:"https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg",
        name:"Minecraft Legends",
        pera:"Action RPG, Strategy Single-player + Multiplayer"
    },{
        img:"https://www.minecraft.net/content/dam/minecraftnet/education-edition/key-art/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg",
        name:"Minecraft Education",
        pera:"Education, Sandbox Survival, Adventure Single-player + Multiplayer"
    }];
  return (
    <>
        <div className='w-full h-screen bg-black flex flex-col'>
            <h1 className='text-lg text-white py-5 px-8'>Discover our games</h1>
            <div className='flex max-w-screen-lg mx-auto gap-10'>
                {data.map(e=>{
                    return <div className='w-52 h-64'>
                        <img className='w-full h-full object-cover' src={e.img} alt="" />
                        <h2 className='text-white px-2 capitalize'>{e.name}</h2>
                        <p className='text-zinc-500/50 px-2 text-sm'>{e.pera}</p>
                    </div>
                })}
            </div>
        </div>
        <div className='w-full h-screen bg-black flex flex-row relative pt-16 overflow-hidden'>
            <h1 className='text-lg absolute left-5 top-0 text-white py-5 px-8'>Gameplay Trailers</h1>
            <div className='w-2/5 h-[56%] mx-auto relative rounded-md overflow-hidden'>
                <h1 className='absolute top-0 right-0 px-3 z-20 bg-red-50'>Minecraft Legends</h1>
                <video className='absolute top-0 left-0 w-full h-full' autoPlay loop muted src="https://www.minecraft.net/content/dam/minecraftnet/games/badger/videos/Homepage_Gameplay-Trailer_MC-Legends_1080x720.webm"></video>
            </div>
            <div className='w-2/5 h-[56%] mx-auto relative rounded-md overflow-hidden'>
                <h1 className='absolute top-0 right-0 px-3 z-20 bg-red-50'>Minecraft Dangeons</h1>
                <video className='absolute top-0 left-0 w-full h-full' autoPlay loop muted src="https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/videos/Homepage_Gameplay-Trailer_MC-Dungeons_1080x720.webm"></video>           
            </div>
        <div className="absolute flex flex-col items-center w-4/5  text-white bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="masked text-5xl tracking-tight font-[700]">
          MineCraft
        </h3>
        </div>
        
      </div>
    </>
  )
}

export default Content
