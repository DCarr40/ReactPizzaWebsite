import React from "react";
import {
  SidebarContainer,
  Icon,
  RewardsIcon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <RewardsIcon />
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="./">Pizza</SidebarLink>
        <SidebarLink to="./">Deserts</SidebarLink>
        <SidebarLink to="./">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to="./">Order Now!</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
