
import React,{useEffect, useState} from 'react';

const USR = () => {
  const [index, setIndex] = useState(0);
  const [selectedData, setSelectedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const receivedIndex = searchParams.get("receivedindex") || 0;
    setIndex(receivedIndex ? receivedIndex : 0);
    const result = require('../data/data.json');
    setSelectedData(result[index]);
    setLoading(false);
    console.log(selectedData);
  }, [index, selectedData]);

  function sayHello() {
    alert('You clicked me!');
  }
  
  return (

    loading ? <div>Loading...</div> :
    <>
    <button onClick={sayHello}>Edit</button>
    <table>
      <tr>
        <div className='headerdiv'><th>Concept</th></div>
        {
          selectedData.Concept.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Index</th></div>
        {
          selectedData.Index.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Sem. Cat</th></div>
        {
          selectedData.SemCateOfNouns.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>G-N-P</th></div>
        {
          selectedData.GNP.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Dep-Rel</th></div>
        {
          selectedData.DepRel.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Discourse</th></div>
        {
          selectedData.Discourse.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Speaker's View</th></div>
        {
          selectedData.SpeakersView.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Scope</th></div>
        {
          selectedData.Scope.map((item,i) => {
            return <td><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
      <tr>
        <div className='headerdiv'><th>Sentence Type</th></div>
        {
          selectedData.SentenceType.map((item,i) => {
            return <td colSpan={selectedData.Concept.length}><div className="headerdiv2">{item}</div></td>
          }
          
          )
        }
      </tr>
    </table>

    </>



  )
};

export default USR;
