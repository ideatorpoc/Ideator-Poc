import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {IdeasComponent} from './ideas.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaComponent } from './idea/idea.component';

const routes:Routes = [
{
    path:'ideas',
    component:IdeasComponent,
    children:[
        {path:'', component:IdeaListComponent},
        {path:'id',component:IdeaComponent}
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
    IdeaComponent
]