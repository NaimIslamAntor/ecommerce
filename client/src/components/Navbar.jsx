import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'


import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { googleSignInThunk } from '../features/auth/authSlice'

import axios from 'axios'

const Container  = styled.div`
      width: 100%;
      height: 60px;
      background-color: #fff;
      border-bottom: 1px solid #c3bebe;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    @media (min-width: 768px) {
    /* flex-direction: row; */
    }
`

const NavBrand = styled.div`
     font-size: 25px;
`


const NavContainer = styled.ul`
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px;
      left: ${props => (props.showMenu ? '0' : '-100%')};
      bottom: 0;
      width: 100%;
      background-color: #fff;
      padding-left: 20px;
      transition: 300ms linear;
      z-index: 100;
      @media (min-width: 768px) {
       flex-direction: row;
       position: initial;
       padding-left: 0;
       width: unset;
       margin-top: 8px;
      }
`


const NavList = styled.li`
      list-style: none;
      padding: 10px 0;
      @media (min-width: 768px) {
       padding: 0;
      }
`


const NavLink = styled.a`
      text-decoration: none;
      color: #000;
      font-size: 15px;
      padding: 10px;
      border-radius: 6px;
      transition: 300ms ease-in;
      cursor: pointer;
      &:hover{
        background-color: #d8d4d4;
      }
`

const MenuButton = styled.button`
      border: none;
      outline: none;
      background-color: transparent;
      @media (min-width: 768px) {
       display: none;
      }
`


const ProfileImage = styled.img`
      width: 30px;
      height: 30px;
      border-radius: 50%;
`

const TotalCartItems = styled.sub``


const clientId = "291484905558-mkp0pimc6hodpmoq25h0to4lvgiheaao.apps.googleusercontent.com"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const { isAuthenticated, user } = useSelector(state => state.auth)


    const { profilePicture, name } = user



    useEffect(() => {
        function start() {
          gapi.auth2.getAuthInstance({
            clientId,
            scope: '',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);

    const calculateCartItemsInTotal = () => {
        let total = 0
        cartItems.forEach((item) => {
            total += parseInt(item.quantity)
        })

        return total
    }


    const showTheMenu = () => {
        setShowMenu(!showMenu)
    }


    const responseGoogle = async (userCreds) => {
        const { accessToken } = userCreds

        console.log(userCreds);

        const creds = {
          accessToken,
        }
        dispatch(googleSignInThunk(creds))
      }
//291484905558-mkp0pimc6hodpmoq25h0to4lvgiheaao.apps.googleusercontent.com
//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
  return (
    <Container>
        <Wrapper>

            <Link to="/" style={{textDecoration: 'none', color: '#000',}}>
            <NavBrand>E-COMMERCE</NavBrand>
            </Link>
           

            <NavContainer showMenu={showMenu}>

          {
            isAuthenticated ? <ProfileImage src={profilePicture} alt={name} /> : 
          
            <GoogleLogin
    clientId="291484905558-mkp0pimc6hodpmoq25h0to4lvgiheaao.apps.googleusercontent.com"
    render={renderProps => (
    //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      <NavList>
            <NavLink onClick={renderProps.onClick} disabled={renderProps.disabled}>Signin</NavLink>
     </NavList>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />}

                <NavList>
                    <NavLink href="#">Home</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">About</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">Product</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">Contact</NavLink>
                </NavList>
                <NavList>
                    <Link to="/cart">
                        <ShoppingCartOutlinedIcon/>
                        <TotalCartItems>{calculateCartItemsInTotal()}</TotalCartItems>
                    </Link>
                </NavList>
       
            </NavContainer>

            <MenuButton onClick={showTheMenu}>
            <MenuOutlinedIcon/>
            </MenuButton>
        </Wrapper>
    </Container>
  )
}

export default Navbar