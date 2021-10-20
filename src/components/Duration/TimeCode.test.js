import { render, screen } from "@testing-library/react";
import TimeCode from "./TimeCode";

describe("TimeCode", () => {
  test("renders TimeCode - PAL", () => {
    const mockDuration = 90003;

    render(<TimeCode duration={mockDuration} standard="PAL" />);

    //Assert
    const nameElement = screen.getByText("01:00:00:03");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders TimeCode - NTSC", () => {
    const mockDuration = 108005;

    render(<TimeCode duration={mockDuration} standard="NTSC" />);

    //Assert
    const nameElement = screen.getByText("01:00:00:05");
    expect(nameElement).toBeInTheDocument();
  });
});
