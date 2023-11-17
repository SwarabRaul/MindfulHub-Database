import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    document.title = "Chat";
    document.body.style.backgroundColor = "#ffffff";

    localStorage.getItem("token") ? setIsDisabled(false) : setIsDisabled(true)


    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      });
  }, []);

  

  return (
    
    <div class="backgrd">
      <div class="chatbox">
        
        

        
      {/* <img src="./images/gif1.gif" alt="Animated GIF" /> */}
      <div class="btn_chat">
        
          <h1>Chatroom</h1>
          
        
        
          <button class="btn1">Live Chat</button>
          <button class="btn2"
            onClick={() => {
              navigate("/schedulechat");
            }}
          // disabled={isDisabled}
          >
            One on one help
          </button>
          <button class="btn3"
            onClick={() => {
              navigate("/createpost");
            }}
          // disabled={isDisabled}

          >
            Create a Post
          </button>
        </div>
        
        
        {posts?.length !== 0 ? <>{posts?.map((item) => {
          return (
            <div key={item._id} onClick={() => {
              navigate(`/${item._id}`)
            }} >
              <h1>{item.title}</h1>
              <h3>{item.message}</h3>
            </div>
          )
        })}</> : <h1>No post Found</h1>}
        
        
        <div className="content"> 
        <div class="blog">
        <h3>The Art of Minimilistic Living</h3>
        <p>
          Expore the principles of minimilistic living, decluttering your space and simplifying your life. Learn how to create a serene and organised home that promotes peace and mindfulness.
          <p class="name">~Emily Johnson </p> 
        </p>
        </div>


        <div class="blog">
        <h3>Mastering the Basics of Healthy Cooking</h3>
        <p>
          If your looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you.
          Learn about essential cooking techniques, ingredient substitutions and simple recipies to kickstart your journey towards better nutrition. 
          <p class="name">~Daniel Rodriguez </p>
        </p>
        </div>


        <div class="blog">
        <h3>Be More with Less</h3>
        <p>
        Founded by Courtney Carver, Be More with Less is a blog about downsizing, creating space to notice your life and how to enjoy what matters most to you.After spending much of her adult life tired, stressed, sick, and doing work she didn’t care about, 
        Courtney decided to let go and unclutter.  
        In he process, she went from a multiple sclerosis diagnosis to feeling the best she’s felt in decades. 
        And she went from being deep in debt and clutter to living debt- and clutter-free.
        <p class="name">~Jasmine Patel </p>
        </p>
        </div>


        <div class="blog">
        <h3>Simply + Fiercely</h3>
        <p>
        This is a blog about how to recover from a life that looks good on the outside but feels wrong on the inside. 
        It’s a blog about taking control of your life and clearing out the clutter. 
        It’s about being honest with yourself, listening to your heart, doing more of what you love, and learning to let go of all the rest.
        <p class="name">~Michelle Lee </p>
        </p>
        </div>


        <div class="blog">
        <h3>Rowdy Kittens</h3>
        <p>
        Rowdy Kittens is a blog created by Tammy Strobel, writer, photographer, and cat lover. 
        Tammy was working at an investment management firm in Davis, California, and was caught up in the “work-spend treadmill.” 
        Until one day she upped and left. She and her husband began donating their belongings to charity until they were left with just 100 personal items. 
        They now live in a 400-square-foot studio where Tammy happily works as a web designer and freelance writer. She owns four plates, three pairs of shoes, and two pots.
        <p class="name">~Ava Smith </p>
        </p>
        </div>


        <div class="blog">
        <h3>Practicing Simplicity</h3>
        <p>
        Practising Simplicity, established in 2008 by Jodi Wislon, is a family and lifestyle blog. 
        It’s a story of motherhood and the home, simple living, and good intentions. 
        It covers a range of topics including the family home, motherhood, yoga, pregnancy, photography, travel, and lifestyle.
        <p class="name">~Noah Chang </p>
        </p>
        </div>
        
        
        
        <div class="blog">
        <h3>Raising Simple</h3>
        <p>
        Raising Simple is the creation of Zoë Kim, author of the book Minimalism for Families. 
        She’s the mother of four, and she partners with individuals who want to tackle the challenges of a cluttered home and life. 
        Zoë believes in developing a minimalist lifestyle through positive perspective changes and practical solutions. 
        Her goal is to help you find the best solution to simplify your home and life.
        <p class="name">~Maya Patel </p>
        </p>
        </div>

        
        <div class="blog">
        <h3>Tiny Ambitions</h3>
        <p>
        Tiny Ambitions is a blog and podcast about living a tiny, simple, intentional life. 
        It’s based on the counter-cultural idea that life doesn’t need to be lived big.
        Tiny Ambitions was founded by Britt, a freelance writer, who writes about minimalism, decluttering, simple living, lifestyle, relationships, health & wellbeing, tiny houses, and sustainable living.
        <p class="name">~Olivia Bennett </p>
        </p>
        </div>
        
        

        



        </div>
       
      </div>
      </div>
    
  
    

    
  );
};

export default Chat;
