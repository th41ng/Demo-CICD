/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("ThangMicro should be in this document", () => {
  render(<Page params={{ slug: "Test" }} />);
  //expect(screen.getByText("Thang Micro")).toBeInTheDocument();
  expect(screen.getByText("DuyMicro")).toBeInTheDocument();
});