import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-benefit-taller',
  templateUrl: './edit-benefit-taller.component.html',
  styleUrls: ['./edit-benefit-taller.component.css'],
  providers:[PeticionesService]
})
export class EditBenefitTallerComponent implements OnInit {

  public tallerId;
  public benefitId;
  public taller;
  public editBenefit;
  public file;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.benefitId=params.id.split('-')[0];
      this.tallerId = params.id.split('-')[1];
      this.findTaller();
   });
  }
  findTaller() {
    this._peticionesService.getTaller(this.tallerId).subscribe(
       result => {
          this.taller = result;
          for(let benef of this.taller.benefit){
            if(benef._id==this.benefitId){
              this.editBenefit=benef;
              console.log(this.editBenefit)
            }
          }
         
       },
       error => {
          console.log(<any>error);
       })
  }

  onSubmit(){
    for(let b of this.taller.benefit){
      if(b._id==this.benefitId){
        b=this.editBenefit;
      }
    }
    if(this.file==undefined){
      this._peticionesService.updateTaller(this.taller).subscribe(
        res => {
          alert('Guardado Exitosamente');
          window.history.back();
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });

    }else{
      this._peticionesService.updateTallerBenefitWithFile(this.file,this.taller,this.editBenefit).subscribe(
        res => {
          alert('Guardado Exitosamente');
          window.history.back();
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        });

    }
    

  }

  cancel(){
    window.history.back();
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }
}
