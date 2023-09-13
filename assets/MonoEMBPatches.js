//-----------------------------------
//EMB
//-----------------------------------
$(function() {

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
  var bordercolor;
  var heartcolor;
  var pawcolor;
  //End of Variables



  //-----------------------------------
  //Button from the main product page
  //-----------------------------------
  $('#preview-monogram').on('click', function(el) {
    ShirtColor = $('input[name="single-option-selector-1"]:checked').val();


    //old monogramtext check effect $('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val();
    //old threadcolor = $('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramText = $('input#MonogramText').val();        
    threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");

    MonogramFont = $('select[name="properties[Letter Patch Style]"]').find(':selected').attr('data-valname');

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
    if (MonogramFont.indexOf("101MCL") !=-1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC2.PNG?183'    />");  

    } else if (MonogramFont.indexOf("Patchapp") !=-1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatchPreviewNew.jpg?v=1660234504'    />");

    } else if (MonogramFont.indexOf("patchapp") !=-1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatchPreviewNew.jpg?v=1660234504'    />");

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
  $('select').on('change', function()
                 {		
    delayExecute(); 
  });

  //Detect values input in the textbox
  $('input#MonogramText').on('keydown' ,function(event) 
                             { 
    delayExecute(); 

  });

  //-----------------------------------  
  //Detect keystroke and only execute after the user has finish typing
  //-----------------------------------
  function delayExecute()
  {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(
      function(){
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
  function GenerateMonogram()
  {
    //Get all the value passed
    //MonogramText = $('input#MonogramText').val();
    threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
    //for colors on the logo
    bordercolor = $("#bordercolor option:selected").attr("data-valcolor");//MWL5102021
    heartcolor = $("#heartcolor option:selected").attr("data-valcolor");//MWL5102021
    pawcolor = $("#pawcolor option:selected").attr("data-valcolor");//MWL5102021
    //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramFont = $('select[name="properties[Letter Patch Style]"]').find(':selected').attr('data-valname');

    //For No Monograms SKU, checks last 2 letters. 
    if (MonogramFont.slice(-2) == "No") {
      MonogramText = "***";
      $("#MonogramText").val('');
    } else if (MonogramFont.indexOf("101MBeMerry") !=-1){//No Monogram with color change template MWL04112021
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
    if (MonogramText  !== "" &&  threadcolor !== ""  && typeof threadcolor !== 'undefined'  &&  MonogramFont !== "" && typeof MonogramFont !== 'undefined')   {



      if (MonogramFont.indexOf("101MCL") !=-1) {
        logoColor = "&Logocolors=A00704a,Affffff";
        mono_server = "stitchdynamics5";

      } else {
        logoColor = "";
        mono_server = "stitchdynamics5";
      }


      //For Monograms without Logo Colors but requires Custom Colors
      if (MonogramFont.indexOf("SB101M2") !=-1) {  //MWL08062021
        Color1 = threadcolor+","+bordercolor;
        mono_server = "stitchdynamics5";

        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
          flagStop = 1;  
        }
      } else if (MonogramFont.indexOf("patchapp") !=-1) {  //MWL08062021
        	Color1 = "Aff55e2,"+threadcolor;  
       } else if (MonogramFont.indexOf("Patchapp") !=-1) {  //MWL08062021
        	Color1 = "Aff55e2,"+threadcolor;  
       }  else {
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
      }
      
       

           

      //-----------------------------------
      ////---Details sent to lilo's server ^_^ ----------------------------
      //-----------------------------------

      if (flagStop!="1") {       //------------------2 Letter

        //-------UserAgreement changed 06/26 #JDG            
        $("#UserAgreement").remove();
        //-------UserAgreement changed 06/26 #JDG  

        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
        //----Set a loader image..
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");

        firstMonoLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 ;

        //extract png file working
        $.get(firstMonoLink, function(data, status){
          //alert("Data: " + data + "\nStatus: " + status);
          sendImg = ("https://"+data);
          //$("#debug").html(sendImg);
          //passing of image and Image Display
          if (MonogramFont.indexOf("Patchapp") !=-1) {
              $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatchPreviewNew.jpg?v=1660234504'    />");

          } else if (MonogramFont.indexOf("patchapp") !=-1) {
            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatchPreviewNew.jpg?v=1660234504'    />");

          }

          $("#hiddenMonogramImage").html("<input type='hidden'  name='properties[_MonogramImage]'    value='"+sendImg+"' />");
          $("#monogramImg").on('load', function() {
            //----Enable the add to cart button once image was successfully loaded
            //alert("add to cart enabled");

            //-------UserAgreement changed 06/26 #JDG    
            addDivclassUserAgreement();
            $('#addtocart').prop('disabled', false).removeClass('disabled');
            //$('#addtocart').prop('disabled', false);
            //----UserAgreement changed 06/26 #JDG  -----End 

            //For No Monograms SKU, checks last 2 letters
            if (MonogramFont.slice(-2) == "No") {
              $("#MonogramText").attr('disabled', true);
            }

          }) ;
        });
        /////---------Ending-----------------------  

        // temp disable to check the missing images in the server
        //  $('#addtocart').prop('disabled', false);

      }  return;   //------------------2 Letter             

    } else {
      //---These are blank values.

      if (MonogramText == ""    ) {
        errorDetails = "input your Monogram";
        $("#MonogramText").attr('disabled', false);//For No Monograms SKU
      }else if(threadcolor == "" ){
        errorDetails = "select a Threadcolor";
      }else {
        errorDetails = "select a Letter Patch Style";  
      }
      $("#validatorId").html("Please "+ errorDetails +"").css("color", "red","font-style","italic");
    }

  }

  //----UserAgreement changed 06/26 #JDG  -----Start       
  //-------Function created for adding of divclass to avoid changing the all 100+ html templates 
  function addDivclassUserAgreement()
  {  //replacing the code due to typo error
    $(".w3-containerw3-center").addClass("w3-container w3-center");
    $(".w3-containerw3-center").removeClass("w3-containerw3-center");


    $(".product__payment-container").css("display", "contents");
    $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, Letter Patch style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
    $('#uaID').on('change', function()
                  { 
      if ((this.checked)&&flagStop!="1"&&MonogramText != "") {
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

  $("#btnClose").click(function() {
    //Reset Values
    $("#addtocart").addClass('disabled').attr('disabled', 'disabled'); 
    $('input#MonogramText').val('');
    $("#threadcolor option:selected").attr('selected', false).first().attr('selected', true);
    $('select[name="properties[Letter Patch Style]"]').attr('selected', false).first().attr('selected', true);
    //-----------end   
    $("#monogramimage").val(''); //clear the monogram
    flagStop= "";
    ShirtColor = "";



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


