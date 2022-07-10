import { FC } from "react";
import { NavStyled, Link } from "./style";


interface IProps {
  toggleTheme: () => void
}


const Nav: FC<IProps> = () => {
  return (
    <NavStyled>
      <Link to="/">Home</Link>
    </NavStyled>
  );
}


export default Nav;