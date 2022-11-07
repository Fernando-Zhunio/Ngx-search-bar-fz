import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-bar';

  items: any[] = []

  filter = {
    userId: 0,
    price: '',
  }

  getData(event: any) {
    console.log(event);
    this.items = event;
  }
}
