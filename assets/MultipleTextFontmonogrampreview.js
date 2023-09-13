//-----------------------------------
//EMB
//-----------------------------------
$(function () {

  //Start variables needed:
  var debug;
  var ShirtColor;
  var firstMonoLink;
  var secondMonoLink;
  var secondMonoLinkImage;
  var soldMonoLink;
  var sendImg;
  var soldImage;
  var extractImage;
  var threadcolor;
  var MonogramFont;
  var imagesize;
  var typingTimer;
  var doneTypingInterval = 1200;
  var mono_server;
  var errorDetails;
  var flagStop;
  var bordercolor;
  var heartcolor;
  var pawcolor;
  
  //One Name
  var MonogramText; 
  //Two Names
  var MonogramText1; 
  //Three Names
  var MonogramText2; 
  //Four Names
  var MonogramText3; 
  //Five Names
  var MonogramText4; 



  //-----------------------------------
  //Button from the main product page
  //-----------------------------------
  $('#preview-monogram').on('click', function (el) {
  
    //One Name
    MonogramText = $('input#MonogramText').val();
    threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
    MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
  
    //Two Names
    MonogramText1 = $('input#MonogramText1').val();
  
    //Three Names
    MonogramText2 = $('input#MonogramText2').val();
  
    //Four Names
    MonogramText3 = $('input#MonogramText3').val();
  
    //Five Names
    MonogramText4 = $('input#MonogramText4').val();

    //-----------------------------------
    ///Trigger call to monogram's default value
    //-----------------------------------     
    //--------------------------------------------
    //--------Different default display setting    
    //Removed w3-margin  to center the big image
    //--------------------------------------------
    if (MonogramFont.indexOf("101MHeartName") != -1) {//MWL02262022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MHeartName1.png?v=1681914164'    />");   
      $("#MonogramText1").hide(); 
      $("#Name1").hide();
      $("#MonogramText2").hide(); 
      $("#Name2").hide();
      $("#MonogramText3").hide(); 
      $("#Name3").hide();
      $("#MonogramText4").hide(); 
      $("#Name4").hide();
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
  
  //Detect values input in the One Name textbox
  $('input#MonogramText').on('keydown', function (event) {
    delayExecute();

  });

  //Detect values input in the Two Name textbox
  $('input#MonogramText1').on('keydown', function (event) {
    delayExecute();

  });

  //Detect values input in the Three Name textbox
  $('input#MonogramText2').on('keydown', function (event) {
    delayExecute();

  });

  //Detect values input in the Four Name textbox
  $('input#MonogramText3').on('keydown', function (event) {
    delayExecute();

  });

  //Detect values input in the One Name textbox
  $('input#MonogramText4').on('keydown', function (event) {
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
    MonogramText1 = $('input#MonogramText1').val();
    MonogramText2 = $('input#MonogramText2').val();
    MonogramText3 = $('input#MonogramText3').val();
    MonogramText4 = $('input#MonogramText4').val();
    threadcolor = $("#threadcolor option:selected").attr("data-valcolor");
    MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');

    //reset the error display
    $("#validatorId").html("");
    flagStop = "";
    $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');


    //Validation before creating the monogrammed.
    //-----------------------------------
    if (threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined') {

      if (MonogramFont == "101MHeartName1") {  
        logoColor = "&Logocolors=" + threadcolor;
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";   
        $("#MonogramText1").hide(); 
        $("#Name1").hide();
        $("#MonogramText2").hide(); 
        $("#Name2").hide();
        $("#MonogramText3").hide(); 
        $("#Name3").hide();
        $("#MonogramText4").hide(); 
        $("#Name4").hide();
        $("#MonogramText1").prop('disabled', true); 
        $("#MonogramText2").prop('disabled', true); 
        $("#MonogramText3").prop('disabled', true); 
        $("#MonogramText4").prop('disabled', true); 
      
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

      } else if (MonogramFont == "101MHeartName2") { 
        logoColor = threadcolor;
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
        $("#MonogramText1").prop('disabled', false); 
        $("#MonogramText2").prop('disabled', true); 
        $("#MonogramText3").prop('disabled', true); 
        $("#MonogramText4").prop('disabled', true);    
        $("#MonogramText2").hide(); 
        $("#Name2").hide();
        $("#MonogramText3").hide(); 
        $("#Name3").hide();
        $("#MonogramText4").hide(); 
        $("#Name4").hide();
        $("#MonogramText1").show();
        $("#Name1").show();
      
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
  
          firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=&Logocolors=" + logoColor + "," + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 + "&pers2=" + MonogramText1 + "&color2=" + Color1;
  
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
              addDivclassUserAgreement1();
              $('#addtocart').prop('disabled', false).removeClass('disabled');
              //$('#addtocart').prop('disabled', false);
              //----UserAgreement changed 06/26 #JDG  -----End  
  
            });
          });
          /////---------Ending-----------------------  
  
          // temp disable to check the missing images in the server
          //  $('#addtocart').prop('disabled', false);
  
        } return;   //------------------2 Letter     

       } else if (MonogramFont == "101MHeartName3") { 
        logoColor = threadcolor;
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
        $("#MonogramText1").prop('disabled', false);
        $("#MonogramText2").prop('disabled', false);
        $("#MonogramText3").prop('disabled', true); 
        $("#MonogramText4").prop('disabled', true); 
        $("#MonogramText3").hide(); 
        $("#Name3").hide();
        $("#MonogramText4").hide(); 
        $("#Name4").hide();
        $("#MonogramText1").show();
        $("#Name1").show();
        $("#MonogramText2").show();
        $("#Name2").show();
      
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
  
          firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=&Logocolors=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 + "&pers2=" + MonogramText1 + "&color2=" + Color1 + "&pers3=" + MonogramText2 + "&color3=" + Color1;
  
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
              addDivclassUserAgreement2();
              $('#addtocart').prop('disabled', false).removeClass('disabled');
              //$('#addtocart').prop('disabled', false);
              //----UserAgreement changed 06/26 #JDG  -----End  
  
            });
          });
          /////---------Ending-----------------------  
  
          // temp disable to check the missing images in the server
          //  $('#addtocart').prop('disabled', false);
  
        } return;   //------------------2 Letter     

       } else if (MonogramFont == "101MHeartName4") { 
        logoColor = threadcolor;
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
        $("#MonogramText1").prop('disabled', false);
        $("#MonogramText2").prop('disabled', false);
        $("#MonogramText3").prop('disabled', false); 
        $("#MonogramText4").prop('disabled', true); 
        $("#MonogramText3").show(); 
        $("#Name3").show();
        $("#MonogramText4").hide(); 
        $("#Name4").hide();
        $("#MonogramText1").show();
        $("#Name1").show();
        $("#MonogramText2").show();
        $("#Name2").show();
      
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
  
          firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=&Logocolors=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 + "&pers2=" + MonogramText1 + "&color2=" + Color1 + "&pers3=" + MonogramText2 + "&color3=" + Color1 + "&pers4=" + MonogramText3 + "&color4=" + Color1;
  
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
              addDivclassUserAgreement3();
              $('#addtocart').prop('disabled', false).removeClass('disabled');
              //$('#addtocart').prop('disabled', false);
              //----UserAgreement changed 06/26 #JDG  -----End  
  
            });
          });
          /////---------Ending-----------------------  
  
          // temp disable to check the missing images in the server
          //  $('#addtocart').prop('disabled', false);
  
        } return;   //------------------2 Letter     

       } else if (MonogramFont == "101MHeartName5") { 
        logoColor = threadcolor;
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
        $("#MonogramText1").prop('disabled', false);
        $("#MonogramText2").prop('disabled', false);
        $("#MonogramText3").prop('disabled', false); 
        $("#MonogramText4").prop('disabled', false); 
        $("#MonogramText3").show(); 
        $("#Name3").show();
        $("#MonogramText4").show(); 
        $("#Name4").show();
        $("#MonogramText1").show();
        $("#Name1").show();
        $("#MonogramText2").show();
        $("#Name2").show();
      
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
  
          firstMonoLink = "https://" + mono_server + ".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=&Logocolors=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 + "&pers2=" + MonogramText1 + "&color2=" + Color1 + "&pers3=" + MonogramText2 + "&color3=" + Color1 + "&pers4=" + MonogramText3 + "&color4=" + Color1 + "&pers5=" + MonogramText4 + "&color5=" + Color1;
  
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
              addDivclassUserAgreement4();
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
        logoColor = "";
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
      }

        

    } else {
      //---These are blank values.

      if (MonogramText == "") {
        errorDetails = "input your Monogram";
        $("#MonogramText").attr('disabled', false);//For No Monograms SKU
      } else if (threadcolor == "") {
        errorDetails = "select a Threadcolor";
      } else {
        errorDetails = "select Your Pick";
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

  //----UserAgreement changed 06/26 #JDG  -----Start       
  //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
  function addDivclassUserAgreement1() {  //replacing the code due to typo error
    $(".w3-containerw3-center").addClass("w3-container w3-center");
    $(".w3-containerw3-center").removeClass("w3-containerw3-center");


    $(".product__payment-container").css("display", "contents");
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function () {
      if ((this.checked) && flagStop != "1" && MonogramText != "" && MonogramText1 != "") {
        $('#btn add-to-cart').prop('disabled', false);
        $('input#MonogramText').on('click', uncheckAll);
        $('input#MonogramText1').on('click', uncheckAll);

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

  //----UserAgreement changed 06/26 #JDG  -----Start       
  //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
  function addDivclassUserAgreement2() {  //replacing the code due to typo error
    $(".w3-containerw3-center").addClass("w3-container w3-center");
    $(".w3-containerw3-center").removeClass("w3-containerw3-center");


    $(".product__payment-container").css("display", "contents");
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function () {
      if ((this.checked) && flagStop != "1" && MonogramText != "" && MonogramText1 != "" && MonogramText2 != "") {
        $('#btn add-to-cart').prop('disabled', false);
        $('input#MonogramText').on('click', uncheckAll);
        $('input#MonogramText1').on('click', uncheckAll);
        $('input#MonogramText2').on('click', uncheckAll);

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

  //----UserAgreement changed 06/26 #JDG  -----Start       
  //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
  function addDivclassUserAgreement3() {  //replacing the code due to typo error
    $(".w3-containerw3-center").addClass("w3-container w3-center");
    $(".w3-containerw3-center").removeClass("w3-containerw3-center");


    $(".product__payment-container").css("display", "contents");
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function () {
      if ((this.checked) && flagStop != "1" && MonogramText != "" && MonogramText1 != "" && MonogramText2 != "" && MonogramText3 != "") {
        $('#btn add-to-cart').prop('disabled', false);
        $('input#MonogramText').on('click', uncheckAll);
        $('input#MonogramText1').on('click', uncheckAll);
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

  //----UserAgreement changed 06/26 #JDG  -----Start       
  //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
  function addDivclassUserAgreement4() {  //replacing the code due to typo error
    $(".w3-containerw3-center").addClass("w3-container w3-center");
    $(".w3-containerw3-center").removeClass("w3-containerw3-center");


    $(".product__payment-container").css("display", "contents");
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function () {
      if ((this.checked) && flagStop != "1" && MonogramText != "" && MonogramText1 != "" && MonogramText2 != "" && MonogramText3 != "" && MonogramText4 != "") {
        $('#btn add-to-cart').prop('disabled', false);
        $('input#MonogramText').on('click', uncheckAll);
        $('input#MonogramText1').on('click', uncheckAll);
        $('input#MonogramText2').on('click', uncheckAll);
        $('input#MonogramText3').on('click', uncheckAll);
        $('input#MonogramText4').on('click', uncheckAll);

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
    $('input#MonogramText').val('');
    $('input#MonogramText1').val('');
    $('input#MonogramText2').val('');
    $('input#MonogramText3').val('');
    $('input#MonogramText4').val('');
    $("#threadcolor option:selected").attr('selected', false).first().attr('selected', true); 
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


