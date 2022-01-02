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
var combineResolvers = function (props) {
    var Query = {};
    var Mutation = {};
    props.map(function (x) {
        if (x.hasOwnProperty("Query")) {
            Query = __assign(__assign({}, Query), x.Query);
        }
        if (x.hasOwnProperty("Mutation")) {
            Mutation = __assign(__assign({}, Mutation), x.Mutation);
        }
    });
    return { Query: Query, Mutation: Mutation };
};
exports.combineResolvers = combineResolvers;
var mergeSchemas = function (pathfiles) {
    if (pathfiles === void 0) { pathfiles = "graphql/typeDefs/*.gql"; }
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
