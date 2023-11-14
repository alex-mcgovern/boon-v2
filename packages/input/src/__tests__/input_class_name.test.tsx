/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Input } from "../_components/Input";

import type { InputProps } from "../_components/Input";

const PROPS: InputProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(<Input {...props} />);
};

describe("<Input />", () => {
	describe("class name", () => {
		test("should have the className passed to it", () => {
			const { getByRole } = renderComponent({
				className: "test-class",
				...PROPS,
			});

			expect(getByRole("textbox").parentNode).toHaveClass("test-class");
		});
	});
});
