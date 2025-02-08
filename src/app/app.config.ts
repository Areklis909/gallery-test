import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GalleryModule, GalleryConfig, GALLERY_CONFIG } from 'ng-gallery';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(),
  importProvidersFrom(GalleryModule), {

    provide: GALLERY_CONFIG,
    useValue: {
      imageSize: 'cover'
    } as GalleryConfig

  }

  ]
};
