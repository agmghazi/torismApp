import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  downloadFileToMachine(data, filename, mime) {
    const blob = new Blob([data], {
      type: mime || 'application/octet-stream',
    });
    if (typeof (window as any).navigator.msSaveBlob !== 'undefined') {
      (window as any).navigator.msSaveBlob(blob, filename);
      return;
    }
    const blobURL = (window as any).URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => {
      (window as any).URL.revokeObjectURL(blobURL);
    }, 100);
  }
}
