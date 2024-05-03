import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center ">
        <h1 className="text-blue-600 font-extrabold">SongsPk.com</h1>
        <div className="flex gap-2 p-2 px-4 bg-orange-600 text-white rounded-md text-sm">
            <h3 >Favouites</h3>
            <h4>{data.filter(item => item.favourites).length}</h4>
        </div>
    </div>
  )
}

export default Navbar