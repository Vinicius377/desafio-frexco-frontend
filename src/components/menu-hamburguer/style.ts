import { styled } from '@mui/system'
//prettier-ignore
const Nav = styled("nav")(({ theme }) => `
display:flex;
flex-direction:column;
background-color:#0C1F2C;
padding:18px 10px;
gap:5px;
height:100%;
color:white;
a{
  color:white;
  margin-inline:${theme.spacing(2)};
  text-decoration:none;
  font-size:1.2rem;
  padding:5px;
  cursor:pointer;
}

.active{
  border-bottom:solid 5px #061118;
}
.top-menu{
  display:flex ;
  justify-content:space-between;
}
`
);

export default Nav
