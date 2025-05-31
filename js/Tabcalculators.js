$(document).ready(function(){
	
    var percent = document.getElementById("Ultra1").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra1").value); 
        var minmoney1 	= [10,25.00,1000.00,50.00,100.00 ];
        var maxmoney1	= [50000,5001.00,8001.00,5001.00,5001.00 ];
        $("#money1").val(minmoney1[0]);
        console.log($("#money1").val(minmoney1[0]));
        
        //Calculator
        function calc(){
            var money1 = parseFloat($("#money1").val());
            switch (percent) {
                case 0:
                    if( (money1 >= 10 && money1 < 9999999999)){
                        var profitDaily1 = money1 / 100 * 0.5;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 500 * 0.5 + money1;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 0.5;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 500 * 0.5;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text('$' + profitDaily1);
                        $("#profitTotal1").text('$' + profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                    //} else if(isNaN(money1) == true) {
                    } if (money1 < 10){
                        $("#profitDaily1").text("Error!");
                        $("#profitTotal1").text("Error!");
                        $("#profitPercent1").text("Error!");
                        $("#profitNet1").text("Error!");
                    }
                    break;
                case 1:
                    if ( money1 >= 10 && money1 <= 799){
    
                        var profitDaily1 = money1 / 100 * 9 ;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        
                        var profitTotal1 = money1 / 100 * 9 * 14 ;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 9  ;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 *  1;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        
                        $("#profitNet1").text('$' + profitNet1);
                        //} else if(isNaN(money1) == true) {
                    } /*if (money1 >= 2001 && money1 <= 3000) {
                        var profitDaily1 = money1 / 100 * 2.5;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 2.5 * 90 + money1;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 2.5;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 2.5 * 90;
                        var profitNet1 = profitNet1.toFixed(2);
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        
                    } if (money1 >= 3001 && money1 < 9999999999) {
                        var profitDaily1 = money1 / 100 * 3;
                        var profitDaily1 = profitDaily1.toFixed(2);
                        var profitTotal1 = money1 / 100 * 3 * 90 + money1;
                        var profitTotal1 = profitTotal1.toFixed(2);
                        var profitPercent1 = 3;
                        var profitPercent1 = profitPercent1.toFixed(2);
                        var profitNet1 = money1 / 100 * 3 * 90;
                        var profitNet1 = profitNet1.toFixed(2);
                        
    
                        $("#profitDaily1").text(profitDaily1);
                        $("#profitTotal1").text(profitTotal1);
                        $("#profitPercent1").text(profitPercent1 + '%');
                        $("#profitNet1").text('$' + profitNet1);
                        
                    
                    }*/ if (money1 < 10) {
                        $("#profitDaily1").text("Min: $10");
                        $("#profitTotal1").text("Min: $10");
                        $("#profitPercent1").text("Min: $10");
                        $("#profitNet1").text("Min: $10");
                    }
                        if (money1 >799){
                        $("#profitDaily1").text("Max: $799");
                        $("#profitTotal1").text("Max: $799");
                        $("#profitPercent1").text("Max: $799");
                        $("#profitNet1").text("Max: $799");
                    }
                    
                    break;
    
            }
        }
        if($("#money1").length){
            calc();
        }
        $("#money1").keyup(function(){
            calc();
        });
    
        $("#Ultra1").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    });
    
    
                    //======   2nt-TAB Calculator =======//
    $(document).ready(function(){
    
        var percent = document.getElementById("Ultra2").value;
            
                    
            var percent =  parseFloat(document.getElementById("Ultra2").value); 
            var minmoney2 	= [800,25.00,1000.00,50.00,100.00 ];
            var maxmoney2	= [1000.00,5001.00,8001.00,5001.00,5001.00 ];
            $("#money2").val(minmoney2[0]);
            console.log($("#money2").val(minmoney2[0]));
            
            //Calculator
            function calc(){
                var money2 = parseFloat($("#money2").val());
                switch (percent) {
                    case 0:
                        if( (money2 >= 10 && money2 < 9999999999)){
                            var profitDaily2 = money2 / 100 * 0.5;
                            var profitDaily2 = profitDaily2.toFixed(2);
                            var profitTotal2 = money2 / 100 * 500 * 0.5 + money2;
                            var profitTotal2 = profitTotal2.toFixed(2);
                            var profitPercent2 = 0.5;
                            var profitPercent2 = profitPercent2.toFixed(2);
                            var profitNet2 = money2 / 100 * 500 * 0.5;
                            var profitNet2 = profitNet2.toFixed(2);
        
                            $("#profitDaily2").text('$' + profitDaily2);
                            $("#profitTotal2").text('$' + profitTotal2);
                            $("#profitPercent2").text(profitPercent2 + '%');
                            $("#profitNet2").text('$' + profitNet2);
                        //} else if(isNaN(money2) == true) {
                        } if (money2 < 10){
                            $("#profitDaily2").text("Error!");
                            $("#profitTotal2").text("Error!");
                            $("#profitPercent2").text("Error!");
                            $("#profitNet2").text("Error!");
                        }
                        break;
                    case 1:
                        if ( money2 >= 800 && money2 <= 1999){
        
                            var profitDaily2 = money2 / 100 * 18 ;
                            var profitDaily2 = profitDaily2.toFixed(2);
                            
                            var profitTotal2 = money2 / 100 * 18 * 10 ;
                            var profitTotal2 = profitTotal2.toFixed(2);
                            var profitPercent2 = 18 ;
                            var profitPercent2 = profitPercent2.toFixed(2);
                            var profitNet2 = money2 / 100 *  1.4;
                            var profitNet2 = profitNet2.toFixed(2);
        
                            $("#profitDaily2").text(profitDaily2);
                            
                            $("#profitTotal2").text(profitTotal2);
                            $("#profitPercent2").text(profitPercent2 + '%');
                            
                            $("#profitNet2").text('$' + profitNet2);
                            //} else if(isNaN(money2) == true) {
                        } /*if (money2 >= 2001 && money2 <= 3000) {
                            var profitDaily2 = money2 / 100 * 2.5;
                            var profitDaily2 = profitDaily2.toFixed(2);
                            var profitTotal2 = money2 / 100 * 2.5 * 90 + money2;
                            var profitTotal2 = profitTotal2.toFixed(2);
                            var profitPercent2 = 2.5;
                            var profitPercent2 = profitPercent2.toFixed(2);
                            var profitNet2 = money2 / 100 * 2.5 * 90;
                            var profitNet2 = profitNet2.toFixed(2);
        
                            $("#profitDaily2").text(profitDaily2);
                            $("#profitTotal2").text(profitTotal2);
                            $("#profitPercent2").text(profitPercent2 + '%');
                            $("#profitNet2").text('$' + profitNet2);
                            
                        } if (money2 >= 3001 && money2 < 9999999999) {
                            var profitDaily2 = money2 / 100 * 3;
                            var profitDaily2 = profitDaily2.toFixed(2);
                            var profitTotal2 = money2 / 100 * 3 * 90 + money2;
                            var profitTotal2 = profitTotal2.toFixed(2);
                            var profitPercent2 = 3;
                            var profitPercent2 = profitPercent2.toFixed(2);
                            var profitNet2 = money2 / 100 * 3 * 90;
                            var profitNet2 = profitNet2.toFixed(2);
                            
        
                            $("#profitDaily2").text(profitDaily2);
                            $("#profitTotal2").text(profitTotal2);
                            $("#profitPercent2").text(profitPercent2 + '%');
                            $("#profitNet2").text('$' + profitNet2);
                            
                        
                        }*/ if (money2 < 800) {
                            $("#profitDaily2").text("Min: $800");
                            $("#profitTotal2").text("Min: $800");
                            $("#profitPercent2").text("Min: $800");
                            $("#profitNet2").text("Min: $800");
                        }
                            if (money2 >1999){
                            $("#profitDaily2").text("Max: $1999");
                            $("#profitTotal2").text("Max: $1999");
                            $("#profitPercent2").text("Max: $1999");
                            $("#profitNet2").text("Max: $1999");
                        }
                        
                        break;
        
                }
            }
            if($("#money2").length){
                calc();
            }
            $("#money2").keyup(function(){
                calc();
            });
        
            $("#Ultra2").on('change', function() {
                percent = parseFloat(this.value);
                calc();
            })
        });
                    
                    //======    2nd-TAB Calculator =======//
                    
        //======    3rd-TAB Calculator =======//
                    
    $(document).ready(function(){
        
    var percent = document.getElementById("Ultra3").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra3").value); 
        var minmoney3 	= [2000,25.00,1000.00,50.00,100.00 ];
        var maxmoney3	= [50000.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money3").val(minmoney3[0]);
        console.log($("#money3").val(minmoney3[0]));
        
        //Calculator
        function calc(){
            var money3 = parseFloat($("#money3").val());
            switch (percent) {
                case 0:
                    if( (money3 >= 10 && money3 < 9999999999)){
                        var profitDaily3 = money3 / 100 * 0.5;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        var profitTotal3 = money3 / 100 * 500 * 0.5 + money3;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 0.5;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 * 500 * 0.5;
                        var profitNet3 = profitNet3.toFixed(2);
    
                        $("#profitDaily3").text('$' + profitDaily3);
                        $("#profitTotal3").text('$' + profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        $("#profitNet3").text('$' + profitNet3);
                    //} else if(isNaN(money3) == true) {
                    } if (money3 < 10){
                        $("#profitDaily3").text("Error!");
                        $("#profitTotal3").text("Error!");
                        $("#profitPercent3").text("Error!");
                        $("#profitNet3").text("Error!");
                    }
                    break;
                case 1:
                    if ( money3 >= 2000 && money3 <= 4999){
    
                        var profitDaily3 = money3 / 100 * 150 ;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        
                        var profitTotal3 = money3 / 100 *150 * 07 ;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 150  ;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 *  2;
                        var profitNet3 = profitNet3.toFixed(2);
    
                        $("#profitDaily3").text(profitDaily3);
                        
                        $("#profitTotal3").text(profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        
                        $("#profitNet3").text('$' + profitNet3);
                        //} else if(isNaN(money3) == true) {
                    } /*if (money3 >= 2001 && money3 <= 3000) {
                        var profitDaily3 = money3 / 100 * 2.5;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        var profitTotal3 = money3 / 100 * 2.5 * 90 + money3;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 2.5;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 * 2.5 * 90;
                        var profitNet3 = profitNet3.toFixed(2);
    
                        $("#profitDaily3").text(profitDaily3);
                        $("#profitTotal3").text(profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        $("#profitNet3").text('$' + profitNet3);
                        
                    } if (money3 >= 3001 && money3 < 9999999999) {
                        var profitDaily3 = money3 / 100 * 3;
                        var profitDaily3 = profitDaily3.toFixed(2);
                        var profitTotal3 = money3 / 100 * 3 * 90 + money3;
                        var profitTotal3 = profitTotal3.toFixed(2);
                        var profitPercent3 = 3;
                        var profitPercent3 = profitPercent3.toFixed(2);
                        var profitNet3 = money3 / 100 * 3 * 90;
                        var profitNet3 = profitNet3.toFixed(2);
                        
    
                        $("#profitDaily3").text(profitDaily3);
                        $("#profitTotal3").text(profitTotal3);
                        $("#profitPercent3").text(profitPercent3 + '%');
                        $("#profitNet3").text('$' + profitNet3);
                        
                    
                    }*/ if (money3 < 2000) {
                        $("#profitDaily3").text("Min: $2000");
                        $("#profitTotal3").text("Min: $2000");
                        $("#profitPercent3").text("Min: $2000");
                        $("#profitNet3").text("Min: $2000");
                    }
                        if (money3 >4999){
                        $("#profitDaily3").text("Max: $4999");
                        $("#profitTotal3").text("Max: $4999");
                        $("#profitPercent3").text("Max: $4999");
                        $("#profitNet3").text("Max: $4999");
                    }
                    
                    break;
    
            }
        }
        if($("#money3").length){
            calc();
        }
        $("#money3").keyup(function(){
            calc();
        });
    
        $("#Ultra3").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    });
        
        
        //======   4rd-TAB Calculator =======//
        $(document).ready(function(){
        
    var percent = document.getElementById("Ultra4").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra4").value); 
        var minmoney4 	= [5000,25.00,1000.00,50.00,100.00 ];
        var maxmoney4	= [50000.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money4").val(minmoney4[0]);
        console.log($("#money4").val(minmoney4[0]));
        
        //Calculator
        function calc(){
            var money4 = parseFloat($("#money4").val());
            switch (percent) {
                case 0:
                    if( (money4 >= 10 && money4 < 9999999999)){
                        var profitDaily4 = money4 / 100 * 0.5;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        var profitTotal4 = money4 / 100 * 500 * 0.5 + money4;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 0.5;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNet4 = money4 / 100 * 500 * 0.5;
                        var profitNet4 = profitNet4.toFixed(2);
    
                        $("#profitDaily4").text('$' + profitDaily4);
                        $("#profitTotal4").text('$' + profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        $("#profitNet4").text('$' + profitNet4);
                    //} else if(isNaN(money4) == true) {
                    } if (money4 < 10){
                        $("#profitDaily4").text("Error!");
                        $("#profitTotal4").text("Error!");
                        $("#profitPercent4").text("Error!");
                        $("#profitNet4").text("Error!");
                    }
                    break;
                case 1:
                    if ( money4 >= 5000 && money4 <= 100000){
    
                        var profitDaily4 = money4 / 100 * 300 ;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        
                        var profitTotal4 = money4 / 100 * 300 * 05 ;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 300 ;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNet4 = money4 / 100 *  3.5;
                        var profitNet4 = profitNet4.toFixed(2);
    
                        $("#profitDaily4").text(profitDaily4);
                        
                        $("#profitTotal4").text(profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        
                        $("#profitNet4").text('$' + profitNet4);
                        //} else if(isNaN(money4) == true) {
                    } /*if (money4 >= 2001 && money4 <= 3000) {
                        var profitDaily4 = money4 / 100 * 2.5;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        var profitTotal4 = money4 / 100 * 2.5 * 90 + money4;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 2.5;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNet4 = money4 / 100 * 2.5 * 90;
                        var profitNet4 = profitNet4.toFixed(2);
    
                        $("#profitDaily4").text(profitDaily4);
                        $("#profitTotal4").text(profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        $("#profitNet4").text('$' + profitNet4);
                        
                    } if (money4 >= 3001 && money4 < 9999999999) {
                        var profitDaily4 = money4 / 100 * 3;
                        var profitDaily4 = profitDaily4.toFixed(2);
                        var profitTotal4 = money4 / 100 * 3 * 90 + money4;
                        var profitTotal4 = profitTotal4.toFixed(2);
                        var profitPercent4 = 3;
                        var profitPercent4 = profitPercent4.toFixed(2);
                        var profitNet4 = money4 / 100 * 3 * 90;
                        var profitNet4 = profitNet4.toFixed(2);
                        
    
                        $("#profitDaily4").text(profitDaily4);
                        $("#profitTotal4").text(profitTotal4);
                        $("#profitPercent4").text(profitPercent4 + '%');
                        $("#profitNet4").text('$' + profitNet4);
                        
                    
                    }*/ if (money4 < 5000) {
                        $("#profitDaily3").text("Min: $5000");
                        $("#profitTotal3").text("Min: $5000");
                        $("#profitPercent3").text("Min: $5000");
                        $("#profitNet3").text("Min: $5000");
                    }
                        if (money4 >100000){
                        $("#profitDaily3").text("Max: $100000");
                        $("#profitTotal3").text("Max: $100000");
                        $("#profitPercent3").text("Max: $100000");
                        $("#profitNet3").text("Max: $100000");
                    }
                    
                    break;
    
            }
        }
        if($("#money4").length){
            calc();
        }
        $("#money4").keyup(function(){
            calc();
        });
    
        $("#Ultra4").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    });
    
    
        //======   5th-TAB Calculator =======//
    $(document).ready(function(){
        
    var percent = document.getElementById("Ultra5").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra5").value); 
        var minmoney5 	= [100,25.00,1000.00,50.00,100.00 ];
        var maxmoney5	= [1000.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money5").val(minmoney5[0]);
        console.log($("#money5").val(minmoney5[0]));
        
        //Calculator
        function calc(){
            var money5 = parseFloat($("#money5").val());
            switch (percent) {
                case 0:
                    if( (money5 >= 10 && money5 < 9999999999)){
                        var profitDaily5 = money5 / 100 * 0.5;
                        var profitDaily5 = profitDaily5.toFixed(2);
                        var profitTotal5 = money5 / 100 * 500 * 0.5 + money5;
                        var profitTotal5 = profitTotal5.toFixed(2);
                        var profitPercent5 = 0.5;
                        var profitPercent5 = profitPercent5.toFixed(2);
                        var profitNet5 = money5 / 100 * 500 * 0.5;
                        var profitNet5 = profitNet5.toFixed(2);
    
                        $("#profitDaily5").text('$' + profitDaily5);
                        $("#profitTotal5").text('$' + profitTotal5);
                        $("#profitPercent5").text(profitPercent5 + '%');
                        $("#profitNet5").text('$' + profitNet5);
                    //} else if(isNaN(money5) == true) {
                    } if (money5 < 10){
                        $("#profitDaily5").text("Error!");
                        $("#profitTotal5").text("Error!");
                        $("#profitPercent5").text("Error!");
                        $("#profitNet5").text("Error!");
                    }
                    break;
                case 1:
                    if ( money5 >= 20 && money5 <= 15000){
    
                        var profitDaily5 = money5 / 100 * 8 ;
                        var profitDaily5 = profitDaily5.toFixed(2);
                        
                        var profitTotal5 = money5 / 100 * 8 * 50 ;
                        var profitTotal5 = profitTotal5.toFixed(2);
                        var profitPercent5 = 8  ;
                        var profitPercent5 = profitPercent5.toFixed(2);
                        var profitNet5 = money5 / 100 *  4.5;
                        var profitNet5 = profitNet5.toFixed(2);
    
                        $("#profitDaily5").text(profitDaily5);
                        
                        $("#profitTotal5").text(profitTotal5);
                        $("#profitPercent5").text(profitPercent5 + '%');
                        
                        $("#profitNet5").text('$' + profitNet5);
                        //} else if(isNaN(money5) == true) {
                    } /*if (money5 >= 2001 && money5 <= 3000) {
                        var profitDaily5 = money5 / 100 * 2.5;
                        var profitDaily5 = profitDaily5.toFixed(2);
                        var profitTotal5 = money5 / 100 * 2.5 * 90 + money5;
                        var profitTotal5 = profitTotal5.toFixed(2);
                        var profitPercent5 = 2.5;
                        var profitPercent5 = profitPercent5.toFixed(2);
                        var profitNet5 = money5 / 100 * 2.5 * 90;
                        var profitNet5 = profitNet5.toFixed(2);
    
                        $("#profitDaily5").text(profitDaily5);
                        $("#profitTotal5").text(profitTotal5);
                        $("#profitPercent5").text(profitPercent5 + '%');
                        $("#profitNet5").text('$' + profitNet5);
                        
                    } if (money5 >= 3001 && money5 < 9999999999) {
                        var profitDaily5 = money5 / 100 * 3;
                        var profitDaily5 = profitDaily5.toFixed(2);
                        var profitTotal5 = money5 / 100 * 3 * 90 + money5;
                        var profitTotal5 = profitTotal5.toFixed(2);
                        var profitPercent5 = 3;
                        var profitPercent5 = profitPercent5.toFixed(2);
                        var profitNet5 = money5 / 100 * 3 * 90;
                        var profitNet5 = profitNet5.toFixed(2);
                        
    
                        $("#profitDaily5").text(profitDaily5);
                        $("#profitTotal5").text(profitTotal5);
                        $("#profitPercent5").text(profitPercent5 + '%');
                        $("#profitNet5").text('$' + profitNet5);
                        
                    
                    }*/ if (money5 < 20) {
                        $("#profitDaily5").text("Min: $20");
                        $("#profitTotal5").text("Min: $20");
                        $("#profitPercent5").text("Min: $20");
                        $("#profitNet5").text("Min: $20");
                    }
                        if (money5 >15000){
                        $("#profitDaily5").text("Max: $15000");
                        $("#profitTotal5").text("Max: $15000");
                        $("#profitPercent5").text("Max: $15000");
                        $("#profitNet5").text("Max: $15000");
                    }
                    
                    break;
    
            }
        }
        if($("#money5").length){
            calc();
        }
        $("#money5").keyup(function(){
            calc();
        });
    
        $("#Ultra5").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    });
    
    
    //======   6th-TAB Calculator =======//
    $(document).ready(function(){
        
    var percent = document.getElementById("Ultra6").value;
        
    
        var percent =  parseFloat(document.getElementById("Ultra6").value); 
        var minmoney6 	= [100,25.00,1000.00,50.00,100.00 ];
        var maxmoney6	= [1000.00,5001.00,8001.00,5001.00,5001.00 ];
        $("#money6").val(minmoney6[0]);
        console.log($("#money6").val(minmoney6[0]));
        
        //Calculator
        function calc(){
            var money6 = parseFloat($("#money6").val());
            switch (percent) {
                case 0:
                    if( (money6 >= 10 && money6 < 9999999999)){
                        var profitDaily6 = money6 / 100 * 0.5;
                        var profitDaily6 = profitDaily6.toFixed(2);
                        var profitTotal6 = money6 / 100 * 500 * 0.5 + money6;
                        var profitTotal6 = profitTotal6.toFixed(2);
                        var profitPercent6 = 0.5;
                        var profitPercent6 = profitPercent6.toFixed(2);
                        var profitNet6 = money6 / 100 * 500 * 0.5;
                        var profitNet6 = profitNet6.toFixed(2);
    
                        $("#profitDaily6").text('$' + profitDaily6);
                        $("#profitTotal6").text('$' + profitTotal6);
                        $("#profitPercent6").text(profitPercent6 + '%');
                        $("#profitNet6").text('$' + profitNet6);
                    //} else if(isNaN(money6) == true) {
                    } if (money6 < 10){
                        $("#profitDaily6").text("Error!");
                        $("#profitTotal6").text("Error!");
                        $("#profitPercent6").text("Error!");
                        $("#profitNet6").text("Error!");
                    }
                    break;
                case 1:
                    if ( money6 >= 20 && money6 <= 15000){
    
                        var profitDaily6 = money6 / 100 * 8 ;
                        var profitDaily6 = profitDaily6.toFixed(2);
                        
                        var profitTotal6 = money6 / 100 * 8 * 50 ;
                        var profitTotal6 = profitTotal6.toFixed(2);
                        var profitPercent6 = 8  ;
                        var profitPercent6 = profitPercent6.toFixed(2);
                        var profitNet6 = money6 / 100 *  4.5;
                        var profitNet6 = profitNet6.toFixed(2);
    
                        $("#profitDaily6").text(profitDaily6);
                        
                        $("#profitTotal6").text(profitTotal6);
                        $("#profitPercent6").text(profitPercent6 + '%');
                        
                        $("#profitNet6").text('$' + profitNet6);
                        //} else if(isNaN(money6) == true) {
                    } /*if (money6 >= 2001 && money6 <= 3000) {
                        var profitDaily6 = money6 / 100 * 2.5;
                        var profitDaily6 = profitDaily6.toFixed(2);
                        var profitTotal6 = money6 / 100 * 2.5 * 90 + money6;
                        var profitTotal6 = profitTotal6.toFixed(2);
                        var profitPercent6 = 2.5;
                        var profitPercent6 = profitPercent6.toFixed(2);
                        var profitNet6 = money6 / 100 * 2.5 * 90;
                        var profitNet6 = profitNet6.toFixed(2);
    
                        $("#profitDaily6").text(profitDaily6);
                        $("#profitTotal6").text(profitTotal6);
                        $("#profitPercent6").text(profitPercent6 + '%');
                        $("#profitNet6").text('$' + profitNet6);
                        
                    } if (money6 >= 3001 && money6 < 9999999999) {
                        var profitDaily6 = money6 / 100 * 3;
                        var profitDaily6 = profitDaily6.toFixed(2);
                        var profitTotal6 = money6 / 100 * 3 * 90 + money6;
                        var profitTotal6 = profitTotal6.toFixed(2);
                        var profitPercent6 = 3;
                        var profitPercent6 = profitPercent6.toFixed(2);
                        var profitNet6 = money6 / 100 * 3 * 90;
                        var profitNet6 = profitNet6.toFixed(2);
                        
    
                        $("#profitDaily6").text(profitDaily6);
                        $("#profitTotal6").text(profitTotal6);
                        $("#profitPercent6").text(profitPercent6 + '%');
                        $("#profitNet6").text('$' + profitNet6);
                        
                    
                    }*/ if (money6 < 20) {
                        $("#profitDaily6").text("Min: $20");
                        $("#profitTotal6").text("Min: $20");
                        $("#profitPercent6").text("Min: $20");
                        $("#profitNet6").text("Min: $20");
                    }
                        if (money6 >15000){
                        $("#profitDaily6").text("Max: $15000");
                        $("#profitTotal6").text("Max: $15000");
                        $("#profitPercent6").text("Max: $15000");
                        $("#profitNet6").text("Max: $15000");
                    }
                    
                    break;
    
            }
        }
        if($("#money6").length){
            calc();
        }
        $("#money6").keyup(function(){
            calc();
        });
    
        $("#Ultra6").on('change', function() {
            percent = parseFloat(this.value);
            calc();
        })
    });
    