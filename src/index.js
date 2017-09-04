import _ from 'lodash'   //引入lodash
import $ from 'jquery'   //引入jquery
require('bootstrap')

function component() {
  //var element = document.createElement('div');
  var element = $('<div></div>')

  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  /*element.html(_.join(['Hello','webpack'], ' '))*/

  //return element;
  return element.get(0);
}

document.body.appendChild(component());
