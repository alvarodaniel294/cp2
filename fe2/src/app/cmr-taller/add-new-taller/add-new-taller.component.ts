import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../../services/peticiones.service";
import { Router,ActivatedRoute } from "@angular/router";
import { Taller } from "../../modelo/taller";

@Component({
  selector: 'app-add-new-taller',
  templateUrl: './add-new-taller.component.html',
  styleUrls: ['./add-new-taller.component.css'],
  providers:[PeticionesService]
})
export class AddNewTallerComponent implements OnInit {
  public taller: Taller;
  public file;

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.taller = new Taller(' ', ' ',' ', ' ',[]);//name, details
  }

  ngOnInit() {
  }
  onSubmit() {
    if(this.file==undefined){

      console.log(this.taller)
      this._peticionesService.addTaller(this.taller).subscribe(
        result => {
          var esperado = result;
          alert('El taller se creó correctamente');
          this.router.navigate(['home/cmr-talleres']);
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          alert('Error al crear taller verifique los datos');
  
        }
      );
    }
    // else{
    //   this._peticionesService.addProgramWithFile(this.program,this.file).subscribe(
    //     result => {
    //       var esperado = result;
    //       alert('El Programa se creó correctamente');
    //       this.router.navigate(['home/cmr-programas']);
    //     },
    //     error => {
    //       var errorMessage = <any>error;
    //       console.log(errorMessage);
    //       alert('Error al crear Programa verifique los datos');
  
    //     }
    //   );
      
    // }
    
  }
  cancel() {
    window.history.back();
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
}
