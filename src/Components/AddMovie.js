import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [djeja,setDjeja] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
    const handleSubmit=()=> setMovies([...movies,{title :djeja,description,posterURL,rating,id : Math.random()}])
    return(
        <>
      <Button className='plus' variant="primary" onClick={handleShow}>
            +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e)=>setDjeja(e.target.value)} type="text" placeholder="Enter title" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo</Form.Label>
                <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="Enter photo" />       
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <br/>
                <Rating
                    name="simple-controlled"         
                    onChange={(e)=>setRating(e.target.value)}
                />      
            </Form.Group>
        
    
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleSubmit();handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AddMovie