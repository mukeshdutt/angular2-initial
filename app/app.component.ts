import { Component } from '@angular/core'

@Component({
    selector: "my-app",
    template: `<h2>Welcome to Angular</h2>
            <h3>Version {{ version }}</h3>

            <h4> Angular Teams </h4>            
            <ul>
            <li *ngFor="let member of team"> {{ member }} </li>
            </ul>
    `
})
export class AppComponent {
    
    version:string ="2.0";
    team = ["MIŠKO HEVERY", "IGOR MINAR", "NAOMI BLACK", "BRAD GREEN"];
}