import { _HeaderBase } from './_base';
import { Component, Prop } from 'vue-typed';

abstract class HeaderBase extends _HeaderBase {
	preRender(ch, tag, sub?) {
		var css = sub ? 'sub' : 'ui';
		return ch(tag, {
			'class': css + ' header'
		}, this.$slots['default']);
	}
}

@Component()
export class Header extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'div')
	}
}
@Component()
export class SubHeader extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'div', true)
	}
}
@Component()
export class H1 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h1')
	}
}
@Component()
export class H2 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h2')
	}
}
@Component()
export class H3 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h3')
	}
}
@Component()
export class H4 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h4')
	}
}
@Component()
export class H5 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h5')
	}
}