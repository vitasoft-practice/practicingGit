import Button from '@mui/material/Button';
import Link from 'next/link';
export default function NavBar() {
    return (
      <div className="navbar">
        <div className="leftNav">
          <Link href='/'><div className="home">Home</div></Link>
        </div>
        <div className="rightNav">
            <Link href='../logIn/login'>
            <Button variant="contained"
            sx={{
              color: '#FFFFF',
              background: '#2ED3C5'
            }}>Log In</Button>
            </Link>
            <Link href='../signUp/signup'>
            <Button variant="contained"
            sx={{
              color: '#FFFFF',
              background: '#2ED3C5'
            }}>Sign Up</Button>
            </Link>
        </div>
      </div>
    )
  }
  