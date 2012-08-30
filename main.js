function ParentClass() {
    this.counter = 0;
}

ParentClass.prototype.toString = function() {
    return 'I am ParentClass';
}

ParentClass.prototype.valueOf = function() {
    return ++this.counter;
}

function ChildClass() {
    this.__parent.call(this);
}
ChildClass.extends(ParentClass);

ParentClass.prototype.toString = function() {
    return 'I am ChildClass';
}

var c = new ChildClass;
print('c as string: ' + (new String(c)) + '\n');
print('c as value:  ' + (+c) + '\n');
print('c as value:  ' + (+c) + '\n');
print('c as value:  ' + (+c) + '\n');

var str = 'foo %020d %.2f %s %b %o %X %c';
print('JS\' sprintf:  ' + str.sprintf.apply(str, ['2', 1.75643, 'foo', 16, 16, 255, 65]) + '\n');
print('PHP\'s sprintf: ' + global.sprintf(str, '2', 1.75643, 'foo', 16, 16, 255, 65) + '\n');
print('a'.repeat(80) + '\n');

var rows = global.db.query('select * from groups');
if (rows.length) {
	for (var i = 0, row; row = rows[i]; i++) {
		print('Group #' + row.id + ': ' + row.name + ' (' + row.description + ')\n');
	}
}

