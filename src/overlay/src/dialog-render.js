/**
 * @fileOverview render for dialog
 * @author yiminghe@gmail.com
 */
KISSY.add("overlay/dialog-render", function (S, OverlayRender) {
    function require(s) {
        return S.require("component/uibase/" + s);
    }

    return OverlayRender.extend([
        require("stdmodrender")
    ], {
        createDom: function () {
            var self = this,
                el = self.get("el"),
                id,
                header = self.get("header");
            if (!(id = header.attr("id"))) {
                header.attr("id", id = S.guid("ks-dialog-header"));
            }
            el.attr("role", "dialog")
                .attr("aria-labelledby", id);
            // 哨兵元素，从这里 tab 出去到弹窗根节点
            // 从根节点 shift tab 出去到这里
            el.append("<div " + "t" + "ab" + "index='0'></div>");
        }
    });
}, {
    requires: ['./overlay-render']
});