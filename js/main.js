
import {Building} from './modules/Building.js';
import { AbstractForm } from './modules/AbstractForm.js';
import { Soleil } from './modules/Soleil.js';
import { Nuage } from './modules/Nuage.js';

var cwPrev = null
var chPrev = null

function clearCanvas() {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  if (cwPrev) {
    ctx.clearRect(0, 0, cwPrev, chPrev)
  }
  const cw = c.width = window.innerWidth
  const ch = c.height = window.innerHeight // - 80;

  console.log("window.innerHeight : " + window.innerHeight);

  cwPrev = cw
  chPrev = ch
}

/**
 * Dessine tous les objets dans le canvas
 * @param forms tableau d'objets de type AbstractForm
 * @private
 */
function _drawForms(forms) {
  const c = document.getElementById('sceneryCanvas')
  const ctx = c.getContext("2d");

  clearCanvas()
  console.log("forms :" + JSON.stringify(forms))

  // draw all forms by looping over them
  forms.forEach(form => form.draw(ctx))
}


/**
 * construit les différentes formes du paysage, en appelant la méthode statique
 * buildForms de chacune des classes
 *
 * @return {Object[]}
 */
function buildForms() {
  let forms = AbstractForm.buildForms()
  forms = forms.concat(Building.buildForms())
  forms = forms.concat(Soleil.buildForms())
  forms = forms.concat(Nuage.buildForms())

  // à compléter/modifier
  // etc. pour chacune de vos classes
  return forms
}

/**
 *  dessine uniquement la forme passée dont le nom est reçu en paramètre
 * @param whichForm (si on peut le faire en dynamaique, je suis preneur, style passer la classe au lieu de son nom)
 */
function drawThisForm(whichForm) {

  if (whichForm === 'Building') {
  _drawForms(Building.buildForms())
}
  else if(whichForm === 'Soleil') {
    _drawForms(Soleil.buildForms())
  }
  else if(whichForm === 'Nuage') {
    _drawForms(Nuage.buildForms())
  }
}

function drawAllForms() {
  _drawForms(buildForms())
}

// accroche des fonctions du module au document courant (pour être appelées ensuite)
document.drawForm = drawThisForm
document.drawAllForms = drawAllForms
document.addEventListener('DOMContentLoaded', document.drawAllForms)

