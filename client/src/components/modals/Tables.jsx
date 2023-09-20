import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../Base_url';
import styles from './table.module.css';
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillCheckSquareFill } from "react-icons/bs";
const Tables = ({newContact}) => {
  const [con, setCon] = useState();
  const [editContact, setEditCon] = useState();
  const [isEdited, setIsEdited] = useState();
  const [uname, usetName] = useState("");
  const[uphone, usetPhone] = useState("");
  const [umail, usetMail] = useState("");
  const [search, setSearch] = useState("");

  

  const fetchAPI = async (api) => {
    
    try {
      const res = await axios.get(api);
        // setCon(res.data);

        if(res.data){
          
          setCon(res.data);
        }
        else{
          setCon("unable to fetch");
        }
      
      
    }
    catch (err) {
      console.log(err);
     
    }
  }
  useEffect(() => {

      fetchAPI(BASE_URL);

  }, [newContact]);
  // console.log(con);

const handleEdit=  async (e)=>{
      
  setEditCon(e);
  try{
  const res = await axios.get(BASE_URL+"/"+e);
        usetName(res.data.name);
        usetPhone(res.data.phone);
        usetMail(res.data.email);

    
    
  }
  catch(err){
    console.log(err);
  }
  
  }
 const handleDelete= async(id)=>{
  console.log(id);
  try{
  await axios.delete(BASE_URL+"/"+id)
  .then(res=>{
    console.log(res);
    window.location.reload(false);
  
    
  })
  alert("Deleted succesfully");
}
catch(err){
  console.log(err);
}
  }

  const handleUpdate = async(id, e)=>{
    console.log(e);
    try{
    await axios.put(BASE_URL+"/"+id,{name:uname,phone:uphone,email:umail})
    .then(res=>{
      console.log(res);
      usetName(res.data.name);
      usetPhone(res.data.phone);
      usetMail(res.data.email);
      setIsEdited(editContact);
      setEditCon(null);
      
    })
    alert("updated succesfully");
  }
  catch(err){
    console.log(err);
  }

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search.length>0){
      const newSearch = con.filter((con)=>
      con.name.toLowerCase().includes(search.toLowerCase())
      );
      if(newSearch.length > 0)
      setCon(newSearch);
    else{
    alert("no contact found")
    
  }
    }
  }

  return (
    <section>
      
      <div className='ops'>
      <h3>All Contacts</h3>
      <div className='container_search'>
          <form style={{display:"flex"}}>
            <input type='text' placeholder='search' onChange={(e)=>{setSearch(e.target.value)}}  ></input>
            <button className='btn btnp' onClick={(e)=>handleSubmit(e)}>submit</button>
            </form>
        </div>
        </div>

      
      <div className={styles.table_content}>
        <table>
          <thead>
            <tr>
              <th><input type='checkbox'></input></th>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Phone no.</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              con && con.map((data, id)=>{return(
                  data._id === editContact ?(
                      <tr key={id}>
                        <td><input type='checkbox'></input></td>
                        <td>{id+1}</td>
                  <td><input type='text' value={uname} onChange={(e)=>usetName(e.target.value)}></input></td>
                  <td><input type='number' value={uphone} onChange={(e)=>usetPhone(e.target.value)}></input></td>
                  <td><input type='text' value={umail} onChange={(e)=>usetMail(e.target.value)}></input></td>
                  <td ><span><BsFillCheckSquareFill onClick={(e)=>handleUpdate(data._id, e.target)}/></span></td>
                      </tr>
                    ):(
                
                <tr key={id} >
                  <td><input type='checkbox'></input></td>
                  <td>{id+1}</td>
                  <td>{isEdited === data._id?uname:data.name}</td>
                  <td>{isEdited === data._id?uphone:data.phone}</td>
                  <td>{isEdited === data._id?umail:data.email}</td>
                  <td ><span className={styles.icons} ><CiEdit size={20} onClick={()=>handleEdit(data._id)}  color='blue'/></span><span className={styles.icons}><AiOutlineDelete onClick={()=>handleDelete(data._id)} color='blue'/></span></td>
                </tr>
                    )
                  
              )})
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Tables