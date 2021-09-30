import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loadedfeature: string | undefined;

onSelectFeature(feature: string){
  this.loadedfeature=feature;
}

}
