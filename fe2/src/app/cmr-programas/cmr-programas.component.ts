import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-cmr-programas',
  templateUrl: './cmr-programas.component.html',
  styleUrls: ['./cmr-programas.component.css'],
  providers: [PeticionesService],
  
})
export class CmrProgramasComponent implements OnInit {

  public page_program;
  public id;
  public lista_programs;
  
  constructor(
    private _peticionesService: PeticionesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page_program = res[0].program;
      this.id = res[0]._id;
    });

    this._peticionesService.getPrograms().subscribe(
      result => {
        this.lista_programs = result;
        console.log(result)
      },
      error => {
        console.log(<any>error);
      });
  }

  saveProgramTop(){
    this._peticionesService.updateInicio_programs(this.page_program,this.id).subscribe(
      res=>{
        alert("Guardado Exitosamente");
      },err=>{
        var errorMessage=<any>err;
        console.log(errorMessage);
      }
    )

  }
  editProgram(_id:string){
    this._router.navigate(['/home/cmr-programas/edit', _id]);
  }
  addProgram(){
    this._router.navigate(['/home/cmr-programas/add']);
  }

  beneficios(_id){
    this._router.navigate(['/home/cmr-programs/benefit',_id])
  }
}
