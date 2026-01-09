import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <h1>Galeria de Fotos</h1>
    </header>
  `,
  styles: [`
    .app-header {
      background: var(--primary-gradient, linear-gradient(135deg, #FF69B4, #89CFF0));
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 6px rgba(255, 105, 180, 0.2); /* Soft pink shadow */
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
  `]
})
export class HeaderComponent {}
