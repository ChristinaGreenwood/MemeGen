import React, { useState } from "react";
import memesData from "./memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className='form'>
        <input
          className='form-input'
          type='text'
          placeholder='Top text'
          name='bottom-text'
        />
        <input
          className='form-input'
          type='text'
          placeholder='Bottom text'
          name='top-text'
        />
        <button className='form-button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className='meme-image-wrapper'>
        <img className='meme-image' src={memeImage}></img>
      </div>
    </main>
  );
}
export default Meme;
