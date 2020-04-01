
$(function() {
    var e = new BMap.Map("main"),
    t = new BMap.Point(114.529963,38.003679);
    e.centerAndZoom(t, 25),
    e.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })),
    e.enableScrollWheelZoom(!0),
    e.setMapType(BMAP_HYBRID_MAP);
    var a = new BMap.Marker(t,{
        title: "我的位置"
    });
    a.setAnimation(BMAP_ANIMATION_BOUNCE),
    e.addOverlay(a);
    var n = new BMap.InfoWindow(
        '<div style="width: 250px"><p>时间：每天<br>地点：505 教室</p><a href="https://github.com/luyishuang" target="_blank"></a></div>'
        ,{
        width: 230,
        height: 100,
        title: "<strong>我的位置</strong>"
    });
    a.openInfoWindow(n),
    a.addEventListener("click", function() {
        e.openInfoWindow(n, t)
    })
});