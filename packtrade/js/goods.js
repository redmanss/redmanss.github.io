$( document ).ready(function() {
    var proizvoditel = new Array(),
        tip_dvigatelya = new Array(),
        tip_machty = new Array(),
        obem = new Array(),
        shirina_zahvata = new Array(),
        kolichestvo_korpusov = new Array(),
        masInputValue = new Array(),
        masCheckbox = new Array(),
        sort,//параметр сортировки
        strAll = "";//параметр для собирание групы checkBox в строку

    $('.sorting #sort li').click(function(){
        _url = location.href;
        sort = $(this).attr('id');
        if (_url.indexOf('sort=')&&(_url.indexOf('valueCheck=')<0)){
            console.log("сорт первый");
            _url = _url.split('?')[0];
            console.log(_url);
            _url  += (_url.split('?')[1] ? '':'?sort=')+sort;
            console.log(_url);
        }
        if ((_url.indexOf('valueCheck=')>0)&&_url.indexOf('sort=')){
            console.log("сорт второй");
            _url1 = _url.split('&')[0];
            _url2 = _url.split('&')[1];
            _url3 = _url.split('&')[2];
            if (_url3===undefined){
                _url  += (_url.split('?')[1] ? '&sort=':'')+sort;
            }else {
                _url =_url1+'&'+_url2+(_url.split('&')[2] ? '&sort=':'')+sort;;
            }
        }

        location.href = _url;
    });

    function isEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }

    $('.apply').click(function(){//дія при натиснення відправити
        $('.filter .item').each(function(){
            var firstVal = $(this).find(".input-range-reset #old-for").val();
            var secondVal = $(this).find(".input-range-reset #old-to").val();
            var thisID = $(this).attr('id');

            if (typeof(firstVal) != "undefined"){
                var obj = new Object();
                obj.id = thisID;
                obj.min= firstVal;
                obj.max = secondVal;
                if ((obj.min>0) || (obj.max>0)){
                    if (obj.min<1) obj.min=0;
                    if (obj.max<1) obj.max=0;
                    masInputValue.push(obj);
                }
            }else {
            }
        });

        $('#proizvoditel input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            proizvoditel = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(proizvoditel)) {
            proizvoditel.value = proizvoditel.value.slice(0,-1);
            masCheckbox.push(proizvoditel);
        }

        strAll="";

        $('#tip_dvigatelya input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            tip_dvigatelya = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(tip_dvigatelya)) {
            tip_dvigatelya.value = tip_dvigatelya.value.slice(0,-1);
            masCheckbox.push(tip_dvigatelya);
        }

        strAll="";

        $('#tip_machty input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            tip_machty = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(tip_machty)){
            tip_machty.value = tip_machty.value.slice(0,-1);
            masCheckbox.push(tip_machty);
        }

        strAll="";

        $('#obem input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            obem = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(obem)) {
            obem.value = obem.value.slice(0,-1);
            masCheckbox.push(obem);
        }


        strAll="";

        $('#shirina_zahvata input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            shirina_zahvata = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(shirina_zahvata)) {
            shirina_zahvata.value = shirina_zahvata.value.slice(0,-1);
            masCheckbox.push(shirina_zahvata);
        }

        strAll="";

        $('#kolichestvo_korpusov input:checkbox:checked').each(function(){
            strAll += $(this).attr('id')+",";
            kolichestvo_korpusov = {
                id:$(this).attr('data-category'),
                value:strAll,
            };
        });
        if (isEmpty(kolichestvo_korpusov)){
            kolichestvo_korpusov.value = kolichestvo_korpusov.value.slice(0,-1);
            masCheckbox.push(kolichestvo_korpusov);
        }


        var stro = JSON.stringify(masInputValue);
        var valueCkeckbox = JSON.stringify(masCheckbox);


        _url = location.href.split('?')[0];
        _url  += (_url.split('?')[1] ? '':'?value=')+stro+'&valueCheck='+valueCkeckbox;
        location.href = _url;


    });

    $('.drop').click(function(){//очищення url після натиснення скинути
        _url = location.href.split('?')[0];
        location.href = _url;
    });

});