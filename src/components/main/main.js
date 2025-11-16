import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';


function Main() {
const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini AI</p>
        <img src={assets.user_icon} ></img>
      </div>
      <div className='main-container'>
        
{!showResult
?<>
<div className='greet'>
          <p><span> Hello, Deev.</span></p>
          <p>How can i help you today</p>
        </div>
        <div className='cards'>
          <div className='card'>
            <p>Suggest beautiful places to see on an upcoming roa trip </p>
            <img src={assets.compass_icon} alt=''></img>
          </div>
          <div className='card'>
            <p>Briefly summarize this concept: unbar planning </p>
            <img src={assets.bulb_icon} alt=''></img>
          </div>
          <div className='card'>
            <p>Brainstrom team boning activities for our work retreat </p>
            <img src={assets.message_icon} alt=''></img>
          </div>
          <div className='card'>
            <p>Improve the reability of the following code </p>
            <img src={assets.code_icon} alt=''></img>
          </div>
        </div>
</>
:<div className='result'>
        <div className='result-title'>
          <img src={assets.user_icon}></img>
          <p>{recentPrompt}</p>
           </div>
           <div className='result-data'></div> 
           <img src={assets.gemini_icon}></img>
           {loading?
           <div className='loader'>
            <hr></hr>
            <hr></hr>
            <hr></hr>
           </div>
           :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
           }
  </div>
  }

        
        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='enter a prompt here'></input>
          <img src={assets.gallery_icon}></img>
          <img src={assets.mic_icon}></img>
{input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}          </div>
      <p className='bottom-info'>
        Gemini may isplay inaccurate info, incluing about peoples, so ouble check it
      </p>

        </div>
      </div>
    </div>
  );
}

export default Main;
