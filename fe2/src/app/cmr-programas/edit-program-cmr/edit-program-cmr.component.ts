import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-program-cmr',
  templateUrl: './edit-program-cmr.component.html',
  styleUrls: ['./edit-program-cmr.component.css'],
  providers: [PeticionesService],
  
})
export class EditProgramCmrComponent implements OnInit {

  public program;
  public programId;
  public file;
  

  constructor(
     private route: ActivatedRoute,
     public router: Router,
     private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
     this.queryProgramId();
     this.findProgram();
  }
  queryProgramId() {
     this.route.params.subscribe(params => {
        this.programId = params.id;
     });
  }
  findProgram() {
     this._peticionesService.getProgram(this.programId).subscribe(
        result => {
           this.program = result;
          
        },
        error => {
           console.log(<any>error);
        })
  }
  saveProgram() {
  
    if(this.file==undefined){

      this._peticionesService.updateProgram(this.program).subscribe(
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

      this._peticionesService.updateProgramWithFile(this.file,this.program).subscribe(
        result => {
           console.log(result);
           var res = result;
           alert('Se guardó corre  ctamente la edición');
           // this.router.navigate(['home/programs']);
        //    window.history.back();          
        },
        error => {
           console.log(<any>error);
           alert('Error al guardar verifique los datos');
        })
    }
    
        
     
  }
  addBenefit(){
    this.router.navigate(['/home/cmr-programs/benefit/add',this.programId])
  }
  editBenefit(_idBenefit){
    let _idBenefit_idProgram=_idBenefit+'-'+this.programId;
    this.router.navigate(['/home/cmr-programs/benefit/edit',_idBenefit_idProgram])
    

  }
  cancel() {
     // this.router.navigate(['home/programs']);
     window.history.back();         
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
}