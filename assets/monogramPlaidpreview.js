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
        var PlaidPattern;
          var MonogramFont;
          var imagesize;
          var typingTimer;
          var doneTypingInterval = 1200;
            var mono_server;
          var errorDetails;        
          var flagStop;
            var NonMonogramFont;
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
              MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
                PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
  
                 
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
    
               if (MonogramFont.indexOf("DTGPlaid") !=-1) { 
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGPlaidCir") !=-1) {
                               MonogramFont = "DTGPlaid"+PlaidPattern + "cir";
                            } else{ MonogramFont = "DTGPlaid"+PlaidPattern + "vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGplaid1cir.png?v=1577145888'    />");         
  
               } else if (MonogramFont.indexOf("DTGLilly") !=-1) { 
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGLillyCir") !=-1) {
                               MonogramFont = "DTGLilly"+PlaidPattern + "cir";
                            } else{ MonogramFont = "DTGLilly"+PlaidPattern + "vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLilly1Cir.png?v=1579272148'    />");         
  
               } else if (MonogramFont.indexOf("DTGOmbre") !=-1) { 
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGOmbreCir") !=-1) {
                               MonogramFont = "DTGOmbre"+PlaidPattern + "cir";
                            } else{ MonogramFont = "DTGOmbre"+PlaidPattern + "vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgombre.png?v=1593422133'    />");         
  
               } else if (MonogramFont.indexOf("DTGTalkPump") !=-1) { 
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGTalkPumpCir") !=-1) {
                               MonogramFont = "DTGTalkPump"+PlaidPattern + "cir";
                            } else{ MonogramFont = "DTGTalkPump"+PlaidPattern + "vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTalkPump.png?v=1597639174'    />");         
  
               } else if (MonogramFont.indexOf("DTGCPlaid") !=-1) { //MWL08112020
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGCPlaidCir") !=-1) {
                               MonogramFont = "DTGCPlaid"+PlaidPattern + "cir";
                            } else{ MonogramFont = "DTGCPlaid"+PlaidPattern + "vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCPlaid.png?v=1604823928'    />");         
  
               } else if (MonogramFont.indexOf("DTGGlitter") !=-1) { //MWL21112020
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGGlitterCir") !=-1) {
                               MonogramFont = "DTGGlitter"+PlaidPattern + "Cir";
                            } else{ MonogramFont = "DTGGlitter"+PlaidPattern + "Vine";
                           }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGlitter.png?v=1605928865'    />");         
  
               } else if (MonogramFont.indexOf("DTGFavLilly") !=-1) { //MWL021921
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGFavLillyCir") !=-1) {
                               MonogramFont = "DTGFavLilly"+PlaidPattern + "Cir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFavLilly.png?v=1613729203'    />");         
  
               } else if (MonogramFont.indexOf("DTGLVMinnie") !=-1) { //MWL021921
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGLVMinnieCir") !=-1) {
                               MonogramFont = "DTGLV"+PlaidPattern + "Cir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVMinnie.png?v=1619538690'    />");         
  
               } else if (MonogramFont.indexOf("DTGNCPride") !=-1) { //MWL042721
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGNCPrideCir") !=-1) {
                               MonogramFont = "DTG" + PlaidPattern + "PrideCir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNCPride_cb492bb6-6603-49b6-b949-37f2898f583e.png?v=1623687616'    />");         
  
               } else if (MonogramFont.indexOf("DTGGreenCamo") !=-1) { //MWL090221
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGGreenCamoCir") !=-1) {
                               MonogramFont = "DTG" + PlaidPattern + "CamoCir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGreenCamo.png?v=1630564191'    />");         
  
               } else if (MonogramFont.indexOf("DTGAirplaneMode") !=-1) { //MWL121821
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGAirplaneModeCir") !=-1) {
                               MonogramFont = "DTGAirplane" + PlaidPattern + "Cir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgairplanemode.png?1847'    />");         
  
               } else if (MonogramFont.indexOf("DTGPinkCheck") !=-1) { //MWL21112020
                    PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                         if (MonogramFont.indexOf("DTGPinkCheckCir") !=-1) {
                             MonogramFont = "DTG"+PlaidPattern + "CheckCir";
                          } else{ MonogramFont = "DTG"+PlaidPattern + "CheckVine";
                         }
                     $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPinkCheck.png?v=1651324491'    />");         

             } else if (MonogramFont.indexOf("DTGDolly") !=-1) { //MWL21112020
                    PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                         if (MonogramFont.indexOf("DTGDollyCir") !=-1) {
                             MonogramFont = "DTG"+PlaidPattern + "Cir";
                          }  
                     $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHollyDolly.png?v=1667141873'    />");         

             } else if (MonogramFont.indexOf("DTGPinkLV") !=-1) { //MWL21112020
                    PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                         if (MonogramFont.indexOf("DTGPinkLVCir") !=-1) {
                             MonogramFont = "DTG"+PlaidPattern + "LVCir";
                          } else{ MonogramFont = "DTG"+PlaidPattern + "LVVine";
                         }
                     $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGPinkLV.png?v=1672415559'    />");         

             } else if (MonogramFont.indexOf("DTGMickeyV") !=-1) { //MWL121821
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGMickeyVCir") !=-1) {
                               MonogramFont = "DTG" + PlaidPattern + "Cir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGMinnieV.png?v=1673231423'    />");         
  
               } else if (MonogramFont.indexOf("DTGCNavy") !=-1) { //MWL121821
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGCNavyCir") !=-1) {
                               MonogramFont = "DTG" + PlaidPattern + "Cir";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCNavy.png?v=1684424822'    />");         
  
               } else if (MonogramFont.indexOf("DTGLepPatt") !=-1) { //MWL121821
                      PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");
                           if (MonogramFont.indexOf("DTGLepPattFish") !=-1) {
                               MonogramFont = "DTG" + PlaidPattern + "PattFish";
                            }
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLepPattFish.png?v=1690899902'    />");         
  
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
       
     function PlaidColorsFixed(PlaidPattern)
        {
                     switch (PlaidPattern) {
                 case '1': threadcolor = "A8990e0";  break;
                 case '2': threadcolor = "A6ac9ec";  break;
                 case '3': threadcolor = "A1174e9";  break;
                 case '4': threadcolor = "A85d2dc";  break;                       
                 case '5': threadcolor = "A04c9cd";  break;                       
                 case '6': threadcolor = "Aff479a";  break;                       
                 case '7': threadcolor = "A79bce7";  break;                       
                 case '8': threadcolor = "Ae15c9d";  break;                       
                  case '9': threadcolor = "Aff86a5";  break;                       
                  case '10': threadcolor = "Ae7779f";  break;                       
                  case '11': threadcolor = "Aff2584";  break;                       
                  case '12': threadcolor = "Aeb2b81";  break;                       
                  case '13': threadcolor = "A3f32a2";  break;       
                 default:  threadcolor = "A8990e0";
              }
        }
  
      //-----------------------------------
      //Generate the Customers monogram
      //-----------------------------------  
      function GenerateMonogram()
      {
             
        //Get all the value passed
              //MonogramText = $('input#MonogramText').val();
               threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
                //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
              MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');
              PlaidPattern =  $("#PlaidPattern option:selected").attr("data-valname");  //for plaid
                NonMonogramFont = MonogramFont.toLowerCase();
               if (NonMonogramFont.slice(-2) == "no") {
                    MonogramText = "***";
                    $("#MonogramText").val('');
                } else {
                    MonogramText = $('input#MonogramText').val();
                } 
        
            if (MonogramFont.indexOf("DTGPlaid") !=-1) { //for plaid
                    if (MonogramFont.indexOf("DTGPlaidCir") !=-1) {
                           MonogramFont = "DTGPlaid"+PlaidPattern + "cir";
                     } else{ MonogramFont = "DTGPlaid"+PlaidPattern + "vine";}
            } 
            
                if (MonogramFont.indexOf("DTGLilly") !=-1) { //for plaid lilly
                PlaidColorsFixed(PlaidPattern);
                    if (MonogramFont.indexOf("DTGLillyCir") !=-1) {
                           MonogramFont = "DTGLilly"+PlaidPattern + "cir";
                     } else{ MonogramFont = "DTGLilly"+PlaidPattern + "vine";}
            }
  
               if (MonogramFont.indexOf("DTGOmbre") !=-1) { //for plaid ombre
                    if (MonogramFont.indexOf("DTGOmbreCir") !=-1) {
                           MonogramFont = "DTGOmbre"+PlaidPattern + "cir";
                     } else{ MonogramFont = "DTGOmbre"+PlaidPattern + "vine";}
            }
        
              if (MonogramFont.indexOf("DTGTalkPump") !=-1) { //for plaid TalkPump
                if (MonogramFont.indexOf("DTGTalkPumpCir") !=-1) {
                  MonogramFont = "DTGTalkPump"+PlaidPattern + "cir";
                } else{ MonogramFont = "DTGTalkPump"+PlaidPattern + "vine";}
              }
        
                if (MonogramFont.indexOf("DTGCPlaid") !=-1) { //for plaid Christmas
                    if (MonogramFont.indexOf("DTGCPlaidCir") !=-1) {
                           MonogramFont = "DTGCPlaid"+PlaidPattern + "cir";
                     } else{ MonogramFont = "DTGCPlaid"+PlaidPattern + "vine";}
                }
        
              if (MonogramFont.indexOf("DTGGlitter") !=-1) { //for Glitter
                       if (MonogramFont.indexOf("DTGGlitterCir") !=-1) {
                               MonogramFont = "DTGGlitter"+PlaidPattern + "Cir";
                         } else{ MonogramFont = "DTGGlitter"+PlaidPattern + "Vine";}
                }
                if (MonogramFont.indexOf("DTGFavLilly") !=-1) { //for FavLilly
                    if (MonogramFont.indexOf("DTGFavLillyCir") !=-1) {
                           MonogramFont = "DTGFavLilly"+PlaidPattern + "Cir";
                     }
              }
                if (MonogramFont.indexOf("DTGLVMinnie") !=-1) { //for FavLilly
                    if (MonogramFont.indexOf("DTGLVMinnieCir") !=-1) {
                           MonogramFont = "DTGLV"+PlaidPattern + "Cir";
                     }
              }
                if (MonogramFont.indexOf("DTGNCPride") !=-1) { //for State Pride
                    if (MonogramFont.indexOf("DTGNCPrideCir") !=-1) {
                           MonogramFont = "DTG" + PlaidPattern + "PrideCir";
                     } else{ MonogramFont = "DTG" + PlaidPattern + "PrideVine";}
              }
                if (MonogramFont.indexOf("DTGGreenCamo") !=-1) { //for Camo
                    if (MonogramFont.indexOf("DTGGreenCamoCir") !=-1) {
                           MonogramFont = "DTG" + PlaidPattern + "CamoCir";
                     } else{ MonogramFont = "DTG" + PlaidPattern + "CamoVine";}
              }
                if (MonogramFont.indexOf("DTGAirplaneMode") !=-1) { 
                    if (MonogramFont.indexOf("DTGAirplaneModeCir") !=-1) {
                           MonogramFont = "DTGAirplane" + PlaidPattern + "Cir";
                     } else{MonogramFont = "DTGAirplane" + PlaidPattern + "NO";}
              }
      		if (MonogramFont.indexOf("DTGPinkCheck") !=-1) { //for Camo
     			 if (MonogramFont.indexOf("DTGPinkCheckCir") !=-1) {
                         MonogramFont = "DTG" + PlaidPattern + "CheckCir";
                   } else{ MonogramFont = "DTG" + PlaidPattern + "CheckVine";}
            }
            if (MonogramFont.indexOf("DTGDolly") !=-1) { 
                if (MonogramFont.indexOf("DTGDollyCir") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "Cir";
                 } else{MonogramFont = "DTG" + PlaidPattern + "NO";}
          }
      		if (MonogramFont.indexOf("DTGPinkLV") !=-1) { //for Pink
     			 if (MonogramFont.indexOf("DTGPinkLVCir") !=-1) {
                         MonogramFont = "DTG" + PlaidPattern + "LVCir";
                   } else{ MonogramFont = "DTG" + PlaidPattern + "LVVine";}
            }
            if (MonogramFont.indexOf("DTGMickeyV") !=-1) { 
                if (MonogramFont.indexOf("DTGMickeyVCir") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "Cir";
                 } else{MonogramFont = "DTG" + PlaidPattern + "NO";}
          }
            if (MonogramFont.indexOf("DTGCNavy") !=-1) { 
                if (MonogramFont.indexOf("DTGCNavyCir") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "Cir";
                 } else{MonogramFont = "DTG" + PlaidPattern + "Vine";}
          }
            if (MonogramFont.indexOf("DTGLepPatt") !=-1) { 
                if (MonogramFont.indexOf("DTGLepPattFish") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "PattFish";
                 } else if (MonogramFont.indexOf("DTGLepPattStack") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "PattStack";
                 } else if (MonogramFont.indexOf("DTGLepPattVine") !=-1) {
                       MonogramFont = "DTG" + PlaidPattern + "PattVine";
                 } else{MonogramFont = "DTG" + PlaidPattern + "PattFancy";}
          }
        
        
        //reset the error display
      $("#validatorId").html("");
        flagStop = "";
           $("#btn add-to-cart").addClass('disabled').attr('disabled', 'disabled');
  
        
        //Validation before creating the monogrammed.
        //-----------------------------------
        if (MonogramText  !== "" &&  threadcolor !== ""  && typeof threadcolor !== 'undefined'  &&  MonogramFont !== "" && typeof MonogramFont !== 'undefined')   {
     
               
  
                if (MonogramFont.indexOf("DTG") !=-1) {  //all BigPrints DTG will go here unless have special info          
               logoColor = "";
                mono_server = "stitchdynamics5";
  
    
                                  //---------Filter of 2 letter styles--------------------------	
                                  if (MonogramFont.indexOf("DTG2") !=-1) {
                                   if(MonogramText.length == 3) {
                                       errorDetails = "Must have 2 letters for this Style";
                                      $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                        flagStop = 1;  
                                   }else{
                                            if (MonogramFont.indexOf("DTG2Plaid") !=-1) { //for Plaid
                                                   MonogramFont =  MonogramFont + PlaidPattern ;
                                             }
                                            if (MonogramFont.indexOf("DTG2Lilly") !=-1) { //for Plaid
                                                 PlaidColorsFixed(PlaidPattern);
                                                   MonogramFont =  MonogramFont + PlaidPattern ;
                                             } 
                                             if (MonogramFont.indexOf("DTG2Ombre") !=-1) { //for Ombre
                                                   MonogramFont =  MonogramFont + PlaidPattern + "cir2" ;
                                             }
                                             if (MonogramFont.indexOf("DTG2TalkPump") !=-1) { //for TalkPump
                                                   MonogramFont =  MonogramFont + PlaidPattern;
                                             }
                                             if (MonogramFont.indexOf("DTG2CPlaid") !=-1) { //for plaid Christmas
                                                   MonogramFont =  MonogramFont + PlaidPattern;
                                             }
                                             if (MonogramFont.indexOf("DTG2Glitter") !=-1) { //for Glitter
                                                       MonogramFont =  MonogramFont + PlaidPattern;
                                          }
                                             if (MonogramFont.indexOf("DTG2FavLilly") !=-1) { //for FavLilly
                                                       MonogramFont =  MonogramFont + PlaidPattern;
                                          }
                                             if (MonogramFont.indexOf("DTG2LVMinnie") !=-1) { //for FavLilly
                                                       MonogramFont =  "DTG2LV" + PlaidPattern;
                                          }
                                             if (MonogramFont.indexOf("DTG2NCPride") !=-1) { //for DTGLV2Minnie 
                                                       MonogramFont =  "DTG2" + PlaidPattern + "Pride";
                                          }
                                             if (MonogramFont.indexOf("DTG2GreenCamo") !=-1) { //for DTG2Camo 
                                                       MonogramFont =  "DTG2" + PlaidPattern + "Camo";
                                          }
                                             if (MonogramFont.indexOf("DTG2AirplaneMode") !=-1) { //for  AirplaneMode 12/18/2021
                                                       MonogramFont =  "DTG2Airplane" + PlaidPattern;
                                          }
                                            if (MonogramFont.indexOf("DTG2PinkCheck") !=-1) { //for DTG2Camo 
                                                         MonogramFont =  "DTG2" + PlaidPattern + "Check";
                                          }
                                            if (MonogramFont.indexOf("DTG2Dolly") !=-1) { //for DTG2Camo 
                                                         MonogramFont =  "DTG2" + PlaidPattern;
                                          }
                                            if (MonogramFont.indexOf("DTG2PinkLV") !=-1) { //for DTG2Camo 
                                                         MonogramFont =  "DTG2" + PlaidPattern + "LV";
                                          }
                                            if (MonogramFont.indexOf("DTG2MickeyV") !=-1) { //for DTG2Camo 
                                                         MonogramFont =  "DTG2" + PlaidPattern;
                                          }
                                            if (MonogramFont.indexOf("DTG2CNavy") !=-1) { //for DTG2Camo 
                                                         MonogramFont =  "DTG2" + PlaidPattern;
                                          }
                                   }
                                 
                                 
                               }else{
                                 if  (MonogramText.length == 2) {
                                       errorDetails = "Must have 3 letters for this Style";
                                      $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                       flagStop = 1; }
                               } //-----------------------------------
  
              
           } else {
              logoColor = "";
              mono_server = "stitchdynamics5";
            }
          
          //For Airplane Mode 12/18/2021
                if (MonogramFont.indexOf("AirplaneBlk") !=-1) {  
                    threadcolor = "A000000";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGPinkCheck") !=-1) {//MWL04302022 FOR DTGPinkCheck
                  threadcolor = "Af96cb0";
                  mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2PinkCheck") !=-1) {//MWL04302022 FOR DTGPinkCheck
                    threadcolor = "Af96cb0";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGBrownCheck") !=-1) {//MWL04302022 FOR DTGPinkCheck
                    threadcolor = "Aa36d4b";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2BrownCheck") !=-1) {//MWL04302022 FOR DTGPinkCheck
                    threadcolor = "Aa36d4b";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGPinkLV") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "Aff8402";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGOrangeLV") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "Afe027b";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2PinkLV") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "Aff8402";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2OrangeLV") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "Afe027b";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGCNavy") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "A9fbbd4";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2CNavy") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "A9fbbd4";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTGCWhite") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "A669bd6";
                    mono_server = "stitchdynamics5";
                } else if (MonogramFont.indexOf("DTG2CWhite") !=-1) {//MWL04302022 FOR DTGPinkLV
                    threadcolor = "A669bd6";
                    mono_server = "stitchdynamics5";
                } else {
                        threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
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
             
                firstMonoLink ="https://"+ mono_server +".com/ecs/api/ecs/7?sku=" + MonogramFont + "&style=" + logoColor + "&pers1=" + MonogramText + "&color1=" + threadcolor ;
  
            //extract png file working
                        $.get(firstMonoLink, function(data, status){
                        //alert("Data: " + data + "\nStatus: " + status);
                        sendImg = ("https://"+data);
                    //$("#debug").html(sendImg);
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
                       
                       //For No Monograms SKU, checks last 2 letters 12/18/2021
                       if (NonMonogramFont.slice(-2) == "no") {
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
                  $("#MonogramText").attr('disabled', false);//For No Monograms SKU 12/18/2021
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
    
  
  
  
   