import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../home/Hero";


describe("Hero Component", () => {
  test("renders hero image correctly", () => {
    render(<Hero />);
// jhfjfjyfyfhjvhyhj
    // alt text according to Hero.js
    const heroImage = screen.getByAltText("Home hero");

    // test existence
    expect(heroImage).toBeInTheDocument();

    // test correct src (Jest strips leading slash)
    expect(heroImage).toHaveAttribute("src", "/media/images/homeHero.png");
  });
});
