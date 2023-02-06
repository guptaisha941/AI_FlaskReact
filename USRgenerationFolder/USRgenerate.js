import React,{useState} from 'react'
import Navbar from '../Navigation/Navbar'
const USRgenerate = () => {
  const[sentences,setMessage] = useState('');
  const [showIframe, setShowIframe] = useState(false);
  const [receivedIndex, setReceivedIndex] = useState('');
  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    if(typeof event.data === 'object') {        setReceivedIndex(event.data.data);
    } else {
        setReceivedIndex(event.data);
    }
    console.log(event.data);
}

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };
  
  const getData = () => {
    fetch('http://localhost:9999/usrgenerate', {
    method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "sentences" : sentences })
  })
  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))
  .then(() => setShowIframe(true))
  // setTimeout(() => {
  
    // }, 5000);
  // setShowIframe(true);
  
  }
        
  return (
    <>
      <Navbar />
      <form>
        <div className="tta"><textarea id="sentences" name="sentences" type="text" value={ sentences }  onChange={handleMessageChange} ></textarea></div>
        <div className="ttab1"><input type='button' name="Generate USR"  value="USR Generate" disabled={!sentences} onClick={getData} /></div>
        <div className="outl" id="os" style={{ display: showIframe ? 'block' : 'none' }}>
          <iframe width="500" height="530" title="sentence" src="/sentences/" />
        </div>
        <div className="usr" style={{ display: showIframe ? 'block' : 'none' }}>
        <iframe width="985" id="usr" height="530" title="usr" src={`/usr/?receivedindex=${receivedIndex}`} /> 
        
        </div>
      </form>
    </>
  )
};

export default USRgenerate;
