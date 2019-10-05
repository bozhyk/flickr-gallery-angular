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
        this.imageLink = `https://farm${this.imageData.farm}.staticflickr.com/${this.imageData.server}/${this.imageData.id}_${this.imageData.secret}.jpg`;
    }
}
