import { _HeaderBase } from './_base';
import { Options, Prop } from 'vue-typed';
import { IHeader } from '../../../../lib/interface';

abstract class HeaderBase extends _HeaderBase implements IHeader {
	preRender(ch, tag, sub?) {
		var css = sub ? 'sub' : 'ui';
		return ch(tag, {
			'class': css + ' header'
		}, this.$slots['default']);
	}

	target(): JQuery {
		return $(this.$el)
	}
}

@Options()
export class Header extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'div')
	}
}
@Options()
export class SubHeader extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'div', true)
	}
}
@Options()
export class H1 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h1')
	}
}
@Options()
export class H2 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h2')
	}
}
@Options()
export class H3 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h3')
	}
}
@Options()
export class H4 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h4')
	}
}
@Options()
export class H5 extends HeaderBase {
	render(ch) {
		return this.preRender(ch, 'h5')
	}
}