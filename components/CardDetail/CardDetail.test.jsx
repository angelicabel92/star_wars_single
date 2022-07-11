import { render, screen } from "@testing-library/react";
import { character } from "../../_mocks_/character";
import CardDetail from "./CardDetail";

describe('CardDetail', () => { 
  it('should render correctly', () => {
    render(<CardDetail character={character} />);
    expect(screen.getByTestId("card-detail-films").textContent).toBe("4");
  });
})