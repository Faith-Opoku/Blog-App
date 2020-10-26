import React from 'react';
import Card from '../UI/card';
import './style.css'

let votes = 0;
const upVote = () => {
    votes++;
    console.log({votes})
}

const BlogPost=(props)=>{
    return (
        
           <div className="blogPostContainer">
               <Card>
                   <div className="blogHeader">
               <span className="blogCategory">Featured</span>
               <h1 className="postTitle">Black is Beautiful</h1>
               <span className="postedBy">posted on 0ctober 14,2020 by Faith Blogging Tips</span>
               </div>

               <div className="postimagecontainer">
                   
                 <img src="https://afropunk.com/wp-content/uploads/2018/11/3770-bw1-crop.jpg" />
                 <div className="Featuredpost">
                 <p>“Don’t be so hard on yourself. Be perfectly okay with being who YOU are. Fully embrace yourself, flaws and all. Love yourself right where you are. Strive to do better, but don’t beat yourself up for every shortcoming that you may have. Be brave in your journey! Hold your head up high, and keep moving forward.”
― Stephanie Lahart</p>
                     <img onClick={upVote} src="https://cdn3.iconfinder.com/data/icons/basicolor-votting-awards/24/210_vote_like_up_upvote-32.png"/>
                     </div>       
                                  </div>
                                  <div className="postcontent">
                                      <h3>Post Title</h3>
                                      <p>Diamond</p>
                                  </div>

                                  
               </Card>

               <Card>
                   <div className="secondpost">
                       <img src="https://scontent.facc6-1.fna.fbcdn.net/v/t1.0-9/101447903_1174657302900354_3975349809950228480_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeGxP0-edg2tvHkN8YGvXD63wJBuBs-8dSvAkG4Gz7x1Kwu-OAKzcAcksvwYelsXM8oQGKnQB0TyYHGYTMlB31nl&_nc_ohc=eXAUZyY9EpIAX8WO6dW&_nc_ht=scontent.facc6-1.fna&oh=f75708f973404f66429fe43f545195dc&oe=5FAD6263" />
                       <p className="jump">Always keep a bright smile</p>

                   </div>
               </Card>



           </div>
            
    )
}

export default BlogPost;