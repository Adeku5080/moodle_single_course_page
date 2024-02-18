import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return <Container>
        <CompanyName>
            <span>Icon</span>
            <span>Eduvi</span>
        </CompanyName>
        
        <NavList>
            <li>Home</li>
            <li>Courses</li>
        </NavList>

        <Profile>
            <p>Account</p>
            <p>icon</p>
        </Profile>
  </Container>;
};

const Container = styled.div`
max-width:1280px;
display:flex;
margin:0 auto;
justify-content:space-between;
align-items:center;




`
const CompanyName = styled.div`
border:1px solid green;

`

const NavList = styled.div`
  border: 1px solid black;
  width: 713px;
  display: flex;
  align-items: flex-start;
  gap: 12px;

  li {
    list-style: none;
    border: 1px solid red;
    font-size: 16px;
  }
`;

const Profile = styled.div`
border:1px solid yellow;
display:flex;
gap:12px;

p{
font-size:16px;
line-height:18.75px;

}

`
export default Navbar;
