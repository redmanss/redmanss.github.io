// oldness

$(function() {
    $( "#slider-range-oldness" ).slider({
        range: true,
        min: 2016,
        max: 2017,
        values: [ 2016, 2017 ],
        slide: function( event, ui ) {
            $( "#old-for" ).val( ui.values[ 0 ] );
            $( "#old-to" ).val( ui.values[ 1 ] );
        }
    });
    $( "#old-for" ).val( $( "#slider-range-oldness" ).slider( "values", 0 ) );
    $( "#old-to" ).val( $( "#slider-range-oldness" ).slider( "values", 1 ) );

    $("input#old-for").change(function(){
        var value1=$("input#old-for").val();
        var value2=$("input#old-to").val();
        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#old-for").val(value1);
        }
        $("#slider-range-oldness").slider("values",0,value1);
    });

    $("input#old-to").change(function(){
        var value1=$("input#old-for").val();
        var value2=$("input#old-to").val();

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#old-to").val(value2);
        }
        $("#slider-range-oldness").slider("values",1,value2);
    });

    $('#old-for, #old-to').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        if(!/\d/.test(keyChar)) return false;
    });
});


// oldness-all

$(function() {
	$( "#slider-range-oldness-all" ).slider({
		range: true,
		min: 2001,
		max: 2018,
		values: [ 2005, 2010 ],
		slide: function( event, ui ) {
			$( "#old-for-all" ).val( ui.values[ 0 ] );
			$( "#old-to-all" ).val( ui.values[ 1 ] );
		}
	});
	$( "#old-for-all" ).val( $( "#slider-range-oldness-all" ).slider( "values", 0 ) );
	$( "#old-to-all" ).val( $( "#slider-range-oldness-all" ).slider( "values", 1 ) );

	$("input#old-for-all").change(function(){
		var value1=$("input#old-for-all").val();
		var value2=$("input#old-to-all").val();
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#old-for-all").val(value1);
		}
		$("#slider-range-oldness-all").slider("values",0,value1);
	});

	$("input#old-to-all").change(function(){
		var value1=$("input#old-for-all").val();
		var value2=$("input#old-to-all").val();

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#old-to-all").val(value2);
		}
		$("#slider-range-oldness-all").slider("values",1,value2);
	});

	$('#old-for-all, #old-to-all').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar)) return false;
	});
});





// operating-time

$(function() {
	$( "#slider-range-operating-time" ).slider({
		range: true,
		min: 0,
		max: 15000,
		values: [ 1500, 10500 ],
		slide: function( event, ui ) {
			$( "#operating-time-for" ).val( ui.values[ 0 ] );
			$( "#operating-time-to" ).val( ui.values[ 1 ] );
		}
	});
	$( "#operating-time-for" ).val( $( "#slider-range-operating-time" ).slider( "values", 0 ) );
	$( "#operating-time-to" ).val( $( "#slider-range-operating-time" ).slider( "values", 1 ) );

	$("input#operating-time-for").change(function(){
		var value1=$("input#operating-time-for").val();
		var value2=$("input#operating-time-to").val();
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#operating-time-for").val(value1);
		}
		$("#slider-range-operating-time").slider("values",0,value1);
	});

	$("input#operating-time-to").change(function(){
		var value1=$("input#operating-time-for").val();
		var value2=$("input#operating-time-to").val();

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#operating-time-to").val(value2);
		}
		$("#slider-range-operating-time").slider("values",1,value2);
	});

	$('#operating-time-for, #operating-time-to').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar)) return false;
	});
});