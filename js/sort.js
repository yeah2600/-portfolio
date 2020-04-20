$(function(){

    $('#imgdata').addClass('none');
    $('.sortcontent').addClass('none');


    $('#start-button').on('click', function(){
        $('#count').append($('<p>' + n + '</p>'));
        $('#imgdata').removeClass('none');
        $('.sortcontent').removeClass('none');
        $('#start').addClass('none');
    });

    var n = 1;
    var i;
    var charaData = new Array();

    //'使用するデータの導入
    for(i in charas){
        if(charas[i].flag){
            charaData.push(charas[i]);
        }
    };

    //’ランダムに画像を表示
    var randomNum1=(Math.floor(Math.random()*charaData.length));
    var randomNum2

    while(true) {
        randomNum2=(Math.floor(Math.random()*charaData.length));
        if(randomNum1 !==  randomNum2) { break; }
    };

    $('#leftimg').append($('<img>').attr('src',charaData[randomNum1]['img']));
    $('#leftname').append($('<p>' + charaData[randomNum1]['name'] + '</p>'));
    $('#rightimg').append($('<img>').attr('src',charaData[randomNum2]['img']));
    $('#rightname').append($('<p>' + charaData[randomNum2]['name'] + '</p>'));

    function sortList(a,b){
        const groupA = a.num;
        const groupB = b.num;

        let sortimage = 0;
        if(groupA > groupB){
            sortimage = 1;
        }else if(groupB > groupA){
            sortimage = -1;
        }
        return sortimage * -1;
    }

    var cha = charaData.sort(sortList);
    console.log(cha);

    //'subcontentsの設定
    $('#descripion-button').on('click', function(){
        if ($('#descripion').is(':hidden')) {
            $('#descripion').slideDown('slow');
        } else {
            $('#descripion').slideUp('slow');
        }

    });
});

