//     (c) 2012 Viraj Sanghvi 
//     underscore-eval-string is freely distributable under the MIT license.

_.mixin({

    /**
     * Takes a string and evaluates it in some context.
     * This is helpful for translating something like 'om.function',
     * to the actual function.
     *
     * @param {String} name String to evaluate
     * @param {Object} context Context to evaluate under (defaults to window)
     * @returns {Object} result of evaulation
     */
    evalString: function (name, context) {
        context = context || window;
        var args = Array.prototype.slice.call(arguments).splice(2);
        var namespaces = name.split(".");
        var obj = namespaces.pop();
        for(var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[obj];
    }

});

