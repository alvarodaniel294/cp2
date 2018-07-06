import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonaComponent } from "./event/persona/persona.component";
import { AddPersonComponent } from './event/persona/addPerson/addPerson.component';
import { EditComponent } from "./event/persona/edit/edit.component";
import { SucursalComponent } from './sucursal/sucursal.component';
import { EditSucursalComponent } from './sucursal/editSucursal/editsucursal.component';
import { AddSucursalComponent } from './sucursal/addSucursal/addsucursal.component';
import { HeroFormComponent } from "./hero-form/hero-form.component";

import { Programa } from './modelo/programa';
import { ProgramaComponent } from './programa/programa.component';
import { EditProgramaComponent } from './programa/edit-programa/edit-programa.component';
import { AddProgramaComponent } from './programa/add-programa/add-programa.component';
import { ModuloComponent } from './modulo/modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo/edit-modulo.component';
import { AddModuloComponent } from './modulo/add-modulo/add-modulo.component';

import { facilitadorComponent } from './facilitador/facilitador.component';
import { AddFacilitadorComponent } from './facilitador/add-facilitador/add-facilitador.component';
import { EditFacilitadorComponent } from './facilitador/edit-facilitador/edit-facilitador.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';

import { WorkshopComponent } from "./workshop/workshop.component";
import { InicioComponent } from './inicio/inicio.component';
import { SomosComponent } from './somos/somos.component';
import { InteresComponent } from './interes/interes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ConsultoriasComponent } from './consultorias/consultorias.component';
import { CmrProgramasComponent } from "./cmr-programas/cmr-programas.component";
import { AddNewProgramComponent } from './cmr-programas/add-new-program/add-new-program.component';
import { EditProgramCmrComponent } from "./cmr-programas/edit-program-cmr/edit-program-cmr.component";
import { AddBenefitComponent } from "./cmr-programas/add-benefit/add-benefit.component";
import { EditBenefitComponent } from "./cmr-programas/edit-benefit/edit-benefit.component";
import { CmrTallerComponent } from "./cmr-taller/cmr-taller.component";
import { AddNewTallerComponent } from "./cmr-taller/add-new-taller/add-new-taller.component";
import { EditTallerCmrComponent } from "./cmr-taller/edit-taller-cmr/edit-taller-cmr.component";
import { AddBenefitTallerComponent } from "./cmr-taller/add-benefit-taller/add-benefit-taller.component";
import { AddConsultoriaComponent } from "./consultorias/add-consultoria/add-consultoria.component";
import { EditConsultoriaComponent } from "./consultorias/edit-consultoria/edit-consultoria.component";
import { AddScopeConsultoriaComponent } from "./consultorias/add-scope-consultoria/add-scope-consultoria.component";
import { EditScopeConsultoriaComponent } from "./consultorias/edit-scope-consultoria/edit-scope-consultoria.component";
import { EditEventComponent } from "./events/edit-event/edit-event.component";
import { EditBenefitTallerComponent } from './cmr-taller/edit-benefit-taller/edit-benefit-taller.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },//ruta basica
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
            { path: 'inicio', component: InicioComponent },
            { path: 'somos', component: SomosComponent },
            { path: 'eventos', component: EventsComponent },
            { path: 'eventos/add', component: AddEventComponent },
            { path: 'eventos/edit/:id',component:EditEventComponent},
            // { path: 'event/:id', component: EventComponent },
            { path: 'persons', component: PersonaComponent },
            // { path: 'persons/add', component: AddPersonComponent },
            // { path: 'persons/edit/:id', component: EditComponent },
            { path: 'sucursales', component: SucursalComponent },
            { path: 'sucursales/add', component: AddSucursalComponent },
            { path: 'sucursales/edit/:id', component: EditSucursalComponent },
            // { path: 'formulariobase', component: HeroFormComponent },
            { path: 'programas', component: ProgramaComponent },
            { path: 'programas/add', component: AddProgramaComponent },
            { path: 'programas/edit/:id', component: EditProgramaComponent },
            { path: 'modulos/:id', component: ModuloComponent },
            // { path: 'modulo/edit/:id', component: EditModuloComponent },
            // { path: 'modulo/add/:id', component: AddModuloComponent },
            { path: 'facilitador', component: facilitadorComponent },
            { path: 'facilitador/add', component: AddFacilitadorComponent },
            { path: 'facilitador/edit/:id', component: EditFacilitadorComponent },
            { path: 'talleres', component: WorkshopComponent },
            { path: 'consultorias', component: ConsultoriasComponent },
            { path: 'consultorias/add', component:AddConsultoriaComponent},
            { path: 'consultorias/edit/:id',component:EditConsultoriaComponent},
            { path: 'consultorias/scope/add/:id',component:AddScopeConsultoriaComponent},
            { path: 'consultorias/scope/edit/:id',component:EditScopeConsultoriaComponent},
            { path: 'interes', component: InteresComponent },
            { path: 'contactanos', component: ContactanosComponent },
            { path: 'cmr-programas', component:CmrProgramasComponent},
            { path: 'cmr-programas/add',component:AddNewProgramComponent},
            { path: 'cmr-programas/edit/:id',component:EditProgramCmrComponent},
            { path: 'cmr-programs/benefit/add/:id',component:AddBenefitComponent},
            { path: 'cmr-programs/benefit/edit/:id',component:EditBenefitComponent},
            { path: 'cmr-talleres',component:CmrTallerComponent},
            { path: 'cmr-talleres/add',component:AddNewTallerComponent},
            { path: 'cmr-talleres/edit/:id',component:EditTallerCmrComponent},
            { path: 'cmr-talleres/benefits/add/:id',component:AddBenefitTallerComponent},
            { path: 'cmr-talleres/benefits/edit/:id',component:EditBenefitTallerComponent},

        ]
    },

    //{path: '', component: LoginFormComponent}
    { path: '**', component: HomeComponent }//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);