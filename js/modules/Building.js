import {AbstractForm} from './AbstractForm.js';

class Building extends AbstractForm{
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
        ctx.rect(this.x, new_y, this.width, this.height)

        ctx.fillStyle = this.fillColor

        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()        
        

      }

      /**
       * premier building
       */

       building1(){
           const building1= new Building(600,65,50,300,'red','black',2,true)
           return building1
       }

       building2(){
        const building2= new Building(this.x=Math.random(),65,this.width=Math.random(),this.height=Math.random(),'red','black',2,true)
        return building2
    }
  

    
    /** 
     * dessine l'objet 
     */
    static buildForms() {
        const bld = new Building()
        let forms = []
        forms.push(
            bld.building1()
            )
            forms.push(
              bld.building2()
              )
        const builds = forms
        return builds
    }


}

export {Building}