import { useState } from 'react'
import './App.css'
import Header from './Header';
import {oyunlar} from './Veri';
import Oyun from './Oyun';
import './Oyun.css';

function App() {
  return (
   
    <div>
      <Header/>
      <div className = 'oyun-main'>
      { oyunlar?.map((oyun) => (
          <Oyun key={oyun.id} oyun={oyun}/>
      )) }
      </div>
    </div>
  )
}

export default App
