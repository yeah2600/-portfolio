var charadate = 
[
    {
    'name' : "アカリ",
    'imgpath' : 'img/akari.PNG',
},
    {
    'name' : "アキノ",
    'imgpath' : 'img/akino.PNG',
},
    {
    'name' : "アンナ",
    'imgpath' : 'img/annna.PNG',
},
    {
    'name' : "アオイ",
    'imgpath' : 'img/aoi.PNG',
},
    {
    'name' : "アユミ",
    'imgpath' : 'img/ayane.PNG',
},
    {
    'name' : "アユミ",
    "imgpath" : 'img/ayumi.PNG',
},
    {
    'name' : "クリスティーナ",
    'imgpath' : 'img/christina.PNG',
},
    {
    'name' : "エリコ",
    'imgpath' : 'img/eriko.PNG',
},
    {
    'name' : "ハツネ",
    'imgpath' : 'img/hatsune.PNG',
},
    {
    'name' : "ヒヨリ",
    'imgpath' : 'img/hiyori.PNG',
},
    {
    'name' : "イオ",
    'imgpath' : 'img/io.PNG',
    },
    {
    'name' : "イリヤ",
    'imgpath' : 'img/iriya.PNG',
},
    {
    'name' : "カオリ",
    'imgpath' : 'img/kaori.PNG',
},
    {
    'name' : "カスミ",
    'imgpath' : 'img/kasumi.PNG',
},
    {
    'name' : "カヤ",
    'imgpath' : 'img/kaya.PNG',
},
    {
    'name' : "コッコロ",
    'imgpath' : 'img/kokkoro.PNG',
},
    {
    'name' : "クロエ",
    'imgpath' : 'img/kuroe.PNG',
},
    {
    'name' : "クルミ",
    'imgpath' : 'img/kurumi.PNG',
},
    {
    'name' : "クウカ",
    'imgpath' : 'img/kuuka.PNG',
},
    {
    'name' : "キャル",
    'imgpath' : 'img/kyaru.PNG',
},
    {
    'name' : "キョウカ",
    'imgpath' : 'img/kyouka.PNG',
},
    {
    'name' : "マヒル",
    'imgpath' : 'img/mahiru.PNG',
},
    {
    'name' : "マホ",
    'imgpath' : 'img/maho.PNG',
},
    {
    'name' : "マコト",
    'imgpath' : 'img/makoto.PNG',
},
    {
    'name' : "マツリ",
    'imgpath' : 'img/matsuri.PNG',
},
    {
    'name' : "ミフユ",
    'imgpath' : 'img/mifuyu.PNG',
},
    {
    'name' : "ミミ",
    'imgpath' : 'img/mimi.PNG',
},
    {
    'name' : "ミサキ",
    'imgpath' : 'img/misaki.PNG',
},
    {
    'name' : "ミサト",
    'imgpath' : 'img/misato.PNG',
},
    {
    'name' : "ミソギ",
    'imgpath' : 'img/misogi.PNG',
},
    {
    'name' : "ミツキ",
    'imgpath' : 'img/mitsuki.PNG',
},
    {
    'name' : "ミヤコ",
    'imgpath' : 'img/miyako.PNG',
},
    {
    'name' : "モニカ",
    'imgpath' : 'img/monica.PNG',
},
    {
    'name' : "ムイミ",
    'imgpath' : 'img/muimi.PNG',
},
    {
    'name' : "ナナカ",
    'imgpath' : 'img/nanaka.PNG',
},
    {
    'name' : "ネネカ",
    'imgpath' : 'img/neneka.PNG',
},
    {
    'name' : "ニノン",
    'imgpath' : 'img/ninon.PNG',
},
    {
    'name' : "ノゾミ",
    'imgpath' : 'img/nozomi.PNG',
},
    {
    'name' : "ペコリーヌ",
    'imgpath' : 'img/pecorine.PNG',
},
    {
    'name' : "レイ",
    'imgpath' : 'img/rei.PNG',
},
    {
    'name' : "リマ",
    'imgpath' : 'img/rima.PNG',
},
    {
    'name' : "リン",
    'imgpath' : 'img/rin.PNG',
},
    {
    'name' : "リノ",
    'imgpath' : 'img/rino.PNG',
},
    {
    'name' : "サレン",
    'imgpath' : 'img/saren.PNG',
},
    {
    'name' : "シノブ",
    'imgpath' : 'img/shinobu.PNG',
},
    {
    'name' : "シオリ",
    'imgpath' : 'img/shiori.PNG',
},
    {
    'name' : "シズル",
    'imgpath' : 'img/shizuru.PNG',
},
    {
    'name' : "スズメ",
    'imgpath' : 'img/suzume.PNG',
},
    {
    'name' : "スズナ",
    'imgpath' : 'img/suzuna.PNG',
},
    {
    'name' : "タマキ",
    'imgpath' : 'img/tamaki.PNG',
},
    {
    'name' : "チカ",
    'imgpath' : 'img/tika.PNG',
},
    {
    'name' : "トモ",
    'imgpath' : 'img/tomo.PNG',
},
    {
    'name' : "ツムギ",
    'imgpath' : 'img/tumugi.PNG',
},
    {
    'name' : "ヨリ",
    'imgpath' : 'img/yori.PNG',
},
    {
    'name' : "ユイ",
    'imgpath' : 'img/yui.PNG',
},
    {
    'name' : "ユカリ",
    'imgpath' : 'img/yukari.PNG',
},
    {
    'name' : "ユキ",
    'imgpath' : 'img/yuki.PNG',
},
    {
    'name' : "ジュン",
    'imgpath' : 'img/zyun.PNG',
}];


$(function(){

    $('#imgdate').addClass('none');

    $('#start-button').on('click', function(){
        $('#imgdate').removeClass('none');
        $('#start').addClass('none');
    });

    //’ランダムに画像を表示
    var randomNum1=(Math.floor(Math.random()*charadate.length));
    var randomNum2

    while(true) {
        randomNum2=(Math.floor(Math.random()*charadate.length));
        if(randomNum1 !==  randomNum2) { break; }
    }

    $('#leftimg').append($('<img>').attr('src',charadate[randomNum1]['imgpath']));
    $('#rightimg').append($('<img>').attr('src',charadate[randomNum2]['imgpath']));
    $('#leftname').append(charadate[randomNum1]['name']);
    $('#rightname').append(charadate[randomNum2]['name']);



    //'subcontentsの設定
    $('#descripion-button').on('click', function(){
        if ($('#descripion').is(':hidden')) {
            $('#descripion').slideDown('slow');
        } else {
            $('#descripion').slideUp('slow');
        }

    });
});
