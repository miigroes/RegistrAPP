import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  constructor() { }

  async startScan() {
    try {
      // Verificar y solicitar permisos
      await BarcodeScanner.checkPermission({ force: true });

      // Ocultar el fondo
      BarcodeScanner.hideBackground();

      // Iniciar el escaneo
      const result = await BarcodeScanner.startScan();

      // Procesar el resultado
      if (result.hasContent) {
        const scannedContent = result.content;

        if (this.isValidURL(scannedContent)) {
          window.open(scannedContent, '_blank');
        } else {
          console.log('Contenido escaneado no es una URL válida:', scannedContent);
        }
      }
    } catch (error) {
      console.error('Error al escanear:', error);
    }
  }

  private isValidURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === "http:" || urlObj.protocol === "https:";
    } catch (e) {
      return false;
    }
  }
}
