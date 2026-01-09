import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, GalleryComponent, FooterComponent],
  template: `
    <div class="app-layout">
      <app-header></app-header>
      <main>
        <app-gallery></app-gallery>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: 'Roboto', sans-serif;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #fafafa;
    }
  `]
})
export class AppComponent {}
