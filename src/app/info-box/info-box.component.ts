import { Component } from '@angular/core';

@Component({
    selector: 'app-info-box',
    standalone: true,
    imports: [],
    templateUrl: './info-box.component.html',
    styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent
{
    text = "Additional Info-Text on our Info Box! 🎊";
    hidden = true;
}