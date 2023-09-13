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
      var threadcolor2;
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
                      MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
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
                  if (MonogramFont.indexOf("101MCL") !=-1) {
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC2.PNG?183'    />");  
                    
                  } else if (MonogramFont.indexOf("SB101M") != -1) {//MWL7302021
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/SB101M.png?v=1627896174'    />");
              
                  } else if (MonogramFont.indexOf("101M") !=-1) {
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");  
                    
                  } else if (MonogramFont.indexOf("17-") !=-1) {
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/17-71M.png?v=1649870578'    />");  
                    
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
              MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');   
              MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();
              //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
              // MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
              //For SB101M
              threadcolor2 =  $("#threadcolor2 option:selected").attr("data-valcolor");

    
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

                } else if (MonogramFont.indexOf("SB101M") !=-1) { 
                        MonogramFont1 ="SB101M";
                        MonogramFont2 ="SB101M"; 
              
                      logoColor = "";
                      mono_server = "stitchdynamics5"; 
                  } else if (MonogramFont.indexOf("SB101M2") !=-1) {   
                        MonogramFont1 ="SB101M2";
                        MonogramFont2 ="SB101M2"; 
                      
                      logoColor = "";
                      mono_server = "stitchdynamics5"; 
                  } else if (MonogramFont.indexOf("71-101") !=-1) {
                        if (MonogramFontStyle=="mastercircle") {
                                MonogramFont1 ="2-101M";
                                MonogramFont2 ="2-71M";                        
                            }else if (MonogramFontStyle=="vine") {
                                MonogramFont1 ="3-101M";
                                MonogramFont2 ="3-71M";                            
                            }else if (MonogramFontStyle=="fishtail") {
                                MonogramFont1 ="4-101M";
                                MonogramFont2 ="4-71M";                            
                            }else if (MonogramFontStyle=="diamond") {
                                MonogramFont1 ="5-101M";
                                MonogramFont2 ="5-71M";                            
                            }else if (MonogramFontStyle=="block") {
                                MonogramFont1 ="6-101M";
                                MonogramFont2 ="6-71M";                             
                            }else if (MonogramFontStyle=="stacked") {
                                MonogramFont1 ="7-101M";
                                MonogramFont2 ="7-71M";                            
                            } else if (MonogramFontStyle=="engraved") {
                                MonogramFont1 ="8-101M";
                                MonogramFont2 ="8-71M";                                            
                            } else if (MonogramFontStyle=="antique two letter") {//MWL10/7/21
                              	if(MonogramText.length == 3) {
                                  	errorDetails = "Must have 2 letters for this Style";
                                  	$("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                  	flagStop = 1;  
                                } else {
                                  	MonogramFont1 ="10-101M";
                                	MonogramFont2 ="10-71M";                             
                                }
                            } else if (MonogramFontStyle=="classic script") {//MWL10/7/2021
                                MonogramFont1 ="11-101M";
                                MonogramFont2 ="11-71M";                                            
                            } else if (MonogramFontStyle=="tuscan") {//MWL10/7/2021
                                MonogramFont1 ="12-101M";
                                MonogramFont2 ="12-71M";                                            
                            } else { //Circle
                                MonogramFont1 ="1-101M";
                                MonogramFont2 ="1-71M";                            
                            }    
                    
                        logoColor = "";
                        mono_server = "stitchdynamics5"; 
                   
 					} else if (MonogramFont.indexOf("71-89") !=-1) {
                        if (MonogramFontStyle=="mastercircle") {
                                MonogramFont1 ="2-89M";
                                MonogramFont2 ="2-71M";                        
                            }else if (MonogramFontStyle=="vine") {
                                MonogramFont1 ="3-89M";
                                MonogramFont2 ="3-71M";                            
                            }else if (MonogramFontStyle=="fishtail") {
                                MonogramFont1 ="4-89M";
                                MonogramFont2 ="4-71M";                            
                            }else if (MonogramFontStyle=="diamond") {
                                MonogramFont1 ="5-89M";
                                MonogramFont2 ="5-71M";                            
                            }else if (MonogramFontStyle=="block") {
                                MonogramFont1 ="6-89M";
                                MonogramFont2 ="6-71M";                             
                            }else if (MonogramFontStyle=="stacked") {
                                MonogramFont1 ="7-89M";
                                MonogramFont2 ="7-71M";                            
                            }else if (MonogramFontStyle=="engraved") {
                                MonogramFont1 ="8-89M";
                                MonogramFont2 ="8-71M";                                            
                            } else if (MonogramFontStyle=="antique two letter") {//MWL10/7/2021
                                MonogramFont1 ="10-89M";
                                MonogramFont2 ="10-71M";                                            
                            } else if (MonogramFontStyle=="classic script") {//MWL10/7/2021
                                MonogramFont1 ="11-89M";
                                MonogramFont2 ="11-71M";                                            
                            } else if (MonogramFontStyle=="tuscan") {//MWL10/7/2021
                                MonogramFont1 ="12-89M";
                                MonogramFont2 ="12-71M";                                            
                            } else { //Circle
                                MonogramFont1 ="1-89M";
                                MonogramFont2 ="1-71M";                            
                            }    
                    
                        logoColor = "";
                        mono_server = "stitchdynamics5";                    
                } else if (MonogramFont.indexOf("101M") !=-1) {
                        if (MonogramFontStyle=="mastercircle") {
                                MonogramFont1 ="2-101M";
                                MonogramFont2 ="2-101M";                        
                            } else if (MonogramFontStyle=="vine") {
                                MonogramFont1 ="3-101M";
                                MonogramFont2 ="3-101M";                            
                            } else if (MonogramFontStyle=="fishtail") {
                                MonogramFont1 ="4-101M";
                                MonogramFont2 ="4-101M";                            
                            } else if (MonogramFontStyle=="diamond") {
                                MonogramFont1 ="5-101M";
                                MonogramFont2 ="5-101M";                            
                            } else if (MonogramFontStyle=="block") {
                                MonogramFont1 ="6-101M";
                                MonogramFont2 ="6-101M";                             
                            } else if (MonogramFontStyle=="stacked") {
                                MonogramFont1 ="7-101M";
                                MonogramFont2 ="7-101M";                            
                            } else if (MonogramFontStyle=="engraved") {
                                MonogramFont1 ="8-101M";
                                MonogramFont2 ="8-101M";                                            
                            } else if (MonogramFontStyle=="antique two letter") {//MWL10/7/21
                              	if(MonogramText.length == 3) {
                                  errorDetails = "Must have 2 letters for this Style";
                                  $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                  flagStop = 1;  
                                } else {
                                	MonogramFont1 ="10-101M";
                                	MonogramFont2 ="10-101M";
                                }
                            } else if (MonogramFontStyle=="classic script") {//MWL10/7/2021
                                MonogramFont1 ="11-101M";
                                MonogramFont2 ="11-101M";                                            
                            } else if (MonogramFontStyle=="tuscan") {//MWL10/7/2021
                                MonogramFont1 ="12-101M";
                                MonogramFont2 ="12-101M";                                            
                            } else { //Circle
                                MonogramFont1 ="1-101M";
                                MonogramFont2 ="1-101M";                            
                            }    
                    
                        logoColor = "";
                        mono_server = "stitchdynamics5";                    
                } else if (MonogramFont.indexOf("17-") !=-1) {  
                        MonogramFont1 ="17-71M";
                        MonogramFont2 ="17-71M";  
                                  
                    logoColor = "";
                    mono_server = "stitchdynamics5"; 
                }  else {
                  logoColor = "";
                  mono_server = "stitchdynamics5";
                }

      

       //For Monograms without Logo Colors but requires Custom Colors
        if (MonogramFont.indexOf("SB101M2") != -1) {  //MWL08062021
          Color1 = threadcolor2 + "," + threadcolor;
          mono_server = "stitchdynamics5";
  
          if (MonogramText.length == 3) {
            errorDetails = "Must have 2 letters for this Style";
            $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
            flagStop = 1;
          }
        
        } else if (MonogramFont.indexOf("SB101M") != -1) {  //MWL08062021
          Color1 = threadcolor2 + "," + threadcolor;
          mono_server = "stitchdynamics5";
  
          if (MonogramText.length == 2) {
            errorDetails = "Must have 3 letters for this Style";
            $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
            flagStop = 1;
          }
        } else {
          Color1 = threadcolor;
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
         
            Mono1_PckgLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont1 + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 ;
            Mono2_PckgLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont2 + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + Color1 ;              


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
              errorDetails = "select a Monogram Style";  
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
      $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, Monogram Style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
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
  $('select[name="properties[Monogram Style]"] option').attr('selected', false).first().attr('selected', true);
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


