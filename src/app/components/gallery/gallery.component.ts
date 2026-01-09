import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.interface';
import { PhotoCardComponent } from '../photo-card/photo-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, PhotoCardComponent],
  template: `
    <div class="gallery-container">
      <div class="search-bar">
        <input 
          type="text" 
          [(ngModel)]="searchTerm" 
          (input)="filterPhotos()" 
          placeholder="Pesquisar fotos por nome..."
        >
        <button (click)="filterPhotos()" type="button" aria-label="Pesquisar">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      @if (filteredPhotos.length > 0) {
        <div class="photo-grid">
          @for (photo of filteredPhotos; track photo.id) {
            <app-photo-card [photo]="photo"></app-photo-card>
          }
        </div>
      } @else {
        <div class="no-results">
          <p>Nenhuma foto encontrada</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .gallery-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      flex: 1;
      width: 100%;
      box-sizing: border-box;
    }
    .search-bar {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      gap: 10px;
    }
    input {
      padding: 12px 20px;
      border: 1px solid #ccc;
      border-radius: 25px;
      width: 100%;
      max-width: 400px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    input:focus {
      border-color: #FF69B4;
      box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.2);
    }
    button {
      padding: 10px 20px;
      background: var(--primary-gradient, linear-gradient(135deg, #FF69B4, #89CFF0));
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: opacity 0.3s, transform 0.1s;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 6px rgba(255, 105, 180, 0.2);
    }
    button:hover {
      opacity: 0.9;
    }
    button:active {
      transform: scale(0.95);
    }
    .search-icon {
      font-size: 1.2rem;
    }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 24px;
    }
    @media (max-width: 600px) {
      .gallery-container {
        padding: 1rem;
      }
      .photo-grid {
        grid-template-columns: 1fr;
      }
    }
    .no-results {
      text-align: center;
      padding: 3rem;
      color: #777;
    }
    .no-results p {
      font-size: 1.5rem;
      margin: 0;
    }
  `]
})
export class GalleryComponent implements OnInit {
  private photoService = inject(PhotoService);
  
  photos: Photo[] = [];
  filteredPhotos: Photo[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.filteredPhotos = photos;
    });
  }

  filterPhotos() {
    const term = this.searchTerm.trim().toLowerCase();
    
    if (!term) {
      this.filteredPhotos = this.photos;
      return;
    }
    
    this.filteredPhotos = this.photos.filter(photo => 
      photo.title.toLowerCase().includes(term)
    );
  }
}
