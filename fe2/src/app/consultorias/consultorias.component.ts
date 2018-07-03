import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-consultorias',
  templateUrl: './consultorias.component.html',
  styleUrls: ['./consultorias.component.css'],
  providers: [PeticionesService]
})
export class ConsultoriasComponent implements OnInit {
  public consultorias;
  public page_consultoria;
  public id;
  constructor(
    private _peticionesService: PeticionesService,
    private _router:Router
  
  ) { }

  ngOnInit() {
    this._peticionesService.getInicio().subscribe(res => {
      this.page_consultoria = res[0].consultoria;
      this.id = res[0]._id;
    });
    this.queryConsultorias();
  }

  queryConsultorias() {
    this._peticionesService.getConsultorias().subscribe(response => {
      this.consultorias = response;
      // this.lista_personas = this.lista;
      console.log(this.consultorias, response);
    })
  }
  saveConsultoriaTop(){
    this._peticionesService.updateInicio_consultoria(this.page_consultoria,this.id).subscribe(
      res=>{
        alert("Guardado Exitosamente");
      },err=>{
        var errorMessage=<any>err;
        console.log(errorMessage);
      }
    )


  }
  edit(consultoriaId){
    this._router.navigate(['home/consultorias/edit',consultoriaId]);
    
  }
  cancelar(){
    
  }
}
