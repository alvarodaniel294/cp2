import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-consultoria',
  templateUrl: './edit-consultoria.component.html',
  styleUrls: ['./edit-consultoria.component.css'],
  providers:[PeticionesService]
  
})
export class EditConsultoriaComponent implements OnInit {
  public consultoria;
  public consultoriaId;
  public file;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.consultoriaId = params.id;
      this._peticionesService.getConsultoria(this.consultoriaId).subscribe(
        result => {
          this.consultoria = result;
         
       },
       error => {
          console.log(<any>error);
       })
   });
  }

  onSubmit(){
    if(this.file==undefined){

      this._peticionesService.updateConsultoria(this.consultoria).subscribe(
        result => {
          console.log(result);
          var res = result;
          alert('Se guardó correctamente la edición');
          // this.router.navigate(['home/programs']);
       //    window.history.back();          
       },
       error => {
          console.log(<any>error);
          alert('Error al guardar verifique los datos');
       })
    }else{

      this._peticionesService.updateConsultoriaWithFile(this.file,this.consultoria).subscribe(
        result => {
          console.log(result);
          var res = result;
          alert('Se guardó correctamente la edición');
          // this.router.navigate(['home/programs']);
       //    window.history.back();          
       },
       error => {
          console.log(<any>error);
          alert('Error al guardar verifique los datos');
       })
    }
    

  }
  addAlcance(){
    this.router.navigate(['/home/consultorias/scope/add',this.consultoriaId]);

  }
  editScope(scope_id){
    let scopeId_ConsultoriaId=scope_id+'-'+this.consultoriaId;
    this.router.navigate(['/home/consultorias/scope/edit',scopeId_ConsultoriaId]);
  }
  cancelar(){
    window.history.back();

  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

}
