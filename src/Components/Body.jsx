import React, { useState } from 'react'
import './Style.css'
import TypingText from './TypingText'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from "axios";

const Body = () => {
    const api="http://localhost:3000/api/urlShortner"
    const [loading,setLoading]=useState(false)
    const [short,setShort]=useState("")
    const [long,setLong]=useState("")

    const handleGenerate=()=>{
      setLoading(true)
      axios.post(api,{longUrl:long}).then(
        (res)=>{
          setLoading(false)
          setShort(res.data.url.shortURL)
        }
      ).catch((e)=>{
        setLoading(false)
      })
      
    }

    const handleCopy=()=>{
      alert("URL copied ✅")
    }

  return (
    <div className="body-container">

      <div className="main">
        <input className='urlText' placeholder='Enter your URL' value={long} onChange={(e)=>setLong(e.target.value)}/>
        <button className='button' onClick={handleGenerate}>Generate ✅</button>
      </div>

      {loading? 
      <div className="load">
        Wait a moment! 
        <TypingText text="✨✨✨✨✨✨✨✨✨✨"/>
      </div>
      :""
      }

      {short?(
        <div className="result">
          <h2>Result 👇</h2>
          <input className='urlText' value={short} />
          <CopyToClipboard text={short} onCopy={handleCopy}>
            <button className='button'>Copy📋</button>
          </CopyToClipboard>
        </div>
      ):""
      }

    </div>
  )
}

export default Body