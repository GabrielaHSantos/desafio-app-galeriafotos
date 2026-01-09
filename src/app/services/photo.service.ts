import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: Photo[] = [
    { id: 1, title: 'Camélias', url: 'https://loremflickr.com/300/300/camellia,flower?lock=201' },
    { id: 2, title: 'Magnólias', url: 'https://loremflickr.com/300/300/magnolia,flower?lock=202' },
    { id: 3, title: 'Tulipas', url: 'https://loremflickr.com/300/300/tulip,garden?lock=203' },
    { id: 4, title: 'Orquídeas', url: 'https://loremflickr.com/300/300/orchid,flower?lock=204' },
    { id: 5, title: 'Margaridas', url: 'https://loremflickr.com/300/300/daisy,meadow?lock=205' },
    { id: 6, title: 'Lavandas', url: 'https://loremflickr.com/300/300/lavender,purple?lock=206' },
    { id: 7, title: 'Flor de Cerejeira', url: 'https://loremflickr.com/300/300/cherryblossom,tree?lock=207' },
    { id: 8, title: 'Ranúnculos', url: 'https://loremflickr.com/300/300/ranunculus,flower?lock=208' },
    { id: 9, title: 'Peônias', url: 'https://loremflickr.com/300/300/peony,bouquet?lock=209' },
    { id: 10, title: 'Hortênsias', url: 'https://loremflickr.com/300/300/hydrangea,garden?lock=210' },
    { id: 11, title: 'Dálias', url: 'https://loremflickr.com/300/300/dahlia,flower?lock=211' },
    { id: 12, title: 'Gardênias', url: 'https://loremflickr.com/300/300/gardenia,flower?lock=212' }
  ];

  getPhotos(): Observable<Photo[]> {
    return of(this.photos);
  }
}
