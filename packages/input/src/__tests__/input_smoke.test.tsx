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
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("textbox")).not.toBeNull();
		});
	});
});
