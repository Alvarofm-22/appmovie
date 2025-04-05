import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts',
  imports: [NavComponent, RouterOutlet, CommonModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
