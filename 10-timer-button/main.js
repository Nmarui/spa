$(function(){
    var $btn = $('input'),
        ss = 6,
        timer;
    
    timer = setInterval(function(){
        ss--;
        if(ss===0){
            clearInterval(timer);
            $btn.val('同意');
            $btn.removeAttr('disabled')
        }else{
            $btn.val('同意（'+ss+'s)')
        }
    },1000) 

    $btn.click(function(){
        alert('就知道你会同意的！')
    })
})