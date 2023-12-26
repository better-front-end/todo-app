import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "todo-feature-todo-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./feature-todo-list.component.html",
	styleUrls: ["./feature-todo-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTodoListComponent {}
