import { Component, Input } from '@angular/core';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
    selector: 'image',
    templateUrl: 'image.component.html',
    styleUrls: ['image.component.scss']
})
export class ImageComponent {
    @Input() imageData: any;
    imageLink: string;
    constructor(private galleryService: GalleryService) {}

    ngOnInit() {
        this.imageLink = this.galleryService.getThumbUrl(this.imageData);
    }
}
