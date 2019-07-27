import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  act(() => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("App component", () => {
  it("matches the snapshot", () => {
    act(() => {
      const tree = renderer.create(<App />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
