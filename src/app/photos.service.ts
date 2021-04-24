import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface response{
  urls: {
    full:string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  getphoto(){
    return this.http.get<response>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID LtLEMz65ibDlj05YS_ZmcdBWwUcFT8E6iXGYzLcCoRc'
      }
    });
  }
}
