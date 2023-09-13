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
      //old monogramtext check effect $('input[name="properties[Monogram (first, LAST NAME, middle)]"]').val();
      //old threadcolor = $('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
      MonogramText = $('input#MonogramText').val();        
      threadcolor =  $("#threadcolor option:selected").attr("data-valcolor");
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
      if (MonogramFont.indexOf("101MRatherBe")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MRatherBe.png?v=1644974603'    />");                                              
  
      } else if (MonogramFont.indexOf("101MTarget")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MTarget.png?v=1644974590'    />");                                              
  
      } else if (MonogramFont.indexOf("101MStarbucks")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MStarbucks.png?v=1644974563'    />");                                              
  
      } else if (MonogramFont.indexOf("71MClassicSmiley")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/71MClassicSmiley.png?v=1645847317'    />");                                              
  
      } else if (MonogramFont.indexOf("304MHappy")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/304MHappy.png?v=1645849087'    />");                                              
  
      } else if (MonogramFont.indexOf("254MCharleston")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/254MCharleston.png?v=1645850218'    />");                                              
  
      } else if (MonogramFont.indexOf("89MCHS")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/89MCHS.png?v=1645853203'    />");                                              
  
      } else if (MonogramFont.indexOf("13-101M")  !=-1) {//MWL02282022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/15-101M.png?v=1645854292'    />");                                              
  
      } else if (MonogramFont.indexOf("13-71M")  !=-1) {//MWL02282022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/15-71M.png?v=1645854305'    />");                                              
  
      } else if (MonogramFont.indexOf("13Curved-101M")  !=-1) {//MWL02282022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/14Curved-101M.png?v=1646549517'    />");                                              
  
      } else if (MonogramFont.indexOf("101MSmileName13")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSmileName15.png?v=1646549543'    />");                                              
  
      } else if (MonogramFont.indexOf("71MSmileName13")  !=-1) {//MWL02262022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/71MSmileName16.png?v=1646549528'    />");                                              
  
      } else if (MonogramFont.indexOf("101MAppleName")  !=-1) {// MWL04302022 
      	$("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MAppleName.png?v=1651324450'    />");                                              

      } else if (MonogramFont.indexOf("101MPencilName")  !=-1) {// MWL04302022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPENCILName.png?v=1651324465'    />");                                              

      } else if (MonogramFont.indexOf("101MTeacherName")  !=-1) {// MWL04302022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MTeacherName.png?v=1651324480'    />");     
        } else if (MonogramFont.indexOf("101MTeacherName")  !=-1) {// MWL04302022 
          
          
      
      } else if (MonogramFont.indexOf("101MFlagNameScript")  !=-1) {// MWL04302022     
          $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFLAG.png?v=1653917476'    />");
           } else if (MonogramFont.indexOf("101MFlagNameScript")  !=-1) {// MWL04302022 
          
          
      } else if (MonogramFont.indexOf("101MFlagName")  !=-1) {// MWL05272022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MFlagName.png?v=1653635289'    />");                                              

      } else if (MonogramFont.indexOf("101MFireW")  !=-1) {// MWL05272022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MFireW.png?v=1653635255'    />");                                              

      } else if (MonogramFont.indexOf("101MPumpkin")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPumpkin.png?v=1659495480'    />");                                              

      } else if (MonogramFont.indexOf("101MPSL")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='https://cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPSL.png?v=1659495463'    />");                                              

      } else if (MonogramFont.indexOf("101MFball")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MFball.png?v=1659495442'    />");                                              

      } else if (MonogramFont.indexOf("101MCoffee")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCoffee.png?v=1659498576'    />");                                              

      } else if (MonogramFont.indexOf("177MRather")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/177MRather.png?v=1670393426'    />");                                              

      } else if (MonogramFont.indexOf("101MCandyHearts")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MCandyHeartsClass.png?v=1673231396'    />");                                              

      } else if (MonogramFont.indexOf("101MRibbonAthletic")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MRibbonAthletic.png?v=1676912490'    />");                                              

      } else if (MonogramFont.indexOf("177MReadingScript")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/177MReadingHand.png?v=1676904106'    />");                                              

      } else if (MonogramFont.indexOf("101MHelloHand")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MHelloClassic.png?v=1676903992'    />");                                              

      } else if (MonogramFont.indexOf("101MPawScript")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/101MPawClassic.png?v=1676904023'    />");                                              

      } else if (MonogramFont.indexOf("139MDrinkHand")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0682/8923/3182/files/139MDrinkHand.png?v=1676904096'    />");                                              

      } else if (MonogramFont.indexOf("101MFallFor")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFallFor.png?v=1690477761'    />");                                                  

      } else if (MonogramFont.indexOf("101MEra")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MEra.png?v=1690477747'    />");                                          

      } else if (MonogramFont.indexOf("101MHoodie")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MHoodie.png?v=1690477771'    />");                                          

      } else if (MonogramFont.indexOf("101MSweatshirt")  !=-1) {// MWL08032022 
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MSweatshirt.png?v=1690477782'    />");                                      

      } else {
        //alert(MonogramFont);
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/AB.png?v=1678232036'    />");      
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
      textthreadcolor =  $("#textthreadcolor option:selected").attr("data-valcolor"); 
      MonogramFont = $('select[name="properties[Font]"]').find(':selected').attr('data-valname');
      bordercolor = $("#bordercolor option:selected").attr("data-valcolor");//MWL5102021
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
  
        } else if (MonogramFont.indexOf("101MSmileName") !=-1) {
          logoColor = "&Logocolors="+bordercolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("71MSmileName") !=-1) {
          logoColor = "&Logocolors="+bordercolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MAppleName") !=-1) {//MWL04302022
          logoColor = "&Logocolors=A32804b,A512a06,Ac91828";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MPencilName") !=-1) {//MWL04302022
          logoColor = "&Logocolors=a000000,abfa68e,aedcd1f,aD08AB3,aafa9b1";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MTeacherName") !=-1) {//MWL04302022
          logoColor = "&Logocolors=a8ee9db,ada7ca7,a8f97e1,affa2b8,a8ee9db,ada7ca7,a8f97e1,affa2b8";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MFlagName") !=-1) {//MWL05272022
          logoColor = "&Logocolors=affffff,ac91828,a13214e,affffff,a13214e";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MFireW") !=-1) {//MWL05272022
          logoColor = "&Logocolors=a2124c1,ac91828";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MPumpkin") !=-1) {//MWL08032022
          logoColor = "&Logocolors=aA77D5B,aff7a22";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MPSL") !=-1) {//MWL08032022
          logoColor = "&Logocolors=afffdf2,acb682e,acb682e,afffdf2,a32804b,abfa68e";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MFball") !=-1) {//MWL08032022
          logoColor = "&Logocolors=aA77D5B,affffff,aA77D5B";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MCoffee") !=-1) {//MWL08032022
          logoColor = "&Logocolors=affffff,"+bordercolor+",aoooooo";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("177MRather") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MCandyHearts") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MRibbon") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("177MReading") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MHello") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor+",affffff";
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MPaw") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("139MDrink") !=-1) {//MWL08032022
          logoColor = "&Logocolors=affffff,"+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MSweatshirt") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MHoodie") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MEra") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
          mono_server = "stitchdynamics5";

        } else if (MonogramFont.indexOf("101MFallFor") !=-1) {//MWL08032022
          logoColor = "&Logocolors="+threadcolor;
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
        } else if (MonogramFont.indexOf("71MFlower") !=-1) {  //MWL08062021
          Color1 = threadcolor+",a000000";
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("71MClassicSmiley") !=-1) {  //MWL08062021
          Color1 = threadcolor+",a000000";
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("304MHappy") !=-1) {  //MWL08062021
          Color1 = "AD08AB3,Aff2a00,A6dcb97,A97ecff,affa2b8,Afbffaf,Af2caf0,Ada7ca7,a8ee9db,A40b4a5";
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MSmileName") !=-1) {  //MWL08062021
          Color1 = threadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("71MSmileName") !=-1) {  //MWL08062021
          Color1 = threadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("177MRather") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MCandyHearts") !=-1) {  //MWL08062021
          Color1 = threadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MRibbon") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("177MReading") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MHello") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MPaw") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("139MDrink") !=-1) {  //MWL08062021
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MSweatshirt") !=-1) {  //MWL07272023
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MEra") !=-1) {  //MWL07272023
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MFallFor") !=-1) {  //MWL07272023
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else if (MonogramFont.indexOf("101MHoodie") !=-1) {  //MWL07272023
          Color1 = textthreadcolor;
          mono_server = "stitchdynamics5";
  
        } else {
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
          errorDetails = "select Your Pick";  
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

  
  