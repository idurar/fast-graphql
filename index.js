"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.mergeSchemas = exports.combineResolvers = void 0;
var path = require("path");
var fs = require("fs");
var glob = require("fast-glob");
var combineResolvers = function (resolvers) {
    var Query = {};
    var Mutation = {};
    resolvers.map(function (resolver) {
        if (resolver.hasOwnProperty("Query")) {
            Query = __assign(__assign({}, Query), resolver.Query);
        }
        if (resolver.hasOwnProperty("Mutation")) {
            Mutation = __assign(__assign({}, Mutation), resolver.Mutation);
        }
    });
    return { Query: Query, Mutation: Mutation };
};
exports.combineResolvers = combineResolvers;
var mergeSchemas = function (pathfiles) {
    var schemas = [];
    glob.sync(pathfiles).forEach(function (file) {
        try {
            var data = fs.readFileSync(path.resolve(file), "utf8");
            schemas.push(data);
        }
        catch (err) {
            throw new Error("Oops Error ! Couldn't merge definitions Type , check schemas");
        }
    });
    return schemas;
};
exports.mergeSchemas = mergeSchemas;
