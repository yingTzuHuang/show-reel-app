import { render, screen } from "@testing-library/react";
import TotalDuration, { GetDurationText } from "./TotalDuration";
//Todo: Add tests
describe("TotalDuration", () => {
  test("Get video duration - No video", () => {
    //Arrange
    //Act
    //Assert
  });

  test("Get video duration - valid start timecode & end timecode", () => {
    //Arrange
    //Act
    //Assert
  });

  test("Get video duration - invalid start timecode & end timecode", () => {
    //Arrange
    //Act
    //Assert
  });

  test("Get total duration text - No video", () => {
    //Arrange
    //Act
    //Assert
  });

  test("Get total duration text - 1 valid video", () => {
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
    //Act
    render(<TotalDuration videos={mockVideos} standard="PAL" />);

    //Assert
    const totalDurationElement = screen.getByText("00:00:30:12");
    expect(totalDurationElement).toBeInTheDocument();
  });

  test("Get total duration text - more than 1 valid video", () => {
    //Arrange
    //Act
    //Assert
  });

  test("Get total duration text - video with invalid start timecode & end timecode", () => {
    //Arrange
    //Act
    //Assert
  });
});
