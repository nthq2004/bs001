var intDiff = 1800;//倒计时总秒数量
var index = 1;
var timu = [];
var fenshu = 0;

function timer(intDiff){
    var intval =window.setInterval(function(){
        // setInterval有两个参数，一个函数，然后是时间间隔
    var hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        hour = Math.floor(intDiff / (60 * 60));
        // 调用javascript数学库Math.floor
        minute = Math.floor(intDiff / 60) -  (hour * 60);
        second = Math.floor(intDiff) -  (hour * 60 * 60) - (minute * 60);
    }
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    // 字符串+数字
    $('#hour').html(hour);
    $('#minute').html(minute);
    $('#second').html(second);
    intDiff--;
    if (intDiff==-1){
       window.clearInterval(intval); 
    //    setInterval返回一个ID，以此ID可以调用clearInterval
       tijiao();
    }
    }, 1000);
}

function setstate(index){
    if (index == timu.length-1){
        $('#submit').show();
        $('#nexttimu').attr('disabled',true);
    }
    else if (index ==1){
        $('#submit').hide();
        $('#prevtimu').attr('disabled',true);
    }
    else{
        $('#submit').hide();
        $('#prevtimu').attr('disabled',false);
        $('#nexttimu').attr('disabled',false);
    }

   
}

function settimu(index){

    $('#questionbody').html(timu[index][0]);
    $('#answerA').html('A、'+timu[index][1]);
    $('#answerB').html('B、'+timu[index][2]);
    $('#answerC').html('C、'+timu[index][3]);
    $('#answerD').html('D、'+timu[index][4]);

    var yourans = timu[index][6];
    $('input[type=radio][name=answer]').each(function(index,domEle){
        // 标签+属性选择符
        if (domEle.value == yourans){
            domEle.checked=true;
        }
        else{
            domEle.checked=false;
        }
        
    });
    
 
}

function tijiao(){
    var butnum = timu.length;
    for (i=1;i<butnum;i++){
       if (timu[i][5] ==  timu[i][6])
       {
           fenshu++;
       }
    }
    var jieguo = "您的分数是"+fenshu;
    alert(jieguo);
    fenshu=0;
}

$(function(){
    timer(intDiff);

    var i;
    for (i=1;i<101;i++)
    {
        var question = ""+i+"对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾，宋金佛额额放假哦饿，说了覅eos金佛饿哦金佛文件哦诉讼法就。"
        var xa = "选项A对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾"+i;
        var xb = "选项B对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾"+i;
        var xc = "选项C对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾"+i;
        var xd = "选项D对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾对手是发多少看见飞蛾"+i;
        timu[i]=[question,xa,xb,xc,xd,'C','',false];
    }

    setstate(index);
    settimu(index);
    
    
    var butnum = timu.length;
    for (i=1;i<butnum;i++){
        var text = '';
        text += "<button class='btntimu btn btn-default' type='button' id='timu"+i+"'>"+i+"</button>";
        $('#questionstate').append(text);
        // 添加的文本是html代码，可以动态添加元素，为每一个元素设置类

    }
    $('#questionstate').append("<button type='button' id='submit2' class='btn btn-default active btn-block btn-info'>交卷</button>");
    
        // 为一组按钮添加时间，通过属性或文本获取index
    $('#questionstate').on('click','.btntimu',function(){
        index = parseInt(this.innerText);
        setstate(index);
        settimu(index);
    // 可以为动态元素添加共同的响应函数，通过ID或者value或者innerText来区分
    });
        
    $('#attention').click(function(){
        var att = timu[index][7];
        timu[index][7]=!att;
        var selectid = "#timu"+index;
        if(!att){
            $(selectid).css({color:"red", "font-size":"20px"});
        }
        else{
            $(selectid).css({color:"black", "font-size":"15px"});
        }
        
    });

    $('#nexttimu').click(function(){
        // alert("nexttimu");
        index++;
        setstate(index);
        settimu(index);
    });

    $('#prevtimu').click(function(){
        // alert("nexttimu");
        index--;
        setstate(index);
        settimu(index);
    });


    $('#submit').click(function(){
        tijiao();
    });

    $('#submit2').click(function(){
        tijiao();
    });
    
    // checkbox的点击事件
    $('#zidong').click(function(){

        if($('#zidong').attr('value')==0){
            $('#zidong').attr('value',1);
        }
        else
        {
            $('#zidong').attr('value',0);
        }

    });

    // radio的change事件
    $('input[type=radio][name=answer]').change(function() {
        var answer=this.value;
        var selectid = "#timu"+index;
        // 实现动态选择符
        timu[index][6]=answer;
        $(selectid).css('background','green');
        // $('#questionstate').scrollTop(100);
        // alert($(document).height());
        // $('#questionstate').height(684);
        // alert($('#questionstate').offset().top);

        if ( ($('#zidong').attr('value')==1) && index!=timu.length-1){
            index++;
            setstate(index);
            settimu(index);           
        }
    }); 
//    窗口的滚动事件
//   $(window).scroll(function(){
//     var winpos = $(window).scrollTop();
//     $('#questionbtn').css('margin-top',winpos);
//     $('#questionstate').css('margin-top',winpos);
//   }); 
    
}); 