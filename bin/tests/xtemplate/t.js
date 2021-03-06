/*
  Generated by kissy-xtemplate.*/
KISSY.add("tests/t", function () {
    return function anonymous(scopes, option) {
        var buffer = "",
            S = KISSY,
            escapeHTML = S.escapeHTML,
            log = S.log,
            error = S.error,
            commands = option.commands,
            eachCommand = commands["each"],
            withCommand = commands["with"],
            ifCommand = commands["if"],
            setCommand = commands["set"],
            includeCommand = commands["include"],
            subTpls = option.subTpls;
        var getProperty = function (e, a) {
            if (!a) return !1;
            var e = e.split("."),
                d = e.length,
                b, f = a;
            for (b = 0; b < d; b++) {
                if (!(e[b] in f)) return !1;
                f = f[e[b]]
            }
            return [f]
        };
        buffer += "<div>\r\n    ";
        var id0;
        var option1 = {
            commands: commands,
            subTpls: subTpls
        };
        var command2;
        command2 = commands["title3"];
        if (command2) {
            try {
                id0 = command2(scopes, option1);
            } catch (e) {
                error(e.message + ": 'title3' at line 2");
            }
        } else {
            var tmp3 = getProperty("title3", scopes[0]);
            if (tmp3 === false) {
                log("can not find property: 'title3' at line 2", "warn");
                id0 = "";
            } else {
                id0 = tmp3[0];
            }
        }
        buffer += escapeHTML(id0 + "");
        buffer += "    \r\n    \r\n    \r\n</div>";
        return buffer; //@ sourceURL=t-tpl.js
    };
});