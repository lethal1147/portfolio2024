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

  it("hide sign-in form when press esc", async () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId("lock-screen-page"));
    const signinForm = screen.getByTestId("sign-in-form");
    await waitFor(() => {
      expect(signinForm).toBeVisible();
    });

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(signinForm).toHaveClass("opacity-0");
    });
  });
});
