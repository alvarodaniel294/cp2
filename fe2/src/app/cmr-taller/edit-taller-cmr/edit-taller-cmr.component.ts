import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-edit-taller-cmr',
  templateUrl: './edit-taller-cmr.component.html',
  styleUrls: ['./edit-taller-cmr.component.css'],
  providers:[PeticionesService]
})
export class EditTallerCmrComponent implements OnInit {

  
  public taller;
  public tallerId;
  public file;
  

  constructor(
     private route: ActivatedRoute,
     public router: Router,
     private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
     this.queryTallerId();
     this.findTaller();
  }
  queryTallerId() {
     this.route.params.subscribe(params => {
        this.tallerId = params.id;
     });
  }
  findTaller() {
     this._peticionesService.getTaller(this.tallerId).subscribe(
        result => {
           this.taller = result;
          
        },
        error => {
           console.log(<any>error);
        })
  }
  saveTaller() {
  
    if(this.file==undefined){

      this._peticionesService.updateTaller(this.taller).subscribe(
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
      this._peticionesService.updateTallerWithFile(this.file,this.taller).subscribe(
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
  addBenefit(){
    this.router.navigate(['/home/cmr-talleres/benefits/add',this.taller._id])
  }
  editBenefit(_idBenefit){
    let _idBenefit_idTaller=_idBenefit+'-'+this.tallerId;
    this.router.navigate(['/home/cmr-talleres/benefits/edit',_idBenefit_idTaller])
    

  }
  cancel() {
     // this.router.navigate(['home/programs']);
     window.history.back();         
  }
  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
}