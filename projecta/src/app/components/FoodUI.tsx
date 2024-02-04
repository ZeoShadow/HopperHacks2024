"use client";
import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";

const FoodUI = () => {
  // List of food items (Example items)
  const foodItems = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Tacos",
    "Salad",
    "Ramen",
    "Curry",
    "Sandwich",
    "Steak",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Choose Food
      </MenuButton>
      <MenuList>
        {foodItems.map((foodItem, index) => (
          <MenuItem key={index}>{foodItem}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default dynamic(() => Promise.resolve(FoodUI), { ssr: false });
