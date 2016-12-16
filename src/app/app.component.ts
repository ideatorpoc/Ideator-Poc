import { Component,OnInit} from '@angular/core';
import { NavComponent } from './core/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works!';
 // theme:string="dark-theme";
 theme:string="deeppurple-amber";

    onThemeChanged( newTheme:string)
    {
        this.theme=newTheme;
        console.log(this.theme);
    }
    ngOnInit(){
        
    }

}
