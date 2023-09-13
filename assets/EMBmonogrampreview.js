//-----------------------------------
//EMB
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
  var pumpkincolor;
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
    MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');

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
    if (MonogramFont.indexOf("101MCL") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/ABC2.PNG?183'    />");

    } else if (MonogramFont.indexOf("101MPretzel") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MPretzelABC.png?6123'    />");

    } else if (MonogramFont.indexOf("101MPineapple") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MPineappleABC.png?6123'    />");

    } else if (MonogramFont.indexOf("101MFlamingo") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFlamingoABC.png?6123'    />");

    } else if (MonogramFont.indexOf("101MPumpkin") != -1) {
      if (MonogramFont.indexOf("101MPumpkinLeaves") != -1) {//MWL7302021
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPumpkinLeaves.png?v=1628476978'    />");
      } else {
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MPumpkinABC.png?6123'    />");
      }
    } else if (MonogramFont.indexOf("101MPeachy") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MPeachyMC_ABC.png?2686'    />");

    } else if (MonogramFont.indexOf("101MSunFlr") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MSunFlr_ABC.png?3055'    />");

    } else if (MonogramFont.indexOf("101MChamp") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MChampage_AB.png?2940'    />");

    } else if (MonogramFont.indexOf("101MDnt") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field   w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/DonutABCDefault.png?2703'    />");

    } else if (MonogramFont.indexOf("101MWMelon") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MWMelonABC.png?7939'    />");

    } else if (MonogramFont.indexOf("101MLemon") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MLemonABC.png?7939'    />");

    } else if (MonogramFont.indexOf("101MLobster") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MLobsterABC.png?7939'    />");

    } else if (MonogramFont.indexOf("101MLipstick") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MLipstickABC.png?7939'    />");

    } else if (MonogramFont.indexOf("101MFlagBow") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFlagbowABC.png?7939'    />");

    } else if (MonogramFont.indexOf("58MSunFlr") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/58MSunflowerABC.png?8027'    />");

    } else if (MonogramFont.indexOf("58MPineapple") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/58MPineappleABC.png?8027'    />");

    } else if (MonogramFont.indexOf("58MFlamingo") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/58MFlamingoABC.png?8027'    />");

    } else if (MonogramFont.indexOf("58MWMelon") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/58MWmelonABC.png?8027'    />");

    } else if (MonogramFont.indexOf("139MLemon") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/139MLemonABC.png?8034'    />");

    } else if (MonogramFont.indexOf("139MLobster") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/139MLobsterABC.png?8034'    />");

    } else if (MonogramFont.indexOf("139MWMelon") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/139MWmelonABC.png?8034'    />");

    } else if (MonogramFont.indexOf("101MGBMan") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MGBManCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MSanta") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MSantaCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MSnowman") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MSnowmanCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MElf") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MelfCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MFlake") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFlakeCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MCup") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MCupCir.png?11588'    />");

    } else if (MonogramFont.indexOf("101MFootball") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101mfootballcir.png?11900'    />");

    } else if (MonogramFont.indexOf("101MAntlers") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101mantlerscir.png?11900'    />");

    } else if (MonogramFont.indexOf("101MApple") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101mapplecir.png?11900'    />");

    } else if (MonogramFont.indexOf("101MPSCup") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MCupCir_ABC.png?12686'    />");

    } else if (MonogramFont.indexOf("101MOrnament") != -1) { //MWL111219
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MOrnament.png?2387'    />");

    } else if (MonogramFont.indexOf("101MHolly") != -1) { //MWL111219
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MHolly.png?2415'    />");

    } else if (MonogramFont.indexOf("101MLights") != -1) { //MWL111219
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLights.png?2425'    />");

    } else if (MonogramFont.indexOf("101MMickey") != -1) { //MWL111219
      if (MonogramFont.indexOf("101MMickeyHead") != -1) { //MWL22220
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMickeyHead.png?v=1582339540'    />");
      } else if (MonogramFont.indexOf("101MMickeyPumpkin") != -1) {//MWL7302021
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMickeyPumpkin.png?v=1628476935'    />");
      } else if (MonogramFont.indexOf("101MMickeyGhost") != -1) {//MWL7302021
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMickeyGhost.png?v=1628476917'    />");
      } else {
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101Mmickey.png?2466'    />");
      }
    } else if (MonogramFont.indexOf("101MMerry") != -1) { //MWL111219
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101mmerry.png?2494'    />");

    } else if (MonogramFont.indexOf("knock101m") != -1) { //MWL111219
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/knock101m.png?2532'    />");

    } else if (MonogramFont.indexOf("fancy101mdia") != -1) {
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/fancy101mdia.png?v=1576773100'    />");

    } else if (MonogramFont.indexOf("58MMickeyHead") != -1) {//MWL22220
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/58MMickeyHead.png?v=1582339525'    />");

    } else if (MonogramFont.indexOf("101MCastle") != -1) { //MWL22220
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101McASTLE.png?v=1582339533'    />");

    } else if (MonogramFont.indexOf("101MAirplane") != -1) { //MWL31120
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MAirplane.png?v=1583883497'    />");

    } else if (MonogramFont.indexOf("101MNurse") != -1) { //MWL43020
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field    w3-padding-48 ' style='  object-fit: fill'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101mnurse.png?v=1588220833'    />");

    } else if (MonogramFont.indexOf("101MLeopard") != -1) {//MWL31120
      if (MonogramFont.indexOf("101MLeopardTree") != -1) {//MWL10292021
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLeopardTree.png?v=1635429465'    />");
      } else {
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLeopard.png?v=1595673754'    />");
      }
    } else if (MonogramFont.indexOf("101MMAMAHEART") != -1) {//MWL31120
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMAMAHEART.png?v=1595673759'    />");

    } else if (MonogramFont.indexOf("101MMAMAretro") != -1) {//MWL31120
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMAMAretro.png?v=1595673766'    />");

    } else if (MonogramFont.indexOf("101MLeafWreath") != -1) {//MWL180820
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLeafWreath.png?v=1597723781'    />");

    } else if (MonogramFont.indexOf("101MJoy") != -1) {//MWL06112020
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MJoy.png?v=1604637690'    />");

    } else if (MonogramFont.indexOf("101MTruck") != -1) {//MWL06112020
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MTruck.png?v=1604637701'    />");

    } else if (MonogramFont.indexOf("101MTree") != -1) {//MWL06112020
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MTREE.png?v=1604637696'    />");

    } else if (MonogramFont.indexOf("101MCandy") != -1) {//MWL06112020
      if (MonogramFont.indexOf("101MCandyHearts") != -1) {//MWL15012021
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCandyHearts.png?v=1610693777'    />");
      } else {
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCandy.png?v=1604637684'    />");
      }
    } else if (MonogramFont.indexOf("101MHeartBorder") != -1) {//MWL15012021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MHeartBorder.png?v=1610693801'    />");

    } else if (MonogramFont.indexOf("101MXOXO") != -1) {//MWL15012021
      if (MonogramFont.indexOf("101MXOXOScript") != -1) {//MWL01132022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MXOXOScript.png?v=1642035557'    />");
      } else if (MonogramFont.indexOf("101MXOXOBlock") != -1) {//MWL01132022
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MXOXOBlock.png?v=1642035544'    />");
      } else {
        $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MXOXO.png?v=1610693846'    />");
      }
    } else if (MonogramFont.indexOf("101MOMG") != -1) {//MWL15012021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MOMG.png?v=1610693839'    />");

    } else if (MonogramFont.indexOf("101MLover") != -1) {//MWL15012021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLover.png?v=1610693825'    />");

    } else if (MonogramFont.indexOf("101MCoffeeLove") != -1) {//MWL15012021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCoffeeLove.png?v=1610693788'    />");

    } else if (MonogramFont.indexOf("101MBunny") != -1) {//MWL03052021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MBunny.png?v=1614913708'    />");

    } else if (MonogramFont.indexOf("101MRainbow") != -1) {//MWL03052021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101mrainbow.png?v=1614913724'    />");

    } else if (MonogramFont.indexOf("101MEggs") != -1) {//MWL03052021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101meggs.png?v=1614913717'    />");

    } else if (MonogramFont.indexOf("101MSeashell") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSeashell.png?v=1620365809'    />");

    } else if (MonogramFont.indexOf("101MSunglasses") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSunglasses.png?v=1620365857'    />");

    } else if (MonogramFont.indexOf("101MCaduceus") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCADUCEUS.png?v=1620365627'    />");

    } else if (MonogramFont.indexOf("101MDisneyGucci") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MDisneyGucci.png?v=1620365671'    />");

    } else if (MonogramFont.indexOf("101MCoffeeGucci") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCoffeeGucci.png?v=1620365655'    />");

    } else if (MonogramFont.indexOf("101MIcedCoffee") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MIcedCoffee.png?v=1620365736'    />");

    } else if (MonogramFont.indexOf("101MMini") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMini.png?v=1620365772'    />");

    } else if (MonogramFont.indexOf("101MMama") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MMama.png?v=1620365750'    />");

    } else if (MonogramFont.indexOf("101MGrandma") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MGrandma.png?v=1620365716'    />");

    } else if (MonogramFont.indexOf("101MAuntie") != -1) {//MWL05072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MAuntie.png?v=1620365610'    />");

    } else if (MonogramFont.indexOf("101MPalmTrees") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPalmTrees.png?v=1620365788'    />");

    } else if (MonogramFont.indexOf("101MStars") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MStars.png?v=1620365825'    />");

    } else if (MonogramFont.indexOf("101MDogMom") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MDogMom.png?v=1620365693'    />");

    } else if (MonogramFont.indexOf("101MCatMom") != -1) {//MWL05102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MCatMom.png?v=1620365641'    />");

    } else if (MonogramFont.indexOf("101MFlags") != -1) {//MWL06072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MFlags.png?v=1623038084'    />");

    } else if (MonogramFont.indexOf("101MFireworks") != -1) {//MWL06072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MFireworks.png?v=1623038005'    />");

    } else if (MonogramFont.indexOf("101MSparklers") != -1) {//MWL06072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSparklers.png?v=1623038148'    />");

    } else if (MonogramFont.indexOf("101MPatStars") != -1) {//MWL06072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MPatStars.png?v=1623387185'    />");

    } else if (MonogramFont.indexOf("101MBdayBabe") != -1) {//MWL15072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MBdayBabe.png?v=1626337012'    />");

    } else if (MonogramFont.indexOf("101MChickfilyay") != -1) {//MWL15072021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MChickfilyay.png?v=1626337029'    />");

    } else if (MonogramFont.indexOf("101MHelloPump") != -1) {//MWL7242021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MHelloPump.png?v=1627125675'    />");

    } else if (MonogramFont.indexOf("101MLeopPump") != -1) {//MWL7242021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLeopPump.png?v=1627125710'    />");

    } else if (MonogramFont.indexOf("101MSanderson") != -1) {//MWL7302021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSanderson.png?v=1628905275'    />");

    } else if (MonogramFont.indexOf("SB101M") != -1) {//MWL7302021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/SB101M.png?v=1627896174'    />");

    } else if (MonogramFont.indexOf("101MGameday") != -1) {//MWL8102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MGameday.png?v=1628476885'    />");

    } else if (MonogramFont.indexOf("101MWine") != -1) {//MWL8102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MWine.png?v=1628476998'    />");

    } else if (MonogramFont.indexOf("6M-71M") != -1) {//MWL8102021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/11959049.png?v=1635021176'    />");

    } else if (MonogramFont.indexOf("101MGrinchHand") != -1) {//MWL10292021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MGrinchHand.png?v=1635429425'    />");

    } else if (MonogramFont.indexOf("101MClassicSanta") != -1) {//MWL10292021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MClassicSanta.png?v=1635429338'    />");

    } else if (MonogramFont.indexOf("101MGinghamTree") != -1) {//MWL10292021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MGinghamTree.png?v=1635429397'    />");

    } else if (MonogramFont.indexOf("101MAntlerLights") != -1) {//MWL10292021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MAntlerLights.png?v=1635429175'    />");

    } else if (MonogramFont.indexOf("101MBeMerry") != -1) {//MWL10292021
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MBeMerry.png?v=1635429188'    />");

    } else if (MonogramFont.indexOf("101MSmileyXOXO") != -1) {//MWL01132022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MSmileyXOXO.png?v=1642035531'    />");

    } else if (MonogramFont.indexOf("101MPinkLeopard") != -1) {//MWL01132022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MLeopard_7e326f09-9132-4e1c-912e-76a5af0a448c.png?v=1642035509'    />");

    } else if (MonogramFont.indexOf("101MShamrockFrame") != -1) {//MWL02032022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MShamrockFrame.png?v=1643874284'    />");

    } else if (MonogramFont.indexOf("101MShamrock") != -1) {//MWL02032022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MShamrock.png?v=1643876090'    />");

    } else if (MonogramFont.indexOf("101MDrSeuss") != -1) {//MWL02032022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MDrSeuss.png?v=1643874295'    />");

    } else if (MonogramFont.indexOf("101MRatherBe") != -1) {//MWL02162022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MRatherBe.png?v=1644974603'    />");

    } else if (MonogramFont.indexOf("101MTarget") != -1) {//MWL02162022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MTarget.png?v=1644974590'    />");

    } else if (MonogramFont.indexOf("101MStarbucks") != -1) {//MWL02162022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MStarbucks.png?v=1644974563'    />");

    } else if (MonogramFont.indexOf("13-101M") != -1) {//MWL02282022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/15-101M.png?v=1645854292'    />");

    } else if (MonogramFont.indexOf("13-71M") != -1) {//MWL02282022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/15-71M.png?v=1645854305'    />");

    } else if (MonogramFont.indexOf("9-54M")  !=-1) {//MWL02162022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/9-54m.png?v=1646549504'    />");                                              

    } else if (MonogramFont.indexOf("17-71M")  !=-1) {//MWL05282022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/17-71M.png?v=1649870578'    />");                                              

    } else if (MonogramFont.indexOf("17-71M")  !=-1) {//MWL05282022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/17-71M.png?v=1649870578'    />");                                              

    } else if (MonogramFont.indexOf("101MWitch")  !=-1) {//MWL05282022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/101MWitch.png?v=1659495492'    />");                                              

    } else if (MonogramFont.indexOf("1-58M")  !=-1) {//MWL08172022
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0054/6819/2886/files/58MPreviewDefaultImage.png?v=1660702163'    />");                                              

    } else if (MonogramFont.indexOf("101MFlorPump")  !=-1) {//MWL07282023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MFlorPump.png?v=1690541227'    />");                                              

    } else if (MonogramFont.indexOf("228MBluePumpSet")  !=-1) {//MWL07282023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/228MBluePumpSet.png?v=1690541258'    />");                                              

    } else if (MonogramFont.indexOf("101MBluePump")  !=-1) {//MWL07282023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MBluePump.png?v=1690541238'    />");                                              

    } else if (MonogramFont.indexOf("228MCoziness")  !=-1) {//MWL07282023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/228MCoziness.png?v=1690548154'    />");                                              

    } else if (MonogramFont.indexOf("228MUMSocialFancy")  !=-1) {//MWL07282023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/228MUMSocialFancy.png?v=1690556891'    />");                                              

    } else if (MonogramFont.indexOf("101MBats")  !=-1) {//MWL09012023
      $("#monogramimage").html("<img id='monogramImg'   class='line-item-property__field  w3-padding-48 ' style='  object-fit: scale-down'    alt='Monogram here'  src='//cdn.shopify.com/s/files/1/0635/8561/files/101MBats.png?v=1693506073'    />");                                              

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
    //for colors on the logo
    
    pumpkincolor = $("#pumpkincolor option:selected").attr("data-valcolor");//MWL28072023
    bordercolor = $("#bordercolor option:selected").attr("data-valcolor");//MWL5102021
    heartcolor = $("#heartcolor option:selected").attr("data-valcolor");//MWL5102021
    pawcolor = $("#pawcolor option:selected").attr("data-valcolor");//MWL5102021
    //$('select[name="properties[Thread Color]"]').find(':selected').attr('data-valcolor');
    MonogramFont = $('select[name="properties[Monogram Style]"]').find(':selected').attr('data-valname');

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
    if (MonogramText !== "" && threadcolor !== "" && typeof threadcolor !== 'undefined' && MonogramFont !== "" && typeof MonogramFont !== 'undefined') {



      if (MonogramFont.indexOf("101MCL") != -1) {
        logoColor = "&Logocolors=A00704a,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MDnt") != -1) {
        logoColor = "&Logocolors=AD08AB3,AA77D5B,Affffff,AF4E18A,A90CBC3,A888AE2,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPineapple") != -1) {
        logoColor = "&Logocolors=A32804b,Afff856";
        mono_server = "stitchdynamics5";


      } else if (MonogramFont.indexOf("101MPretzel") != -1) {
        logoColor = "&Logocolors=A833418,A000000,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFlamingo") != -1) {
        logoColor = "&Logocolors=Affdfed,A000000,Afff856,A000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPeachy") != -1) {
        logoColor = "&Logocolors=Affdab9,A228B22,A8B4513,A000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPumpkin") != -1) {
        if (MonogramFont.indexOf("101MPumpkinLeaves") != -1) {  //MWL08102021
          logoColor = "&Logocolors=abacb96,a512a06,acb682e";
          mono_server = "stitchdynamics5";
        } else {
          logoColor = "&Logocolors=A288340";
          mono_server = "stitchdynamics5";
        }
      } else if (MonogramFont.indexOf("101MChamp") != -1) {
        logoColor = "&Logocolors=A9C9135,A0B944E,Affffff,AB59F4A,AD099B0,A0B944E,Affffff,AD099B0,A000000,A000000E";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSunFlr") != -1) {
        logoColor = "&Logocolors=A512a06,Aedcd1f";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MWMelon") != -1) {
        logoColor = "&Logocolors=Aff9dc8,A6dcb97,A000000b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLemon") != -1) {
        logoColor = "&Logocolors=Afbffaf,A32804b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLobster") != -1) {
        logoColor = "&Logocolors=Ac91828,A0000ff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLipstick") != -1) {
        logoColor = "&Logocolors=A000000,AD1A236,AC7040A,A000000,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFlagBow") != -1) {
        logoColor = "&Logocolors=Affffff,A13214e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("58MSunFlr") != -1) {
        logoColor = "&Logocolors=A512a06,Aedcd1f";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("58MPineapple") != -1) {
        logoColor = "&Logocolors=A6dcb97,Afff856";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("58MFlamingo") != -1) {
        logoColor = "&Logocolors=Affdfed,Aoooooo,Afff856,A0000oo";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("58MWMelon") != -1) {
        logoColor = "&Logocolors=Aff9dc8,A6dcb97,A000000b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("139MLemon") != -1) {
        logoColor = "&Logocolors=Afbffaf,A32804b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("139MLobster") != -1) {
        logoColor = "&Logocolors=Ac91828,A0000ff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("139MWMelon") != -1) {
        logoColor = "&Logocolors=Aff9dc8,A6dcb97,A000000b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MGBMan") != -1) {
        logoColor = "&Logocolors=A512a06,Affffff,A000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSanta") != -1) {
        logoColor = "&Logocolors=Ac91828,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSnowman") != -1) {
        logoColor = "&Logocolors=A000000,Ac91828,Aff7a22";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MElf") != -1) {
        logoColor = "&Logocolors=A32804b,Afff856,Ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFlake") != -1) {
        logoColor = "&Logocolors=A97ecff,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCup") != -1) {
        logoColor = "&Logocolors=Ac91828,A32804b,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFootball") != -1) {
        logoColor = "&Logocolors=A904a1f,Affffff,904a1f";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MAntlers") != -1) {
        logoColor = "&Logocolors=A904a1f,A0000ff,AFFC0CB";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MApple") != -1) {
        logoColor = "&Logocolors=Afd4729,A267d3f,AFFC0CB";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPSCup") != -1) {
        logoColor = "&Logocolors=Aff7a22,Affffff,AA77D5B";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MOrnament") != -1) { //MWL111219               
        logoColor = "&Logocolors=affdfed,Ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MHolly") != -1) { //MWL111219               
        logoColor = "&Logocolors=A32804b,Ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLights") != -1) { //MWL111219               
        logoColor = "&logocolors=A000000,AD08AB3,a32804b,ac91828,a97ecff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MMickey") != -1) { //MWL111219  
        if (MonogramFont.indexOf("101MMickeyHead") != -1) {  //MWL22220
          logoColor = "&Logocolors=" + bordercolor;
          mono_server = "stitchdynamics5";
        } else if (MonogramFont.indexOf("101MMickeyPumpkin") != -1) {  //MWL07242021
          logoColor = "&Logocolors=aff7a22,aff7a22,aff7a22,a000000,aff7a22";
          mono_server = "stitchdynamics5";
        } else if (MonogramFont.indexOf("101MMickeyGhost") != -1) {  //MWL07242021
          logoColor = "&Logocolors=affffff,a000000";
          mono_server = "stitchdynamics5";
        } else {
          logoColor = "&logocolors=A000000,Ac5a432,ac91828,a32804b,a97ecff,afff856,Ac5a432";
          mono_server = "stitchdynamics5";
        }
      } else if (MonogramFont.indexOf("101MMerry") != -1) { //MWL111219               
        logoColor = "&Logocolors=Ac91828,A32804b,A32804b,A32804b,A32804b,Ac5a432,Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("knock101m") != -1) { //MWL111219               
        logoColor = "&logocolors=Affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("fancy101mdia") != -1) {
        logoColor = "&Logocolors=" + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("58MMickeyHead") != -1) {  //MWL22220
        logoColor = "&Logocolors=" + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCastle") != -1) {  //MWL22220
        logoColor = "&Logocolors=" + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MAirplane") != -1) {  //MWL31120
        logoColor = "&Logocolors=A000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MNurse") != -1) {  //MWL43020
        logoColor = "&Logocolors=a000000,a000000,aafa9b1," + bordercolor + ",aafa9b1,aafa9b1,aafa9b1";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLeopard") != -1) {  //MWL31120
        if (MonogramFont.indexOf("101MLeopardTree") != -1) {  //MWL10292021
          logoColor = "&Logocolors=abfa68e,aA77D5B,a000000";
          mono_server = "stitchdynamics5";
        } else {
          logoColor = "&Logocolors=a000000,AA77D5B";
          mono_server = "stitchdynamics5";
        }
      } else if (MonogramFont.indexOf("101MMAMAHEART") != -1) {  //MWL31120
        logoColor = "&Logocolors=a13214e,Affdab9,a13214e,a97ecff,a13214e,affdfed,a13214e,ae7adea,a13214e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MMAMAretro") != -1) {  //MWL31120
        logoColor = "&Logocolors=a8ee9db,affa2b8,ae7adea,a8ee9db,affa2b8,a8ee9db,ae7adea,a8ee9db,affa2b8,affa2b8";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLeafWreath") != -1) {  //MWL180820
        logoColor = "&Logocolors=ac5a432,aff7a22,abc5b23,a8c9970,a8c9970,a32804b";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MJoy") != -1) {  //MWL061120
        logoColor = "&Logocolors=ac91828,a32804b,ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MTruck") != -1) {  //MWL061120
        logoColor = "&Logocolors=a32804b,ac91828,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MTree") != -1) {  //MWL061120
        logoColor = "&Logocolors=a32804b,ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCandy") != -1) {  //MWL061120
        if (MonogramFont.indexOf("101MCandyHearts") != -1) {  //MWL15012021
          logoColor = "&Logocolors=aeda6d0,a8ee9db,af2caf0";
          mono_server = "stitchdynamics5";
        } else {
          logoColor = "&Logocolors=affffff,ac91828,affffff,ac91828";
          mono_server = "stitchdynamics5";
        }
      } else if (MonogramFont.indexOf("101MHeartBorder") != -1) {  //MWL15012021
        logoColor = "&Logocolors=ac91828,aff55e2,ae24593";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MXOXO") != -1) {  //MWL15012021
        if (MonogramFont.indexOf("101MXOXOScript") != -1) {  //MWL01132022
          logoColor = "&Logocolors=" + threadcolor;
          mono_server = "stitchdynamics5";
        } else if (MonogramFont.indexOf("101MXOXOBlock") != -1) {  //MWL01132022
          logoColor = "&Logocolors=" + bordercolor + "," + threadcolor + "," + bordercolor + "," + threadcolor + "," + bordercolor + "," + threadcolor + "," + bordercolor + "," + threadcolor + "," + bordercolor;
          mono_server = "stitchdynamics5";
        } else {
          logoColor = "&Logocolors=a000000,ac91828";
          mono_server = "stitchdynamics5";
        }
      } else if (MonogramFont.indexOf("101MOMG") != -1) {  //MWL15012021
        logoColor = "&Logocolors=a97ecff,ac5a432,affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLover") != -1) {  //MWL15012021
        logoColor = "&Logocolors=ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCoffeeLove") != -1) {  //MWL15012021
        logoColor = "&Logocolors=affffff,affffff,affffff,affffff,affffff,affffff,affffff,affffff,affffff,affffff,adda9ab,abfa68e,adda9ab,abfa68e,ae24593";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MBunny") != -1) {  //MWL03052021
        logoColor = "&Logocolors=affdfed,aafa9b1";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MRainbow") != -1) {  //MWL03052021
        logoColor = "&Logocolors=AD08AB3,afbffaf,a97ecff,af2caf0";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MEggs") != -1) {  //MWL03052021
        logoColor = "&Logocolors=aafa9b1,aafa9b1,af2caf0,a8ee9db,a8ee9db,a8ee9db,AD08AB3,AD08AB3,af2caf0,af2caf0,a8ee9db,a8ee9db,AD08AB3";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSeashell") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + bordercolor + "," + bordercolor + "," + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSunglasses") != -1) {  //MWL05072021
        logoColor = "&Logocolors=affdfed,ada7ca7";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCaduceus") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MDisneyGucci") != -1) {  //MWL05072021
        logoColor = "&Logocolors=a32804b,ac91828,abfa68e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCoffeeGucci") != -1) {  //MWL05072021
        logoColor = "&Logocolors=a32804b,ac91828,abfa68e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MIcedCoffee") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MMini") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + heartcolor + "," + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MMama") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + heartcolor + "," + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MGrandma") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + heartcolor + "," + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MAuntie") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + heartcolor + "," + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPalmTrees") != -1) {  //MWL05072021
        logoColor = "&Logocolors=aA77D5B,abfa68e,a6dcb97";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MStars") != -1) {  //MWL05072021
        logoColor = "&Logocolors=aff55e2,a40b4a5,afffe25,afffe25,aff92c9,a40b4a5,aff55e2,aff92c9";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MDogMom") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + threadcolor + "," + threadcolor + "," + pawcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MCatMom") != -1) {  //MWL05072021
        logoColor = "&Logocolors=" + threadcolor + "," + threadcolor + "," + pawcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSparklers") != -1) {  //MWL06072021
        logoColor = "&Logocolors=aafa9b1,a2124c1,ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFireworks") != -1) {  //MWL06072021
        logoColor = "&Logocolors=ac91828,a97ecff,a97ecff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFlags") != -1) {  //MWL06072021
        logoColor = "&Logocolors=a13214e,ac91828,a13214e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPatStars") != -1) {  //MWL06072021
        logoColor = "&Logocolors=a13214e,affffff,a13214e,ac91828,ac91828,a13214e,affffff,affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MBdayBabe") != -1) {  //MWL07152021
        logoColor = "&Logocolors=ada7ca7";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MChickfilyay") != -1) {  //MWL07152021
        logoColor = "&Logocolors=ac91828";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MLeopPump") != -1) {  //MWL07242021
        logoColor = "&Logocolors=" + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MHelloPump") != -1) {  //MWL07242021
        logoColor = "&Logocolors=aff7a22,abc5b23,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSanderson") != -1) {  //MWL07242021
        logoColor = "&Logocolors=aff7a22,afff856,a6b33a5,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MGameday") != -1) {  //MWL08102021
        logoColor = "&Logocolors=" + bordercolor + "," + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MWine") != -1) {  //MWL08102021
        logoColor = "&Logocolors=aafa9b1," + bordercolor + ",ac5a432" + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MGrinchHand") != -1) {  //MWL10292021
        logoColor = "&Logocolors=affffff,a8acf6c,ac91828,affffff,ac5a432,affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MClassicSanta") != -1) {  //MWL10292021
        logoColor = "&Logocolors=" + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MGinghamTree") != -1) {  //MWL10292021
        logoColor = "&Logocolors=ac91828,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MAntlerLights") != -1) {  //MWL10292021
        logoColor = "&Logocolors=aA77D5B,ac5a432,a32804b,ac91828,affffff";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MSmileyXOXO") != -1) {  //MWL01132022
        logoColor = "&Logocolors=ada7ca7,ac91828,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MPinkLeopard") != -1) {  //MWL01132022
        logoColor = "&Logocolors=aff2a00,affdfed";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MShamrockFrame") != -1) {  //MWL02032022
        logoColor = "&Logocolors=a32804b,a8acf6c";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MShamrock") != -1) {  //MWL02032022
        logoColor = "&Logocolors=" + bordercolor + "," + bordercolor + "," + bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MDrSeuss") != -1) {  //MWL02032022
        logoColor = "&Logocolors=affffff,ac91828,a000000,ac91828,a000000";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MWitch") != -1) {  //MWL08032022
        logoColor = "&Logocolors=a000000,a6b33a5,Abcff81";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("228MBluePumpSet") != -1) {  //MWL08032022
        logoColor = "&Logocolors=" + pumpkincolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MBluePump") != -1) {  //MWL08032022
        logoColor = "&Logocolors=" + pumpkincolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MFlorPump") != -1) {  //MWL08032022
        logoColor = "&Logocolors=a908f68,a778c9f,aaf531e,adda9ab,abfa68e";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("228MCoziness") != -1) {  //MWL08032022
        logoColor = "&Logocolors=aa82828,abfa68e,aaf531e,acbc36f,a908f68";
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("228MUMSocial") != -1) {  //MWL08032022
        logoColor = "&Logocolors=" + threadcolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("101MBats") != -1) {  //MWL08032022
        logoColor = "&Logocolors=a000000";
        mono_server = "stitchdynamics5";

      } else {
        logoColor = "";
        mono_server = "stitchdynamics5";
      }


      //For Monograms without Logo Colors but requires Custom Colors
      if (MonogramFont.indexOf("SB101M2") != -1) {  //MWL08062021
        Color1 = threadcolor + "," + bordercolor;
        mono_server = "stitchdynamics5";

        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }
      } else if (MonogramFont.indexOf("SB101M") != -1) {  //MWL08062021
        Color1 = threadcolor + "," + bordercolor;
        mono_server = "stitchdynamics5";

        if (MonogramText.length == 2) {
          errorDetails = "Must have 3 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }
      } else if (MonogramFont.indexOf("9-54M") !=-1) {  //MWL03062022
        Color1 = threadcolor+","+bordercolor;
        mono_server = "stitchdynamics5";

      } else if (MonogramFont.indexOf("10-101M") != -1) {  //MWL08062021---------Filter of 2 letter styles--------------------------
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";

        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }
      } else if (MonogramFont.indexOf("10-58M") != -1) { //MWL10/7/2021---------Filter of 2 letter styles--------------------------
        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }
      } else if (MonogramFont.indexOf("10-71M") != -1) { //MWL10/7/2021---------Filter of 2 letter styles--------------------------
        if (MonogramText.length == 3) {
          errorDetails = "Must have 2 letters for this Style";
          $("#validatorId").html(" " + errorDetails + "").css("color", "red", "font-style", "italic");
          flagStop = 1;
        }
      } else if (MonogramFont.indexOf("228MBluePumpSet") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else if (MonogramFont.indexOf("101MBluePump") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else if (MonogramFont.indexOf("101MFlorPump") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else if (MonogramFont.indexOf("228MCoziness") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else if (MonogramFont.indexOf("228MUMSocial") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else if (MonogramFont.indexOf("101MBats") != -1) {  //MWL07282023
        Color1 = threadcolor;
        mono_server = "stitchdynamics5"; 
        
      } else {
        Color1 = threadcolor;
        mono_server = "stitchdynamics5";
      }


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

            //For No Monograms SKU, checks last 2 letters
            if (MonogramFont.slice(-2) == "No") {
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
        $("#MonogramText").attr('disabled', false);//For No Monograms SKU
      } else if (threadcolor == "") {
        errorDetails = "select a Threadcolor";
      } else {
        errorDetails = "select a Monogram Style";
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



