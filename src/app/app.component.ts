import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { Card7Component } from './card7/card7.component';
import { Card8Component } from './card8/card8.component';
import { Card9Component } from './card9/card9.component';
import { Card10Component } from './card10/card10.component';
import { Card11Component } from './card11/card11.component';
import { Card12Component } from './card12/card12.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card1Component, Card2Component, Card3Component, Card4Component, Card5Component, Card6Component, Card7Component, Card8Component, Card9Component, Card10Component, Card11Component, Card12Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08.05.2024';
}
