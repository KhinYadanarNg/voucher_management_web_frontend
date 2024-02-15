import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { describe } from "node:test";

describe("Home", () => {
  it("should have Login text", () => {
    render(<Home />); //ARRANGE

    const myElem = screen.getByText("Login"); // ACT

    expect(myElem).toBeInTheDocument(); //ASSERT
  });

//   it("should have Login text", () => {
//     render(<Home />); //ARRANGE

//     const myElem = screen.getByText("Login"); // ACT

//     expect(myElem).toBeInTheDocument(); //ASSERT
//   });

//   it("should have Login text", () => {
//     render(<Home />); //ARRANGE

//     const myElem = screen.getByText("Login"); // ACT

//     expect(myElem).toBeInTheDocument(); //ASSERT
//   });

//   it("should have Login text", () => {
//     render(<Home />); //ARRANGE

//     const myElem = screen.getByText("Login"); // ACT

//     expect(myElem).toBeInTheDocument(); //ASSERT
//   });

});