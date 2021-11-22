import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:any = {};
  
  //para agarrar parametros
  constructor( private activateRoute: ActivatedRoute,
               private _herosService: HeroesService          
    ) { 
    
    this.activateRoute.params.subscribe( params =>{
      //console.log( params['id'] );
      this.heroe = this._herosService.getHeroe( params['id'] );
      console.log(this.heroe);
    });
  }


}
