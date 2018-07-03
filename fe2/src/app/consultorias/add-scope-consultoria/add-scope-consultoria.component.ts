import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-scope-consultoria',
  templateUrl: './add-scope-consultoria.component.html',
  styleUrls: ['./add-scope-consultoria.component.css'],
  providers:[PeticionesService]
  
})
export class AddScopeConsultoriaComponent implements OnInit {

  public newAlcance;
  public consultoriaId;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
 ) { }

 ngOnInit() {
    this.queryTallerId();
 }
 queryTallerId() {
    this.route.params.subscribe(params => {
       this.consultoriaId = params.id;
    });
 }

  onSubmit(){
    let scopeObject={} as ScopeObj;
    scopeObject.name=this.newAlcance;
    scopeObject.photo='';
    this._peticionesService.addAlcanceToConsultoria(this.consultoriaId,scopeObject).subscribe(
      res=>{
        alert('Guardado Exitosamente')
        window.history.back();
      },err=>{
        var errorMessage = <any>err;
        console.log(errorMessage);
      })

  }
  cancel(){
    window.history.back();
  }

}

export interface ScopeObj{
  photo:string,
  name:string,
}
