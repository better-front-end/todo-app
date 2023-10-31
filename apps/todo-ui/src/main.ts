import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrapApplication(AppComponent, appConfig).catch((error) =>
	// eslint-disable-next-line no-console
	console.error(error),
);
