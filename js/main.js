/**
 * Created by gebb on 2018/8/10.
 */
$('.start-btn').on('click',function(){
    "use strict";
    $('.scene-start').hide();
    $('.scene-con').show();
})
//页面初始化
$('.tool-nav-option').eq(0).addClass('active');
$('.tool-option-cons  .tool-option-con').eq(0).addClass('active');
$('.scene-room')

var isMan=true;
$('.tool-nav-option').on('click',function(){
    "use strict";
    var index=$(this).index();
    console.log(index)
    $('.tool-nav-option').removeClass('active')
    $(this).addClass('active');
    $('.tool-option-cons  .tool-option-con').removeClass('active');
    $('.tool-option-cons  .tool-option-con').eq(index).addClass('active')
    $('.person-icon').show();
    $('.person-set').hide()
})
$('.person-icon li').on('click',function(){
    $('.person-icon').hide();
    $('.person-set').show();
    $('.set-nav li').eq(0).addClass('active');
    console.log($(this).index())
    if($(this).index()==0){
        isMan=true
        $('.set-con .man-set').show();
        $('.set-con .woman-set').hide();
        $('.set-con .man-set-con').eq(0).addClass('active');
    }else{
        isMan=false
        $('.set-con .man-set').hide();
        $('.set-con .woman-set').show();
        $('.set-con .woman-set-con').eq(0).addClass('active');
    }
})
$('.set-nav li').on('click',function(){
    "use strict";
    var index=$(this).index();
    $('.set-nav li').removeClass('active');
    $(this).addClass('active');
    if(isMan){
        $('.set-con .man-set-con').removeClass('active')
        $('.set-con .man-set-con').eq(index).addClass('active');
    }else{
        console.log(index)
        $('.set-con .woman-set-con').removeClass('active')
        $('.set-con .woman-set-con').eq(index).addClass('active');
    }
})
