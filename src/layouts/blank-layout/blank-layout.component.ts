import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from 'src/components/nav-blank/nav-blank.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavBlankComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

}
