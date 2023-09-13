   //-----------------------------------
    //DTG
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
      	var bg;
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
    

               
            ///for debugging 
          //  debug = $('select[name="properties[MonogramFont]"]').find(':selected').attr('data-valname');
            //$("#debug").html(debug);
            ///for debugging
        
        //Function to display monogram with grey background
        function bg_color_grey()
        { 
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
  
            if (MonogramFont.indexOf("DTGBig") !=-1) {
                if (MonogramFont.indexOf("DTGBigPrintBlock") !=-1) {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBigPrint.png?v=1631868208'    />");
                } else if (MonogramFont.indexOf("DTGBigPrint") !=-1) {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/MonoBigPrintPreview.png?v=1665564936'    />");
                } else {
                  $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_Circle_Back.png?790'    />"); 
                }
            } else if (MonogramFont.indexOf("DTGSunFrame") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/SunFlrFrameABC_Circle.png?4416'    />");

            } else if (MonogramFont.indexOf("DTGWCAmFlg") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/WCAmFlagABC_Circle.png?4590'    />");

            } else if (MonogramFont.indexOf("DTGCaffQueen")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CaffQueenABC_Circle.png?4604'    />");

            } else if (MonogramFont.indexOf("DTGSqueezeDay")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/SqueezeDayABC_Circle.png?4686'    />");

            } else if (MonogramFont.indexOf("DTGtgif")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/TGIFABC_Circle.png?4686'    />");

            } else if (MonogramFont.indexOf("DTGGirlBoss")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/FlowerSmile.png?v=1654629328'    />");

            } else if (MonogramFont.indexOf("DTGNeedCof")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/AllneedcoffeeABC_Circle.png?4686'    />");

            } else if (MonogramFont.indexOf("DTGCofLover")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CoffeeLoverABC_Circle.png?4686'    />");

            } else if (MonogramFont.indexOf("DTGFront")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFront.png?2317'    />");

            } else if (MonogramFont.indexOf("DTGCofTeach")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCoffTeach_ABC.png?4772'    />");

            } else if (MonogramFont.indexOf("DTGWCPine")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWCPineapple_ABC.png?4772'    />");                 

            } else if (MonogramFont.indexOf("DTGCofNurse")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCoffNurse_ABC.png?4772'    />");
                 
            } else if (MonogramFont.indexOf("DTGSpFlr")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSpringFlower_ABC.png?4772'    />");                                  
 
            } else if (MonogramFont.indexOf("DTGBirthyay")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/BdayYayABC.png?5923'    />");                                  
  
            } else if (MonogramFont.indexOf("DTGPatBow")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatBowABC.png?5583'    />");                                  
  
            } else if (MonogramFont.indexOf("DTGLipQueen")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/LipstickQueenABC.png?5583'    />");                                  
  
            } else if (MonogramFont.indexOf("DTGFallWon")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/FallWonCir_ABC.png?5583'    />");                                  

            } else if (MonogramFont.indexOf("DTGWMelon")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/17583688.png'    />");                                  

            } else if (MonogramFont.indexOf("DTGMarg")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/MargaritaABC.png?5957'    />");                                  
 
            } else if (MonogramFont.indexOf("DTGCanHearts")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCanHeartsCir_ABC.png?12125'    />");                                  

            } else if (MonogramFont.indexOf("DTGHotDog")  !=-1) {
              	 if (MonogramFont.indexOf("DTGHotDog2") !=-1) {// MWL060721 
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHotDog2.png?v=1623039167'    />");
                 } else {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/HotDogABC.png?5957'    />");                                  
                 }
            } else if (MonogramFont.indexOf("DTGMinnieMouse")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/MinnieMouseABC.png?5957'    />");                                  

            } else if (MonogramFont.indexOf("DTGPatPine")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/PatPineABC.png?5957'    />");                                  

            } else if (MonogramFont.indexOf("DTG2GucCof")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/GucciCoffeeAB.png?6123'    />");                                  

            } else if (MonogramFont.indexOf("DTGChill")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/Land_of_the_free_preview.png?v=1653919322'    />");                                  

            } else if (MonogramFont.indexOf("DTGCofLip")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CoffLipstickABC.png?6359'    />");                                  

            } else if (MonogramFont.indexOf("DTGUSAMap")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/USAMapABC.png?6359'    />");                                  

            } else if (MonogramFont.indexOf("DTGFloCam")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_Pumpkin_Lady.png?v=1690431453'    />");                                  
              
            } else if (MonogramFont.indexOf("DTGFirstCof")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/FirstCoffeeABC.png?6502'    />");                                  

            } else if (MonogramFont.indexOf("DTGCaturday")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CaturdayABC.png?6803'    />");                                  
 
            } else if (MonogramFont.indexOf("DTGTieButterfly")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/TieButterflyABC.png?6803'    />");                                  

            } else if (MonogramFont.indexOf("DTGFlamingo")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/FlamingoABC.png?6803'    />");                                  
              
            } else if (MonogramFont.indexOf("DTGRBStripe")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/RNBStripeABC.png?6803'    />");                                  
              
            } else if (MonogramFont.indexOf("DTGDonut")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DontWorryBeHappyABC.png?6803'   />");                                  
              
            } else if (MonogramFont.indexOf("DTGEasyLem")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/EasyLemonABC.png?7130'   />");                                  
              
            } else if (MonogramFont.indexOf("DTGSweetAmer")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/SweetAmericanABC.png?7130'   />");                                  
              
            } else if (MonogramFont.indexOf("DTGSumVibes")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/SumVibesABC.png?7130'   />");                                  
              
            } else if (MonogramFont.indexOf("DTGRadPos")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRadPos.png?v=1625477954'   />");                                  
              
            } else if (MonogramFont.indexOf("DTGVacay")  !=-1) {
              if (MonogramFont.indexOf("DTGVacayVacay") !=-1) {// MWL050721 
                	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVacayVacay.png?v=1620323537'    />");
                } else {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/VacayABC.png?7130'   />");                                  
                }
            } else if (MonogramFont.indexOf("DTGChickFav")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ChickFav.png?14483'   />");                                  

            } else if (MonogramFont.indexOf("DTGRetCof")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/RetroCoffee_ABC.png?7347'   />");      

            } else if (MonogramFont.indexOf("DTGSpritz")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/1776.png?v=1653667795'   />");     

            } else if (MonogramFont.indexOf("DTGExplore")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/Explore_ABC.png?7347'   />");    

            } else if (MonogramFont.indexOf("DTGCafSips")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/CaffeineSips_ABC.png?7347'   />");     

            } else if (MonogramFont.indexOf("DTGAmFlg")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGAmFlg_ABC.png?7845'   />");                            
                              
            } else if (MonogramFont.indexOf("DTGMermaid")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMermaid.png?v=1610869862'   />");       

            } else if (MonogramFont.indexOf("DTGHolWreath")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHollyWreath_ABC.png?13620'   />");       

            } else if (MonogramFont.indexOf("DTGCofHelps")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCofHelps_ABC.png?7845'   />");       

            } else if (MonogramFont.indexOf("DTGDogDudes")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDogsB4Dudes_ABC.png?7845'   />");       	             	

            } else if (MonogramFont.indexOf("DTGCatNap")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCatNap_ABC.png?7845'   />");       	

            } else if (MonogramFont.indexOf("DTGWedding")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_Tis.png'   />");       

            } else if (MonogramFont.indexOf("DTGCaffDis")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCaffDisney_ABC.png?7845'   />");       	        

           } else if (MonogramFont.indexOf("DTGLifeSpark") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLifeSparkVine_ABC.png?8474'    />");

            } else if (MonogramFont.indexOf("DTGVGfront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGvgfront_ABC.png?8474'    />");

            } else if (MonogramFont.indexOf("DTGSatBrunch") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/Breezy_ABC.png?v=1690435294'    />");
                              
            } else if (MonogramFont.indexOf("DTGHapCup") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHapCup_ABC.png?8474'    />");

            } else if (MonogramFont.indexOf("DTGAmBeauty") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGAmBeauty_ABC.png?8474'    />");
           } else if (MonogramFont.indexOf("DTGWCCofLip") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWCCofLipstick_ABC.png?8698'    />");

            } else if (MonogramFont.indexOf("DTGAmAm") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGAmAm_ABC.png?8698'    />");

            } else if (MonogramFont.indexOf("DTGSprinkles") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSprinkles_ABC.png?8698'    />");
                              
            } else if (MonogramFont.indexOf("DTGKeySurv") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/17970408.png?v=16906705258'    />");

            } else if (MonogramFont.indexOf("DTGStars") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGStars_ABC.png?8698'    />");               

           } else if (MonogramFont.indexOf("DTGBooks") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBooks_ABC.png?8857'    />");

            } else if (MonogramFont.indexOf("DTGUSAClassic") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGUSAClassic_ABC.png?8857'    />");

            } else if (MonogramFont.indexOf("DTGRoseUSA") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGRoseUSA_ABC.png?8857'    />");
                              
            } else if (MonogramFont.indexOf("DTGLillyFlag") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLillyFlag_ABC.png?8857'    />");

            } else if (MonogramFont.indexOf("DTGSunFlrFront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSunFlrFront_ABC.png?8857'    />");

           } else if (MonogramFont.indexOf("DTGFourthJuly") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFourthJuly.png?9143'    />");

            } else if (MonogramFont.indexOf("DTGPatProud") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPatProud.png?9143'    />");

            } else if (MonogramFont.indexOf("DTGDisFront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDisFront.png?9143'    />");
                              
            } else if (MonogramFont.indexOf("DTGMessBun") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMessBun.png?9143'    />");

            } else if (MonogramFont.indexOf("DTGPopChamp") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPopChamp.png?9143'    />");              

            } else if (MonogramFont.indexOf("DTGSumCoffee") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSumCoffee.png?v=1610871090'    />");

            } else if (MonogramFont.indexOf("DTGRunStar") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRunStar.png?v=1610870920'    />");

            } else if (MonogramFont.indexOf("DTGAmazon") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmazon.png?v=1610870605'    />");
                              
            } else if (MonogramFont.indexOf("DTGPSFront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPSFront_VineABC.png?9317'    />");

            } else if (MonogramFont.indexOf("DTGTarget") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTarget.png?v=1610871415'    />");
           
            } else if (MonogramFont.indexOf("DTGNevGrowUp") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGNevGrowUpCir_ABC.png?9423'    />");

            } else if (MonogramFont.indexOf("DTGSpiceNice") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSpiceNiceCir_ABC.png?9423'    />");

            } else if (MonogramFont.indexOf("DTGPumpEvery") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPumpEveryCir_ABC.png?9423'    />");
                              
            } else if (MonogramFont.indexOf("DTGBossBabe") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBossBabeCir_ABC.png?9423'    />");

            } else if (MonogramFont.indexOf("DTGTaco") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/1776_Sleeve.png?v=1653918788'    />");               

           } else if (MonogramFont.indexOf("DTGMomLife") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMomLife_ABC.png?9702'    />");

            } else if (MonogramFont.indexOf("DTGShopping") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGShopping_ABC.png?9702'    />");
                              
            } else if (MonogramFont.indexOf("DTGBrunchBubbly") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBrunchBubbly_ABC.png?9702'    />");

            } else if (MonogramFont.indexOf("DTGReindeer") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGReindeer_ABC.png?9702'    />");

            } else if (MonogramFont.indexOf("DTGAutWreath") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGAutWreath_ABC.png?10961'    />");

            } else if (MonogramFont.indexOf("DTGHapFall") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHapFallCir_ABC.png?12125'    />");

            } else if (MonogramFont.indexOf("DTGSpiceEvery") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSpiceEvery_ABC.png?10961'    />");
                              
            } else if (MonogramFont.indexOf("DTGCofMusic") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCofMusicCir_ABC.png?10961'    />");

            } else if (MonogramFont.indexOf("DTGChLights") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGChlightsCir_ABC.png?10961'    />");
               
           } else if (MonogramFont.indexOf("DTGElf") !=-1) {
				if (MonogramFont.indexOf("DTGElfCups") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGElfCups.png?v=1667141865'    />");
                                  
                } else if (MonogramFont.indexOf("DTGElfMovie") !=-1) {
		                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGElfMovieCir_ABC.png?12138'    />");
                } else {
                         $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGElfCir_ABC.png?11450'    />");
                } 
              
            } else if (MonogramFont.indexOf("DTGBabyCold") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBabyColdCir_ABC.png?11450'    />");

            } else if (MonogramFont.indexOf("DTGSantaCof") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSantaCofCir_ABC.png?11450'    />");
                              
            } else if (MonogramFont.indexOf("DTGDrinkHC") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDrinkHCCir_ABC.png?11450'    />");

            } else if (MonogramFont.indexOf("DTGHocPoc") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHocPocvine_ABC.png?11450'    />");
               
           } else if (MonogramFont.indexOf("DTGPumpSpQueen") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPumpSpQueenCir_ABC.png?11450'    />");

            } else if (MonogramFont.indexOf("DTGPumpkin") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPumpkinCir_ABC.png?12125'    />");

            } else if (MonogramFont.indexOf("DTGCocoNet") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCocoNetCir_ABC.png?11450'    />");
                              
            } else if (MonogramFont.indexOf("DTGFavFlav") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFavFlavCir_ABC.png?11450'    />");

            } else if (MonogramFont.indexOf("DTGSweatWeath") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSweatWeath_ABC.png?11450'    />");

            } else if (MonogramFont.indexOf("DTGReinFront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGReinFrontCir_ABC.png?11450'    />");              

           } else if (MonogramFont.indexOf("DTGCozy") !=-1) {
                    if (MonogramFont.indexOf("DTGCozySeas") !=-1) {
		                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgcozyseas.png?1827'    />");
                    } else if (MonogramFont.indexOf("DTGCozyCoff") !=-1) {// MWL021120
                 		$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCozyCoff.png?v=1604299503'    />");
                    } else {
                 		$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCozy_ABC.png?11654'    />");
                    }


            } else if (MonogramFont.indexOf("DTGFallVibes") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFallVibes_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGFallFav") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFallFav_ABC.png?11654'    />");
                              
            } else if (MonogramFont.indexOf("DTGGirlPwr") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGGirlPwr_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGRedCup") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGRedCup_ABC.png?11654'    />");
               
           } else if (MonogramFont.indexOf("DTGRetroPump") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGRetroPump_ABC.png?11654'    />");

           } else if (MonogramFont.indexOf("DTGPumpSZN") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPumpSZN_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGLoveCoffee") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLoveCoffee_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGAirplaneMode") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgairplanemode.png?1847'    />");
                              
            } else if (MonogramFont.indexOf("DTGBabes") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBabes_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGCoffChamp") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCoffChamp_ABC.png?11654'    />");
               
           } else if (MonogramFont.indexOf("DTGBakeCookies") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBakeCookies_ABC.png?11654'    />");                 

           } else if (MonogramFont.indexOf("DTGBeginChris") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBeginChris_ABC.png?11654'    />");
         
           
           
           } else if (MonogramFont.indexOf("Cactus") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/cowboy.png?v=1653860761'    />");

               
               
               
            } else if (MonogramFont.indexOf("DTGChrisStory") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGChrisStory_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGOrna") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/17991113.png?v=1690982628'    />");

            } else if (MonogramFont.indexOf("DTGPres") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPres_ABC.png?11654'    />");
               
            } else if (MonogramFont.indexOf("DTGWine") !=-1) {
             	if (MonogramFont.indexOf("DTGWineVal") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWineVal.png?v=1641655653'    />");
                } else {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWine_ABC.png?11654'    />");
                }
            } else if (MonogramFont.indexOf("DTGMartinis") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMartinis_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGVibesCoff") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGVibesCoff_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGGrinch") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGGrinch_ABC.png?11654'    />");
                              
            } else if (MonogramFont.indexOf("DTGChocMovies") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGChocMovies_ABC.png?11654'    />");

             } else if (MonogramFont.indexOf("DTGTisSeas") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGTisSeas_ABC.png?11654'    />");

            } else if (MonogramFont.indexOf("DTGLattes") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLattescir.png?11900'    />");
               
           } else if (MonogramFont.indexOf("DTGReasSeas") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGReasSeasCir.png?11900'    />");
 
            } else if (MonogramFont.indexOf("DTGWakeMe") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/7_5817b9fc-e405-4bcd-86ae-1871ace7520b.png?v=1654445383'    />");

            } else if (MonogramFont.indexOf("DTGSpiceGirls") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSpiceGirlsCir.png?11900'    />");
               
           } else if (MonogramFont.indexOf("DTGHelFalFront") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHelFalFront.png?11903'    />");

           } else if (MonogramFont.indexOf("DTGHolidayWon") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHolidayWonCir_ABC.png?12138'    />");

            } else if (MonogramFont.indexOf("DTG2FirstIceCof")  !=-1) {
	             $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTG2FirstIceCof_AB.png?12606'   />");                            

            } else if (MonogramFont.indexOf("DTGQofCof")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGQofCofCir_ABC.png?12601'   />");                            

            } else if (MonogramFont.indexOf("DTGFlannLatt")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGFlannLattcir_ABC.png?12491'   />");                            

            } else if (MonogramFont.indexOf("DTGLillyMinn")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLillyMinnCir_ABC.png?12491'   />");                          
 
            } else if (MonogramFont.indexOf("DTGDogMom")  !=-1) {
               	if (MonogramFont.indexOf("DTGDogMomFr") !=-1) {// MWL250720
                    $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDogMomFr.png?v=1595616068'    />");

                } else if (MonogramFont.indexOf("DTGDogMom2") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDogMom2.png?v=1620328673'    />");

            	} else{
                  	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDogMomcir_ABC.png?12686'   />");                            
              	}
           	} else if (MonogramFont.indexOf("DTGDogMoth")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDogMothCir_ABC.png?12686'   />");                            

            } else if (MonogramFont.indexOf("DTGRegMom")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGRegMomCir_ABC.png?12686'   />");                            

            } else if (MonogramFont.indexOf("DTGPalmFlag")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPalmFlag.png?v=1610870738'   />");                            

            } else if (MonogramFont.indexOf("DTGSCPride")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSCPrideCir_ABC.png?12686'   />");                            

 

            } else if (MonogramFont.indexOf("DTGWife") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWife_ABC.png?12810'    />");
               
           } else if (MonogramFont.indexOf("DTGYouPizza") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGyoupizza_ABC.png?12810'    />");

            } else if (MonogramFont.indexOf("DTGBoo") !=-1) {
                if (MonogramFont.indexOf("DTGBooHaw") !=-1) {// MWL 09/02/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBooHaw.png?v=1662105786'    />");
                } else { 
                      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGBoo_ABC.png?12810'    />"); 
                       }

            } else if (MonogramFont.indexOf("DTGJack") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGJack_ABC.png?12810'    />");
               
           } else if (MonogramFont.indexOf("DTGDietCoke") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGDietCoke_ABC.png?12810'    />");

            } else if (MonogramFont.indexOf("DTGLipstick") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGLipstick_ABC.png?12810'    />");
               
           } else if (MonogramFont.indexOf("DTGWakeMake") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWakeMake_ABC.png?12810'    />");

            } else if (MonogramFont.indexOf("DTGSpider")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSpider_ABC.png?12810'   />");                            

            } else if (MonogramFont.indexOf("DTGTropFlam")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGTropFlamABC.png?12810'   />");                            

            } else if (MonogramFont.indexOf("DTGWaterSlice")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGWaterSlice_ABC.png?12810'   />");                            
 
             } else if (MonogramFont.indexOf("DTGCaffKind") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/cowboy.png?v=1653860761'    />");
               
           } else if (MonogramFont.indexOf("DTGMinnScarf") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMinnScarfcir.png?13516'    />");

 
            } else if (MonogramFont.indexOf("DTGMinnDeer") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGMinnDeerCir.png?13516'    />");

            } else if (MonogramFont.indexOf("DTG2Dunkin") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTG2Dunkin.png?13631'    />");

            } else if (MonogramFont.indexOf("DTGQueenHall")  !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGQueenHallCir.png?13841'   />");                            
 
             } else if (MonogramFont.indexOf("DTGCandyCorn") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCandyCornCir.png?13841'    />");
               
           } else if (MonogramFont.indexOf("DTGThatWitch") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGThatWitchCir.png?13841'    />");

 
            } else if (MonogramFont.indexOf("DTGClemson") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGClemsonCir.png?13841'    />");

            } else if (MonogramFont.indexOf("DTGCarolina") !=-1) {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCarolina.png?v=1614491577'    />");
                            
            }  else if (MonogramFont.indexOf("DTGAlabama") !=-1) {// MWL101119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/Cozy_Fall_ABC.png?v=1690438169'    />");
              
            }  else if (MonogramFont.indexOf("DTGGameDay") !=-1) {// MWL101119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGameDay.png?1131'    />");
              
            }  else if (MonogramFont.indexOf("DTGSEC") !=-1) {// MWL101119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSEC_7ba2d122-1ad7-4b31-bd9c-e6cf4328ebc2.png?v=1614778501'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroTigers") !=-1) {// MWL101119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroTigers_d07a9e3b-ef6f-4828-ba40-a7659b020f06.png?v=1614491638'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroDogs") !=-1) {// MWL101119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroDogs_dca41747-2674-41e7-be6b-61fec8e3a49f.png?v=1610871453'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroRoll") !=-1) {// MWL101219
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroRoll_d4736036-886e-4912-a604-83d24518a98b.png?v=1610868881'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroHorns") !=-1) {// MWL101219
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroHorns_667c3d25-23c8-4649-baf4-2c4fdc432e43.png?v=1610870487'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroGators") !=-1) {// MWL101219
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroGators_74828bb7-967a-4d11-b416-5cec6d0921c1.png?v=1610870327'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroGame") !=-1) {// MWL101219
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetrogame_ef12b05b-2fca-4ae4-bd08-2872c47c60db.png?v=1614778493'    />");
              
            }  else if (MonogramFont.indexOf("DTGRetroBall") !=-1) {// MWL101219
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroBall.png?1393'    />");
              
            }  else if (MonogramFont.indexOf("DTGRollTide") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/abc17956212.png?v=1690439825'    />");
              
            }  else if (MonogramFont.indexOf("DTGALPride") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGALPride.png?1402'    />");
              
            }  else if (MonogramFont.indexOf("DTGGAPride") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGAPride.png?1402'    />");
              
            }  else if (MonogramFont.indexOf("DTGSCarPride") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSCarPride.png?1402'    />");
              
            }  else if (MonogramFont.indexOf("DTGFLPride") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFLPride.png?1402'    />");
              
            }  else if (MonogramFont.indexOf("DTGTXPride") !=-1) {// MWL101319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTXPride.png?1402'    />");
              
            } else if (MonogramFont.indexOf("DTGLeopard") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0635/8561/files/Leopard_Default.png?v=1644747482'    />");
              
            }  else if (MonogramFont.indexOf("DTGValDay") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGValDay.png?1475'    />");
              
            }  else if (MonogramFont.indexOf("DTGPopFizz") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPopFizz.png?1474'    />");
              
            }  else if (MonogramFont.indexOf("DTGLessTroubles") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLessTroubles.png?1473'    />");
              
            }  else if (MonogramFont.indexOf("DTGGobble") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtggobble.png?1570'    />");
              
            }  else if (MonogramFont.indexOf("DTGLeftovers") !=-1) {// MWL102919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgleftovers.png?1610'    />");
              
            }   else if (MonogramFont.indexOf("DTGBlkFri") !=-1) {// MWL102919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgblkfri.png?1610'    />");
              
            }   else if (MonogramFont.indexOf("DTGXmasCookies") !=-1) {// MWL110419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgxmascookies.png?1622'    />");
              
            }  else if (MonogramFont.indexOf("DTGUglyWeath") !=-1) {// MWL110419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtguglyweath.png?1622'    />");
              
            }   else if (MonogramFont.indexOf("DTGXmasCheer") !=-1) {// MWL110419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgxmascheer.png?1622'    />");
              
            }  else if (MonogramFont.indexOf("DTGLilMer") !=-1) {// MWL110419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtglilmer.png?1622'    />");
              
            }   else if (MonogramFont.indexOf("DTGMovieWatch") !=-1) {// MWL110419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgmoviewatch.png?1622'    />");
              
            }   else if (MonogramFont.indexOf("DTGMerryFlam") !=-1) {// MWL110619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgmerryflam.png?1678'    />");
              
            }   else if (MonogramFont.indexOf("DTGJoy") !=-1) {// MWL110619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgjoy.png?1678'    />");
              
            }  else if (MonogramFont.indexOf("DTGWinterHair") !=-1) {// MWL110619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgwinterhair.png?1678'    />");
              
            } else if (MonogramFont.indexOf("DTGXmasRedFront") !=-1) {// MWL111119
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXmasRedFront.png?2274'    />");

            } else if (MonogramFont.indexOf("DTGFlockin") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGflockin.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGRetroXmas") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGretroxmas.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGSoFetch") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGsofetch.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGXmasMorn") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGxmasmorn.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGVeryMerry") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGverymerry.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGWildXmas") !=-1) {// MWL111319
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGwildxmas.png?2594'    />");

            } else if (MonogramFont.indexOf("DTGMickeySnacks") !=-1) {// MWL111419
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/mickeysnacks.png?2700'    />");

            } else if (MonogramFont.indexOf("DTGLlama") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGllama.png?2747'    />");

            } else if (MonogramFont.indexOf("DTGDeckHalls") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src= '//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGdeckhalls.png?2747'    />");

            } else if (MonogramFont.indexOf("DTGHomeHolFront") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/HomeHolFront.png?2778'    />");

            } else if (MonogramFont.indexOf("DTGSkiing") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGskiing.png?2778'    />");

            } else if (MonogramFont.indexOf("DTGMakeupTree") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/dtgmakeuptree.png?2778'    />");

            } else if (MonogramFont.indexOf("DTGGucciDis") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGucciDis.png?2778'    />");

            } else if (MonogramFont.indexOf("DTGPlaidMug") !=-1) {// MWL111619
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPlaidMug.png?2778'    />");

            } else if (MonogramFont.indexOf("DTGStockings") !=-1) {// MWL111919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC_18003194.png?v=1691148027'    />");

            } else if (MonogramFont.indexOf("DTGColorLights") !=-1) {// MWL111919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGColorLights.png?2836'    />");

            } else if (MonogramFont.indexOf("DTGCaffCheer") !=-1) {// MWL111919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCaffCheer.png?2836'    />");

            } else if (MonogramFont.indexOf("DTGHallmark") !=-1) {// MWL111919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGhallmark.png?2836'    />");

            } else if (MonogramFont.indexOf("DTGPawsFront") !=-1) {// MWL111919
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPawsFront.png?2836'    />");

             } else if (MonogramFont.indexOf("DTGMimosas") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/1776_Sleeve.png?v=1653918788'    />");

             } else if (MonogramFont.indexOf("DTGSipSip") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSipSipCir.png?v=1576769651'    />");

             } else if (MonogramFont.indexOf("DTGPopCheers") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPopCheersCir.png?v=1576769650'    />");

             } else if (MonogramFont.indexOf("DTGChampBottles") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGChampBottlesCir.png?v=1576769652'    />");

             } else if (MonogramFont.indexOf("DTGMidnight") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMidnight.png?v=1596114559'   >");                                  

             } else if (MonogramFont.indexOf("DTGSaturday") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSaturdayCir.png?v=1576769650'    />"); 

             } else if (MonogramFont.indexOf("DTGSunday") !=-1) { 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGSundayCir.png?v=1576769649'    />");         

             } else if (MonogramFont.indexOf("DTGAmore") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmore.png?v=1578736725'    />");

            } else if (MonogramFont.indexOf("DTGGirlsRule") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGirlsRule.png?v=1578736924'    />");

            } else if (MonogramFont.indexOf("DTGFreakVal") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFreakVal.png?v=1578736916'    />");

            } else if (MonogramFont.indexOf("DTGLotsLove") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLotsLove.png?v=1578736932'    />");

            } else if (MonogramFont.indexOf("DTGLovers") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLovers.png?v=1578736940'    />");

            } else if (MonogramFont.indexOf("DTGWildLove") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildLove.png?v=1578736959'    />");

            } else if (MonogramFont.indexOf("DTGXOXO") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGxoxo.png?v=1578736968'    />");

            } else if (MonogramFont.indexOf("DTGCoffeeLove") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoffeeLove.png?v=1578736843'    />");

            } else if (MonogramFont.indexOf("DTGPizzaLove") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPizzaLove.png?v=1578736947'    />");

            } else if (MonogramFont.indexOf("DTGDogVal") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDogVal.png?v=1578736874'    />");

            } else if (MonogramFont.indexOf("DTGCoffeeVal") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoffeeVal.png?v=1578736860'    />");

            } else if (MonogramFont.indexOf("DTGAntiVDay") !=-1) {// MWL11120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAntiVDay.png?v=1578736766'    />");

            } else if (MonogramFont.indexOf("DTGLepSham") !=-1) {// MWL12220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepSham.png?v=1579698653'    />");

            } else if (MonogramFont.indexOf("DTGSham") !=-1) {// MWL12220
              
                if (MonogramFont.indexOf("DTGShamPatt") !=-1) {// MWL12220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGShamPatt.png?v=1579698674'    />");
                } else {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSham.png?v=1579698662'    />");
                }
            } else if (MonogramFont.indexOf("DTGGoLucky") !=-1) {// MWL12220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGoLucky.png?v=1579698635'    />");

            } else if (MonogramFont.indexOf("DTGIrishFlag") !=-1) {// MWL12220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGIrishFlag.png?v=1579698642'    />");

            } else if (MonogramFont.indexOf("DTGTieDye") !=-1) {// MWL12220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTieDye.png?v=1579698685'    />");

            } else if (MonogramFont.indexOf("DTGLepMinnie") !=-1) {// MWL21320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepMinnie.png?v=1581602356'    />");

            } else if (MonogramFont.indexOf("DTGLV") !=-1) {// MWL21320
              	if (MonogramFont.indexOf("DTGLVCheck") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVCheck.png?v=1587618089'    />");
                } else if (MonogramFont.indexOf("DTGLVXMas") !=-1) {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVXMas.png?v=1604752314'    />");                  
                } else if (MonogramFont.indexOf("DTGLVGrinch") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVGrinch.png?v=1604752298'    />");
                } else if (MonogramFont.indexOf("DTGLVBlock") !=-1) {// MWL09172021
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLVBlock.png?v=1631868255'    />");
                } else {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLV.png?v=1581602374'    />");
            	}
            } else if (MonogramFont.indexOf("DTGLoveMick") !=-1) {// MWL21320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLoveMick.png?v=1581602364'    />");

            } else if (MonogramFont.indexOf("DTGMinnieBest") !=-1) {// MWL21320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGminniebest.png?v=1581602390'    />");

            } else if (MonogramFont.indexOf("DTGMagicalDay") !=-1) {// MWL21320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMagicalDay.png?v=1581602383'    />");

            } else if (MonogramFont.indexOf("DTGHappiest") !=-1) {// MWL22220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHappiest.png?v=1582372323'    />");

            } else if (MonogramFont.indexOf("DTGWildDis") !=-1) {// MWL22220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildDis.png?v=1582372341'    />");

            } else if (MonogramFont.indexOf("DTGVinMick") !=-1) {// MWL22220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVinMick.png?v=1582372334'    />");

            } else if (MonogramFont.indexOf("DTGHomeEars") !=-1) {// MWL22220
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHomeEars.png?v=1582372328'    />");

            } else if (MonogramFont.indexOf("DTGHomeCastle") !=-1) {// MWL22720
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHomeCastle.png?v=1582766546'    />");

            } else if (MonogramFont.indexOf("DTGRockRoll") !=-1) {// MWL22720
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGRockRoll.png?v=1582766556'    />");

            } else if (MonogramFont.indexOf("DTGGoodVibes") !=-1) {// MWL22720
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGGoodVibes.png?v=1582766534'    />");

            } else if (MonogramFont.indexOf("DTGCoffHeart") !=-1) {// MWL22720
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGCoffHeart.png?v=1582766525'    />");

            } else if (MonogramFont.indexOf("DTGGirlPower") !=-1) {// MWL31120
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGirlPower.png?v=1583882378'    />");

            } else if (MonogramFont.indexOf("DTGAnimal") !=-1) {// MWL32320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAnimal_aa018d78-b79a-403d-bc92-f9e651c3aeef.png?v=1625478013'    />");

            } else if (MonogramFont.indexOf("DTGParis") !=-1) {// MWL32320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGParis_b14f2bb7-6b8d-40c8-8337-6bf678eaaabc.png?v=1625477985'    />");

            } else if (MonogramFont.indexOf("DTGBusy") !=-1) {// MWL32320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBusy.png?v=1584942205'    />");

            } else if (MonogramFont.indexOf("DTGColorRain") !=-1) {// MWL4420
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGColorRain.png?v=1585993403'    />");

            }else if (MonogramFont.indexOf("DTGColorFish") !=-1) {// MWL4420
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGColorFish.png?v=1585993395'    />");

            } else if (MonogramFont.indexOf("DTGColorWhale") !=-1) {// MWL4420
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGColorWhale.png?v=1585993408'    />");

            } else if (MonogramFont.indexOf("DTGRockstar") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRockstar.png?v=1586352612'    />");

            } else if (MonogramFont.indexOf("DTGTeachLOVE") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeachLove.png?v=1586352628'    />");

            } else if (MonogramFont.indexOf("DTGSuper") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSuper.png?v=1586352618'    />");

            } else if (MonogramFont.indexOf("DTGTeachTGIF") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeachTGIF.png?v=1586352635'    />");

            } else if (MonogramFont.indexOf("DTGTeachFront") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeachFront.png?v=1586352623'    />");

            } else if (MonogramFont.indexOf("DTGWildTeach") !=-1) {// MWL40820
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildTeach.png?v=1586352641'    />");

            } else if (MonogramFont.indexOf("DTGCrayon") !=-1) {// MWL102519
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCrayon.png?1471'    />");
              
            } else if (MonogramFont.indexOf("DTGNurseFront") !=-1) {// MWL41020
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNurseFront.png?v=1586534647'    />");

            } else if (MonogramFont.indexOf("DTGDentFront") !=-1) {// MWL41020
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDentFront.png?v=1586534639'    />");

            } else if (MonogramFont.indexOf("DTGBrace") !=-1) {// MWL41620
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBrace.png?v=1586970308'    />");

            } else if (MonogramFont.indexOf("DTGBeat") !=-1) {// MWL41620
              if (MonogramFont.indexOf("DTGBeatDrop") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBeatDrop.png?v=1587618054'    />");

                } else if (MonogramFont.indexOf("DTGBeatles") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBeatles.png?v=1645784812'    />");
            
            	} else {
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBeat.png?v=1586970285'    />");
              }
            } else if (MonogramFont.indexOf("DTGWildNurse") !=-1) {// MWL41620
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildNurse.png?v=1586970314'    />");

            } else if (MonogramFont.indexOf("DTGRN") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRN.png?v=1587618128'    />");

            } else if (MonogramFont.indexOf("DTGScrubLife") !=-1) {// MWL42320
              	 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGScrubLife.png?v=1587618142' />");
                
            } else if (MonogramFont.indexOf("DTGNurseMin") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNurseMin.png?v=1587618106'    />");

            } else if (MonogramFont.indexOf("DTGNurseLove") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNurseLove.png?v=1587618095'    />");

            } else if (MonogramFont.indexOf("DTGGerms") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGerms.png?v=1587618069'    />");

            } else if (MonogramFont.indexOf("DTGNurseVibes") !=-1) {// MWL42320
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNurseVibes.png?v=1587618115'    />");

            } else if (MonogramFont.indexOf("DTGScrubsCoff") !=-1) {// MWL42320
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGScrubsCoff.png?v=1587618165'    />");
            
            } else if (MonogramFont.indexOf("DTGWallConf") !=-1) {// MWL5520
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallConf.png?v=1588668552'    />");
            
            } else if (MonogramFont.indexOf("DTGFlag") !=-1) {// MWL52320
              	if (MonogramFont.indexOf("DTGFlagTong") !=-1) {// MWL060721 
              	   $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFlagTong.png?v=1623038983'    />");
                } else {
                  $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFlagVine.png?v=1590209421'    />");
                }
            } else if (MonogramFont.indexOf("DTGFireworks") !=-1) {// MWL52320
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFireworks.png?v=1590209432'    />");
            
            } else if (MonogramFont.indexOf("DTG2GucciAm") !=-1) {// MWL8620
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG2GucciAm.png?v=1591621563'    />");
            
            } else if (MonogramFont.indexOf("DTGSparklers") !=-1) {// MWL8620
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSparklers.png?v=1591621580'    />");
            
            } else if (MonogramFont.indexOf("DTGMelonBig") !=-1) {// MWL70620
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMelonBig.png?v=1594041413'    />");
            
            } else if (MonogramFont.indexOf("DTGTGIF2") !=-1) {// MWL70620
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTGIF2.png?v=1594041569'    />");
            
            } else if (MonogramFont.indexOf("DTGCoolMom") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoolMom.png?v=1595616054'    />");
            
            } else if (MonogramFont.indexOf("DTGRaiseKind") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRaiseKind.png?v=1595616125'    />");
            
            } else if (MonogramFont.indexOf("DTGMamaLife") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMamaLife.png?v=1595616093'    />");
            
            } else if (MonogramFont.indexOf("DTG2GucciMama") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG2GucciMama.png?v=1595668467'    />");
            
            } else if (MonogramFont.indexOf("DTG2GucciMini") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG2GucciMini.png?v=1595668150'    />");
            
            } else if (MonogramFont.indexOf("DTGBee") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBee.png?v=1595616041'    />");
            
            } else if (MonogramFont.indexOf("DTGHoney") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHoney.png?v=1595616085'    />");
            
            } else if (MonogramFont.indexOf("DTGMamaRain") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMamaRain.png?v=1595616110'    />");
            
            } else if (MonogramFont.indexOf("DTGMiniRain") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMiniRain.png?v=1595616117'    />");
            
            } else if (MonogramFont.indexOf("DTGFurMama") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFurMama.png?v=1595616076'    />");
            
            } else if (MonogramFont.indexOf("DTGCatMama") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCatMama.png?v=1595616047'    />");
            
            } else if (MonogramFont.indexOf("DTGDogMama") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDogMama.png?v=1595616060'    />");
            
            } else if (MonogramFont.indexOf("DTGMamaNeeds") !=-1) {// MWL250720
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMamaNeeds.png?v=1595616103'    />");
            
            } else if (MonogramFont.indexOf("DTGAlexa") != -1) { // MWL080820
                 if (MonogramFont.indexOf("DTGAlexaFr") != -1) { // MWL170820
                   $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAlexaFr.png?v=1597639769'    />");

                 } else {
                   $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAlexa.png?v=1596821024'    />");
                 }
            } else if (MonogramFont.indexOf("DTGFallYall") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFallYall.png?v=1596820949'    />");
            
            } else if (MonogramFont.indexOf("DTGAutumnsUp") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAutumnsUp.png?v=1596821011'    />");
            
            } else if (MonogramFont.indexOf("DTGLepPump") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepPump.png?v=1596820940'    />");
            
            } else if (MonogramFont.indexOf("DTGPeacePump") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPeacePump.png?v=1596820925'    />");
            
            } else if (MonogramFont.indexOf("DTGBrewing") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBrewing.png?v=1596820988'    />");
            
            } else if (MonogramFont.indexOf("DTGScaryMovie") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGScaryMovie.png?v=1596820916'    />");
            
            } else if (MonogramFont.indexOf("DTGDistLep") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDistLep.png?v=1596820978'    />");
            
            } else if (MonogramFont.indexOf("DTGLepRain") !=-1) {// MWL080820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepRain.png?v=1596820933'    />");
            
            } else if (MonogramFont.indexOf("DTGLoveFall") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLoveFall.png?v=1597638938'    />");
            
            } else if (MonogramFont.indexOf("DTGCandles") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCandles.png?v=1597638981'    />");
            
            } else if (MonogramFont.indexOf("DTGPlantMom") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPlantMom.png?v=1597639067'    />");
            
            } else if (MonogramFont.indexOf("DTGGrowGirl") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGrowGirl.png?v=1597639103'    />");
            
            } else if (MonogramFont.indexOf("DTGWeekend") !=-1) {// MWL170820
              	if (MonogramFont.indexOf("DTGWeekendCord") !=-1) {// MWL050721 
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWeekendCord.png?v=1620327035'    />");
                 } else {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWeekend.png?v=1597639210'    />");
                 }
            } else if (MonogramFont.indexOf("DTGHomebody") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHomebody.png?v=1597639248'    />");
            
            } else if (MonogramFont.indexOf("DTGIndoorsy") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGIndoorsy.png?v=1597639311'    />");
            
            } else if (MonogramFont.indexOf("DTGWildFall") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildFall.png?v=1597639354'    />");
            
            } else if (MonogramFont.indexOf("DTGSmore") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSmore.png?v=1597639429'    />");
            
            } else if (MonogramFont.indexOf("DTGBonfires") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBonfires.png?v=1597639474'    />");
            
            } else if (MonogramFont.indexOf("DTGPumpWreath") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPumpWreath.png?v=1597639552'    />");
            
            } else if (MonogramFont.indexOf("DTGCastleLife") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCastleLife.png?v=1597639584'    />");
            
            } else if (MonogramFont.indexOf("DTGNoCoffee") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNoCoffee.png?v=1597639738'    />");
            
            } else if (MonogramFont.indexOf("DTGLeavesFr") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLeavesFr.png?v=1597639794'    />");
            
            } else if (MonogramFont.indexOf("DTGChickfilyay") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGChickfilyay.png?v=1597639824'    />");
            
            } else if (MonogramFont.indexOf("DTGVinyl1") !=-1) {// MWL170820
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVinyl1.png?v=1598621549'    />");
            		//function for monogram grey background color
              		bg_color_grey();
              
            } else if (MonogramFont.indexOf("DTGVinyl2.3") !=-1) {// MWL021020
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVinyl2.3.png?v=1601578565'    />");
					//function for monogram grey background color
              		bg_color_grey();
              
            } else if (MonogramFont.indexOf("DTGVinyl3") !=-1) {// MWL021020
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGVinylVine3_f4dfe376-d75a-443f-a56e-1e5ff700497f.png?v=1617242346'    />");
      				//unable to use function due to monogram image size
              		bg = $('.w3-container').css('background-color', '#ffffff');
    				bg = $('#monogramimage').css('background-color', '#e5e5e5');
              
            } else if (MonogramFont.indexOf("DTGSpirits") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSpirits.png?v=1604299548'    />");
            
            } else if (MonogramFont.indexOf("DTGBakeCrew") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBakeCrew.png?v=1604299495'    />");
            
            } else if (MonogramFont.indexOf("DTGDownSouth") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDownSouth.png?v=1604299518'    />");
            
            } else if (MonogramFont.indexOf("DTGFestiveAF") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFestiveAF.png?v=1604299525'    />");
            
            } else if (MonogramFont.indexOf("DTGFierce") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFierce.png?v=1604299536'    />");
            
            } else if (MonogramFont.indexOf("DTGXMasRainbow") !=-1) {// MWL021120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXMasRainbow.png?v=1604299556'    />");
            
            } else if (MonogramFont.indexOf("DTGFriends") !=-1) {// MWL041120
            	if (MonogramFont.indexOf("DTGFriendsTurk") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFriendsTurk.png?v=1634699627'    />");
                } else {  
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFriends.png?v=1604480730'    />");
                }
            } else if (MonogramFont.indexOf("DTGMickWreath") !=-1) {// MWL041120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickWreath.png?v=1604480755'    />");
            
            } else if (MonogramFont.indexOf("DTGSanta") !=-1) {// MWL041120
              	 if (MonogramFont.indexOf("DTGSantaOMG") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSantaOMG.png?v=1635003239'    />");
                 } else {
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSanta.png?v=1604480762'    />");
                 }
            } else if (MonogramFont.indexOf("DTGTrees") !=-1) {// MWL041120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTrees.png?v=1604480962'    />");
            
            } else if (MonogramFont.indexOf("DTGMerryMama") !=-1) {// MWL041120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMerryMama.png?v=1604480748'    />");
            
            } else if (MonogramFont.indexOf("DTGGingerbread") !=-1) {// MWL041120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGingerbread.png?v=1604480736'    />");
            
            } else if (MonogramFont.indexOf("DTGGucciFest") !=-1) {// MWL041120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGucciFest.png?v=1604480742'    />");
            
            } else if (MonogramFont.indexOf("DTGJolly") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGJolly.png?v=1604752288'    />");
            
            } else if (MonogramFont.indexOf("DTGDays") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDays.png?v=1604752268'    />");
            
            } else if (MonogramFont.indexOf("DTGFresh") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFresh.png?v=1604752274'    />");
            
            } else if (MonogramFont.indexOf("DTGMerryXMas") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMerryXMas.png?v=1604752321'    />");
            
            } else if (MonogramFont.indexOf("DTGHelloWinter") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHelloWinter.png?v=1604752281'    />");
            
            } else if (MonogramFont.indexOf("DTGAllDay") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAllDay.png?v=1604768370'    />");
            
            } else if (MonogramFont.indexOf("DTGProseco") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGProseco.png?v=1604768482'    />");
            
            } else if (MonogramFont.indexOf("DTGPenguin") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPenguin.png?v=1604768466'    />");
            
            } else if (MonogramFont.indexOf("DTGHos") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHos.png?v=1604768418'    />");
            
            } else if (MonogramFont.indexOf("DTGFaLatte") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFaLatte.png?v=1604768408'    />");
            
            } else if (MonogramFont.indexOf("DTGCapp") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCapp.png?v=1604768378'    />");
            
            } else if (MonogramFont.indexOf("DTGIcedQueen") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGIcedQueen.png?v=1604768438'    />");
            
            } else if (MonogramFont.indexOf("DTGIcedSeason") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGIcedSeason.png?v=1604768448'    />");
            
            } else if (MonogramFont.indexOf("DTGHanukkah") !=-1) {// MWL081120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHanukkah.png?v=1604823937'    />");
            
            } else if (MonogramFont.indexOf("DTG2020") !=-1) {// MWL061120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG2020_9e89fb32-4f47-4150-a87b-a3d641151a08.png?v=1625478056'    />");
            
            } else if (MonogramFont.indexOf("DTGStop") !=-1) {// MWL101120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStop.png?v=1604978008'    />");
            
            } else if (MonogramFont.indexOf("DTGBright") !=-1) {// MWL101120
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBright.png?v=1604977999'    />");
            
            } else if (MonogramFont.indexOf("DTG2ChampVibes") !=-1) {// MWL101220
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG2ChampVibes.png?v=1607569883'    />");
            
            } else if (MonogramFont.indexOf("DTGCheers") !=-1) {// MWL101220
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCheers.png?v=1607569893'    />");
            
            }  else if (MonogramFont.indexOf("DTGGlasses") !=-1) {// MWL101220
                 	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGlasses.png?v=1607569902'    />");
            
            } else if (MonogramFont.indexOf("DTGEggstra") !=-1) {// MWL030321 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGEggstra.png?v=1614778486'    />");

            } else if (MonogramFont.indexOf("DTGEastWreath") !=-1) {// MWL030321 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGEastWreath.png?v=1614778477'    />");

            } else if (MonogramFont.indexOf("DTGBunnyEars") !=-1) {// MWL030321 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBunnyEars.png?v=1614778450'    />");

            } else if (MonogramFont.indexOf("DTGDisneyDays") !=-1) {// MWL050121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisneyDays.png?v=1619837445'    />");

            } else if (MonogramFont.indexOf("DTGChaos") !=-1) {// MWL050121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGChaos.png?v=1619837460'    />");

            } else if (MonogramFont.indexOf("DTGButterflies") !=-1) {// MWL050121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGButterflies.png?v=1619837491'    />");

            } else if (MonogramFont.indexOf("DTGShineOn") !=-1) {// MWL050121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGShineOn.png?v=1619837510'    />");

            } else if (MonogramFont.indexOf("DTGSunSoul") !=-1) {// MWL050121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSunSoul.png?v=1619837541'    />");

            } else if (MonogramFont.indexOf("DTGSunMind") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSunMind.png?v=1620323519'    />");

            } else if (MonogramFont.indexOf("DTGBringMe") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBringMe.png?v=1620323459'    />");

            } else if (MonogramFont.indexOf("DTGOffice") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGOffice.png?v=1620323495'    />");

            } else if (MonogramFont.indexOf("DTGCrime") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCrime.png?v=1620323482'    />");

            } else if (MonogramFont.indexOf("DTGPeaches") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPeaches.png?v=1620327019'    />");

            } else if (MonogramFont.indexOf("DTGDesert") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDesert.png?v=1620326984'    />");

            } else if (MonogramFont.indexOf("DTGGolden") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGolden.png?v=1620327000'    />");

            } else if (MonogramFont.indexOf("DTGCoffeeCord") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCoffeeCord.png?v=1620326968'    />");

            } else if (MonogramFont.indexOf("DTGSunnyCord") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSunnyCord.png?v=1620328748'    />");

            } else if (MonogramFont.indexOf("DTGBeachCord") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBeachCord.png?v=1620328657'    />");

            } else if (MonogramFont.indexOf("DTGDogsCord") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDogsCord.png?v=1620328686'    />");

            } else if (MonogramFont.indexOf("DTGPodcasts") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPodcasts.png?v=1620328728'    />");

            } else if (MonogramFont.indexOf("DTGPalm") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPalm.png?v=1620328708'    />");

            } else if (MonogramFont.indexOf("DTGBT") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBT.png?v=1620329032'    />");

            } else if (MonogramFont.indexOf("DTGSW") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSW.png?v=1620329151'    />");

            } else if (MonogramFont.indexOf("DTGSLP") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSLP.png?v=1620329124'    />");

            } else if (MonogramFont.indexOf("DTGRT") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRT.png?v=1620329087'    />");

            } else if (MonogramFont.indexOf("DTGOT") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGOT.png?v=1620329047'    />");

            } else if (MonogramFont.indexOf("DTGPT") !=-1) {// MWL050721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPT.png?v=1620329068'    />");

            } else if (MonogramFont.indexOf("DTGMomPwr") !=-1) {// MWL051121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMomPwr.png?v=1620741274'    />");

            } else if (MonogramFont.indexOf("DTGDisDreamer") !=-1) {// MWL051121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisDreamer.png?v=1620741261'    />");

            } else if (MonogramFont.indexOf("DTGOffDuty") !=-1) {// MWL051121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGOffDuty.png?v=1620741287'    />");

            } else if (MonogramFont.indexOf("DTGPrincess") !=-1) {// MWL051121 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPrincess.png?v=1620741302'    />");

            } else if (MonogramFont.indexOf("DTGAmerica") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmerica.png?v=1623038820'    />");

            } else if (MonogramFont.indexOf("DTGAmEst") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAmEst.png?v=1623038859'    />");

            } else if (MonogramFont.indexOf("DTGBlonde") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBlonde.png?v=1623038893'    />");

            } else if (MonogramFont.indexOf("DTGBrun") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBrun.png?v=1623038943'    />");

            } else if (MonogramFont.indexOf("DTGRed") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRed.png?v=1623039004'    />");

            } else if (MonogramFont.indexOf("DTGStarMama") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStarMama.png?v=1623039045'    />");

            } else if (MonogramFont.indexOf("DTGStarMini") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStarMini.png?v=1623039087'    />");

            } else if (MonogramFont.indexOf("DTGUSALep") !=-1) {// MWL060721 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGUSALep.png?v=1623039133'    />");

            } else if (MonogramFont.indexOf("DTGWallGrate") !=-1) {// MWL070521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallGrate.png?v=1625477885'    />");

            } else if (MonogramFont.indexOf("DTGWallBoo") !=-1) {// MWL070521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallBoo.png?v=1625477932'    />");

            } else if (MonogramFont.indexOf("DTGWallBucks") !=-1) {// MWL070521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallBucks.png?v=1625477913'    />");

            } else if (MonogramFont.indexOf("DTGWallPump") !=-1) {// MWL070521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallPump.png?v=1625477859'    />");

            } else if (MonogramFont.indexOf("DTGWallTeach") !=-1) {// MWL070521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWallTeach.png?v=1625477837'    />");

            } else if (MonogramFont.indexOf("DTGGirlsWeek") !=-1) {// MWL071021 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGirlsWeek.png?v=1625847396'    />");

            } else if (MonogramFont.indexOf("DTGDisBDay") !=-1) {// MWL071021 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisBDay.png?v=1625847378'    />");

            } else if (MonogramFont.indexOf("DTGBDayBabe") !=-1) {// MWL071021 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBDayBabe.png?v=1625847363'    />");

            } else if (MonogramFont.indexOf("DTGFriday") !=-1) {// MWL071521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFriday.png?v=1626337043'    />");

            } else if (MonogramFont.indexOf("DTGHarvest") !=-1) {// MWL071521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHarvest.png?v=1627125867'    />");

            } else if (MonogramFont.indexOf("DTGPatch") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPatch.png?v=1628185215'    />");

            } else if (MonogramFont.indexOf("DTGLepTeach") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepTeach.png?v=1628185184'    />");

            } else if (MonogramFont.indexOf("DTGSpookyVibes") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSpookyVibes.png?v=1628185449'    />");

            } else if (MonogramFont.indexOf("DTGSpooky") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSpooky.png?v=1628185436'    />");

            } else if (MonogramFont.indexOf("DTGBroom") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBroom.png?v=1628185007'    />");

            } else if (MonogramFont.indexOf("DTGPlaidPumps") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPlaidPumps.png?v=1628185232'    />");

            } else if (MonogramFont.indexOf("DTGPSpicePlease") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPSpicePlease.png?v=1628185269'    />");

            } else if (MonogramFont.indexOf("DTGHelloFall") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHelloFall.png?v=1628185069'    />");

            } else if (MonogramFont.indexOf("DTGHelloPump") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHelloPump.png?v=1628185096'    />");

            } else if (MonogramFont.indexOf("DTGDisneyFall") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisneyFall.png?v=1628185050'    />");

            } else if (MonogramFont.indexOf("DTGSpiceGirl") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSpiceGirl.png?v=1628185300'    />");

            } else if (MonogramFont.indexOf("DTGBabySpice") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBabySpice.png?v=1628184984'    />");

            } else if (MonogramFont.indexOf("DTGPumpCoffee") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPumpCoffee.png?v=1628185283'    />");

            } else if (MonogramFont.indexOf("DTGPSL") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPSL.png?v=1628185249'    />");

            } else if (MonogramFont.indexOf("DTG90GirlFront") !=-1) {// MWL080521 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/90s_Default_Left_Chest.png?v=1688140283'    />");
					//unable to use function due to monogram image size
              		bg = $('.w3-container').css('background-color', '#ffffff');
    				bg = $('#monogramimage').css('background-color', '#e5e5e5');
            } else if (MonogramFont.indexOf("DTGSkeleton") !=-1) {// MWL080921 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSkeleton.png?v=1628477012'    />");

            } else if (MonogramFont.indexOf("DTGCampfire") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCampfire.png?v=1628772778'    />");

            } else if (MonogramFont.indexOf("DTGRetroDay") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroDay.png?v=1628772870'    />");

            } else if (MonogramFont.indexOf("DTGTown") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTown.png?v=1628772923'    />");

            } else if (MonogramFont.indexOf("DTGHowdy") !=-1) {// MWL081221 
                  if (MonogramFont.indexOf("DTGHowdyPump") !=-1) {// MWL 09/02/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHowdyPump.png?v=1662104279'    />");
                  
                  } else if (MonogramFont.indexOf("DTGHowdyXMas") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHowdyXMas.png?v=1667141885'    />");
                                  
                  } else {
                     $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHowdy.png?v=1628772851'    />");
                   }
            } else if (MonogramFont.indexOf("DTGGhoul") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGhouls.png?v=1628772806'    />");

            } else if (MonogramFont.indexOf("DTGSketch") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSketch.png?v=1628772897'    />");

            } else if (MonogramFont.indexOf("DTGWizard") !=-1) {// MWL081221 
                 $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWizard.png?v=1628772937'    />");

            } else if (MonogramFont.indexOf("DTGBlkLep") !=-1) {// MWL091721 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBlkLepBlock.png?v=1631962325'    />");
            
            } else if (MonogramFont.indexOf("DTGBlkCamo") !=-1) {// MWL091721 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBlkCamo.png?v=1631882191'    />");
            
            } else if (MonogramFont.indexOf("DTGRoots") !=-1) {// MWL092021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRoots.png?v=1632137255'    />");
            
            } else if (MonogramFont.indexOf("DTGGuitar") !=-1) {// MWL092021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGuitar.png?v=1632137299'    />");
            
            } else if (MonogramFont.indexOf("DTGWildwest") !=-1) {// MWL092021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWildwest.png?v=1632137342'    />");
            
            } else if (MonogramFont.indexOf("DTGNeonMoon") !=-1) {// MWL092021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNeonMoon.png?v=1632137322'    />");
            
            } else if (MonogramFont.indexOf("DTGCowgirl") !=-1) {// MWL092021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCowgirl.png?v=1632137285'    />");
            
            } else if (MonogramFont.indexOf("DTGPotter") !=-1) {// MWL092921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPotter.png?v=1632931449'    />");
            
            } else if (MonogramFont.indexOf("DTGMickSkelly") !=-1) {// MWL092921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickSkelly.png?v=1632931436'    />");
            
            } else if (MonogramFont.indexOf("DTGMickHall") !=-1) {// MWL092921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickHall.png?v=1632931423'    />");
            
            } else if (MonogramFont.indexOf("DTGCharlie") !=-1) {// MWL092921
           		if (MonogramFont.indexOf("DTGCharlieXMas") !=-1) {// MWL103121 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCharlieXMas.png?v=1635711082'    />");
                } else {
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCharlie.png?v=1632931408'    />");
                }
            } else if (MonogramFont.indexOf("DTGTurkey") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTurkey.png?v=1634699748'    />");
            
            } else if (MonogramFont.indexOf("DTGTouchdown") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTouchdown.png?v=1634699727'    />");
            
            } else if (MonogramFont.indexOf("DTGPie") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPie.png?v=1634699711'    />");
            
            } else if (MonogramFont.indexOf("DTGOnline") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGOnline.png?v=1634699640'    />");
            
            } else if (MonogramFont.indexOf("DTGFallHeart") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFallHeart.png?v=1634699612'    />");
            
            } else if (MonogramFont.indexOf("DTGCrew") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCrew.png?v=1634699598'    />");
            
            } else if (MonogramFont.indexOf("DTGCasserole") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCasserole.png?v=1634699588'    />");
            
            } else if (MonogramFont.indexOf("DTGCart") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCart.png?v=1634699573'    />");
            
            } else if (MonogramFont.indexOf("DTGBlessed") !=-1) {// MWL102021 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBlessed.png?v=1634699560'    />");
            
            } else if (MonogramFont.indexOf("DTGMain") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMain.png?v=1635003167'    />");
            
            } else if (MonogramFont.indexOf("DTGDoodles") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDoodles.png?v=1635003063'    />");
            
            } else if (MonogramFont.indexOf("DTGMickTrees") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickTrees.png?v=1635003208'    />");
            
            } else if (MonogramFont.indexOf("DTGLepSmiley") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepSmiley.png?v=1635003149'    />");
            
            } else if (MonogramFont.indexOf("DTGWoofmas") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWoofmas.png?v=1635003279'    />");
            
            } else if (MonogramFont.indexOf("DTGDisHolidays") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisHolidays.png?v=1635003045'    />");
            
            } else if (MonogramFont.indexOf("DTGFeelin") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFeelin.png?v=1635003118'    />");
            
            } else if (MonogramFont.indexOf("DTGFilthy") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFilthy.png?v=1635003132'    />");
            
            } else if (MonogramFont.indexOf("DTGFavTime") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFavTime.png?v=1635003077'    />");
            
            } else if (MonogramFont.indexOf("DTGDash") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDash.png?v=1635003033'    />");
            
            } else if (MonogramFont.indexOf("DTGTeachElf") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeachElf.png?v=1635003256'    />");
            
            } else if (MonogramFont.indexOf("DTGTunes") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTunes.png?v=1635003268'    />");
            
            } else if (MonogramFont.indexOf("DTGNutcrackers") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNutcrackers.png?v=1635003224'    />");
            
            } else if (MonogramFont.indexOf("DTGMeow") !=-1) {// MWL102321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMeowy.png?v=1635003189'    />");
            
            } else if (MonogramFont.indexOf("DTGDearSanta") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDearSanta.png?v=1635429534'    />");
            
            } else if (MonogramFont.indexOf("DTGStick") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStick.png?v=1635429669'    />");
            
            } else if (MonogramFont.indexOf("DTGSmiley") !=-1) {// MWL102921 
              	 if (MonogramFont.indexOf("DTGSmileySlv") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSmileySlv.png?v=1646549577'    />");
                 } else {
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSmiley.png?v=1635429646'    />");
                 }
            } else if (MonogramFont.indexOf("DTGXMasWreath") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXMasWreath.png?v=1635429713'    />");
            
            } else if (MonogramFont.indexOf("DTGCocoa") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCocoa.png?v=1635429492'    />");
            
            } else if (MonogramFont.indexOf("DTGWhoville") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWhoville.png?v=1635429683'    />");
            
            } else if (MonogramFont.indexOf("DTGOldCocoa") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGOldCocoa.png?v=1635429576'    />");
            
            } else if (MonogramFont.indexOf("DTGGnome") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGnome.png?v=1635429558'    />");
            
            } else if (MonogramFont.indexOf("DTGXMasCoffee") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGXMasCoffee.png?v=1635429698'    />");
            
            } else if (MonogramFont.indexOf("DTGPeaceJoy") !=-1) {// MWL102921 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPeaceJoy.png?v=1635429613'    />");
            
            } else if (MonogramFont.indexOf("DTGDeck") !=-1) {// MWL103121 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDeck.png?v=1635711066'    />");
            
            } else if (MonogramFont.indexOf("DTGMerryMist") !=-1) {// MWL103121 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMerryMist.png?v=1635710999'    />");
            
            } else if (MonogramFont.indexOf("DTGLoveXMas") !=-1) {// MWL103121 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLoveXMas.png?v=1635711053'    />");
            
            } else if (MonogramFont.indexOf("DTGBuffalo") !=-1) {// MWL103121 
                   if (MonogramFont.indexOf("DTGBuffaloWall") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBuffaloWall.png?v=1637340096'    />");
                   } else {    
              			$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBuffalo.png?v=1635711096'    />");
                   }
            } else if (MonogramFont.indexOf("DTGMerryRed") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMerryRed.png?v=1636721995'    />");
            
            } else if (MonogramFont.indexOf("DTGTreeWall") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTreeWall.png?v=1637340105'    />");
            
            } else if (MonogramFont.indexOf("DTGBarbieShop") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBarbieShop.png?v=1641549707'    />");
            
            } else if (MonogramFont.indexOf("DTGTake90s") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTake90s.png?v=1641549862'    />");
            
            } else if (MonogramFont.indexOf("DTGTommy") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTommy.png?v=1641549888'    />");
            
            } else if (MonogramFont.indexOf("DTGRetroSmile") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroSmile.png?v=1641549850'    />");
            
            } else if (MonogramFont.indexOf("DTGMade80s") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMade80s.png?v=1641549822'    />");
            
            } else if (MonogramFont.indexOf("DTGLizzie") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLizzie.png?v=1641549801'    />");
            
            } else if (MonogramFont.indexOf("DTGLFBack") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLFBack.png?v=1641549738'    />");
            
            } else if (MonogramFont.indexOf("DTGDixie") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDixie.png?v=1641549724'    />");
            
            } else if (MonogramFont.indexOf("DTGPerk") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPerk.png?v=1641549832'    />");
            
            } else if (MonogramFont.indexOf("DTGAsIf") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGAsIf.png?v=1641549694'    />");
            
            } else if (MonogramFont.indexOf("DTGLFPencil") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLFPencil.png?v=1641549768'    />");
            
            } else if (MonogramFont.indexOf("DTG90sMama") !=-1) {// MWL111321 
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTG90sMama.png?v=1641549682'    />");
            
            } else if (MonogramFont.indexOf("DTGHeartCoffee") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHeartCoffee.png?v=1641632608'    />");
            
            } else if (MonogramFont.indexOf("DTGSucker") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSucker.png?v=1641632728'    />");
            
            } else if (MonogramFont.indexOf("DTGLepLove") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepLove.png?v=1641632623'    />");
            
            } else if (MonogramFont.indexOf("DTGLepXOXO") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLepXOXO.png?v=1641632637'    />");
            
            } else if (MonogramFont.indexOf("DTGMickVal") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickVal.png?v=1641632664'    />");
            
            } else if (MonogramFont.indexOf("DTGMickCookies") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMickCookies.png?v=1641632652'    />");
            
            } else if (MonogramFont.indexOf("DTGSmileHeart") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSmileHeart.png?v=1641632692'    />");
            
            } else if (MonogramFont.indexOf("DTGBasicHeart") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGBasicHeart.png?v=1641631516'    />");
            
            } else if (MonogramFont.indexOf("DTGHeartCheck") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHeartCheck.png?v=1641631577'    />");
            
            } else if (MonogramFont.indexOf("DTGCupid") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCupid.png?v=1641631545'    />");
            
            } else if (MonogramFont.indexOf("DTGTeachHeart") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGTeachHeart.png?v=1641632745'    />");
            
            } else if (MonogramFont.indexOf("DTGCherries") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCherries.png?v=1641631530'    />");
            
            } else if (MonogramFont.indexOf("DTGSingle") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSingle.png?v=1641632679'    />");
            
            } else if (MonogramFont.indexOf("DTGRetroLove") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGRetroLove.png?v=1641655611'    />");
            
            } else if (MonogramFont.indexOf("DTGGalGang") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGalGang.png?v=1641655495'    />");
            
            } else if (MonogramFont.indexOf("DTGSelfLove") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSelfLove.png?v=1641655621'    />");
            
            } else if (MonogramFont.indexOf("DTGMouseLove") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMouseLove.png?v=1641655599'    />");
            
            } else if (MonogramFont.indexOf("DTGMamaHeart") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMamaHeart.png?v=1641655544'    />");
            
            } else if (MonogramFont.indexOf("DTGMiniHeart") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMiniHeart.png?v=1641655555'    />");
            
            } else if (MonogramFont.indexOf("DTGSeuss") !=-1) {// MWL01/08/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGSeuss.png?v=1643874273'    />");
            
            } else if (MonogramFont.indexOf("DTGLuckyMama") !=-1) {// MWL02/04/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLuckyMama.png?v=1643905751'    />");
            
            } else if (MonogramFont.indexOf("DTGLuckyMini") !=-1) {// MWL02/04/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLuckyMini.png?v=1643905784'    />");
            
            } else if (MonogramFont.indexOf("DTGLuckRain") !=-1) {// MWL02/04/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLuckRain.png?v=1643905658'    />");
            
            } else if (MonogramFont.indexOf("DTGLuckSmiley") !=-1) {// MWL02/04/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGLuckSmiley.png?v=1643905635'    />");
            
            } else if (MonogramFont.indexOf("DTGStPattys") !=-1) {// MWL02/04/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStPattys.png?v=1643905696'    />");
            
            } else if (MonogramFont.indexOf("DTGNirvana") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNirvana.png?v=1645107430'    />");
            
            } else if (MonogramFont.indexOf("DTGRolling") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/RollingStones.png?v=1645687826'    />");
            
            } else if (MonogramFont.indexOf("DTGDef") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DefLeopard.png?v=1645687840'    />");
            
            } else if (MonogramFont.indexOf("DTGSublime") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/13850135.png?v=1645687559'    />");
            
            } else if (MonogramFont.indexOf("DTGCharleston") !=-1) {// MWL02/17/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCharleston.png?v=1645784826'    />");
            
            } else if (MonogramFont.indexOf("DTGPlaidPump") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPlaidPump.png?v=1659460844'    />");
            
            } else if (MonogramFont.indexOf("DTGFetchFall") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFetchFall.png?v=1659460820'    />");
            
            } else if (MonogramFont.indexOf("DTGFallPump") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGFallPumps.png?v=1659460770'    />");
            
            } else if (MonogramFont.indexOf("DTGDaisyPump") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDaisyPump.png?v=1659460757'    />");
            
            } else if (MonogramFont.indexOf("DTGPumpPatch") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPumpPatch.png?v=1659609459'    />");
            
            } else if (MonogramFont.indexOf("DTGPumpPatch") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPumpPatch.png?v=1659609459'    />");
            
            } else if (MonogramFont.indexOf("DTGDisHall") !=-1) {// MWL 08/03/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisHall.png?v=1660119203'    />");
            
            } else if (MonogramFont.indexOf("DTGGhostSpook") !=-1) {// MWL 09/02/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGGhostSpook.png?v=1662101105'    />");
            
            } else if (MonogramFont.indexOf("DTGWonHall") !=-1) {// MWL 09/02/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGWonHall.png?v=1662107122'    />");
                                  
            } else if (MonogramFont.indexOf("DTGFlockin") !=-1) {// MWL 09/02/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGflockin.png?v=1613722070'    />");
                                  
            } else if (MonogramFont.indexOf("DTGDisChris") !=-1) {// MWL 10/13/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisChris.png?v=1665634379'    />");
                                  
            } else if (MonogramFont.indexOf("DTGDisneyPeeps") !=-1) {// MWL 10/13/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGDisneyPeeps.png?v=1665634363'    />");
                                  
            } else if (MonogramFont.indexOf("DTGPluto") !=-1) {// MWL 10/13/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPluto.png?v=1665634348'    />");
                                  
            } else if (MonogramFont.indexOf("DTGHollyDolly") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGHollyDolly.png?v=1667141873'    />");
                                  
            } else if (MonogramFont.indexOf("DTGMF") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGMF.png?v=1667141895'    />");
                                  
            } else if (MonogramFont.indexOf("DTGPolar") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPolar.png?v=1667141932'    />");
                                  
            } else if (MonogramFont.indexOf("DTGNicksBrew") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNicksBrew.png?v=1667141907'    />");
                                  
            } else if (MonogramFont.indexOf("DTGCupCheer") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGCupCheer.png?v=1667141857'    />");
                                  
            } else if (MonogramFont.indexOf("DTGPoleCrest") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGPoleCrest.png?v=1667141943'    />");
                                  
            } else if (MonogramFont.indexOf("DTGStoryCups") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGStoryCups.png?v=1667141957'    />");
                                  
            } else if (MonogramFont.indexOf("DTGNorthPole") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/DTGNorthPole.png?v=1667141920'    />");
                                  
            } else if (MonogramFont.indexOf("DTGLoveLatte") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGLoveLatte.png?v=1673231414'    />");
                                  
            } else if (MonogramFont.indexOf("DTGBeMine") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGBeMine.png?v=1673231405'    />");
                                  
            } else if (MonogramFont.indexOf("DTGHappily") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/DTGHappily.png?v=1677173211'    />");
                                  
            } else if (MonogramFont.indexOf("DTGHallWrap") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGHallWrap.png?v=1690899888'    />");
                                  
            } else if (MonogramFont.indexOf("DTGPlaidWrap") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/18002123.png?v=1691116655'    />");
                                  
            } else if (MonogramFont.indexOf("DTGPumpWrap") !=-1) {// MWL 10/30/2022  
                       $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DTGPumpWrap.png?v=1690899944'    />");
                                  
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
      if (MonogramText  !== "" &&  threadcolor !== ""  && typeof threadcolor !== 'undefined'  &&  MonogramFont !== "" && typeof MonogramFont !== 'undefined')   {
   
 			

 			 if (MonogramFont.indexOf("DTG") !=-1) {  //all BigPrints DTG will go here unless have special info          
             logoColor = "";
              mono_server = "stitchdynamics5";

               	if (MonogramFont.indexOf("DTGHelFal") !=-1) { // for Hello Fall' Front Left Chest it uses the same default DTGFront.
	                MonogramFont =   MonogramFont.replace("DTGHelFalFront", "DTGFront");
                 }else if (MonogramFont.indexOf("DTG2HelFalFront") !=-1){
                       MonogramFont =   MonogramFont.replace("DTG2HelFalFront", "DTG2Front");
                 }
               
                // MWL111119
               	if (MonogramFont.indexOf("DTGXmasRedFront") !=-1) { // for Christmas Red  Front Left Chest it uses the same default DTGFront.
	                MonogramFont =   MonogramFont.replace("DTGXmasRedFront", "DTGFront");
                 }else if (MonogramFont.indexOf("DTG2XmasRedFront") !=-1){
                       MonogramFont =   MonogramFont.replace("DTG2XmasRedFront", "DTG2Front");
                 }
               // MWL111619
               	if (MonogramFont.indexOf("DTGHomeHolFront") !=-1) { // for Christmas Red  Front Left Chest it uses the same default DTGFront.
	                MonogramFont =   MonogramFont.replace("DTGHomeHolFront", "DTGFront");
                 }else if (MonogramFont.indexOf("DTG2HomeHolFront") !=-1){
                       MonogramFont =   MonogramFont.replace("DTG2HomeHolFront", "DTG2Front");
                 }
               // MWL111919
               	if (MonogramFont.indexOf("DTGPawsFront") !=-1) { // for Paws Front Left Chest it uses the same default DTGFront.
	                MonogramFont =   MonogramFont.replace("DTGPawsFront", "DTGFront");
                 }else if (MonogramFont.indexOf("DTG2PawsFront") !=-1){
                       MonogramFont =   MonogramFont.replace("DTG2PawsFront", "DTG2Front");
                 }
               
                 if (MonogramFont.indexOf("DTGVinyl3") !=-1) { // MWL021020
                   // To fill grey background color for DTGVinyl3 after monogram creation, look at line 1064
                      bg = $('.w3-row').css('background-color', '#e5e5e5');
                 }
               
               	  // MWL8/8/2021
               	if (MonogramFont.indexOf("DTG90GirlFront") !=-1) { // for 90's Girl Front Left Chest it uses the same default DTGFront.
	                MonogramFont =   MonogramFont.replace("DTG90GirlFront", "DTGFront");
                 }else if (MonogramFont.indexOf("DTG290GirlFront") !=-1){
                       MonogramFont =   MonogramFont.replace("DTG290GirlFront", "DTG2Front");
                 }
 
            	                //---------Filter of 2 letter styles--------------------------	
           					 if (MonogramFont.indexOf("DTG2020Cir") !=-1) {//added to allow DTG2020 to load
                               	if (MonogramText.length == 3) {
                                } else {
                                 	if  (MonogramText.length == 2) {
                                         errorDetails = "Must have 3 letters for this Style";
                                        $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                         flagStop = 1; 
                                    }
                                }
                                  
                             } else if (MonogramFont.indexOf("DTG2020Vine") !=-1) {//added to allow DTG2020 to load
                               	if (MonogramText.length == 3) {
                                } else {
                                 	if  (MonogramText.length == 2) {
                                         errorDetails = "Must have 3 letters for this Style";
                                        $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                         flagStop = 1; 
                                    }
                                }
                                  
                             } else if (MonogramFont.indexOf("DTGSmileySlv") !=-1) {//added to allow 3 letter Block to load
                               	if (MonogramText.length == 3) {
                                } else {
                                 	if  (MonogramText.length == 2) {
                                         errorDetails = "Must have 3 letters for this Style";
                                        $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                         flagStop = 1; 
                                    }
                                }
                                  
                             } else if (MonogramFont.indexOf("Block") !=-1) {//added to allow Block to load
                               	if (MonogramText.length == 2) {
                                } else {
                                 	if  (MonogramText.length == 3) {
                                         errorDetails = "Must have 2 letters for this Style";
                                        $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                         flagStop = 1; 
                                    }
                                }
                                  
                             } else if (MonogramFont.indexOf("Bold") !=-1) {//added to allow Block to load
                               	if (MonogramText.length == 2) {
                                } else {
                                 	if  (MonogramText.length == 3) {
                                         errorDetails = "Must have 2 letters for this Style";
                                        $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                         flagStop = 1; 
                                    }
                                }
                                  
                             } else if (MonogramFont.slice(-2) == "No") {//added to allow no monogram for 2 to load
                                MonogramText = "**";
                                $("#MonogramText").val('');
                                  
                             } else if (MonogramFont.indexOf("DTG2") !=-1) {
                                 if(MonogramText.length == 3) {
                                     errorDetails = "Must have 2 letters for this Style";
                                    $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                      flagStop = 1;  
                                 }else{
                                   		//for guccicoffee only. not allowed one letter only
                                      if (MonogramFont.indexOf("DTG2GucCof") !=-1) {
                                             if(MonogramText.length == 1) {
                                                 errorDetails = "Must have 2 letters for this Style";
                                                  $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                                flagStop = 1;  
                                             }
                                    }

                                   if ((MonogramFont.indexOf("DTG2FirstIceCof")  !=-1) || (MonogramFont.indexOf("DTG2Dunkin")  !=-1)) {
                                     threadcolor = "Aee7140,Af03c7d";

                                      }
    
                                 }
                               
                               
                             }else{
                               if  (MonogramText.length == 2) {
                                     errorDetails = "Must have 3 letters for this Style";
                                    $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
                                     flagStop = 1; }
                             } //-----------------------------------

            
         } else if (MonogramFont.indexOf("10-101M") !=-1) {
           if(MonogramText.length == 3) {
             errorDetails = "Must have 2 letters for this Style";
             $("#validatorId").html(" "+ errorDetails +"").css("color", "red","font-style","italic");    
             flagStop = 1;  
           }

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
                $("#MonogramText").attr('disabled', false);
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

 