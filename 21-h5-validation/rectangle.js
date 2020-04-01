$(function () {
    var $width = $('#width'),
        $height = $('#height'),
        $perimeter = $('#perimeter'),
        $form = $('form'),
        $area = $('#area');

    $form.submit(function (e) {
        e.preventDefault();

        var w = Number($width.val()),
            h = Number($height.val());

        var p = roundFractional(2 * (w + h), 2),
            a = roundFractional(w * h, 2);

        $perimeter.val(p);
        $area.val(a);
    });

    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }

});