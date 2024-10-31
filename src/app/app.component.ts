import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';

  items: any[] = [];

  constructor(private myService: MyService) {
      this.items = this.myService.getData();
  }

  addItem() {
      const newItem = { id: Date.now(), value: 'New Item' };
      this.myService.addData(newItem);
      this.items = this.myService.getData();
  }
}



