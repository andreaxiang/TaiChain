/**
 * Created by xiangxue on 17/9/7.
 * Email: xiangxue89@163.com
 */
//原生js实现tab切换
function Tab(ct) {
  this.ct = ct;
  this.init();
  this.bind();
}
Tab.prototype.init = function () {
  this.tabLis = this.ct.querySelectorAll(".tabs>li");
  this.tabPanels = this.ct.querySelectorAll(".content>li");
};

Tab.prototype.bind = function () {
  var _this = this;
  this.tabLis.forEach(function (tabli) {
    tabli.onclick = function (e) {
      var target = e.target;
      var index = [].indexOf.call(_this.tabLis, target);
      _this.tabLis.forEach(function (li) {
        li.classList.remove("active");
      });
      target.classList.add("active");

      _this.tabPanels.forEach(function (panel) {
        panel.classList.remove("active");
      });
      _this.tabPanels[index].classList.add("active");
    };
  });
};

var tab1 = new Tab(document.querySelectorAll(".wrap")[0]);