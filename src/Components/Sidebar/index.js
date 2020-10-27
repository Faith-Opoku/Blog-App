import React, {useState} from 'react';
import Card from '../UI/card';
import './style.css';



const Sidebar=(props)=>{

 
    
    
    return (
        <div className="sidebarContainer">
         <Card style={{marginBottom: "20px", padding: "20px", boxSizing: "border-box"}}>
             <div className="cardHeader">
                 <span>About Us</span>
                 <div className="profileimagecontainer">
                   <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.0-9/100889014_10157848379294270_5049248683724374016_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_eui2=AeFIPhlib9ER5tn9ZOqb7AhLkacIkLi5OJmRpwiQuLk4mdasSFCA3B9KyG3ABnyrHzOqO6nhwqLQ-X7BU9POSVgf&_nc_ohc=UgMmtDY1W8IAX_lhwPD&_nc_ht=scontent.facc6-1.fna&oh=d44bd075694a664db94574a1b1b425ad&oe=5FACA72E" alt="Searhc" />
                   
                 </div>
                 <div className="cardBody">
                     <p className="PersonalBio">My name is Faith. I am a student at the University of Ghana. Currently, I am offering Chemistry in my third year.</p>
                     <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-32-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-39-128.png" /> 


                 </div>
             </div>
             </Card>   
             <Card style={{marginBottom: "20px", padding: "20px", boxSizing: "border-box"}}>
             <div className="cardHeader">
                 <span>Social Network</span>
                 
             </div>
             </Card> 
             <Card>
                 <div className="cardHeader">
                     <span>Recent Posts</span>
                 </div>
                 <div className="recentposts">
                     <div className="recentpost">
                         <h3>Post Title</h3>
                         <span>15 October,2020</span>
                     </div>
                     </div>
                     <div className="recentposts">
                     <div className="recentpost">
                         <h3>Post Title</h3>
                         <span>15 October,2020</span>
                     </div>
                     </div>
                 
             </Card>
             < Card style={{marginBottom: "20px", padding: "20px", boxSizing: "border-box"}}>
                 <div className="thirdpost">
                     <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.0-9/67494217_734307673689588_6671350989817118720_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeGrxFKqMAC4SrHFmuf11GMJ4drew3qUPpPh2t7DepQ-k67gR13v5mQrI46Pj4ypXOV-LUxvjGcGt5oOq7MKvCzQ&_nc_ohc=_Lrt4CquYYIAX9Bq-AL&_nc_ht=scontent.facc6-1.fna&oh=c10b92d3d9fdce0b5d4ae84e6db187e6&oe=5FAD9948" />
                     
                     <p className="helping">Serving is essential.You have to serve to be served. I love taking time to help  the poor.</p>
                     <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-32-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-39-128.png" /> 

                 </div>
             </Card>
             <Card>
                 <div className="forthpost">
                     <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.0-9/43411736_2249330502016042_4781671791686844416_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHrPziFX9PhwbH6P5NpFAE10kbgyVgkzUvSRuDJWCTNS2uqRS47aK9swxq0kKhxJERE_9xqXeY1UWCr8gva2SDw&_nc_ohc=wFP4F5G8d8UAX_9pOXh&_nc_ht=scontent.facc6-1.fna&oh=dca4639a2b9525c0f107403e9bc73094&oe=5FAC17A4" />
                     <p>BLESSINGS</p>
                     

                 </div>
             </Card>
             

                 
             
        </div>

        
    )
}

export default Sidebar;