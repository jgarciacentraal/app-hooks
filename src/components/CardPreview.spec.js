import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { CardPreview } from "./CardPreview";

it("it renders the expected term", () => {
  const expectedTerm = "test value";
  const { getByText } = render(<CardPreview term={expectedTerm} />);
  expect(getByText(expectedTerm)).toBeInTheDocument();
});

it("Flips the card to reveal the definition", () => {
  const expectedTerm = "this is term";
  const expectedDef = "this is definition";
  const { getByText, queryByText } = render(
    <CardPreview term={expectedTerm} definition={expectedDef} />
  );

  const flipBtn = getByText(/show/i);
  fireEvent.click(flipBtn);
  expect(getByText(expectedDef)).toBeInTheDocument();
  expect(queryByText(expectedTerm)).not.toBeInTheDocument();
});
