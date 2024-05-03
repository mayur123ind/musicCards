import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {

  const data = [
    {
      songName: "Tum hi ho",
      artistName: "Arjit Singh",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Dil Se Re",
      artistName: "A.R. Rahman",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Mera Dil",
      artistName: "Alka Yagnik",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Dil",
      artistName: "Kumar Sanu",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
    {
      songName: "Shiv Tandav",
      artistName: "Shankar Mahadevan",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },

    {
      songName: "Haan Tu Hain",
      artistName: "K.K",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      favourites: false,
    },
  ];

  const [songData, setSongData] = useState(data)

  const handleFavButton = (index)=>{
    // alert(index);
    setSongData((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(itemIndex===index){
          return {...item,favourites: !item.favourites}
        }
        return item;
      })
    })
  }

  return (
    <>
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData}/>
     <div className="px-20 flex flex-wrap mt-10 gap-10">
     {songData.map((obj,index)=>(
      <Card key={index} data={obj} handleFavButton={handleFavButton} index={index} />
      ))}
     </div>
    </div>
    </>
  )
}

export default App