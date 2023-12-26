import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "todo-ui-todo-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./ui-todo-list.component.html",
	styleUrls: ["./ui-todo-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTodoListComponent {}
