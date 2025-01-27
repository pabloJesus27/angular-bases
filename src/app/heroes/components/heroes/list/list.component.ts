import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: String[] = ['Spiderman','Hulk','Iroman','Thor','She Hulk'];
  public deletedHero?: String;

  removeLasHero ():void{
    this.deletedHero= this.heroesName.pop()
  }
}
