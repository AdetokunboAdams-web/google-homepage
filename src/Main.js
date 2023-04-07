import React, {useState}  from "react";


function Main() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange =(event) => {
        setInputValue(event.target.value);
    }
    return(
  <div>
  <main>
    <input type="text" onChange={handleInputChange}/>
    <p>{inputValue}</p>
    <button>Google Search</button>
    <button>I'm feeling lucky</button>
    <p>Google offered in: <a href="#">Hausa</a>  <a href="#">Igbo</a>  <a href="#">Ede Yoruba</a>  <a href="#">Nigerian Pidgin</a></p>

    </main>
  </div>
    );
}


export default Main;