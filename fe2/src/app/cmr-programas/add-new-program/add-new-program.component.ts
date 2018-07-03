import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Programa } from '../../modelo/programa';

@Component({
  selector: 'app-add-new-program',
  templateUrl: './add-new-program.component.html',
  styleUrls: ['./add-new-program.component.css'],
  providers: [PeticionesService],

})
export class AddNewProgramComponent implements OnInit {
  public program: Programa;
  public file;

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.program = new Programa(' ', ' ',' ', ' ',[]);//name, details
  }

  ngOnInit() {
  }
  onSubmit() {
    if(this.file==undefined){

      this._peticionesService.addProgram(this.program).subscribe(
        result => {
          var esperado = result;
          alert('El Programa se creó correctamente');
          this.router.navigate(['home/cmr-programas']);
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          alert('Error al crear Programa verifique los datos');
  
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
