/**
 * @type {HTMLElement}
 * @public
 */

var _prev_active;

/**
 * Sets 'active' class to appropriate link
 * 
 * @param {String} link_id    The 'id' attribute of the selected link
 * @property {HTMLElement} prev_active 
 */

function setActive(link_id){

  if (_prev_active != undefined){
    _prev_active.classList.remove('active');
    _prev_active.parentElement.classList.remove('active')
  }

  _prev_active = document.getElementById(link_id);
  _prev_active.classList.add('active');
  _prev_active.parentElement.classList.add('active');
}