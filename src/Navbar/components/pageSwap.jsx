import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import { MdLocalGroceryStore } from 'react-icons/md';
import { GiDoctorFace } from 'react-icons/gi';
import { FaCookie } from 'react-icons/fa';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});


export default function Togglepage() {
  const [alignment, setAlignment] = React.useState('home');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton className=' border-red-500 active:bg-red-500 rounded-lg m-1' value="home">
        <Link to='/' className='border-none '> 
            <span className=' flex justify-center '><MdLocalGroceryStore /></span>Grocery</Link>
      </ToggleButton>
      <ToggleButton className='border-red-500 active:bg-red-500 rounded-lg  m-1' value="pharma">
        <Link to='/pharma' className='border-none  '> 
            <span className=' flex justify-center '><GiDoctorFace /></span>Pharmecy</Link>
      </ToggleButton>
      <ToggleButton className='border-red-500 active:bg-red-500 rounded-lg m-1' value="lifeCare">
        <Link to='/pharma' className='border-none  '> 
            <span className=' flex justify-center '><FaCookie /></span>Coockup</Link>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

{/* <header className='flex lg:gap-5 p-1 justify-center items-center'>
<Link to='/' className='border-2 border-red-500 active:bg-red-500 rounded-lg p-1'> <span className=' flex justify-center '><MdLocalGroceryStore /></span>Grocery</Link>
<Link to='/pharma' className='border-2 border-red-500 rounded-lg p-1'> <span className=' flex justify-center '><GiDoctorFace /></span>Pharmecy</Link>
<Link to='/pharma' className='border-2 border-red-500 rounded-lg p-1'> <span className=' flex justify-center '><FaCookie /></span>Coockup</Link>
</header> */}