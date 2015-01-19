(function(Prism) {

var javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern= /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/gi;

Prism.languages.jsx.tag.inside['attr-value'].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/gi;

Prism.languages.insertBefore('inside', 'attr-value',{
	'script': {
		pattern: /=(\{[\w\W]*?\})/gi,
		inside: {
			'function' : Prism.languages.javascript.function,
			'punctuation': /[={}[\];(),.:]/,
			'keyword':  Prism.languages.javascript.keyword,
		},
		'alias': 'javascript'
	}
}, Prism.languages.jsx.tag);

}(Prism));