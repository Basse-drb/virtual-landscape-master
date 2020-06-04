import {AbstractForm} from './AbstractForm.js';

class Nuage extends AbstractForm{
    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur = false
      ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
      }


     /** 
      * dessiner la forme specifique a la classe
         */
      draw(ctx){
        ctx.save()
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor
        ctx.lineWidth = this.strokeWidth

        const MAX_HEAD = 80
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
        /**
         * methode de construction cercle
         */
        ctx.arc(this.x, new_y, this.width, this.height, 2*Math.PI)

        ctx.fillStyle = this.fillColor

        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()        
        

      }

      /**
       * premier Nuage
       */

      Nuage1(){
            const Nuage1= new Nuage(89,90,40,0,'white','orange',1,false)
            return Nuage1
          }
          
      Nuage2(){
        for(var i=0;i<10;i++){
          var x=random(this.width);
          var y=random(this.height);
            const Nuage2= new Nuage(
              150,200,40,0,'red','orange',2,false)
                 
            return Nuage2
          }
        }
           
          
          
         
      

    /** 
     * dessine l'objet 
     */
    static buildForms() {
        const bld = new Nuage()
        let forms = []
        forms.push(
          bld.Nuage1()
        )
        forms.push(
          bld.Nuage2()
        )
        
            
        const builds = forms
        return builds
    }


}

export {Nuage}