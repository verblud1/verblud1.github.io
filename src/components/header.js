import React from 'react';


function Header() {
  return (
    <div id='Top'>
      <div className='header'>
        <div className='header-mover'>
          <div className='header-content'>

            <div id='logo'>
              <a  href='/'><img src='/linted.png' className='logo'  /></a>
            </div>
            
            <div className='social-tabs'>
              <a href="https://t.me/linted1"><img src='\telegram.png' class="fa fa-telegram"></img></a>
              <a href="https://vk.com/linted1"><img src='\vk.png' class="fa fa-vk"></img></a>
              <a href="https://github.com/verblud1"><img src='\github.png' class="fa fa-github"></img></a>
            </div>

          </div>
        </div>
      </div>
    </div>  
  );
}

export default Header;
