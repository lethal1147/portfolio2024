import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("lock-screen", () => {
  it("show sign-in form when screen is clicked", async () => {
    render(<Home />);

    const signinForm = screen.getByTestId("sign-in-form");
    expect(signinForm).toHaveClass("opacity-0");

    fireEvent.click(screen.getByTestId("lock-screen-page"));

    await waitFor(() => expect(signinForm).toBeInTheDocument());
  });
});
