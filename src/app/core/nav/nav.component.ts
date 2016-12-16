import { Component, OnInit,ViewContainerRef,EventEmitter,Output } from '@angular/core';
import {MdDialog,MdDialogConfig,MdDialogRef} from '@angular/material';

import { ThemesComponent } from './../themes/themes.component';

class MenuItem{
    constructor(public caption: string, public link: any[]){

    }
}

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like change the application theme???</label>
     <md-card>
      <md-radio-group name="more_options" [(ngModel)]="favoriteTheme">
        <md-radio-button *ngFor="let theme of themeOptions" name="more_options" [value]="theme">
        {{theme}}
        </md-radio-button>
       </md-radio-group>
        <p>Your favorite theme is: {{favoriteTheme}}</p>
      </md-card>
      <button type="button" (click)="dialogRef.close(favoriteTheme)">Close Dialog</button>
      `
})
export class SettingsDialog {
    themeOptions:string[]=[
    'deeppurple-amber',
    'indigo-pink',
    'dark-theme'  ,
    'purple-green'  
    ];
    favoriteTheme: string = 'deeppurple-amber';

    constructor(public dialogRef: MdDialogRef<SettingsDialog>){

    }
}


@Component({
    selector:'idea-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    menuItems: MenuItem[];
    dialogRef: MdDialogRef<SettingsDialog>;
    selectedTheme:string;
    @Output()
    onThemeChanged= new EventEmitter<string>();

    constructor(public dialog:MdDialog,public vcr:ViewContainerRef){

    }
    ngOnInit(){
        this.menuItems = [
      { caption: 'Ideas', link: ['/ideas'] },
      { caption: 'Login', link: ['/login'] }    
    ];

    if(this.selectedTheme==='')
    {
        this.selectedTheme='deeppurple-amber';
    }
    }

    openThemesDialog(){
        const config = new MdDialogConfig();
        config.viewContainerRef=this.vcr;
       this.dialogRef = this.dialog.open(SettingsDialog,config);

       this.dialogRef.afterClosed().subscribe(result => {
      this.selectedTheme = result;
      this.onThemeChanged.emit(result);
      console.log(this.selectedTheme);
      this.dialogRef = null;
    });
       
    }
} 