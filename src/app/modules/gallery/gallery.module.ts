// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LightboxModule } from 'ngx-lightbox';

import { ImageModule } from '../image/image.module';
import { InfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';

// This Module's Components
import { GalleryComponent } from './gallery.component';

@NgModule({
    imports: [
        CommonModule,
        ImageModule,
        InfiniteScrollModule,
        LightboxModule
    ],
    declarations: [
        GalleryComponent,
    ],
    exports: [
        GalleryComponent,
    ]
})
export class GalleryModule {
}
