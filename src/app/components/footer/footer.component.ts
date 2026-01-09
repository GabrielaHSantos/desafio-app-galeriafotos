import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>&copy; 2026 Galeria de Fotos. Todos os direitos reservados.</p>
    </footer>
  `,
  styles: [`
    .app-footer {
      background-color: #f5f5f5;
      color: #666;
      padding: 1rem;
      text-align: center;
      margin-top: auto;
      border-top: 1px solid #ddd;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {}
