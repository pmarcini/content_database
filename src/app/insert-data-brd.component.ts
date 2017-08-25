import { Component, AfterViewInit, OnInit } from '@angular/core';

//const url = 'http://yourjavascript.com/8119455187/pasteimage.js';
const url = 'http://yourjavascript.com/9101856772/pasteimage.js';

@Component({
  selector: 'insert-data-brd-comp',
  templateUrl: './html/insert-data-brd.component.html',
  styleUrls: ['./css/insert-data-brd.component.css']
})

export class InsertDataBrdComponent implements AfterViewInit {
    loadAPI: Promise<any>;


  public ngAfterViewInit(){
        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
          
  }

  public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
        console.log(document.getElementsByTagName('head')[0].appendChild(node))
    }
    
}


// https://plnkr.co/edit/clTbNP7MHBbBbrUp20vr?p=info 