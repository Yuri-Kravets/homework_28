//"use strict"

let calculator = {
    read(a,b) {
        if(typeof a === 'number' && !isNaN(a)) return 'error';
        if(typeof b === 'number' && !isNaN(b)) return 'error';
        
        this.a = a;
        this.b = b;
    },
    
    sum() {
        if(!this.a && !this.b) throw new Error('error');
        return this.a + this.b
        
      },
    
    mul() {
        if(!this.a && !this.b) throw new Error('error');
        return this.a * this.b
      }
    };
    
calculator.read(10,12);
alert(calculator.sum());
alert(calculator.mul());
