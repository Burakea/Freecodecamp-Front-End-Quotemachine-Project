import { FaTwitter } from "react-icons/fa"
import { FaTumblr } from "react-icons/fa"
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const API_URL= "http://localhost:3500/items"
  const twitter_url = "https://twitter.com/intent/tweet?text="
  const twitter_text = `"${quote}"`
  const twitter_author = `-${author}`
  const twitter_hashtag = " %23quotes"
  const twitter_all = twitter_url+twitter_text+twitter_author+twitter_hashtag;

  const randomColors = [
    {color: "purple"},
    {color: "firebrick"},
    {color: "purple"},
    {color: "darkgreen"},
    {color: "darkcyan"},
    {color: "yellowgreen"},
    {color: "darksalmon"},
    {color: "brown"},
    {color: "dark"}
  ]


  let tx = Math.floor(Math.random()*9)
  let ty = randomColors[tx].color

  const cl = {color:`${ty}`}
  const bgcl = {backgroundColor:`${ty}`}

  const body = document.body;
  body.style.backgroundColor = ty

  useEffect(() => {

    const fetchApi = async () => {
      try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error("Api request error")
      const result = await response.json()
      let x = Math.floor(Math.random()*26)
      setQuote(result[x].text)
      setAuthor(result[x].author)
      } catch(err){
        console.log(err.stack)
      }
      
    }

   fetchApi();

  },[])

  

  const handleRandomItem = async () =>{
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error("Api request error")
      const result = await response.json()
      let x = Math.floor(Math.random()*26)
      setQuote(result[x].text)
      setAuthor(result[x].author)
      } catch(err){
        console.log(err.stack)
      }
  }




  return(

     <div id="quote-box" className="container">
        <p id="text" style={cl}><FaQuoteLeft style={cl}className="faQuote"/>{quote}</p>
        <span style={cl} id="author">-{author}</span>
        <div id="new-quote" className="inner-container">
          <div className="logos">
            <a id="tweet-quote" href={twitter_all}><FaTwitter className="faTwitter" style={bgcl} /></a>
             <a id="tweet-quote1" href="https://www.tumblr.com/login?language=tr_TR"><FaTumblr className="faTumblr" style={bgcl} /></a>
        </div>
        <button style={bgcl} onClick={handleRandomItem} type="button">New quote</button>
        </div>
    </div>

  )
}

export default App;
