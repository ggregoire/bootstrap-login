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

	el.append('<' + html + ' class="form-inline" ' + (!options.ajax ? 'method="' + options.method + '" action="' + options.action + '"' : '') + ' />');

	var block = el.children(html).css('margin-top', '5px');

	for (var i = 0, length = options.fields.length; i < length; i++) {
		var field = fields[options.fields[i]];
			field.placeholder = !options.placeholders ? field.placeholder : options.placeholders[i];
		var name = field.placeholder.toLowerCase();

		if (options.icons) {
			block.append('<div class="input-prepend"><span class="add-on"><i class="' + field.icon + '"></i></span><input type="text" id="login-' + name + '" name="login-' + name + '" class="span2" placeholder="' + field.placeholder + '"></div>');
		} else {
			block.append('<input type="text" id="login-' + name + '" name="login-' + name + '" class="span2" placeholder="' + field.placeholder + '">').children('input').css('margin-bottom', '5px');
		}
	}

	if (options.cookie) {
		block.append('<label class="checkbox"><input type="checkbox"> Remember me</label>');
	}

	block.append('<button type="submit" class="btn btn-' + options.color + '">Login</button>').children('button').css('margin-top', '0').css('margin-bottom', !options.icons ? '5px': '');
	block.children().css('margin-right', '5px')

};