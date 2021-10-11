import { render, screen } from "@testing-library/react";
import Videos from "./Videos";

describe("Videos", () => {
  test("renders videos", () => {
    //Arrange
    const mockVideos = [
      {
        id: 1,
        name: "Bud Light",
        description: "A factory is working on the new Bud Light Platinum.",
        standard: "PAL",
        definition: "SD",
        startTimecode: "00:00:00:00",
        endTimecode: "00:00:30:12",
      },
    ];
    render(<Videos items={mockVideos} />);

    //Assert
    const nameElement = screen.getByText("Bud Light");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders videos - no video", () => {
    //Arrange
    const mockVideos = [];
    render(<Videos items={mockVideos} />);

    //Assert
    const description = screen.queryByRole("label");
    expect(description).not.toBeInTheDocument();
  });
});
