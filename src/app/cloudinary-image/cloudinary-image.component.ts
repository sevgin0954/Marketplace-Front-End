import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

@Component({
  selector: 'app-cloudinary-image',
  standalone: true,
  imports: [],
  templateUrl: './cloudinary-image.component.html',
  styleUrl: './cloudinary-image.component.scss'
})
export class CloudinaryImageComponent implements OnInit {

  @Input() imageId: string;
  image: CloudinaryImage;

  ngOnInit(): void {
    const cld = new Cloudinary({
      cloud: {
        cloudName: environment.CLOUDINARY.CLOUD_NAME,
        apiKey: environment.CLOUDINARY.API_KEY,
        apiSecret: environment.CLOUDINARY.API_SECRET
      }
    });

    this.image = cld.image(this.imageId);
  }
}
