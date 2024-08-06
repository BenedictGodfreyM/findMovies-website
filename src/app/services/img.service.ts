import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  public defaultImage: string = environment.resources.loadingImage;
  public errorImage: string = environment.resources.errorImage;

  constructor() { }

  public generateURL(path: string | null): string{
    return `${environment.api.tmdb.img.url}/${environment.api.tmdb.img.sizes.original}${path}`;
  }
}
