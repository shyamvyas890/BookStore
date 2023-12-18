import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Books = () => {
   const [books, setBooks]= useState([]);

   const fetchAllBooks= async ()=>{
        try{
            const res= await axios.get("http://localhost:8800/books")
            setBooks(res.data)
        }
        catch(err){
            console.log(err)
        }
    }



   useEffect(()=>{
        fetchAllBooks();
   }, []);

   const handleDelete= async (id)=>{
        try{
           await axios.delete(`http://localhost:8800/books/${id}`);

           fetchAllBooks();
        
           
        }

        catch(err){
            console.log(err);  
        }
        

   }
   
    return (
    <div>
        <h1>Shyam's Book Shop Inventory</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Cover</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {books.map(function(book){

                return (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.desc}</td>
                        <td>${book.price}</td>
                        <td> 
                            {book.cover && <img src={book.cover} alt={`${book.cover}`} />}
                        </td>
                        <td><button className='updateButton'><Link className='updateLink' to={`/update/${book.id}`}>Update</Link></button></td>
                        <td><button className='deleteButton' onClick={()=>{handleDelete(book.id)}}>Delete</button></td>
                    </tr>


                )

            })
            
            }
            </tbody>

        </table>
        <p className="addBook"><Link className='addABook' to={`/add`}>Add A Book!</Link></p>
    </div>
    )



}

export default Books