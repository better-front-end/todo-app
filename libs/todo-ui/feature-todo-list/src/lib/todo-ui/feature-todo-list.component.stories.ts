import type { Meta, StoryObj } from "@storybook/angular";
import { FeatureTodoListComponent } from "./feature-todo-list.component";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<FeatureTodoListComponent> = {
	component: FeatureTodoListComponent,
	title: "FeatureTodoListComponent",
};
export default meta;
type Story = StoryObj<FeatureTodoListComponent>;

export const Primary: Story = {
	args: {},
	parameters: {
		mockData: [
			{
				url: "https://jsonplaceholder.typicode.com/todos/1",
				method: "GET",
				status: 200,
				response: {
					data: "Hello storybook-addon-mock!",
				},
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText(/feature-todo-list works!/giu)).toBeTruthy();
	},
};
