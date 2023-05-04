import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {

  goToLink(url: string): void{
    window.open(url, "_blank");
  }
}
