import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StateTodoListComponent } from "./+state-todo-list.component";

describe("StateTodoListComponent", () => {
	let component: StateTodoListComponent;
	let fixture: ComponentFixture<StateTodoListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [StateTodoListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(StateTodoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
