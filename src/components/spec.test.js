import React from "react";
import Info from "./info";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("Info Component", () => {
  it("matches the snapshot", () => {
    act(() => {
      const tree = renderer.create(<Info />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
