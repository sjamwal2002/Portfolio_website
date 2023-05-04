import React,{useState} from 'react'
import './header.css'


const Header = () => {
  /***********************change background header*************** */
  window.addEventListener("scroll",function(){
    const header=this.document.querySelector(".header")
    //when the scroll is higher than 200 viewport height, add the show-head scroll class
    //to a tag with the header tag.
    if(this.scrollY>=80) header.classList.add
    ("scrollheader");
    else header.classList.remove("show-header");
  })
  /* ***********Toggle Menu ****************/
  const [Toggle,showMenu]=useState(false);
  const[activeNav,setActiveNav]=useState("#home");


  return (
    <>
      <header className="header">
      <nav className= "nav container">
       <a href="index.html" className="nav__logo">Portfolio</a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
        <ul className= "nav__list grid">
                 <li className="nav__item">
                  <a href="#home" 
                   onClick={()=>
                    setActiveNav("#home ")
                  } className=
                  {activeNav==="#home" ? "nav__link active-link"
                  :"nav__link"
                  }
                  >
                  <i className="uil uil-estate nav__icon"></i>Home 
                   </a>
                 </li>
                 <li className="nav__item">
                  <a href="#about"  onClick={()=>
                    setActiveNav("#about")
                  } className=
                  {activeNav==="#about" ? "nav__link active-link"
                  :"nav__link"
                  }>
                  <i className="uil uil-user nav__icon"></i>About
                   </a>
                 </li>
                 <li className="nav__item">
                  <a href="#skills"  onClick={()=>
                    setActiveNav("#skills ")
                  } className=
                  {activeNav==="#skills" ? "nav__link active-link"
                  :"nav__link"
                  }>
                     <i className="uil uil-file-alt nav__icon"></i>Skills
                   </a>
                 </li>
                 <li className="nav__item">
                  <a href="#skills"  onClick={()=>
                    setActiveNav("#skills ")
                  } className=
                  {activeNav==="#skills" ? "nav__link active-link"
                  :"nav__link"
                  }>
                     <i className="uil uil-file-alt nav__icon"></i>Qualification
                   </a>
                 </li>
                 <li className="nav__item">
                  <a href="#contact"  onClick={()=>
                    setActiveNav("#contact ")
                  } className=
                  {activeNav==="#contact" ? "nav__link active-link"
                  :"nav__link"
                  }>
                     <i className="uil uil-message nav__icon"></i>Contact
                   </a>
                 </li>
            </ul> 
            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
        </div>  
        <div className='nav__toggle show-menu' onClick={()=>showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>

       </nav>
      </header>
       
        
      
    </>
    

  )
}

export default Header
