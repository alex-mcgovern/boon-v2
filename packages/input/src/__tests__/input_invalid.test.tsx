/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { Input } from "../_components/Input";

import {
	a11yError,
	variantColorOverlay,
} from "../../../../packages/styles/src/index.css";
import type { InputProps } from "../_components/Input";

const PROPS: InputProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(<Input {...props} />);
};

describe("<Input />", () => {
	describe("Invalid", () => {
		test("should have error styling", () => {
			const { getByRole } = renderComponent({
				...PROPS,
				invalid: true,
			});

			const textbox = getByRole("textbox");

			expect(textbox.parentNode).toHaveClass(a11yError);

			expect(
				textbox?.parentNode?.parentNode?.parentNode?.parentNode,
			).toHaveClass(variantColorOverlay.red);
		});

		test("should render error message", () => {
			const { getByText } = renderComponent({
				...PROPS,
				errorMessage: LOREM.errorMessage(),
				invalid: true,
			});

			expect(getByText(LOREM.errorMessage())).not.toBeNull();
		});
	});
});
