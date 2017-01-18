import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
declare var $:any;
import initFixedPlugin = require('../assets/js/initFixedPlugin.js');


@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(){
        initFixedPlugin();
        $.getScript('../assets/js/initMenu.js');
    }
}
