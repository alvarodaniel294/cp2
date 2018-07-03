import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-scope-consultoria',
  templateUrl: './edit-scope-consultoria.component.html',
  styleUrls: ['./edit-scope-consultoria.component.css'],
  providers:[PeticionesService]
  
})
export class EditScopeConsultoriaComponent implements OnInit {

  public consultoriaId;
  public scopeId;
  public consultoria;
  public editScope;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.scopeId=params.id.split('-')[0];
      this.consultoriaId = params.id.split('-')[1];
      this.findConsultoria();
   });
  }
  findConsultoria() {
    this._peticionesService.getConsultoria(this.consultoriaId).subscribe(
       result => {
          this.consultoria = result;
          for(let scope of this.consultoria.scopes){
            if(scope._id==this.scopeId){
              this.editScope=scope;
            }
          }
         
       },
       error => {
          console.log(<any>error);
       })
  }

  onSubmit(){
    for(let s of this.consultoria.scopes){
      if(s._id==this.scopeId){
        s=this.editScope;
      }
    }
    this._peticionesService.updateConsultoria(this.consultoria).subscribe(
      res => {
        alert('Guardado Exitosamente');
        window.history.back();
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      });

  }

  cancel(){
    window.history.back();
  }


}
