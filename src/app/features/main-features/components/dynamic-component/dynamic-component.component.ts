import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss'
})
export class DynamicComponentComponent {
  messaggio: string = '';
  #route = inject(ActivatedRoute);

  constructor() {
    this.#route.url.pipe(takeUntilDestroyed()).subscribe({
      next: (url) => this.messaggio = url[0].path
    })
  }
}
