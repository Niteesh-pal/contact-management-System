import React, { useState } from 'react'
import styles from './AddCon.module.css';
import { GrClose } from "react-icons/gr";
import axios from 'axios';
const AddContact = ({ close , handleChange}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    // const [newContact, setContact]  = useState();

    

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(name.length > 0){
            console.log()

        if (phone.length === 10) {
            console.log(true);
            try {

               await axios.post("http://localhost:8000/create", {
                    name, phone, email
                }).then((res)=>{
                    close();
                    handleChange(res.data);
                });

                
            }
            catch (err) {
                console.log(err);
            }

        }
        else{
            alert("please enter 10 digit number")
        }
    }
        else {
            alert("Please enter required details");
        }
        
       
    }
// console.log(newContact);


    return (
        <div>
            <div className={styles.wrapper} onClick={close}></div>
            <div className={styles.form_content}>
                <div className={styles.heading} >
                <h1>Add Contact details</h1>
                <button className={styles.close_btn} onClick={close}><GrClose size={20}/></button>
                </div>
                <form className={styles.form} onSubmit={(e) => handleSubmit}>
                    <label>Name<span>*</span></label>
                    <input type='text' placeholder='Name' required='true' onChange={(e) => setName(e.target.value)}>
                    </input>
                    <label>Phone No.<span>*</span></label>
                    <input type='number' placeholder='Phone No.' required='true' onChange={(e) => setPhone(e.target.value)}></input>
                    <label>email</label>
                    <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
                    <button  className={styles.btn} onClick={handleSubmit}>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default AddContact