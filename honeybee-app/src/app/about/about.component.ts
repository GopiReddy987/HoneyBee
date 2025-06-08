import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  team = [
    { name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150' },
    { name: 'Mike Johnson', role: 'Designer', image: 'https://via.placeholder.com/150' }
  ];
} 