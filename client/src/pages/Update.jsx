import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateForm.css'; 
import axios from "axios"

const Update = () => {
    const navigate= useNavigate();
    const location= useLocation();
    const handleClick = async (e) =>{
        e.preventDefault();
        try{
            await axios.put("http://localhost:8800/books/"+location.pathname.split("/")[2], {
                title: document.getElementById("theTitle").value,
                desc: document.getElementById("theDesc").value,
                price: document.getElementById("thePrice").value,
                cover: document.getElementById("theCover").value
            })

            navigate("/")
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div className="page-add-update-form">    
            <div className="add-update-form">
                <input type="text" placeholder="Title of the book" id="theTitle" className='add-update-input'/>
                <input type="text" placeholder="Description of the book" id="theDesc" className='add-update-input'/>
                <input type="number" placeholder="Price (USD)" id="thePrice" className='add-update-input'/>
                <input type="text" placeholder="Image Link of the Book"  id="theCover" className='add-update-input'/>
                <button id="theUpdateButton" className='add-update-button' onClick={handleClick}>Update</button>
            </div>
        </div>
    )



}

export default Update