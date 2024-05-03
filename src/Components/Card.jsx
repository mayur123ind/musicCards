import React from 'react'

const Card = ({data,handleFavButton,index}) => {

    const {songName,artistName,image,favourites}= data; 

  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 relative pb-8 ">
        <div className="w-20 h-20 bg-orange-400 rounded-md overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className=" ">
            <h3 className="text-xl leading-none font-semibold">{songName}</h3>
            <h6 className="text-sm">{artistName}</h6>
        </div>
        <button className={`px-4 py-3 whitespace-nowrap ${favourites ? ' bg-green-600' : ' bg-orange-600'} absolute rounded-full text-xs text-white bottom-0
         translate-y-[50%] left-1/2 -translate-x-[50%]`} onClick={()=>handleFavButton(index)}>{favourites===false ? "Add to More" : "Added"}</button>
    </div>
  )
}

export default Card