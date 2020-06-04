import {AbstractForm} from './AbstractForm.js';

class Soleil extends AbstractForm{
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
        ctx.arc(this.x, new_y, this.width, this.height, 2*Math.PI)

        ctx.fillStyle = this.fillColor

        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()        
        

      }

      /**
       * premier Soleil
       */

       Soleil1(){
           const Soleil1= new Soleil(50,80,40,0,'yellow','orange',2,false)
           return Soleil1
       }

    /** 
     * dessine l'objet 
     */
    static buildForms() {
        const bld = new Soleil()
        let forms = []
        forms.push(
            bld.Soleil1()
            )

        const builds = forms
        return builds
    }


}

export {Soleil}