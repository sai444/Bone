import { Component, OnInit } from '@angular/core';
import { ButtonsConfig, ButtonsStrategy, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, PlainGalleryConfig, PlainGalleryStrategy, AdvancedLayout, ButtonEvent, ButtonType } from '@ks89/angular-modal-gallery';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  public imagesRect: Image[] = [
    new Image(
      0,
      { // modal
        img: 'assets/images/big-lightgallry/01.jpg',
        extUrl: 'http://www.google.com',
        title: 'SPG 1',
        description: '<h4>SPG 1</h4><p>PLC touch screen 3 axes fully automatic surface and plunge grinding system</p>'
      },
    ),
    new Image(
      1,
      { // modal
        img: 'assets/images/big-lightgallry/02.jpg',
        extUrl: 'http://www.google.com',
        title: 'SPG 2',
        description: '<h4>SPG 2</h4><p>Wheel head will raise up to end, start and reference positionable parks at left or right side after cycle is completed.</p>'
      },
    ),

    new Image(
      3,
      { // modal
        img: 'assets/images/big-lightgallry/03.jpg',
        extUrl: 'http://www.google.com',
        title: 'SPI 1',
        description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
      },
    ),


    new Image(
      10,
      { // modal
        img: 'assets/images/big-lightgallry/04.jpg',
        extUrl: 'http://www.google.com',
        title: 'SPI 20',
        description: '<h4>SPI 20</h4><p>To achieve better accuracy, the number of free passes between down-feeds can be preset depending on work piece material</p>'
      },
    ),
    new Image(
      11,
      { // modal
        img: 'assets/images/big-lightgallry/05.jpg',
        extUrl: 'http://www.google.com',
        title: 'SPI 03',
        description: '<h4>High precision</h4><p> cartridge type spindle equipped with 4 pieces of class 7 angular contact ball bearings, suitable for heavy duty grinding.</p>'
      },
    ),
  ];

  constructor(private galleryService: GalleryService) {
  }

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.imagesRect = this.imagesRect.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  ngOnInit() {  }

}
