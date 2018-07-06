import { Component, OnInit } from '@angular/core';
import { Consultoria } from "../../modelo/consultoria";
import { PeticionesService } from "../../services/peticiones.service";


@Component({
  selector: 'app-add-consultoria',
  templateUrl: './add-consultoria.component.html',
  styleUrls: ['./add-consultoria.component.css'],
  providers:[PeticionesService]
})
export class AddConsultoriaComponent implements OnInit {

  public file;
  public consultoria;
  constructor(
    private _peticionesService:PeticionesService,
  ) {
    this.consultoria=new Consultoria(" ",'','','',{});
    this.consultoria.photo='a';
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.consultoria);
    if(this.file==undefined){
      this._peticionesService.addConsultoria(this.consultoria).subscribe(
        res=>{
          alert("Guardado Exitosamente");
          window.history.back();
        },err=>{
          var errorMessage=<any>err;
          console.log(errorMessage);
        }
      )

    }else{
      this._peticionesService.addConsultoriaWithFIle(this.file,this.consultoria).subscribe(
        res=>{
          alert("Guardado Exitosamente");
          window.history.back();
        },err=>{
          var errorMessage=<any>err;
          console.log(errorMessage);
        }
      )
    }
    

  }
  cancelar(){
    window.history.back();
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

}
