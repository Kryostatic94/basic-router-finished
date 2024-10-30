import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  #route = inject(ActivatedRoute);
  variabile: number = 1;

  constructor() {
    this.#route.queryParams.pipe(takeUntilDestroyed()).subscribe(console.log);
    this.#route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => console.log(params));
  }
}
