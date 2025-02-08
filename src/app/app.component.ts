import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GalleryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gallery-test';

  items: GalleryItem[] = [
    new ImageItem({
      src: '/assets/gallery.jpg'
    }),
    new ImageItem({
      src: '/assets/contact.jpg'
    }),
  ];
}
