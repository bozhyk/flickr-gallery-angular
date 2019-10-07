import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ImageComponent } from './modules/image/image.component';
import { InfiniteScrollComponent } from './modules/infinite-scroll/infinite-scroll.component';
import { GalleryService } from './core/services/gallery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LightboxModule } from 'ngx-lightbox';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, GalleryComponent, ImageComponent, InfiniteScrollComponent
      ],
      providers: [
        GalleryService
      ],
      imports: [ HttpClientTestingModule, LightboxModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tpredic-Gallery-Test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tpredic-Gallery-Test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tpredict Image Searcher');
  });
});
