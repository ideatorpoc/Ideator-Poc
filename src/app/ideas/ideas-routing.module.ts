
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {IdeasComponent} from './ideas.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaAddComponent } from './idea-add/idea-add.component';
import { AuthGuard } from './../guards/auth.guard';

const routes:Routes = [
{
    path:'ideas',
    component:IdeasComponent,
    children:[
        {path:'', component:IdeaListComponent,canActivate: [AuthGuard]},
        {path:'add',component:IdeaAddComponent,canActivate: [AuthGuard]},
        {path:':id',component:IdeaComponent,canActivate: [AuthGuard]}
    ]
}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class IdeasRoutingModule{
}

export const routedComponents = [
    IdeasComponent,
    IdeaListComponent,
    IdeaComponent,
    IdeaAddComponent
]