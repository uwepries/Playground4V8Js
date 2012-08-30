String.prototype.sprintf = function () {
    var args = Array.prototype.slice.call(arguments);
    var basemap = { X: 16, x: 16, o: 8, b: 2 };

    return this.replace(/%(\S)?(\.|0)?(\d*)([dfsXxobc])/g, function() {
        var ret;
        var type = arguments[4];

        switch (type) {
            case 'f':
                ret = (+args.shift()).toFixed(+arguments[3] || 0);
                break;
            case 'd':
                ret = ('' + +args.shift()).lpad(+arguments[3] || 0, arguments[1] || '0');
                break;
            case 's':
                ret = args.shift();
                break;
            case 'X':
            case 'x':
            case 'o':
            case 'b':
                ret = (+args.shift()).toString(basemap[type]);
                if (type == 'X') {
                    ret = ret.toUpperCase();
                }
                break;
            case 'c':
                ret = String.fromCharCode(args.shift());
                break;
        }

        return ret;
    });
};

String.prototype.repeat = function(times) {
    return new Array(times+1).join(this);
};

String.prototype.lpad = function(places, chr) {
    return ((chr || '0').repeat((places + 1)) + this).slice(-places);
};

