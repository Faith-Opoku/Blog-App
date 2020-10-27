import React from 'react';
import BlogPost from '../../Components/BlogPost';
import Sidebar from '../../Components/Sidebar';



import './style.css';



 const Post=(props)=>{
     return(
        
         <section className="container">

            
            
            <BlogPost />

        

            <Sidebar />
            


            
         </section>
     )
 }

 export default Post;