function nextgen() {
  document.getElementById("how-img").src =
    "assets/images/dashboard_full_1.webp";
  $("#btn-1")
    .addClass("actives")
    .removeClass("buttons");
  $("#btn-2")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-3")
    .removeClass("actives")
    .addClass("buttons");
  $("#soft-text h3").html("Features of RCAM");
  $("#soft-text ul").html(`<li>
  <i class="fa-li blue-text fa fa-square"></i>Compatible with
  any accounting package
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i> Extensive List of
  Chart of accounts for easy mapping.
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i> Mapping of trial
  balance based on master trial balance
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i>Availability of
  Monthly Financial statements
</li>`);
}
function performance() {
  document.getElementById("how-img").src =
    "assets/images/dashboard_full_2.webp";
  $("#btn-1")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-2")
    .addClass("actives")
    .removeClass("buttons");
  $("#btn-3")
    .removeClass("actives")
    .addClass("buttons");
  $("#soft-text h3").html("Features of XBRL");
  $("#soft-text ul").html(`
  <li>
                  <i class="fa-li blue-text fa fa-square"></i>User-friendly, tag, ungag, edit features
                </li>
                <li>
                  <i class="fa-li blue-text fa fa-square"></i> Flexible data inputs (Direct copy paste from excel and by type also)
                </li>
                <li>
                  <i class="fa-li blue-text fa fa-square"></i> Inbuilt calculation link base for auto totaling
                </li>
                <li>
                  <i class="fa-li blue-text fa fa-square"></i>Current and previous year tagging at one go
                </li>
                `);
}
function effectiveness() {
  document.getElementById("how-img").src = "assets/images/dashboard_full_3.png";
  $("#btn-1")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-2")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-3")
    .addClass("actives")
    .removeClass("buttons");
  $("#soft-text h3").html("Features of IndAsOnline");
  $("#soft-text ul").html(` <li>
  <i class="fa-li blue-text fa fa-square"></i>FAQ’s, EAC opinions and ITFG bulletins arranged in a systematic manner.
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i> All Ind AS’s presented in a very user-friendly and efficient manner.
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i>Approx. 1000 Ind AS/IFRS financial statements of listed and other companies for reference.
</li>
<li>
  <i class="fa-li blue-text fa fa-square"></i>Inbuilt Definition linkages from Ind AS, Guidance Notes, Schedule III and Companies Act.
</li>`);
}
function rcam() {
  location.href = "tools/rcam.html";
}
function xbrl() {
  location.href = "tools/xbrl.html";
}
function indasonline() {
  location.href = "tools/indasonline.html";
}
