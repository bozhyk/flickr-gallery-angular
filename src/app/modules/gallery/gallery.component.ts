import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
    @Input() events: Observable<void>;
    private eventsSubscription: any;
    private gallery = [];
    private isLoading = true;
    private searchValue = 'pets';
    private page = 1;

    constructor(private galleryService: GalleryService) {}

    ngOnInit() {
        this.eventsSubscription = this.events.subscribe((searchValue) => this.loadImageGallery(`${searchValue}`, this.page));
    }

    onScroll() {
        this.page++;
        this.loadImageGallery(this.searchValue, this.page);
    }

    loadImageGallery(searchValue:string, page:number) {

        const flush = this.searchValue !== searchValue;
        this.searchValue = searchValue;

        if (this.searchValue.length >= 3) {
            this.isLoading = true;
            if (flush) {
                this.page = 0;
                this.gallery = [];
            }

            this.galleryService.getCalendarData(searchValue, page).subscribe(res => {
                this.gallery = [...this.gallery, ...res.photos.photo];
                this.isLoading = false;
            });
        }
    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe()
    }

}
