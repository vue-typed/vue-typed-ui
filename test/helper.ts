import * as chaiDom from 'chai-dom'
import * as chai from 'chai';

chai.use(chaiDom);

/*

chai.use((chai, utils) => {
	function elToString(el) {
    var desc
    if (el instanceof NodeList) {
      if (el.length === 0) return 'empty NodeList'
      desc = Array.prototype.slice.call(el, 0, 5).map(elToString).join(', ')
      return el.length > 5 ? desc + '... (+' + (el.length - 5) + ' more)' : desc
    }
    if (!(el instanceof HTMLElement)) {
      return String(el)
    }

    desc = el.tagName.toLowerCase()
    if (el.id) {
      desc += '#' + el.id
    }
    if (el.className) {
      desc += '.' + String(el.className).replace(/\s+/g, '.')
    }
    Array.prototype.forEach.call(el.attributes, function(attr) {
      if (attr.name !== 'class' && attr.name !== 'id') {
        desc += '[' + attr.name + (attr.value ? '="' + attr.value + '"]' : ']')
      }
    })
    return desc
  }

	var flag = utils.flag
	chai.Assertion.addMethod('classes', function (...classes: string[]) {
		var el = flag(this, 'object')
		var regex = classes.join('|');
		this.assert(
			el.className.match(RegExp(regex, 'g')).length == classes.length,
			'expected ' + elToString(el) + ' to have class #{exp}',
      'expected ' + elToString(el) + ' not to have class #{exp}',
			classes.join(', ')
		)
	})
})
*/