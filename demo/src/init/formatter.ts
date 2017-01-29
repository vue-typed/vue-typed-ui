var prettyHtml = require('js-beautify').html;
var prettyTs = require('js-beautify').js_beautify;
var prettyOpt = {
	brace_style: 'collapse-preserve-inline',
	indent_with_tabs: false,
	indent_size: 2,
	wrap_line_length: true,
	indent_inner_html: true,
	end_with_newline: true,
	break_chained_methods: true
}


export class Format {
	static ts(src: string) {
		src = src
			.replace(/import[\s]{(.*)Options(.*)}/gm, (s) => {
				return s.replace(/Options/, 'Component');
			})
			.replace(/import[\s]{(.*)Virtual(.*)}/gm, (s) => {
				return s.replace(/Virtual[\s],/, '').replace(/,[\s]Virtual/, '')
			})
			.replace(/@Options/, '@Component')
			.replace(/extends Virtual<Vue>\(\)/, 'extends Vue')
			.replace(/require\('.\/example.pug\'\)\(\)/gm, "require('./index.html')")
			.replace(/import(.*)src\/index['|"]/gm, (s)=>{
				return s.replace(/\sfrom\s(.*)index['|"]/gm, ' from \'vue-typed-ui\'');
			})

		// return src;
		return prettyTs(src, prettyOpt);
	}

	static html(src: string) {
		let html = prettyHtml(src, prettyOpt)
		return `<!-- ./index.html -->\r\n${html}`;
	}

	static js(src: string) {
		src = src.replace(/template:[\s]"(.*)"/gm, 'template: require(\'./index.html\')')
		src = `Vue.extend(${src})`
		return prettyTs(src, prettyOpt);
	}
}