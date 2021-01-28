import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import './AddMovies.css'
const AddMovies= ({AddMovie})=> {
    const [show, setShow] = useState(false);
    const [newMovies, setNewMovies] = useState({
        image:"",
        title:"",
        date:"",
        raiting:"",
        description:"",
    });
    const handleChange =(e)=>{
        setNewMovies({...newMovies,[e.target.name]:e.target.value})  }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          AddMovies
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <div className="form">
            
            <h2>Image</h2>
            <input placeholder="image" className="inputForm"
            onChange={handleChange}></input>
            <h2>Title</h2>
            <input placeholder="title" className="inputForm"
            onChange={handleChange}></input>
            <h2>Date</h2>
            <input placeholder="date" className="inputForm"
            onChange={handleChange}></input>
            <h2>Raiting</h2>
            <input placeholder="raiting" className="inputForm"
            onChange={handleChange}></input>
            <h2>Description</h2>
            <input placeholder="description" className="inputForm"
            onChange={handleChange}></input>
         
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              AddMovie(newMovies);  
                handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
            </div>
            
        </Modal>
      </>
    );
  }
  
  export default AddMovies;
  
