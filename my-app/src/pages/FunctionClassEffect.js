import React, { useState, Component, useEffect  } from "react";
import '../index.css';

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [str,setStr] = useState('<Hello ReactJs>');

  function updateCount(inc){
    setCount3 (count3+inc)
  }

    useEffect(() => {
    // Debugger
    console.log('mount component');

    return function cleanup() {
      // Debugger
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    console.log('count updated: ', count);
  }, [count])

  useEffect(() => {
    console.log('count updated: ', count2);
  }, [count2])

  useEffect(() => {
    console.log('count updated: ', count3);
  }, [count3])

  useEffect(() => {
    console.log('count updated: ', str);
  }, [str])


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

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className='bg-blue'>
        Count 1
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 2)}>
        Count 2
      </button>

      <p>You clicked {count3} times</p>
      <button onClick={() => updateCount(3)}>
        Count 3
      </button>

      <p>Update String to {str}</p>
      <button onClick={() => setStr('<iuqfysduasd6qs8d92q')}>
        Change String
      </button>

    </>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0 };
    this.state = { count2: 2 };
  }
  setCount1() {
    this.setState(state => {
      return {
      count1: state.count1 + 1
      }
    });
  }

  nambahCount2() {
    this.setState(state => {
      return {
      count2: state.count2 + 2
      }
    });
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>You clicked {this.state.count1} times</p>
        <button onClick={() => this.setCount1()}>
          Count 1
        </button>

        <p>You clicked {this.state.count2} times</p>
        <button onClick={() => this.nambahCount2()}>
          Count 2
        </button>
      </>
    );
  }
}

function FunctionClassEffect() {
  return (
    <div className="App" style={{margin: 'auto',width: '50%',color: 'red'}}>
      <FunctionComponent title="Belajar Function Component" subtitle="Saya Masih Pemula" paragraph="Disini saya mengkonfirmasikan bahwa saya masih benar-benar pemula."/>
      <hr style={{margin: '32px 0px'}}/>
      <ClassComponent title='Test component' />
    </div>
  );
}

export default FunctionClassEffect;
