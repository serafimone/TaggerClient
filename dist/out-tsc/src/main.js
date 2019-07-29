import { AppModule } from "./app/app.module";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map