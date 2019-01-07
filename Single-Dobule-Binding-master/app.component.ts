import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello God</h1>
    //         <h1>Hello User</h1>`  
  templateUrl: `./app.component.html`,

  styleUrls: ['./app.component.css'],
  styles: ['.box{color:red}'],
  
  
})
export class AppComponent  { 
  helloFn = 'Hello'; 
  mycolor = 'green';
  sty = {
    'color' : 'orange',
  };
  fName = 'John';
  lName = 'Doe';
  changeValue() {
    this.helloFn = this.helloFn === 'clicked' ? 'clicked again' : 'clicked';
  }


}
