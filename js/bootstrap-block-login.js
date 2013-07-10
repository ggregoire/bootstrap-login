$.fn.bootstrapLogin = function (options) {

	var el = $(this),
		fields = {};
		
	fields.username = {
		icon: 'icon-user',
		placeholder: 'Username'
	};

	fields.password = {
		icon: 'icon-lock',
		placeholder: 'Password'
	};

	fields.email = {
		icon: 'icon-envelope',
		placeholder: 'Email'
	};

	options = options || {};
	options.fields = options.fields || ['username', 'password'];
	options.placeholders = options.placeholders || null;
	options.icons = options.icons === false ? false : true;
	options.color = options.color || '';
	options.position = options.position || 'full';
	options.cookie = options.cookie || false;
	options.method = options.http || 'POST';
	options.action = options.action || '';
	options.ajax = options.ajax || false;

	var html = options.ajax ? 'div' : 'form';

	el.append('<' + html + ' class="form-horizontal" ' + (!options.ajax ? 'method="' + options.method + '" action="' + options.action + '"' : '') + ' />');

	el.css({'padding': '5px 6px', 'width': '300px', 'height': 'auto', 'position': 'absolute', 'top': '100px', 'right': '100px', 'background': '#eee', 'border': '1px solid #bbb', 'border-radius': '4px'});

	var block = el.children(html)

	for (var i = 0, length = options.fields.length; i < length; i++) {
		var field = fields[options.fields[i]];

		if (options.placeholders) {
			field.placeholder = options.placeholders[i];
		}

		var name = field.placeholder.toLowerCase();

		if (options.icons) {
			block.append('<div class="control-group input-prepend"><span class="add-on"><i class="' + field.icon + '"></i></span><input type="text" placeholder="' + field.placeholder + '"></div>');
		} else {
			block.append('<div class="control-group"><input class="input-block-level" type="text" placeholder="' + field.placeholder + '"></div>');
		}
	}

	if (options.cookie) {
		block.append('<label class="checkbox"><input type="checkbox"> Remember me</label>');
	}

	block.append('<button type="submit" class="btn ' + (options.position == 'full' ? 'btn-block' : 'pull-' + options.position) + ' btn-' + options.color + '">Login</button>').children('button').css('margin-top', '0');
	el.find('control-group').css({'margin-bottom': '5px'});

};