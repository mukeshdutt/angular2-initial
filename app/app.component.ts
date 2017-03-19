import { Component } from '@angular/core'

@Component({
    selector: "my-app",
    template: `<h2>Welcome to Angular</h2>
            <h3>Version {{ version }}</h3>
    `
})
export class AppComponent {
    version:string ="2.0"
}