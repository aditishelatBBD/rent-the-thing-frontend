import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.header`
  height: 60px;
  background-color: #f7f7f7;
  ${mobile({ height: "40px",width:"100%"})}
`;

const Wrapper = styled.header`
  padding: 8px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.section`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 2px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "60px",fontSize: "8px" })}
`;

const Center = styled.header`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family:Copperplate Gothic Light;
  padding-top:2px;
  ${mobile({ fontSize: "15px" })}
`;
const Right = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.section`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "8px", marginLeft: "8px" })}
`;

const NavBar = ()=>
{
    return (
        <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search By City" />
            <SearchIcon style={{ color: "gray", fontSize: 14 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RentTheThing</Logo>
        </Center>
        <Right>
            <MenuItem>
            <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 14 }} />
          </SearchContainer>
          </MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon   />
            </Badge>
          </MenuItem>      
        </Right>
      </Wrapper>
    </Container>
    );
}
export default NavBar;