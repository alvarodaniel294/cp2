import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-benefit',
  templateUrl: './edit-benefit.component.html',
  styleUrls: ['./edit-benefit.component.css'],
  providers:[PeticionesService]
})
export class EditBenefitComponent implements OnInit {
  public programId;
  public benefitId;
  public program;
  public editBenefit;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.benefitId=params.id.split('-')[0];
      this.programId = params.id.split('-')[1];
      this.findProgram();
   });
  }
  findProgram() {
    this._peticionesService.getProgram(this.programId).subscribe(
       result => {
          this.program = result;
          for(let benef of this.program.benefit){
            if(benef._id==this.benefitId){
              this.editBenefit=benef;
            }
          }
         
       },
       error => {
          console.log(<any>error);
       })
  }

  onSubmit(){
    for(let b of this.program.benefit){
      if(b._id==this.benefitId){
        b=this.editBenefit;
      }
    }
    this._peticionesService.updateProgram(this.program).subscribe(
      res => {
        alert('Guardado Exitosamente');
        window.history.back();
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      });

  }

  cancel(){
    window.history.back();
  }


}
