import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works fucking great!';
  subtitle = 'this will be a subtitle';
  stringInterpolation = 'this is String Interpolation';

  onClicked(value: string){
      console.log(value);

  }

}
