var intDiff = 10;//倒计时总秒数量
var index = 1;
var timu = [];
var fenshu = 0;

function timer(intDiff){
    var intval =window.setInterval(function(){
    var hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        hour = Math.floor(intDiff / (60 * 60));
        minute = Math.floor(intDiff / 60) -  (hour * 60);
        second = Math.floor(intDiff) -  (hour * 60 * 60) - (minute * 60);
    }
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    $('#hour').html(hour);
    $('#minute').html(minute);
    $('#second').html(second);
    intDiff--;
    if (intDiff==0){
       window.clearInterval(intval); 
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
    for (i=1;i<21;i++)
    {
        var question = ""+i+"对手是发多少看见飞蛾，宋金佛额额放假哦饿，说了覅eos金佛饿哦金佛文件哦诉讼法就。"
        var xa = "选项A"+i;
        var xb = "选项B"+i;
        var xc = "选项C"+i;
        var xd = "选项D"+i;
        timu[i]=[question,xa,xb,xc,xd,'C','',false];
    }

    setstate(index);
    settimu(index);
    
    
    var butnum = timu.length;
    for (i=1;i<butnum;i++){
        var text = '';
        text += "<button class='btntimu btn btn-default' type='button' id='timu"+i+"'>"+i+"</button>";
        $('#questionstate').append(text);

    }
    $('#questionstate').append("<button type='button' id='submit2' class='btn btn-default active btn-block btn-info'>交卷</button>");

        
    $('#questionstate').on('click','.btntimu',function(){
        index = parseInt(this.innerText);
        setstate(index);
        settimu(index);

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

    $('input[type=radio][name=answer]').change(function() {
        var answer=this.value;
        var selectid = "#timu"+index;
        timu[index][6]=answer;
        $(selectid).css('background','green');
        if (index!=timu.length-1){
            index++;
            setstate(index);
            settimu(index);           
        }
    }); 
    
    
}); 