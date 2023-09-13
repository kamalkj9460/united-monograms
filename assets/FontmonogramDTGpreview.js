//-----------------------------------
//DTG
//-----------------------------------
setTimeout(function(){

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
  var bg;
  var NonMonogramFont;
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

    if (MonogramFont.indexOf("DTGHeartSlv") != -1) {// MWL02/17/2022  
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHeartSlv.png?v=1646549554'    />");

    } else if (MonogramFont.indexOf("DTGPHeartSlv") != -1) {// MWL02/17/2022  
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPHeartSlv.png?v=1646549565'    />");

    } else if (MonogramFont.indexOf("DTGSmileySlv") != -1) {// MWL02/17/2022  
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSmileySlv.png?v=1646549577'    />");
    
    }  else if (MonogramFont.indexOf("DTGTeachBlock")  !=-1) {// MWL04302022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeach.png?v=1651324501'    />");                                              

    }  else if (MonogramFont.indexOf("DTGPSLFront")  !=-1) {// MWL08022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPSLFront.png?v=1659451043'    />");                                              

    }  else if (MonogramFont.indexOf("DTGCoolMomEst")  !=-1) {// MWL08022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoolMomest_61a8c5f9-6575-452c-b1c7-64d9e04fa5b7.png?v=1659459239'    />");                                              

    }  else if (MonogramFont.indexOf("DTGSkellyCoffee")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSkellyCoffee.png?v=1662099623'    />");                                              

    }  else if (MonogramFont.indexOf("DTGNurseBlock")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNurseBlock.png?v=1664769352'    />");                                              

    }  else if (MonogramFont.indexOf("DTGSpecialDate")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGSpecialDate.png?v=1673231446'    />");                                              

    }  else if (MonogramFont.indexOf("DTGSelfLove")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGSelfLove.png?v=1673231434'    />");                                              

    }  else if (MonogramFont.indexOf("DTGPleaseBring")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGPleaseBring.png?v=1677173234'    />");                                              

    } else if (MonogramFont.indexOf("DTGJetLag")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGJetLag.png?v=1677173223'    />");                                              

    } else if (MonogramFont.indexOf("DTGStripePhone")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGStripePhoneGr.png?v=1677173248'    />");                                              

    } else if (MonogramFont.indexOf("DTGCheckPhone")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGCheckPhonePink.png?v=1677173190'    />");                                              

    } else if (MonogramFont.indexOf("DTGBookCoff")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGBookCoff.png?v=1677173170'    />");                                              

    } else if (MonogramFont.indexOf("DTGMIYGram")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGMIYGramPink.png?v=1681488323'    />");                                              

    } else if (MonogramFont.indexOf("DTGMIYMama")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGMIYMamaPink.png?v=1681488328'    />");                                              

    } else if (MonogramFont.indexOf("DTGCheckPencil")  !=-1) {// MWL09022022 
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCheckPencil.png?v=1683523057'    />");                                              

    } else if (MonogramFont.indexOf("DTGFootballNumb")  !=-1) {// MWL072423
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFootballNumb.png?v=1690194653'    />");                                              

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
    //MonogramText = $('input#MonogramText').val();
    threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
    //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
    NonMonogramFont = MonogramFont.toLowerCase();
    if (NonMonogramFont.slice(-2) == "no") {
      MonogramText = "***";
      $("#MonogramText").val('');
    } else {
      MonogramText = $('input#MonogramText').val();
    }

    //reset the error display
    $("#validatorId").html("");
    flagStop = "";
    $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');


    //Validation before creating the monogrammed.
    //-----------------------------------
    if (MonogramText !== "" && threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined') {



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

        } else if (MonogramFont.indexOf("BlockNO") !=-1) {//added to OVERWRITE BLOCK as just No on the end does not suffice
          MonogramText = "**";
          $("#MonogramText").val('');

        } else if (MonogramFont.indexOf("DTGPSLFront") !=-1) {//For DTGPSLFront

        } else if (MonogramFont.indexOf("DTGFootballNumb") !=-1) {//For DTGPSLFront

        } else if (MonogramFont.indexOf("Block") != -1) {//added to allow Block to load
          if (MonogramText.length == 2) {
          } else {
            if (MonogramText.length == 3) {
              errorDetails = "Must have 2 letters for this Style";
              $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
              flagStop = 1;
            }
          }

        } else if (MonogramFont.indexOf("Bold") != -1) {//added to allow Block to load
          if (MonogramText.length == 2) {
          } else {
            if (MonogramText.length == 3) {
              errorDetails = "Must have 2 letters for this Style";
              $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
              flagStop = 1;
            }
          }

        } else if (MonogramFont.indexOf("DTGJetLag") != -1) {//added to allow DTGJetLag
          if (MonogramText.length == 2) {
          }

        } else if (MonogramFont.slice(-2) == "No") {//added to allow no monogram for 2 to load
          MonogramText = "**";
          $("#MonogramText").val('');

        } else if (MonogramFont.indexOf("DTG2") != -1) {
          if (MonogramText.length == 3) {
            errorDetails = "Must have 2 letters for this Style";
            $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
            flagStop = 1;
          } else {
            //for guccicoffee only. not allowed one letter only
            if (MonogramFont.indexOf("DTG2GucCof") != -1) {
              if (MonogramText.length == 1) {
                errorDetails = "Must have 2 letters for this Style";
                $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
                flagStop = 1;
              }
            }

            if ((MonogramFont.indexOf("DTG2FirstIceCof") != -1) || (MonogramFont.indexOf("DTG2Dunkin") != -1)) {
              threadcolor = "Aee7140,Af03c7d";

            }

          }


        } else {
          if (MonogramText.length == 2) {
            errorDetails = "Must have 3 letters for this Style";
            $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
            flagStop = 1;
          }
        } //-----------------------------------


      } else if (MonogramFont.indexOf("10-101M") != -1) {
        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }

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

        firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + threadcolor;

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
    //$('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val('');
    $('input#MonogramText').val('');
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



