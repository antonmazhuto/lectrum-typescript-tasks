interface EmitterType{
    events: {},
    on(type: string, handler: () => void): object,
    trigger(event: object, args: Array<object>): object,
    _dispatch(event: object, args: Array<object>): object
    off(type: string, handler: () => void): object
    _offByHandler(): object
    _offByType(type: string): object
    _offAll(): object
}
interface EmitterConstructor {
    new(events: object): EmitterType
    prototype: EmitterType
}

const Em = function (this: EmitterType) {
    this.events = events
} as Function as EmitterConstructor;

Em.prototype.on = function () {
    return this
}

Em.prototype.off = function() {return this._offByHandler(type, handler);}

Em.prototype.trigger = function () { return this._dispatch(event, args ) }

Em.prototype._dispatch = function () { return this }

Em.prototype._offByType = function () { return this }

Em.prototype._offAll = function () {return this}

var emitter: EmitterType | {} = {};

function Emitter() {
    var e = Object.create(emitter);
    e.events = {};
    return e;
}

function Event_(type) {
    this.type = type;
    this.timeStamp = new Date();
}


Emitter.Event = Event_;
Emitter.mixin = function(obj, arr){
    var emitter = new Emitter_();
    arr.map(function(name){
        obj[name] = function(){
            return emitter[name].apply(emitter, arguments);
        };
    });
};
