import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 

const routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'ideas'}
    //ToDo Add others here abc
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
//ToDO: Add here case common not found page 
export const routedComponents=[];