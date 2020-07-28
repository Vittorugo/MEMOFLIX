import React from 'react';
import Logo from '../../assets/logo.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
   return  (
      <nav className='Menu'>
         <a href='/'>
            <img className="Logo" src={Logo} alt='Aluraflix logo' />
         </a>

         <Button as='a' href='/' className='ButtonLink'>
            Novo video
         </Button>

      </nav>
   );
}
export default Menu;