import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Form from 'react-bootstrap/Form';
import { transget } from '../redux/translateSlice';


const  Forms=() =>{
    const {translatedText} = useSelector((state)=> state.arr)
    const [lanTo,setlanTo ]= useState("ar")
    const [lanFrom,setlanFrom ]= useState("en")
    const [value , setValue ]= useState("")
    const dispatch = useDispatch()

    const  HandleTranslae = (e)=>{
      e.preventDefault()
      dispatch(transget({tr:`${lanFrom}|${lanTo}`,val:value}))
    }
  return (
    <div className='container'>
    <h3 className='text-center text-primary p-2 my-2'>translation</h3>
      <div className='col-11 col-md-10 col-lg-8 mx-auto'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e)=> setlanFrom(e.target.value)}>
      <option value="en">english</option>
     
    </Form.Select>
      </Form.Label>
      
      <Form.Control as="textarea" rows={3} onChange={(e)=> setValue(e.target.value)} />
      <button className='btn btn-primary my-2' onClick={HandleTranslae}>translate</button>

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
        <Form.Select defaultValue={value} aria-label="Default select example" onChange={(e)=> setlanTo(e.target.value)}>
        <option value="ar">arbic</option>
        <option value="en">english</option>
        <option value="it">italy</option>
        <option value="fr">french</option>
        <option value="Spanish">Spanish</option>
      </Form.Select>
        </Form.Label>
        <Form.Control defaultValue={translatedText} as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>
    </div>
  );
}

export default Forms;