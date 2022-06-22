import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button isDisabled is present", () => {
    const { container } = render(<Button isDisabled={true}></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})