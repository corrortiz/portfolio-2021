import { setText } from "../index";

describe("Utils suite", () => {
  it("has the correct string", () => {
    const englishText = setText({ en: "english", es: "spanish" });
    expect(englishText).toBe("english");
  });
});
