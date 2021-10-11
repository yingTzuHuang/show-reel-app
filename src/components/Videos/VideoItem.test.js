import { render, screen } from "@testing-library/react";
import VideoItem from "./VideoItem";

describe("VideoItem", () => {
  test("renders video item - contains video", () => {
    //Arrange
    const mockVideo = {
      id: 1,
      name: "Bud Light",
      description: "A factory is working on the new Bud Light Platinum.",
      standard: "PAL",
      definition: "SD",
      startTimecode: "00:00:00:00",
      endTimecode: "00:00:30:12",
    };
    render(<VideoItem source={mockVideo} />);

    //Assert
    const nameElement = screen.getByText("Bud Light");
    const descElement = screen.getByText(
      "A factory is working on the new Bud Light Platinum."
    );
    const standardElement = screen.getByText("PAL");
    const defElement = screen.getByText("SD");
    const startTimeElement = screen.getByText("00:00:00:00");
    const endTimeElement = screen.getByText("00:00:30:12");

    expect(nameElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
    expect(standardElement).toBeInTheDocument();
    expect(defElement).toBeInTheDocument();
    expect(startTimeElement).toBeInTheDocument();
    expect(endTimeElement).toBeInTheDocument();
  });

  test("renders video item - no video", () => {
    //Arrange
    const mockVideo = {};
    render(<VideoItem source={mockVideo} />);

    //Assert
    const description = screen.queryByRole("label");
    expect(description).not.toBeInTheDocument();
  });
});
