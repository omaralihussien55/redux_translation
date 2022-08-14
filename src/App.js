import React ,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Contanier from './components/Contanier';
import { transget,qu } from './redux/translateSlice';

function App() {
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(qu())
   dispatch(transget())
  },[dispatch])
  return (
    <div className="">
     <Contanier/>
    </div>
  );
}

export default App;
