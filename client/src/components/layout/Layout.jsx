import React, { useState } from 'react'
import "./layout.css"
import AddContact from '../modals/AddContact'
import Tables from '../modals/Tables';
const Layout = () => {

  const [showModal, setModal] = useState(false);
  const [newContact, setContact] = useState();
  
  

  const closeModal=()=>{
    setModal(false);
  }
  function handleChange(e){
    setContact(e);
    if(newContact){
      alert("Contact addes Succesfully");
    }
  }


  

  return (
    <section className="container">
        <div  className='container_content'>
        <div className='ops'>
            <span className='btn'onClick={()=>setModal(true)}>add</span>
            <span className='btn'>delete</span>
        </div>
       
        </div>
        {showModal && <AddContact close={closeModal} handleChange={handleChange}/>}
     
        <Tables newContact={newContact}/>
    </section>
    
    
  )
  
}

export default Layout