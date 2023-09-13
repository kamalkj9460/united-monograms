//------------------------------------------------------------------------
// Code for EMB package
//------------------------------------------------------------------------



    $(function() {

      //Start variables needed:
        var debug; 
        var ShirtColor;
        var MonogramFontStyle;
        var Mono1_PckgLink;
        var Mono2_PckgLink;
        var secondMonoLinkImage;
        var soldMonoLink;
        var sendImg;
        var sendImg2;
        var MonogramText;
        var threadcolor;
        var MonogramFont;
        var imagesize;
        var typingTimer;
        var doneTypingInterval = 1200;
        var mono_server;
        var errorDetails;        
        var flagStop;
      //End of Variables

          

    //-----------------------------------
    //Button form the main product page
    //-----------------------------------
      $('#preview-monogram').on('click', function(el) {
                        //old monogramtext check effect $('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val();
                        //old threadcolor = $('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
                        ShirtColor = $('input[name="single-option-selector-1"]:checked').val();
                        MonogramText = $('input#MonogramText').val();        
                        threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
                        MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
                        MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();
                    
                
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
                        if (MonogramFont.indexOf("13-101M") !=-1) {
                          $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/15-101M.png?v=1645854292'    />");  
                        } else {
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
    //ENDButton form the main product page
    //-----------------------------------



   //-----------------------------------
    //---------Check all the selections to trigger the Generate monogram
            //------------------------------------Start
            //Detect changes in all the select buttons
                 $('select').on('change', function()
                { delayExecute(); });
              
            //Detect values input in the textbox
                 $('input#MonogramText').on('keydown' ,function(event) 
                  {delayExecute(); });
    //-----------------------------------
    //------------------------------------End
    //-----------------------------------


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

                MonogramText = $('input#MonogramText').val();
                threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
                MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');   
                MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();
                //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
                // MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');

      
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

                  } else if (MonogramFont.indexOf("13-101M") !=-1) {
                                MonogramFont1 ="13-101M";
                                MonogramFont2 ="13-101M";        
                                logoColor = "";
                                mono_server = "stitchdynamics5";                       
                  } else if (MonogramFont.indexOf("14-101M") !=-1) {
                                MonogramFont1 ="14-101M";
                                MonogramFont2 ="14-101M";         
                                logoColor = "";
                                mono_server = "stitchdynamics5";                          
                  } else if (MonogramFont.indexOf("15-101M") !=-1) {
                                MonogramFont1 ="15-101M";
                                MonogramFont2 ="15-101M";       
                                logoColor = "";
                                mono_server = "stitchdynamics5";                            
                 } else if (MonogramFont.indexOf("16-101M") !=-1) { //Tall (Caps Only)
                                MonogramFont1 ="16-101M";
                                MonogramFont2 ="16-101M";       
                                logoColor = "";
                                mono_server = "stitchdynamics5";                           
                }  else {
                    logoColor = "";
                    mono_server = "stitchdynamics5";
                }
        
        			
                
        //-----------------------------------
       ////---Details sent to lilo's server ^_^ ----------------------------
        //-----------------------------------
 
     if (flagStop!="1") {       //------------------2 Letter
              $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
       
       //-------UserAgreement changed 06/26 #JDG            
            $("#UserAgreement").remove();
		//-------UserAgreement changed 06/26 #JDG
       
                //----Set a loader image..
               $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");
           
              Mono1_PckgLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont1 + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + threadcolor ;
              Mono2_PckgLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont2 + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + threadcolor ;              
 

          //extract png file working
                            //Passing of first link image only this will be visible
                       $.get(Mono1_PckgLink, function(data, status){
                                sendImg = ("https://"+data);
                                   //$("#debug").html(sendImg);
                                   //alert("Data: " + data + "\nStatus: " + status);
 
                                  //passing of image and Image Display
                                  $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 '  style='  object-fit: fill'   alt='Monogram here'  src='" + sendImg + "'/>");
                                  $("#hiddenMonogramImage").html("<input type='hidden'  name='properties[_MonogramImage]'    value='"+sendImg+"' />");

                            //Passing of second link image not visible but sent to server     
                            $.get(Mono2_PckgLink, function(data, status){
                                  sendImgx = ("https://"+data);
                                  $("#hiddenMonogramImage2").html("<input type='hidden'  name='properties[_MonogramImage2]'    value='"+sendImgx+"' />");
                               });

                               $("#monogramImg").on('load', function() {
                                 //----Enable the add to cart button once image was successfully loaded
                                 //alert("add to cart enabled");
                                    $('#btn add-to-cart').prop('disabled', false);
                                 
                             //-------UserAgreement changed 06/26 #JDG    
                                 addDivclassUserAgreement();
              					 $('#addtocart').prop('disabled', false).removeClass('disabled');
                                 //$('#addtocart').prop('disabled', false);
                            //----UserAgreement changed 06/26 #JDG  -----End
                                 
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
              }else if(threadcolor == "" ){
                errorDetails = "select a Threadcolor";
              }else {
                errorDetails = "select a Font";  
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
        $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, font, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
  		 $('#uaID').on('change', function()
                  { 
                     if ((this.checked)&&flagStop!="1") {
                          $('#btn add-to-cart').prop('disabled', false);
                      } else {
                        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled'); 
                      }
                  }
                );}
          
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
 

