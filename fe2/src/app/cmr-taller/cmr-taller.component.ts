import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-cmr-taller',
  templateUrl: './cmr-taller.component.html',
  styleUrls: ['./cmr-taller.component.css'],
  providers:[PeticionesService]
})
export class CmrTallerComponent implements OnInit {

  
  public page_taller;
  public id;
  public lista_talleres;
  
  constructor(
    private _peticionesService: PeticionesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page_taller = res[0].taller;
      this.id = res[0]._id;
    });

    this._peticionesService.getTalleres().subscribe(
      result => {
        this.lista_talleres = result;
        console.log(result)
      },
      error => {
        console.log(<any>error);
      });
  }

  saveProgramTop(){
    this._peticionesService.updateInicio_talleres(this.page_taller,this.id).subscribe(
      res=>{
        alert("Guardado Exitosamente");
      },err=>{
        var errorMessage=<any>err;
        console.log(errorMessage);
      }
    )

  }
  editTaller(_id:string){
    this._router.navigate(['/home/cmr-talleres/edit', _id]);
  }
  addTaller(){
    this._router.navigate(['/home/cmr-talleres/add']);
  }

  beneficiosTaller(_id){
    this._router.navigate(['/home/cmr-talleres/benefit',_id])
  }
}
