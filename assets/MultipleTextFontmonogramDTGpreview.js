//-----------------------------------
//DTG
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
  var MonogramText2;
  var MonogramText3;
  var threadcolor;
  var MonogramFont;
  var imagesize;
  var typingTimer;
  var doneTypingInterval = 1200;
  var mono_server;
  var errorDetails;
  var flagStop;
  var bg;
  var NonMonogramFont;
  var color1;
  var color2;
  var color3;
  //End of Variables



  //-----------------------------------
  //Button from the main product page
  //-----------------------------------
  $('#preview-monogram').on('click', function (el) {
    ShirtColor = $('input[name="single-option-selector-1"]:checked').val();


    //old monogramtext check effect $('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val();
    //old threadcolor = $('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramText = $('input#MonogramText').val();
    MonogramText2 = $('input#MonogramText2').val();
    MonogramText3 = $('input#MonogramText3').val();
    threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
    MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');



    ///for debugging 
    //  debug = $('select[name="properties[MonogramFont]"]').find(':selected').attr('data-valname');
    //$("#debug").html(debug);
    ///for debugging

    //Function to display monogram with grey background
    function bg_color_grey() {
      bg = $('.w3-container').css('background-color', '#ffffff');
      bg = $('.w3-row').css('background-color', '#e5e5e5');
      bg = $('#monogramimage').css('background-color', '#e5e5e5');
    }


    //-----------------------------------
    ///Trigger call to monogram's default value
    //-----------------------------------     
    //--------------------------------------------
    //--------Different default display setting    
    //Removed w3-margin  to center the big image
    //--------------------------------------------

    if (MonogramFont.indexOf("DTGMIYHearts") != -1) {// MWL02/17/2022  
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMIYHearts.png?v=1685840559'    />");

    } else if (MonogramFont.indexOf("DTGChino") != -1) {// MWL02/17/2022  
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGChino.png?v=1685847818'    />");
      $("#MonogramText2").hide(); 
      $("#Line1").hide(); 
    } else {
      //alert(MonogramFont);
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC.png?17829756627205312463'    />");
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
  $('input#MonogramText2').on('keydown', function (event) {
    delayExecute();

  });
  $('input#MonogramText3').on('keydown', function (event) {
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
    MonogramText2 = $('input#MonogramText2').val();
    MonogramText3 = $('input#MonogramText3').val();
    threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
    //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
    NonMonogramFont = MonogramFont.toLowerCase();

    //reset the error display
    $("#validatorId").html("");
    flagStop = "";
    $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');

    if (MonogramFont.indexOf("DTGChino2") != -1) { 
    $("#MonogramText2").show(); 
    $("#Line1").show();  
      
    MonogramText2 = $('input#MonogramText').val();
    MonogramText3 = $('input#MonogramText2').val();
    } else if (MonogramFont.indexOf("DTGChino") != -1) {
    $("#MonogramText2").hide(); 
    $("#Line1").hide(); 
    MonogramText2 = "ABC";
    MonogramText3 = "ABC";
    }


    //Validation before creating the monogrammed.
    //-----------------------------------
    if (MonogramText !== "" && MonogramText2 !== "" && MonogramText3 !== "" && threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined') {



      if (MonogramFont.indexOf("DTG") != -1) {  //all BigPrints DTG will go here unless have special info          
        logoColor = "";
        mono_server = "stitchdynamics5";

        //---------Filter of 2 letter styles--------------------------	
        if (MonogramFont.indexOf("DTGSmileySlv") != -1) {//added to allow 3 letter Block to load
          if (MonogramText.length == 3) {
          } else {
            if (MonogramText.length == 2) {
              errorDetails = "Must have 3 letters for this Style";
              $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
              flagStop = 1;
            }
          }

        } else {
          if (MonogramText.length == 2) {
            errorDetails = "Must have 3 letters for this Style";
            $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
            flagStop = 1;
          }
        } //-----------------------------------


      } else {
        logoColor = "";
        mono_server = "stitchdynamics5";
      }

      

      if (MonogramFont.indexOf("DTGMIYHearts") != -1) {  //all BigPrints DTG will go here unless have special info  

        color1 = "Af172a2";
        color2 = "Acc7ab3";
        color3 = "A66c3ac";
        mono_server = "stitchdynamics5";

       
      } else if (MonogramFont.indexOf("DTGChino2LinesW") != -1) {  //all BigPrints DTG will go here unless have special info  

        color1 = "A669bd6";
        color2 = "A669bd6";
        color3 = "A669bd6";
        mono_server = "stitchdynamics5"; 
      } else if (MonogramFont.indexOf("DTGChinoW") != -1) {  //all BigPrints DTG will go here unless have special info  

        color1 = "A669bd6";
        color2 = "A669bd6";
        color3 = "A669bd6";
        mono_server = "stitchdynamics5"; 
      } else if (MonogramFont.indexOf("DTGChino2Lines") != -1) {  //all BigPrints DTG will go here unless have special info  

        color1 = "A9fbbd4";
        color2 = "A9fbbd4";
        color3 = "A9fbbd4";
        mono_server = "stitchdynamics5"; 
      } else if (MonogramFont.indexOf("DTGChino") != -1) {  //all BigPrints DTG will go here unless have special info  

        color1 = "A9fbbd4";
        color2 = "A9fbbd4";
        color3 = "A9fbbd4";
        mono_server = "stitchdynamics5"; 
      } else {
        logoColor = "";
        mono_server = "stitchdynamics5";
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

        firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=" + "&pers1=" + MonogramText + "&color1=" + color1 + "&pers2=" + MonogramText2 + "&color2=" + color2 + "&pers3=" + MonogramText3 + "&color3=" + color3 ;

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


            if (NonMonogramFont.slice(-2) == "no") {
              $("#MonogramText").attr('disabled', true);
            }

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
        $("#MonogramText").attr('disabled', false);
      } else if (MonogramText2 == "") {
        errorDetails = "input your Monogram";
        $("#MonogramText2").attr('disabled', false);
      } if (MonogramText3 == "") {
        errorDetails = "input your Monogram";
        $("#MonogramText3").attr('disabled', false);
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
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function () {
      if ((this.checked) && flagStop != "1" && MonogramText != "" && MonogramText2 != "" && MonogramText3 != "") {
        $('#btn add-to-cart').prop('disabled', false);
        $('input#MonogramText').on('click', uncheckAll);
        $('input#MonogramText2').on('click', uncheckAll);
        $('input#MonogramText3').on('click', uncheckAll);

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
    //$('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val('');
    $('input#MonogramText').val('');
    $('input#MonogramText2').val('');
    $('input#MonogramText3').val('');
    $("#threadcolor option:selected").attr('selected', false).first().attr('selected', true);
    //$('select[name="properties[Thread Color]"]').val('');
    $('select[name="properties[Font]"]').attr('selected', false).first().attr('selected', true);
    //-----------end   
    $("#monogramimage").val(''); //clear the monogram
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



