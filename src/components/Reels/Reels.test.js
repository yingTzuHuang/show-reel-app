import { render, screen } from "@testing-library/react";
import Reels from "./Reels";
//Todo: Add tests
describe("Reels", () => {
  test("renders Reels", () => {
    const mockReels = [
      {
        id: 1,
        name: "Test Reel 001",
        standard: "PAL",
        definition: "SD",
        totalDuration: "00:01:20:30",
      },
    ];
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
    render(
      <Reels
        items={mockReels}
        videos={mockVideos}
        filteredVideos={mockVideos}
      />
    );

    //Assert
    const nameElement = screen.getByText("Test Reel 001");
    expect(nameElement).toBeInTheDocument();
  });
});
