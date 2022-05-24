import { styled } from "@mui/system";
//prettier-ignore
const Nav = styled("nav")(({ theme }) => `
a{
  color:white;
  margin-inline:${theme.spacing(2)};
  text-decoration:none;
  font-size:1.2rem;
  padding:5px;
}

.active{
  border-bottom:solid 5px #061118;
}
`
);

export default Nav;
