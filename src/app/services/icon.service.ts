import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

  }

  public registerIcons() : void {
    this.matIconRegistry.addSvgIcon(
      "monday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/monday.svg"));

    this.matIconRegistry.addSvgIcon(
      "tuesday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/tuesday.svg"));

    this.matIconRegistry.addSvgIcon(
      "wednesday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/wednesday.svg"));

    this.matIconRegistry.addSvgIcon(
      "thursday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/thursday.svg"));

    this.matIconRegistry.addSvgIcon(
      "friday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/friday.svg"));

    this.matIconRegistry.addSvgIcon(
      "saturday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/saturday.svg"));

    this.matIconRegistry.addSvgIcon(
      "sunday",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/sunday.svg"));

  }
}
