/**
 * Created by rost on 21.03.15.
 */
var a = function () {
    var name = '@rostowner';
    var self = {
        getName: function () {
            return name;
        }
    };
    return self;
};

console.log('my acc: ', a.name);