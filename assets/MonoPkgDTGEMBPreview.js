//------------------------------------------------------------------------
// Code for EMB package
//------------------------------------------------------------------------



$(function () {

    //Start variables needed:
    var debug;
    var Mono1_PckgLink;
    var Mono2_PckgLink;
    var secondMonoLinkImage;
    var soldMonoLink;
    var sendImg;
    var sendImg2;
    var ShirtColor;

    //Monogram EMB
    var MonogramFontStyle;
    var MonogramText;
    var threadcolor;
    var MonogramFont;
    var mono_server;
    var MonogramFont1;
    var MonogramFont2;
    var flagStop;
    //Monogram DTG
    var MonogramFontStyle_DTG;
    var MonogramText_DTG;
    var threadcolor_DTG;
    var MonogramFont_DTG;
    var mono_server_DTG;
    var MonogramFont1_DTG;
    var MonogramFont2_DTG;
    var errorDetails1;
    var flagStop_DTG;

    var imagesize;
    var typingTimer;
    var doneTypingInterval = 1200;
    var errorDetails;
    var NonMonogramFont_DTG;


    //End of Variables



    //-----------------------------------
    //Button form the main product page
    //-----------------------------------
    $('#preview-monogram').on('click', function (el) {

        ShirtColor = $('input[name="single-option-selector-1"]:checked').val();
        //Monogram EMB        
        MonogramText = $('input#MonogramText').val();
        threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
        MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
        //MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();

        //Monogram DTG        
        MonogramText_DTG = $('input#MonogramText_DTG').val();
        threadcolor_DTG = $("#threadcolor_DTG option:selected").attr("data-valcolor");
        MonogramFont_DTG = $('select[name="properties[Monogram Style_DTG]"]').find(':selected').attr('data-valname');
        //MonogramFontStyle_DTG = $("#MonogramFont_DTG option:selected").val().toLowerCase();                       

        ///for debugging 
        //  debug = $('select[name="properties[MonogramFont]"]').find(':selected').attr('data-valname');
        //$("#debug").html(debug);
        ///for debugging


        //-----------------------------------
        ///Trigger call to monogram's default value
        //-----------------------------------     

        //--------------------------------------------
        //--------EMB display setting    
        //--------------------------------------------+
        if (MonogramFont.indexOf("58MSunFlr") != -1) {
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");

        } else if (MonogramFont.indexOf("101M") != -1) {
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");

        } else if (MonogramFont.indexOf("71M") != -1) {
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");

        } else if (MonogramFont.indexOf("fancy101m") != -1) { // MWL112619
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/fancy101m.png?2532'    />");

        } else if (MonogramFont.indexOf("DTGLVinyl2.3") != -1) { // MWL112619
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVinyl2.3.png?v=1601578565'    />");

        } else {
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");
        }

        //--------------------------------------------
        //--------DTG display setting    
        //--------------------------------------------
        if (MonogramFont_DTG.indexOf("DTGBrun") != -1) {// MWL06112021
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBrun.png?v=1623038943'   />");

        } else if (MonogramFont_DTG.indexOf("DTGVibesCoff") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGVibesCoff_ABC.png?11654'   />");

        } else if (MonogramFont_DTG.indexOf("DTGCozy") != -1) {
            if (MonogramFont_DTG.indexOf("DTGCozyCoff") != -1) {// MWL081120
                $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCozyCoff.png?v=1604299503'    />");
            } else {
                $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCozy_ABC.png?11654'   />");
            }
        } else if (MonogramFont_DTG.indexOf("DTGAirplaneMode") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGAirplaneMode_ABC.png?11654'   />");

        } else if (MonogramFont_DTG.indexOf("DTGWakeMe") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWakeMeCir.png?11900'   />");

        } else if (MonogramFont_DTG.indexOf("DTGXMasWreath") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXMasWreath.png?v=1635429713'   />");

        } else if (MonogramFont_DTG.indexOf("DTGAmEst") != -1) {// MWL06112021
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmEst.png?v=1623038859'   />");

        } else if (MonogramFont_DTG.indexOf("DTGAmerica") != -1) {// MWL06112021
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmerica.png?v=1623038820'   />");

        } else if (MonogramFont_DTG.indexOf("DTGXMasCoffee") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXMasCoffee.png?v=1635429698'    />");

        } else if (MonogramFont_DTG.indexOf("DTGDearSanta") != -1) {// MWL111319
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDearSanta.png?v=1635429534'    />");

        } else if (MonogramFont_DTG.indexOf("DTGBlonde") != -1) {// MWL061121
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBlonde.png?v=1623038893'    />");

        } else if (MonogramFont_DTG.indexOf("DTGMain") != -1) {// MWL111619
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMain.png?v=1635003167'    />");

        } else if (MonogramFont_DTG.indexOf("DTGRed") != -1) {// MWL06112021
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRed.png?v=1623039004'    />");

        } else if (MonogramFont_DTG.indexOf("DTGStick") != -1) {// MWL112619
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStick.png?v=1635429669'    />");

        } else if (MonogramFont_DTG.indexOf("DTGDisHolidays") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisHolidays.png?v=1635003045'    />");

        } else if (MonogramFont_DTG.indexOf("DTGLepLove") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepLove.png?v=1641632623'    />");

        } else if (MonogramFont_DTG.indexOf("DTGCoffHeart") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCoffHeart.png?v=1582766525'    />");

        } else if (MonogramFont_DTG.indexOf("DTGDisneyFall") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisneyFall.png?v=1628185050'    />");

        } else if (MonogramFont_DTG.indexOf("DTGCoffeeVal") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoffeeVal.png?v=1578736860'    />");

        } else if (MonogramFont_DTG.indexOf("DTGBroom") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBroom.png?v=1628185007'    />");

        } else if (MonogramFont_DTG.indexOf("DTGMickVal") != -1) {// MWL11320
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickVal.png?v=1641632664'    />");

        } else if (MonogramFont_DTG.indexOf("DTGSanta") != -1) {// MWL081120
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSanta.png?v=1604480762'    />");

        } else if (MonogramFont_DTG.indexOf("DTGRunStar") != -1) {// MWL081120
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRunStar.png?v=1610870920'   />");

        } else if (MonogramFont_DTG.indexOf("DTGMerryXMas") != -1) {// MWL081120
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMerryXMas.png?v=1604752321'    />");

        } else if (MonogramFont_DTG.indexOf("DTGBasicHeart") != -1) {// MWL081120
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBasicHeart.png?v=1641631516'    />");

        } else if (MonogramFont_DTG.indexOf("DTGCanHearts") != -1) {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCanHeartsCir_ABC.png?12125'    />");

        } else if (MonogramFont_DTG.indexOf("DTGGlasses") != -1) {// MWL121220
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGlasses.png?v=1607569902'    />");

        } else if (MonogramFont_DTG.indexOf("DTGLeopard") != -1) {// MWL021921
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgleopard.png?1472'    />");

        } else if (MonogramFont_DTG.indexOf("DTGCaffQueen") != -1) {// MWL021921
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CaffQueenABC_Circle.png?4604'    />");

        } else if (MonogramFont_DTG.indexOf("DTGCoffeeCord") != -1) {// MWL021921
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoffeeCord.png?v=1620326968'    />");

        } else if (MonogramFont_DTG.indexOf("DTGLVBlock") != -1) {// MWL021921
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVBlock.png?v=1631868255'    />");

        } else if (MonogramFont_DTG.indexOf("DTGFilthy") != -1) {// MWL103121
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFilthy.png?v=1635003132'    />");

        } else {
            $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");
        }

        //-----------------------------------
        ///End generate monogram default
        //-----------------------------------
        //-----------------------------------
        //---disable the add to cart button and show the pop-up
        //-----------------------------------
        $("#modal").show(500);
        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
        $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');
    });
    //-----------------------------------
    //ENDButton form the main product page
    //-----------------------------------



    //-----------------------------------
    //---------Check all the selections to trigger the Generate monogram
    //------------------------------------Start
    //Detect changes in all the select buttons
    $('select#MonogramFont').on('change', function () {
        delayExecute_EMB();
    });

    $('select#MonogramFont_DTG').on('change', function () {
        delayExecute_DTG();
    });

    $('select#threadcolor').on('change', function () //MWL10042021
    {
        delayExecute_EMB();
    });

    $('select#threadcolor_DTG').on('change', function ()  //MWL1112021
    {
        delayExecute_DTG();
    });

    //Detect values input in the textbox
    $('input#MonogramText_DTG').on('keydown', function (event) { delayExecute_DTG(); });

    //Detect values input in the textbox
    $('input#MonogramText').on('keydown', function (event) { delayExecute_EMB(); });
    //-----------------------------------
    //------------------------------------End
    //-----------------------------------


    //-----------------------------------  
    //Detect keystroke and only execute after the user has finish typing
    //-----------------------------------
    function delayExecute_DTG() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(
            function () {
                GenerateMonogram_DTG()
            },
            doneTypingInterval
        );
        return true;
    }

    function delayExecute_EMB() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(
            function () {
                GenerateMonogram_EMB()
            },
            doneTypingInterval
        );
        return true;
    }
    //-----------------------------------
    //------------------------------------End
    //-----------------------------------



    //-----------------------------------
    //Generate the Customers monogram DTG
    //-----------------------------------  
    function GenerateMonogram_DTG() {
        //Get all the value passed

        //DTG Display
        //MonogramText_DTG = $('input#MonogramText_DTG').val();
        threadcolor_DTG = $("#threadcolor_DTG option:selected").attr("data-valcolor");
        MonogramFont_DTG = $('select[name="properties[Monogram Style_DTG]"]').find(':selected').attr('data-valname');
        //MonogramFontStyle_DTG = $("#MonogramFont_DTG option:selected").val().toLowerCase();
        //alert(MonogramFont_DTG);

        //For No Monogram MWL01182022
        NonMonogramFont_DTG = MonogramFont_DTG.toLowerCase();
        if (NonMonogramFont_DTG.slice(-2) == "no") {
            MonogramText_DTG = "***";
            $("#MonogramText_DTG").val('');
        } else {
            MonogramText_DTG = $('input#MonogramText_DTG').val();
        }

        //reset the error display
        $("#validatorId_DTG").html("");
        flagStop_DTG = "";
        $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');


        //Validation before creating the monogrammed.
        //-----------------------------------
        //Validation before creating the monogrammed.
        if (MonogramText_DTG !== "" && threadcolor_DTG !== "" && typeof threadcolor_DTG !== 'undefined' && MonogramFont_DTG !== "" && typeof MonogramFont_DTG !== 'undefined') {
            ////----DTG Server

            if (MonogramFont_DTG.indexOf("DTG") != -1) {
                logoColor_DTG = "";
                mono_server_DTG = "stitchdynamics5";
                MonogramFont2_DTG = MonogramFont_DTG;
                //---------Filter of 2 letter styles--------------------------  
                if (MonogramFont_DTG.indexOf("DTG2020Cir") != -1) {
                    if (MonogramText_DTG.length == 3) {
                    } else {
                        if (MonogramText_DTG.length == 2) {
                            errorDetails1 = "Must have 3 letters for this Style";
                            $("#validatorId_DTG").html(" " + errorDetails1 + "").css("color", "red", "font-style", "italic");
                            flagStop_DTG = 1;
                        }
                    }

                } else if (MonogramFont_DTG.indexOf("DTG2020Vine") != -1) {
                    if (MonogramText_DTG.length == 3) {
                    } else {
                        if (MonogramText_DTG.length == 2) {
                            errorDetails1 = "Must have 3 letters for this Style";
                            $("#validatorId_DTG").html(" " + errorDetails1 + "").css("color", "red", "font-style", "italic");
                            flagStop_DTG = 1;
                        }
                    }
                } else if (MonogramFont_DTG.indexOf("DTG2") != -1) {
                    if (MonogramText_DTG.length == 3) {
                        errorDetails1 = "Must have 2 letters for this Style";
                        $("#validatorId_DTG").html(" " + errorDetails1 + "").css("color", "red", "font-style", "italic");
                        flagStop_DTG = 1;
                    } else {
                        //for guccicoffee only. not allowed one letter only
                        if (MonogramFont_DTG.indexOf("DTG2GucCof") != -1) {
                            if (MonogramText_DTG.length == 1) {
                                errorDetails1 = "Must have 2 letters for this Style";
                                $("#validatorId_DTG").html(" " + errorDetails1 + "").css("color", "red", "font-style", "italic");
                                flagStop_DTG = 1;
                            }
                        }
                    }


                } else if (MonogramFont_DTG.indexOf("Block") != -1) {//added to allow Block to load
                    if (MonogramText_DTG.length == 2) {
                    } else {
                        if (MonogramText_DTG.length == 3) {
                            errorDetails = "Must have 2 letters for this Style";
                            $("#validatorId_DTG").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
                            flagStop = 1;
                        }
                    }

                } else {
                    if (MonogramText_DTG.length == 2) {
                        errorDetails1 = "Must have 3 letters for this Style";
                        $("#validatorId_DTG").html(" " + errorDetails1 + "").css("color", "red", "font-style", "italic");
                        flagStop_DTG = 1;
                    }
                } //-----------------------------------                    

            } else {
                logoColor_DTG = "";
                mono_server_DTG = "stitchdynamics5";
                MonogramFont2_DTG = MonogramFont_DTG;
            }






            //-----------------------------------
            ////---Details sent to lilo's server ^_^ ----------------------------
            //-----------------------------------

            if (flagStop_DTG != "1") {       //------------------2 Letter
                $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
                $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');
                //----Set a loader image..
                $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");

                Mono2_PckgLink = "https://" + mono_server_DTG + ".com/ecs/api/ecs/7?sku=" + MonogramFont2_DTG + "&style=" + logoColor_DTG + "&pers1=" + MonogramText_DTG + "&color1=" + threadcolor_DTG;
                //extract png file working
                //Passing of first link image only this will be visible
                $.get(Mono2_PckgLink, function (data, status) {
                    sendImgx = ("https://" + data);
                    //$("#debug").html(sendImg);
                    //alert("Data: " + data + "\nStatus: " + status);

                    //passing of image and Image Display
                    $("#DTGmonogramimage").html("<img id='DTGmonogramImg'   class='line-item-property__field    w3-padding-48 '  style='  object-fit: fill'   alt='Monogram here'  src='" + sendImgx + "'/>");
                    $("#hiddenMonogramImage_DTG").html("<input type='hidden'  name='properties[_MonogramImageDTG]'    value='" + sendImgx + "' />");

                    $("#DTGmonogramImg").on('load', function () {
                        //----Enable the add to cart button once image was successfully loaded
                        //   alert("Next enabled");
                        $('#NextEmb').prop('disabled', false);

                        //For No Monogram MWL01182022
                        if (NonMonogramFont_DTG.slice(-2) == "no") {
                            $("#MonogramText_DTG").attr('disabled', true);
                        }

                    });

                });

            } return;   //------------------2 Letter             

        } else {
            //---These are blank values.

            if (MonogramText_DTG == "") {
                errorDetails1 = "input your Monogram";

                //For No Monogram MWL01182022
                $("#MonogramText_DTG").attr('disabled', false);
            } else if (threadcolor_DTG == "") {
                errorDetails1 = "select a Threadcolor";
            } else {
                errorDetails1 = "select a Monogram Style";
            }
            $("#validatorId_DTG").html("Please " + errorDetails1 + "").css("color", "red", "font-style", "italic");
        }

    }






    //-----------------------------------
    //Generate the Customers monogram EMB
    //-----------------------------------  
    function GenerateMonogram_EMB() {
        //Get all the value passed

        MonogramText = MonogramText_DTG; //Pass the DTG text to EMB for same monogram
        //MonogramText = $('input#MonogramText').val();
        threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
        MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
        // MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();
        //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
        // MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');


        //reset the error display
        $("#validatorId").html("");
        flagStop = "";
        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');


        //Validation before creating the monogrammed.
        //-----------------------------------
        if (MonogramText !== "" && threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined' && MonogramText !== "***") {

            if (MonogramFont.indexOf("58MSunFlr") != -1) {
                logoColor = "&Logocolors=A512a06,Aedcd1f";
                mono_server = "stitchdynamics5";
                MonogramFont1 = MonogramFont;
            } else {
                logoColor = "";
                mono_server = "stitchdynamics5";
                MonogramFont1 = MonogramFont;
            }


            //-----------------------------------
            ////---Details sent to lilo's server ^_^ ----------------------------
            //-----------------------------------

            if (flagStop != "1") {       //------------------2 Letter
                $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');

                //-------UserAgreement changed 06/26 #JDG            
                $("#UserAgreement").remove();
                //-------UserAgreement changed 06/26 #JDG

                //----Set a loader image..
                $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");

                Mono1_PckgLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont1 + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + threadcolor;

                //extract png file working
                //Passing of first link image only this will be visible
                $.get(Mono1_PckgLink, function (data, status) {
                    sendImg = ("https://" + data);
                    //$("#debug").html(sendImg);
                    //alert("Data: " + data + "\nStatus: " + status);

                    //passing of image and Image Display
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 '  style='  object-fit: fill'   alt='Monogram here'  src='" + sendImg + "'/>");
                    $("#hiddenMonogramImage").html("<input type='hidden'  name='properties[_MonogramImage]'    value='" + sendImg + "' />");

                    $("#monogramImg").on('load', function () {
                        //----Enable the add to cart button once image was successfully loaded
                        //alert("add to cart enabled");

                        //-------UserAgreement changed 06/26 #JDG    
                        addDivclassUserAgreement();
                        $('#addtocart').prop('disabled', false).removeClass('disabled');
                        //$('#addtocart').prop('disabled', false);
                        //----UserAgreement changed 06/26 #JDG  -----End 

                    });
                });

            } return;   //------------------2 Letter             

        } else if (MonogramText = "***") {
            MonogramFont = $('select[name="properties[Monogram Style]"]').attr("disabled", "disabled").val("No Monogram");
            //-------UserAgreement changed 06/26 #JDG    
            addDivclassUserAgreement();
            //$('#addtocart').prop('disabled', false);
            //--
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/white.jpg?v=1642487654'    />");
        } else {
            //---These are blank values.

            if (MonogramText == "") {
                errorDetails = "input your Monogram";
            } else if (threadcolor == "") {
                errorDetails = "select a Threadcolor";
            } else {
                errorDetails = "select a Monogram Style";
            }
            $("#validatorId").html("Please " + errorDetails + "").css("color", "red", "font-style", "italic");
        }

    }



    //----UserAgreement changed 06/26 #JDG  -----Start       
    //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
    function addDivclassUserAgreement() {  //replacing the code due to typo error
        $(".w3-containerw3-center").addClass("w3-container w3-center");
        $(".w3-containerw3-center").removeClass("w3-containerw3-center");


        $(".product__payment-container").css("display", "contents");
        $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
        $('#uaID').on('change', function () {
            if ((this.checked) && flagStop != "1") {
                $('#btn add-to-cart').prop('disabled', false);
            } else {
                $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
            }
        }
        );
    }
    //----UserAgreement changed 06/26 #JDG  -----End    



    //-----------------------------------
    //Button close
    //-----------------------------------  

    $("#btnClose").click(function () {
        //Reset Values
        $("#addtocart").addClass('disabled').attr('disabled', 'disabled');
        $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');
        $('input#MonogramText').val('');
        $('input#MonogramText_DTG').val('');
        $("#threadcolor option:selected").attr("data-valcolor").value = "";
        $("#threadcolor_DTG option:selected").attr("data-valcolor").value = "";
        $('select[name="properties[Monogram Style]"]').value = "";
        $('select[name="properties[Monogram Style_DTG]"]').value = "";
        //-----------end   
        $("#monogramimage").val(''); //clear the monogram
        $("#DTGmonogramimage").val(''); //clear the monogram
        flagStop = "";
        flagStop_DTG = "";
        ShirtColor = "";
        $("#modal").hide(400);



    });


    //-----------------------------------
    //Add to cart
    //-----------------------------------         
    //Working SENDING SOLD TAG but currently we use
    $('#addtocart').on('click', function (event) {

        if (!$('#uaID').is(':checked')) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return false;
        }

        window.setTimeout(function () {
            $("#btnClose").click();
            $("#uaID:checked").prop("checked", false);
        }, 500);

    });

});
