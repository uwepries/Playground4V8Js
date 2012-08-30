Function.prototype.extends = function (__parent) {
    this.prototype.__proto__ = __parent.prototype;
    this.prototype.__parent = __parent;
}
