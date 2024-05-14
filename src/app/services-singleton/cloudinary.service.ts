import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CloudinaryService {

    private readonly cld: Cloudinary;

    constructor(private http: HttpClient) {
        this.cld = new Cloudinary({
            cloud: {
              cloudName: environment.CLOUDINARY.CLOUD_NAME,
              apiKey: environment.CLOUDINARY.API_KEY,
              apiSecret: environment.CLOUDINARY.API_SECRET
            }
        });
    }
    
    public uploadImage(image: File): Observable<string> {
        const imploadUrl = `https://api.cloudinary.com/v1_1/${environment.CLOUDINARY.CLOUD_NAME}/image/upload`;
        
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', environment.CLOUDINARY.UPLOAD_PRESET);
        formData.append('cloud_name', environment.CLOUDINARY.CLOUD_NAME);

        return this.http.post<any>(imploadUrl, formData)
    }

    public getImage(imagePublicId: string): CloudinaryImage {
          const image = this.cld.image(imagePublicId);
          return image;
    }
}