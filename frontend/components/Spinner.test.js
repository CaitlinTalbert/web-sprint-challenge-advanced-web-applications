// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Spinner from "./Spinner";

test("sanity", () => {
  expect(true).toBe(true);
});

//props is on and off?
//spinner id is "spinner"

/** 
test("spinner appears asynchonously after logging in", async () => {
  render(<Spinner />);

  let submit = await screen.findByText("Submit Credentials");
  fireEvent.click(submit);
  await screen.findByText("Please wait...");
});
*/
