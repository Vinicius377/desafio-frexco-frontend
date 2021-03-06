import { styled } from '@mui/system'
//prettier-ignore
const Nav = styled("nav")(({ theme }) => `
display:flex;
padding-block:18px;
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
`
);

export default Nav
