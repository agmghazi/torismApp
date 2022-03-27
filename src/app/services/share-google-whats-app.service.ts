import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareGoogleWhatsAppService {

  goToGoogleMap(latitude, longitude) {
    let url = `https://www.google.com/maps/place/${latitude},${longitude}`
    window.open(url, "_blank");
  }

  shareToWhatsapp(objId) {
    let url = `https://api.whatsapp.com/send?text=${document.location.protocol}//${document.location.host}/TourismApp/client/home/landMap?obj=${objId}`
    window.open(url, "_blank");
  }
}
