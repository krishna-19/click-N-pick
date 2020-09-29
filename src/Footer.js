import React from "react";

//class based component
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer> 
          <ul class="navigation">
            
          <li>  <a href="/">About </a></li>
            
            <li> <a href="/">Home</a></li> 
            
            <li> <a href="/">Privacy </a></li> 
          
            <li> <a href="/">Terms </a></li> 
          
            <li> <a href="/">Contact </a></li> 
              
            <li> <a href="/">Help </a></li> 
    
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;