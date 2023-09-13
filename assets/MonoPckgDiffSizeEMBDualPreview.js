//------------------------------------------------------------------------
// Code for EMB package
//------------------------------------------------------------------------



$(function() {

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
  //Monogram EMB1
      var MonogramFontStyle_EMB1;
    var MonogramText_EMB1;
    var threadcolor_EMB1;
    var MonogramFont_EMB1;
    var mono_server_EMB1;
    var MonogramFont1_EMB1;
    var MonogramFont2_EMB1;
    var errorDetails1;   
 var flagStop_EMB1;
      
    var imagesize;
    var typingTimer;
    var doneTypingInterval = 1200;
    var errorDetails;        
   
    
    //End of Variables

          

    //-----------------------------------
    //Button form the main product page
    //-----------------------------------
      $('#preview-monogram').on('click', function(el) {
 
                    ShirtColor = $('input[name="single-option-selector-1"]:checked').val();
              //Monogram EMB        
                    MonogramText = $('input#MonogramText').val();        
                    threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
                    MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
                    //MonogramFontStyle = $("#MonogramFont option:selected").val().toLowerCase();

              //Monogram EMB1        
                    MonogramText_EMB1 = $('input#MonogramText_EMB1').val();        
                    threadcolor_EMB1 =  $("#threadcolor_EMB1 option:selected").attr("data-valcolor");
                    MonogramFont_EMB1 = $('select[name="properties[Monogram Style_EMB1]"]').find(':selected').attr('data-valname');
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
 						 if (MonogramFont.indexOf("101M") !=-1) {
                 			   $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");
                         } else {
                              $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");           
                          }

                        //--------------------------------------------
                        //--------DTG display setting    
                        //--------------------------------------------
                          if (MonogramFont_EMB1.indexOf("101M") !=-1) {
                               $("#EMB1monogramimage").html("<img id='EMB1monogramImg'   class='line-item-property__field  w3-padding-48 ' style='   object-fit: fill'   alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'   />");      
              
            			  } else {
                            		 $("#EMB1monogramimage").html("<img id='EMB1monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_white.png?11804'    />");
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
                 $('select#MonogramFont').on('change', function()
                {  delayExecute_EMB();
                });
      
                 $('select#MonogramFont_EMB1').on('change', function()
                { delayExecute_EMB1(); 
                });      
              
            
      			$('select#threadcolor_EMB1').on('change', function()
                {  delayExecute_EMB1();
                });
      
                 $('select#threadcolor').on('change', function()
                { delayExecute_EMB(); 
                });      
     
            //Detect values input in the textbox
         $('input#MonogramText_EMB1').on('keydown' ,function(event) 
          {delayExecute_EMB1(); });            
        
      //Detect values input in the textbox
         $('input#MonogramText').on('keydown' ,function(event) 
          {delayExecute_EMB(); });
    //-----------------------------------
    //------------------------------------End
    //-----------------------------------


    //-----------------------------------  
    //Detect keystroke and only execute after the user has finish typing
    //-----------------------------------
            function delayExecute_EMB1()
            {
                clearTimeout(typingTimer);
                    typingTimer = setTimeout(
                    function(){
                          GenerateMonogram_EMB1()
                    },
                    doneTypingInterval
                );
                return true;
            }
      
           function delayExecute_EMB()
            {
                clearTimeout(typingTimer);
                    typingTimer = setTimeout(
                    function(){
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
    function GenerateMonogram_EMB1()
    {
            //Get all the value passed

            //DTG Display
              MonogramText_EMB1 = $('input#MonogramText_EMB1').val();
              threadcolor_EMB1 =  $("#threadcolor_EMB1 option:selected").attr("data-valcolor");
              MonogramFont_EMB1 = $('select[name="properties[Monogram Style_EMB1]"]').find(':selected').attr('data-valname');   
              //MonogramFontStyle_DTG = $("#MonogramFont_DTG option:selected").val().toLowerCase();
 				//alert(MonogramFont_DTG);
 
      //reset the error display
        $("#validatorId_EMB1").html("");
        flagStop_EMB1 = "";
         $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');

      
      //Validation before creating the monogrammed.
      //-----------------------------------
    //Validation before creating the monogrammed.
      if(MonogramText_EMB1  !== "" &&  threadcolor_EMB1 !== ""  && typeof threadcolor_EMB1 !== 'undefined'  &&  MonogramFont_EMB1 !== "" && typeof MonogramFont_EMB1 !== 'undefined'){
            ////----DTG Server

                if (MonogramFont_EMB1.indexOf("EMB1") !=-1) {
                    logoColor_EMB1 = "";
                     mono_server_EMB1 = "stitchdynamics5";
                    MonogramFont2_EMB1 = MonogramFont_EMB1;
                                  //---------Filter of 2 letter styles--------------------------  
                           if (MonogramFont_EMB1.indexOf("EMB12") !=-1) {
                                       if(MonogramText_EMB1.length == 3) {
                                           errorDetails1 = "Must have 2 letters for this Style";
                                          $("#validatorId_EMB1").html(" "+ errorDetails1 +"").css("color", "red","font-style","italic");    
                                            flagStop_EMB1 = 1;  
                                       }else{
                                            //for guccicoffee only. not allowed one letter only
                                            if (MonogramFont_EMB1.indexOf("DTG2GucCof") !=-1) {
                                                   if(MonogramText_EMB1.length == 1) {
                                                       errorDetails1 = "Must have 2 letters for this Style";
                                                        $("#validatorId_EMB1").html(" "+ errorDetails1 +"").css("color", "red","font-style","italic");    
                                                      flagStop_EMB1 = 1;  
                                                   }
                                          }
                                       }
                                     
                                     
                                   }else{
                                     if  (MonogramText_EMB1.length == 2) {
                                           errorDetails1 = "Must have 3 letters for this Style";
                                          $("#validatorId_EMB1").html(" "+ errorDetails1 +"").css("color", "red","font-style","italic");    
                                           flagStop_EMB1 = 1; }
                                   } //-----------------------------------                    
         
                } else {
                  logoColor_EMB1 = "";
                  mono_server_EMB1 = "stitchdynamics5";
                   MonogramFont2_EMB1 = MonogramFont_EMB1;
                }

 
  


                
        //-----------------------------------
       ////---Details sent to lilo's server ^_^ ----------------------------
        //-----------------------------------
 
               if (flagStop_EMB1!="1") {       //------------------2 Letter
                        $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
                           $("#NextEmb").addClass('disabled').attr('disabled', 'disabled');
                          //----Set a loader image..
                         $("#EMB1monogramimage").html("<img id='EMB1monogramImg'   class='line-item-property__field    w3-padding-48 ' style=' object-fit: cover'  alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ajax-loading.gif?638'/>");
                     
                    Mono2_PckgLink ="https://"+ mono_server_EMB1 +".com/ecs/api/ecs/7?sku=" + MonogramFont2_EMB1 + "&style=" + logoColor_EMB1 + "&pers1=" + MonogramText_EMB1 + "&color1=" + threadcolor_EMB1 ;              
                 
                      //extract png file working
                                      //Passing of first link image only this will be visible
                                 $.get(Mono2_PckgLink, function(data, status){
                                          sendImgx = ("https://"+data);
                                             //$("#debug").html(sendImg);
                                             //alert("Data: " + data + "\nStatus: " + status);
           
                                            //passing of image and Image Display
                                            $("#EMB1monogramimage").html("<img id='EMB1monogramImg'   class='line-item-property__field    w3-padding-48 '  style='  object-fit: fill'   alt='Monogram here'  src='" + sendImgx + "'/>");
                                            $("#hiddenMonogramImage_EMB1").html("<input type='hidden'  name='properties[_MonogramImageEMB1]'    value='"+sendImgx+"' />");
           
                                             $("#EMB1monogramImg").on('load', function() {
                                               //----Enable the add to cart button once image was successfully loaded
                                            //   alert("Next enabled");
                                                 $('#NextEmb').prop('disabled', false);
                                              }) ;     
                                                        
                                     });
                    
                       }  return;   //------------------2 Letter             

    } else {
                //---These are blank values.

              if (MonogramText_EMB1 == ""    ) {
                errorDetails1 = "input your Monogram";
              }else if(threadcolor_EMB1 == "" ){
                errorDetails1 = "select a Threadcolor";
              }else {
                errorDetails1 = "select a Monogram Style";  
              }
                   $("#validatorId_EMB1").html("Please "+ errorDetails1 +"").css("color", "red","font-style","italic");
            }
              
    }






   //-----------------------------------
    //Generate the Customers monogram EMB
    //-----------------------------------  
    function GenerateMonogram_EMB()
    {
            //Get all the value passed
 
                MonogramText =  MonogramText_EMB1; //Pass the DTG text to EMB for same monogram 
                //MonogramText = $('input#MonogramText').val();
                threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
                MonogramFont =  $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');   
                MonogramFontStyle = $("#MonogramFont_EMB1 option:selected").val().toLowerCase();
                //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
                // MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');

      
   
           
      
      
          //reset the error display
              $("#validatorId").html("");
              flagStop = "";
              $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');

      
      //Validation before creating the monogrammed.
      //-----------------------------------
      if (MonogramText  !== "" &&  threadcolor !== ""  && typeof threadcolor !== 'undefined'  &&  MonogramFont !== "" && typeof MonogramFont !== 'undefined')   {
  
        
            if (MonogramFont.indexOf("LoungeSet101MFont") !=-1) {
                if (MonogramFontStyle=="mastercircle") { 
                    MonogramFont1 ="2-71M";                        
                } else if (MonogramFontStyle=="vine") {
                    MonogramFont1 ="3-71M";                           
                } else if (MonogramFontStyle=="fishtail") {
                    MonogramFont1 ="4-71M";                           
                } else if (MonogramFontStyle=="diamond") {
                    MonogramFont1 ="5-71M";                           
                } else if (MonogramFontStyle=="block") {
                    MonogramFont1 ="6-71M";                           
                } else if (MonogramFontStyle=="stacked") {
                    MonogramFont1 ="7-71M";                           
                } else if (MonogramFontStyle=="engraved") {
                    MonogramFont1 ="8-71M";                                         
                } else if (MonogramFontStyle=="antique two letter") {
                    MonogramFont1 ="10-71M";                                         
                } else if (MonogramFontStyle=="classic script") {
                    MonogramFont1 ="11-71M";                                         
                } else if (MonogramFontStyle=="tuscan") {
                    MonogramFont1 ="12-71M";                                         
                } else { //Circle
                    MonogramFont1 ="1-71M";                        
                }    
        
                logoColor = "";
                mono_server = "stitchdynamics5"; 
            } else if (MonogramFont.indexOf("58M") !=-1) {
                if (MonogramFontStyle=="mastercircle") { 
                    MonogramFont1 ="2-58M";                        
                } else if (MonogramFontStyle=="vine") {
                    MonogramFont1 ="3-58M";                           
                } else if (MonogramFontStyle=="fishtail") {
                    MonogramFont1 ="4-58M";                           
                } else if (MonogramFontStyle=="diamond") {
                    MonogramFont1 ="5-58M";                           
                } else if (MonogramFontStyle=="block") {
                    MonogramFont1 ="6-58M";                           
                } else if (MonogramFontStyle=="stacked") {
                    MonogramFont1 ="7-58M";                           
                } else if (MonogramFontStyle=="engraved") {
                    MonogramFont1 ="8-58M";                                         
                } else if (MonogramFontStyle=="antique two letter") {
                    MonogramFont1 ="10-58M";                                         
                } else if (MonogramFontStyle=="classic script") {
                    MonogramFont1 ="11-58M";                                         
                } else if (MonogramFontStyle=="tuscan") {
                    MonogramFont1 ="12-58M";                                         
                } else if (MonogramFontStyle=="fancy") {
                    MonogramFont1 ="23-58M";                                         
                } else if (MonogramFontStyle=="small block letters") {
                  MonogramFont1 ="6M-58M";                                         
                } else if (MonogramFontStyle=="tiny diagonal initials") {
                  MonogramFont1 ="9-58M";                                         
                } else { //Circle
                    MonogramFont1 ="1-58M";                        
                }    
              
                logoColor = "";
                mono_server = "stitchdynamics5"; 
            } else {
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

                    //extract png file working
                                      //Passing of first link image only this will be visible
                                 $.get(Mono1_PckgLink, function(data, status){
                                          sendImg = ("https://"+data);
                                             //$("#debug").html(sendImg);
                                             //alert("Data: " + data + "\nStatus: " + status);
           
                                            //passing of image and Image Display
                                            $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 '  style='  object-fit: fill'   alt='Monogram here'  src='" + sendImg + "'/>");
                                            $("#hiddenMonogramImage").html("<input type='hidden'  name='properties[_MonogramImage]'    value='"+sendImg+"' />");
           
                                         $("#monogramImg").on('load', function() {
                                           //----Enable the add to cart button once image was successfully loaded
                                           //alert("add to cart enabled");
                                       
                                           //-------UserAgreement changed 06/26 #JDG    
                                              addDivclassUserAgreement();
              					 			   $('#addtocart').prop('disabled', false).removeClass('disabled');
                                            //$('#addtocart').prop('disabled', false);
                                         //----UserAgreement changed 06/26 #JDG  -----End 
                                           
                                          }) ;
                                 });
                    
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
        $(".product__payment-container").prepend('<div  id="UserAgreement" style="font-size: 90%;display: contents;"><h4><input type="checkbox" id="uaID" name="UserAccept"/> I understand that <b><i>no changes</i></b> can be made to my order once it is submitted. I have reviewed every part of my order: item, color, size, monogram, monogram style, and thread color (if applicable) and confirm that it is entered correctly</h4></div> ');
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
    
        $("#btnClose").click(function() {
            //Reset Values
              $("#addtocart").addClass('disabled').attr('disabled', 'disabled'); 
          $("#NextEmb").addClass('disabled').attr('disabled', 'disabled'); 
             //$('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val('');
         $('input#MonogramText').val('');
                   $('input#MonogramText_EMB1').val('');
         $("#threadcolor option:selected").attr("data-valcolor").value = "";
          $("#threadcolor_EMB1 option:selected").attr("data-valcolor").value = "";
             //$('select[name="properties[Thread Color]"]').val('');
            $('select[name="properties[Monogram Style]"]').value = "";
          $('select[name="properties[Monogram Style_EMB1]"]').value = "";
            //-----------end   
            $("#monogramimage").val(''); //clear the monogram
          $("#EMB1monogramimage").val(''); //clear the monogram
          flagStop= "";
          flagStop_EMB1= "";
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
 
 

