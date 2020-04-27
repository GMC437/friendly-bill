import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBillsData, fetchCategoriesData } from "../../../actions";

const ListStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 2px;
  display: flex;
`;

const ListItem = styled.li`
  color: white;
  margin: 0px 5px;
  @media (max-width: 426px) {
    margin: 0px 8px;
  }
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &.active {
    border: 2px white solid;
    border-radius: 8px;
    padding: 2px;
  }
`;

const routes = [
  { name: "Home", link: "/", isExact: true },
  { name: "Bills", link: "/bills", isExact: false },
  { name: "Expenses", link: "/expenses", isExact: false },
];

const routeListItems = routes.map((i, index) => (
  <ListItem key={index}>
    <LinkStyled activeClassName="active" exact={i.isExact} to={i.link}>
      {i.name}
    </LinkStyled>
  </ListItem>
));

const RouterNav = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchBillsData());
      dispatch(fetchCategoriesData());
    },
    [dispatch]
  );

  return (
    <nav>
      <ListStyled>{routeListItems}</ListStyled>
    </nav>
  );
};

export default RouterNav;
