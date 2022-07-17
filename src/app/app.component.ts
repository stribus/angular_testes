import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    val1: string;

    
    public teste3(b){
      //console.log(b)      
    }

    public onkeypress(e){
      
      var key = e.key;
      if(key.match(/\d/g)){
        // console.log(e.key )
        // var v1  = this.val1.replace(/[^\d]/g,"")
        // v1 =v1.concat(e.key)
        // console.log(v1)
      }
    }

    public teste2(e){      
      var key = e.key;
      var keycode = e.keyCode || e.charCode 
      if(key.match(/\d/g)){        
        var v1  = this.val1?.replace(/[^\d]/g,"")||""
        v1 =v1?.concat(key)        
        this.val1 = this.format(v1)
        e.preventDefault();
      }
      if(keycode === 8){
        var v1  = this.val1?.replace(/[^\d]/g,"")||""
        v1 = v1.substring(0,v1.length);
        console.log(v1)
        this.val1 = this.format(v1)
        e.preventDefault();
      }
    }

    public format(unformaVal:string):string{
        var v1 = "00000".concat(unformaVal)
        v1 = v1.replace(/(.*?)(\d{1,3})(\d{1,2})$/g,"$2:$3")
      return v1;
    }


    
}
