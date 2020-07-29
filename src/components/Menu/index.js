import React from 'react';
import Logo from '../../assets/logo.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu(){
   return  (
      <nav className='Menu'>
         <Link  to='/'>
            <img className="Logo" src={Logo} alt='Aluraflix logo' />
         </Link>

         <Button as={Link} to='/cadastro/video' className='ButtonLink'>
            Novo video
         </Button>

      </nav>
   );
}
export default Menu;