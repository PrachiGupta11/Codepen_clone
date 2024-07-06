import {AppBar, Toolbar, styled } from '@mui/material';

function Header()
{
   const Container= styled(AppBar)`
      background: #060606;
      position:static;
      border-bottom: 1px solid #2f2f2f;
      height: 9vh;
    `
   const logo ='data:image/png;base64,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'
   
   return(
    <Container>
       <Toolbar>
          <img src={logo} alt='logo' style={{width:'40px'}}/>
       </Toolbar>
    </Container>
   )
}
export default Header;