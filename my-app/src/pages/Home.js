import React from "react";
import '../index.css';

function FunctionComponent(props) {
  return (
    <>
      <style jsx="true">{`
        .bg-blue {
          background-color: blue;
          color: white;
        }
      `}</style>
    
      <h1 className='text-green'>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.paragraph}</p>

    </>
  )
}

function Home() {
  return (
    <div className="App" style={{margin: 'auto',width: '50%',color: 'red'}}>
      <FunctionComponent title="Selamat Datang di Training Reach Batch 2" subtitle="Training By Icube" paragraph="Baru pertama belajarreactjs boskuh"/>
    </div>
  );
}

export default Home;
