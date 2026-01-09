import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '../../models/photo.interface';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="photo-card">
      <div class="image-container">
        <img [src]="photo.url" [alt]="photo.title" loading="lazy">
      </div>
      <div class="photo-info">
        <h3>{{ photo.title }}</h3>
      </div>
    </div>
  `,
  styles: [`
    .photo-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(255, 105, 180, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
      animation: fadeIn 0.5s ease-out forwards;
    }
    .photo-card:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 15px rgba(255, 105, 180, 0.3);
    }
    .image-container {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background-color: #eee;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .photo-info {
      padding: 1rem;
      text-align: center;
    }
    h3 {
      margin: 0;
      font-size: 1rem;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `]
})
export class PhotoCardComponent {
  @Input({ required: true }) photo!: Photo;
}
