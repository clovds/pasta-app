import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  Label,
  SideBtnWrap,
  SidebarRoute,
  Input,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [register, setRegister] = useState(false);

  const toggleRegister = () => {
    setRegister(!register);
  };

  const sidebarBtn = () => {
    if (register) {
      return (
        <SideBtnWrap style={{ display: "grid" }}>
          <Label style={{ fontSize: "15px", marginTop: "50px" }}>
            Already have an Account ?
          </Label>
          <SidebarRoute onClick={toggleRegister}>Login</SidebarRoute>
        </SideBtnWrap>
      );
    } else {
      return (
        <SideBtnWrap style={{ display: "grid" }}>
          <Label style={{ fontSize: "15px", marginTop: "50px" }}>
            Doesn't have an Account ?
          </Label>
          <SidebarRoute onClick={toggleRegister}>Register</SidebarRoute>
        </SideBtnWrap>
      );
    }
  };

  const sidebarContent = () => {
    if (register) {
      return (
        <SidebarMenu style={{ gridTemplateRows: "repeat(5, 50px)" }}>
          <Label>Email</Label>
          <Input type="email" />
          <Label>Password</Label>
          <Input type="password" />
          <Label className="my-3">Confirm Password</Label>
          <Input type="password" />
          <SideBtnWrap>
            <SidebarRoute to="/">Register</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      );
    } else {
      return (
        <SidebarMenu>
          <Label>Email</Label>
          <Input type="text" />
          <Label>Password</Label>
          <Input type="password" />
          <SideBtnWrap>
            <SidebarRoute to="/">Login</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      );
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {sidebarContent()}
      {sidebarBtn()}
      {/* <SidebarMenu>
        <Label>Username</Label>
        <Input type="text" />
        <Label>Password</Label>
        <Input type="password" />
        <SideBtnWrap>
          <SidebarRoute to="/">Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarMenu>
      <SideBtnWrap style={{ display: "grid" }}>
        <Label style={{ fontSize: "15px", marginTop: "50px" }}>
          Doesn't have an Account ?
        </Label>
        <SidebarRoute onClick={toggleRegister}>Register</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
