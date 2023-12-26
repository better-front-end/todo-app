import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "todo-+state-todo-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./+state-todo-list.component.html",
	styleUrls: ["./+state-todo-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateTodoListComponent {}
