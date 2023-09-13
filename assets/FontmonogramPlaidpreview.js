//-----------------------------------
//EMB
//-----------------------------------
$(function () {

    //Start variables needed:
    var debug;
    var ShirtColor;
    var firstMonoLink;
    var secondMonoLinkImage;
    var soldMonoLink;
    var sendImg;
    var soldImage;
    var extractImage;
    var MonogramText;
    var threadcolor;
    var MonogramFont;
    var imagesize;
    var typingTimer;
    var doneTypingInterval = 1200;
    var mono_server;
    var errorDetails;
    var flagStop;
    var Icon;
    //End of Variables



    //-----------------------------------
    //Button from the main product page
    //-----------------------------------
    $('#preview-monogram').on('click', function (el) {
        ShirtColor = $('input[name="single-option-selector-1"]:checked').val();


        //old monogramtext check effect $('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val();
        //old threadcolor = $('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
        MonogramText = $('input#MonogramText').val();
        threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
        Icon = $("#Icon option:selected").attr("data-valname");
        MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');

        ///for debugging 
        //  debug = $('select[name="properties[MonogramFont]"]').find(':selected').attr('data-valname');
        //$("#debug").html(debug);
        ///for debugging


        //-----------------------------------
        ///Trigger call to monogram's default value
        //-----------------------------------     
        //--------------------------------------------
        //--------Different default display setting    
        //Removed w3-margin  to center the big image
        //--------------------------------------------
        if (MonogramFont.indexOf("101MAlabama") != -1) {
            Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MAlabamaCir") != -1) {
                MonogramFont = "101M" + Icon + "Cir";
            } else if (MonogramFont.indexOf("101MAlabamaDia") != -1) {
                MonogramFont = "101M" + Icon + "Dia";
            } else if (MonogramFont.indexOf("101MAlabamaMC") != -1) {
                MonogramFont = "101M" + Icon + "MC";
            } else {
                MonogramFont = "101M" + Icon + "Block";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MAlabama.png?v=1627125639'    />");
       } else if (MonogramFont.indexOf("101MIconSanta") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MIconSantaItalic") != -1) {
                MonogramFont = "101MIcon" + Icon + "Italic";
            } else if (MonogramFont.indexOf("101MIconSantaClassic") != -1) {
                MonogramFont = "101MIcon" + Icon + "Classic";
            } else {
                MonogramFont = "101MIcon" + Icon + "No";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/christmasicons.png?v=1667398866'    />");
       } else if (MonogramFont.indexOf("101MGingerMick") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MGingerMickItalic") != -1) {
                MonogramFont = "101M" + Icon + "Italic";
            } else if (MonogramFont.indexOf("101MGingerMickClassic") != -1) {
                MonogramFont = "101M" + Icon + "Classic";
            } else {
                MonogramFont = "101M" + Icon + "No";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/Characters.png?v=1667407904'    />");
       } else if (MonogramFont.indexOf("101MBlueTree") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MBlueTreeItalic") != -1) {
                MonogramFont = "101M" + Icon + "Italic";
            } else if (MonogramFont.indexOf("101MBlueTreeClassic") != -1) {
                MonogramFont = "101M" + Icon + "Classic";
            } else {
                MonogramFont = "101M" + Icon + "No";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MBlueTree.png?v=1667397214'    />");
       } else if (MonogramFont.indexOf("101MMrs") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MMrsScript") != -1) {
                MonogramFont = "101M" + Icon + "Script";
            } else if (MonogramFont.indexOf("101MMrsItalic") != -1) {
                MonogramFont = "101M" + Icon + "Italic";
            } else if (MonogramFont.indexOf("101MMrsClassic") != -1) {
                MonogramFont = "101M" + Icon + "Classic";
            } else if (MonogramFont.indexOf("101MMrsTall") != -1) {
                MonogramFont = "101M" + Icon + "Tall";
            } else {
                MonogramFont = "101M" + Icon + "Handwriting";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MMrsTall.png?v=1676904005'    />");
       } else if (MonogramFont.indexOf("101MBaseball") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MBaseballAth") != -1) {
                MonogramFont = "101M" + Icon + "Ath";
            } else if (MonogramFont.indexOf("101MBaseballItalic") != -1) {
                MonogramFont = "101M" + Icon + "Italic";
            } else {
                MonogramFont = "101M" + Icon + "Classic";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MVolleyAth.png?v=1676904083'    />");
       } else if (MonogramFont.indexOf("101MAkita") != -1) {
                Icon = $("#Icon option:selected").attr("data-valname");
            if (MonogramFont.indexOf("101MAkitaClassic") != -1) {
                MonogramFont = "101M" + Icon + "Classic";
            } else if (MonogramFont.indexOf("101MAkitaTall") != -1) {
                MonogramFont = "101M" + Icon + "Tall";
            } else if (MonogramFont.indexOf("101MAkitaItalic") != -1) {
                MonogramFont = "101M" + Icon + "Italic";
            } else {
                MonogramFont = "101M" + Icon + "Hand";
            }
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MAkitaHand.png?v=1677341775'    />");
       } else {
            //alert(MonogramFont);
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/ABC_Black.png?v=1596808745'    />");
        }

        //-----------------------------------
        ///End generate monogram default
        //-----------------------------------

        //-----------------------------------
        //---disable the add to cart button and show the pop-up
        //-----------------------------------
        $("#modal").show(500);
        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
    });



    //-----------------------------------
    //---------Check all the selections to trigger the Generate monogram
    //------------------------------------Start
    //Detect changes in all the select buttons
    $('select').on('change', function () {
        delayExecute();
    });

    //Detect values input in the textbox
    $('input#MonogramText').on('keydown', function (event) {
        delayExecute();

    });

    //-----------------------------------  
    //Detect keystroke and only execute after the user has finish typing
    //-----------------------------------
    function delayExecute() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(
            function () {
                GenerateMonogram()
            },
            doneTypingInterval
        );
        return true;
    }
    //-----------------------------------
    //------------------------------------End
    //-----------------------------------



    //-----------------------------------
    //Generate the Customers monogram
    //-----------------------------------  
    function GenerateMonogram() {
        //Get all the value passed
        MonogramText = $('input#MonogramText').val();
        threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
        textthreadcolor = $("#textthreadcolor option:selected").attr("data-valcolor");//MWL5102021
        //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
        MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
        //for colors on the logo
        bordercolor = $("#bordercolor option:selected").attr("data-valcolor");//MWL5102021
        Icon = $("#Icon option:selected").attr("data-valname");  //for plaid
        //reset the error display
        $("#validatorId").html("");
        flagStop = "";
        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');


        //Validation before creating the monogrammed.
        //-----------------------------------
        if (MonogramText !== "" && threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined') {


            if (MonogramFont.indexOf("101MAlabama") != -1) { //for plaid lilly
                logoColor = "&Logocolors=" + bordercolor;
                mono_server = "stitchdynamics5";
                if (MonogramFont.indexOf("101MAlabamaCir") != -1) {
                    MonogramFont = "101M" + Icon + "Cir";
                } else if (MonogramFont.indexOf("101MAlabamaDia") != -1) {
                    MonogramFont = "101M" + Icon + "Dia";
                } else if (MonogramFont.indexOf("101MAlabamaMC") != -1) {
                    MonogramFont = "101M" + Icon + "MC";
                } else {
                    MonogramFont = "101M" + Icon + "Block";
                }
            }
            if (MonogramFont.indexOf("101MIconSanta") != -1) {  
                logoColor = "&Logocolors=abfa68e,affffff,ac91828,aoooooo";
                mono_server = "stitchdynamics5";
                if (MonogramFont.indexOf("101MIconSantaItalic") != -1) {
                    MonogramFont = "101MIcon" + Icon + "Italic";
                } else if (MonogramFont.indexOf("101MIconSantaClassic") != -1) {
                    MonogramFont = "101MIcon" + Icon + "Classic";
                } else {
                    MonogramFont = "101MIcon" + Icon + "No";
                }
            }
            if (MonogramFont.indexOf("101MBaseball") != -1) {
                logoColor = "&Logocolors=affffff,aff2a00,aoooooo"; 
              if (MonogramFont.indexOf("101MBaseballAth") != -1) {
                  MonogramFont = "101M" + Icon + "Ath";
              } else if (MonogramFont.indexOf("101MBaseballItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Classic";
              }  
            }
            if (MonogramFont.indexOf("101MSoccer") != -1) {
                logoColor = "&Logocolors=affffff,aoooooo"; 
              if (MonogramFont.indexOf("101MSoccerAth") != -1) {
                  MonogramFont = "101M" + Icon + "Ath";
              } else if (MonogramFont.indexOf("101MSoccerItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Classic";
              }  
            }
            if (MonogramFont.indexOf("101MVolley") != -1) {
                logoColor = "&Logocolors=affffff,aoooooo,aoooooo"; 
              if (MonogramFont.indexOf("101MVolleyAth") != -1) {
                  MonogramFont = "101M" + Icon + "Ath";
              } else if (MonogramFont.indexOf("101MVolleyItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Classic";
              }  
            }
            if (MonogramFont.indexOf("101MFball") != -1) {
                logoColor = "&Logocolors=aA77D5B,affffff,aoooooo"; 
              if (MonogramFont.indexOf("101MFballAth") != -1) {
                  MonogramFont = "101M" + Icon + "Ath";
              } else if (MonogramFont.indexOf("101MFballItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Classic";
              }  
            } 
            if (MonogramFont.indexOf("101MBball") != -1) {
                logoColor = "&Logocolors=aff7a22,aoooooo,aoooooo"; 
              if (MonogramFont.indexOf("101MBballAth") != -1) {
                  MonogramFont = "101M" + Icon + "Ath";
              } else if (MonogramFont.indexOf("101MBballItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Classic";
              }  
            } 
            if (MonogramFont.indexOf("101MIconDeer") != -1) {  
                logoColor = "&Logocolors=a512a06,aA77D5B,affffff,ac91828";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconSnowM") != -1) {  
                logoColor = "&Logocolors=affffff,aff7a22,ac91828,aoooooo";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconWreath") != -1) {  
                logoColor = "&Logocolors=ac91828,a32804b";
                mono_server = "stitchdynamics5";  
            }
            if (MonogramFont.indexOf("101MIconTree") != -1) {  
                logoColor = "&Logocolors=a512a06,affdfed,ac5a432,a32804b";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconGinger") != -1) {  
                logoColor = "&Logocolors=A833418,Ac91828,affffff,affffff";
                mono_server = "stitchdynamics5";  
            }
            if (MonogramFont.indexOf("101MIconCandy") != -1) {  
                logoColor = "&Logocolors=ac91828,Ac91828,Ac91828,Ac91828";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconSnowF") != -1) {  
                logoColor = "&Logocolors=a97ecff";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MGingerMick") != -1) {  
                logoColor = "&Logocolors=A833418,affffff,aoooooo,affdfed,Ac91828,a32804b";
                mono_server = "stitchdynamics5";
                if (MonogramFont.indexOf("101MGingerMickItalic") != -1) {
                    MonogramFont = "101M" + Icon + "Italic";
                } else if (MonogramFont.indexOf("101MGingerMickClass") != -1) {
                    MonogramFont = "101M" + Icon + "Classic";
                } else {
                    MonogramFont = "101M" + Icon + "No";
                }
            }
            if (MonogramFont.indexOf("101MGingerMin") != -1) {  
                logoColor = "&Logocolors=A833418,affffff,aoooooo,affdfed,Ac91828,a32804b";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MPepMick") != -1) {  
                logoColor = "&Logocolors=Ac91828,affffff";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MPepMin") != -1) {  
                logoColor = "&Logocolors=Ac91828,affffff,a32804b";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MBlueTree") != -1) {  
                logoColor = "&Logocolors=a2124c1,a2124c1,aoooooo,aoooooo,a32804b,a32804b,affffff";
                mono_server = "stitchdynamics5";
                if (MonogramFont.indexOf("101MBlueTreeItalic") != -1) {
                    MonogramFont = "101M" + Icon + "Italic";
                } else if (MonogramFont.indexOf("101MBlueTreeClassic") != -1) {
                    MonogramFont = "101M" + Icon + "Classic";
                } else {
                    MonogramFont = "101M" + Icon + "No";
                }
            }
            if (MonogramFont.indexOf("101MBlueWreath") != -1) {  
                logoColor = "&Logocolors=a32804b,a778c9f,a32804b";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconWreathClassic") != -1) {  
                MonogramFont = "101MIconWreathClass";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MIconGingerClassic") != -1) {  
                MonogramFont = "101MIconGingerClass";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MGingerMickClassic") != -1) {  
                MonogramFont = "101MGingerMickClass";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MGingerMinClassic") != -1) {  
                MonogramFont = "101MGingerMinClass";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramFont.indexOf("101MPepMickClassic") != -1) {  
                MonogramFont = "101MPepMickClass";
                mono_server = "stitchdynamics5"; 
            }
            if (MonogramText.length == 2) {
                errorDetails = "Must have 3 letters for this Style";
                $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
                flagStop = 1;
            }
            if (MonogramFont.indexOf("101MMrs") != -1) {  
                logoColor = "&Logocolors="+threadcolor;  
                mono_server = "stitchdynamics5";
                if (MonogramFont.indexOf("101MMrsScript") != -1) {
                    MonogramFont = "101M" + Icon + "Script";
                } else if (MonogramFont.indexOf("101MMrsItalic") != -1) {
                    MonogramFont = "101M" + Icon + "Italic";
                } else if (MonogramFont.indexOf("101MMrsClassic") != -1) {
                    MonogramFont = "101M" + Icon + "Classic";
                } else if (MonogramFont.indexOf("101MMrsTall") != -1) {
                    MonogramFont = "101M" + Icon + "Tall";
                } else {
                    MonogramFont = "101M" + Icon + "Handwriting";
                }
            } 
           if (MonogramFont.indexOf("101MAkita") != -1) { 
                logoColor = "&Logocolors="+threadcolor; 
                mono_server = "stitchdynamics5"; 
              if (MonogramFont.indexOf("101MAkitaClassic") != -1) {
                  MonogramFont = "101M" + Icon + "Classic";
              } else if (MonogramFont.indexOf("101MAkitaTall") != -1) {
                  MonogramFont = "101M" + Icon + "Tall";
              } else if (MonogramFont.indexOf("101MAkitaItalic") != -1) {
                  MonogramFont = "101M" + Icon + "Italic";
              } else {
                  MonogramFont = "101M" + Icon + "Hand";
              }
            }
          
          
            if (MonogramFont.indexOf("101MMrs") != -1) {  
                Color1 = textthreadcolor;  
                mono_server = "stitchdynamics5";
            } else if (MonogramFont.indexOf("101MBaseball") != -1) {  
                Color1 = threadcolor;
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("101MSoccer") != -1) {  
                Color1 = threadcolor;
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("101MBball") != -1) {  
                Color1 = threadcolor;
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("101MVolley") != -1) {  
                Color1 = threadcolor;
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("101MFball") != -1) {  
                Color1 = threadcolor;
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("101MFMrs") != -1) {  
                Color1 = textthreadcolor;  
                mono_server = "stitchdynamics5";
            } else if (MonogramFont.indexOf("101MAkita") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MAmeriBull") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MAussie") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MAusShe") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBeag") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBelg") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBernese") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBorder") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBoston") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBoxer") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBritt") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBullD") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBullT") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MCane") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MChih") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MCock") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MCoon") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MCorgi") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MDach") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MDalm") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MDober") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MDoodle") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MEngBull") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MEngSet") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MFox") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MFrench") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MBoxer") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MGermP") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MGermS") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MGoldi") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MGreat") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MHuskie") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MJack") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MLab") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MLhasa") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MMaltese") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MMaltip") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MPitbull") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MPom") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MPood") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MPug") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MRot") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MSaint") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MSchn") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MShet") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MShih") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MSpring") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MStaff") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else if (MonogramFont.indexOf("101MYorkie") != -1) { 
                Color1 = textthreadcolor;
                mono_server = "stitchdynamics5";  
            } else {
              Color1 = threadcolor;
              mono_server = "stitchdynamics5";
            }



          
            //-----------------------------------
            ////---Details sent to lilo's server ^_^ ----------------------------
            //-----------------------------------

            if (flagStop != "1") {       //------------------2 Letter

                //-------UserAgreement changed 06/26 #JDG            
                $("#UserAgreement").remove();
                //-------UserAgreement changed 06/26 #JDG  

                $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
                //----Set a loader image..
                $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");

                firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1;

                //extract png file working
                $.get(firstMonoLink, function (data, status) {
                    //alert("Data: " + data + "\nStatus: " + status);
                    sendImg = ("https://" + data);
                    //$("#debug").html(sendImg);
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
                /////---------Ending-----------------------  

                // temp disable to check the missing images in the server
                //  $('#addtocart').prop('disabled', false);

            } return;   //------------------2 Letter             

        } else {
            //---These are blank values.

            if (MonogramText == "") {
                errorDetails = "input your Monogram";
            } else if (threadcolor == "") {
                errorDetails = "select a Threadcolor";
            } else {
                errorDetails = "select a Font";
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
        $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, Font, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
        $('#uaID').on('change', function () {
            if ((this.checked) && flagStop != "1" && MonogramText != "") {
                $('#btn add-to-cart').prop('disabled', false);
                $('input#MonogramText').on('click', uncheckAll);

            } else {
                $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
            }
        }
        );
        //unchecks agreement once MonogramTextbox is clicked
        function uncheckAll() {
            $("#uaID:checked").prop("checked", false);
            $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
        }

    }
    //----UserAgreement changed 06/26 #JDG  -----End          

    //-----------------------------------
    //Button close
    //-----------------------------------  

    $("#btnClose").click(function () {
        //Reset Values
        $("#addtocart").addClass('disabled').attr('disabled', 'disabled');
        $("#threadcolor option").attr('selected', false).first().attr('selected', true);
        $('select[name="properties[Font]"] option').attr('selected', false).first().attr('selected', true);
        $("#monogramimage").val(''); //clear the monogram
        $('#MonogramText').val('');
        flagStop = "";
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



