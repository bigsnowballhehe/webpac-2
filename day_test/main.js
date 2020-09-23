export default {
    name: "Navigation",
    data() {
        return {
            navList: [
                { name: "竞猜大厅", id: "quizhall" },
                { name: "竞猜记录", id: "quizrecord" },
                { name: "历史赛事", id: "quizHistory" },
                { name: "我的竞猜", id: "quizMine" },
                { name: "排行榜", id: "quizRank" },
                { name: "玩法", id: "quizRule" }
            ],
            curindex: 0
        };
    },
    mounted() {
        this.initScroll();
    },
    methods: {
        initScroll() {
            let _this = this;
            // 监听页面滚动事件
            window.addEventListener('scroll', function() {
                var removeClass = function(obj, cls) {
                    if (obj.className == cls) {
                        obj.className = "";
                    }
                }
                var addClass = function(obj, cls) {
                    if (obj.className != cls) {
                        obj.className = cls;
                    }
                }

                let pos = document.documentElement.scrollTop;
                if (pos > 300) {
                    _this.isVisibleNav = true;
                } else {
                    _this.isVisibleNav = false;
                }
                // 获取全部导航dom与元素dom
                var navList = document.querySelector("#js-nav").querySelectorAll("li");
                var items = document.querySelector("#js-content").querySelectorAll(".item");
                // 滚动后遍历元素，如果页面滚动位置大于元素的位置，赋值给变量
                var currentId = "";
                for (var i = 0; i < items.length; i++) {
                    var _item = items[i];
                    var _itemTop = _item.offsetTop;
                    if (pos > _itemTop - 200) {
                        currentId = _item.id;
                    } else {
                        break;
                    }
                }
                // 如果已赋值了变量，进行匹配，如果匹配则添加class其他删除
                if (currentId) {
                    for (var j = 0; j < navList.length; j++) {
                        var _navItem = navList[j];
                        var _navId = _navItem.getAttribute('data-id');
                        if (_navId != currentId) {
                            removeClass(_navItem, "cur");
                        } else {
                            addClass(_navItem, "cur");
                        }
                    }
                }
            })
        }
    }
};