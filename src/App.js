import { useState } from 'react';
import './App.css';

function App() {
const [qrText, setQrText] = useState('')
const [qrCode, setQrCode] = useState('')

const generateQrCode =()=>{
  QRCode.ToDataUrl(
    qrText,{
      width:900,
      height: 3,
    },
    (err,url){
      if(err) return console.log(err)
      setQrCode(url)
    }
  )
}





  return (
    <div className="App">
 
    </div>
  );
}

export default App;
