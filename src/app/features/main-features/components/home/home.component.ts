import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  constructor() {
    console.log(this.#route.snapshot.data);
  }

  gotToProgrammata() {
    this.#router.navigate(['/','home','programmata'],{ queryParams: { order: 'popular' }});
  }
}
