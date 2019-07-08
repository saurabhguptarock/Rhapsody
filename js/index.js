function nextgen() {
  document.getElementById("how-img").src = "assets/images/dashboard_full_1.png";
  $("#btn-1")
    .addClass("actives")
    .removeClass("buttons");
  $("#btn-2")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-3")
    .removeClass("actives")
    .addClass("buttons");
  $("#asddasas").html(`<div class="row text-center demo">
  <div class="col-sm animated fadeInUp textas">
    <img
      id="how-img"
      class="deo"
      src="assets/images/dashboard_full_1.png"
    />
  </div>
  <div
    class="col-sm animated fadeInUp  textas"
    style="padding-top: 20px"
  >
    <div id="soft-text">
      <h3 style="font-family: 'Alike', sans-serif;">
        Features of RCAM
      </h3>
      <ul class="fa-ul padding-top: 25px">
        <li>
          <i class="fa-li blue-text fa fa-square"></i>Compatible with
          any accounting package
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i> Extensive List
          of Chart of accounts for easy mapping.
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i> Mapping of
          trial balance based on master trial balance
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i>Availability of
          Monthly Financial statements
        </li>
        <button onclick="rcam()" id="reas" class="btn mt-5 buttonss">
          Read More
        </button>
      </ul>
    </div>
  </div>
</div>
<div class="row text-center demo">
  <div
    class="col-sm animated fadeInUp  textas"
    style="padding-top: 20px"
  >
    <div id="soft-text">
      <h3 style="font-family: 'Alike', sans-serif;">
        Features of XBRL
      </h3>
      <ul class="fa-ul padding-top: 25px">
        <li>
          <i class="fa-li blue-text fa fa-square"></i>User-friendly,
          tag, ungag, edit features
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i> Flexible data
          inputs (Direct copy paste from excel and by type also)
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i> Inbuilt
          calculation link base for auto totaling
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i>Current and
          previous year tagging at one go
        </li>
        <button onclick="xbrl()" id="reas" class="btn mt-5 buttonss">
          Read More
        </button>
      </ul>
    </div>
  </div>
  <div class="col-sm animated fadeInUp textas">
    <img
      id="how-img"
      class="deo"
      src="assets/images/dashboard_full_2.png"
    />
  </div>
</div>
<div class="row text-center demo">
  <div class="col-sm animated fadeInUp textas">
    <img
      id="how-img"
      class="deo"
      src="assets/images/dashboard_full_3.png"
    />
  </div>
  <div
    class="col-sm animated fadeInUp  textas"
    style="padding-top: 20px"
  >
    <div id="soft-text">
      <h3 style="font-family: 'Alike', sans-serif;">
        Features of eContract
      </h3>
      <ul class="fa-ul padding-top: 25px">
        <li>
          <i class="fa-li blue-text fa fa-square"></i>FAQ’s, EAC
          opinions and ITFG bulletins arranged in a systematic manner.
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i> All Ind AS’s
          presented in a very user-friendly and efficient manner.
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i>Approx. 1000 Ind
          AS/IFRS financial statements of listed and other companies
          for reference.
        </li>
        <li>
          <i class="fa-li blue-text fa fa-square"></i>Inbuilt
          Definition linkages from Ind AS, Guidance Notes, Schedule
          III and Companies Act.
        </li>
        <button onclick="eContract()" id="reas" class="btn mt-5 buttonss">
          Read More
        </button>
      </ul>
    </div>
  </div>
</div>`);
}

function performance() {
  document.getElementById("how-img").src = "assets/images/dashboard_full_2.png";
  $("#btn-1")
    .removeClass("actives")
    .addClass("buttons");
  $("#btn-2")
    .addClass("actives")
    .removeClass("buttons");
  $("#btn-3")
    .removeClass("actives")
    .addClass("buttons");
  $("#asddasas").html(`
  <div class="row text-center demo">
  <div class="col-sm animated fadeInUp textas">
      <img
        id="how-img"
        class="deo"
        src="assets/images/dashboard_full_2.png"
      />
    </div>
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of XBRL
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>User-friendly,
            tag, ungag, edit features
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Flexible data
            inputs (Direct copy paste from excel and by type also)
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Inbuilt
            calculation link base for auto totaling
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Current and
            previous year tagging at one go
          </li>
          <button onclick="xbrl()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div>
  </div>
  <div class="row text-center demo">
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of RCAM
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Compatible with
            any accounting package
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Extensive List
            of Chart of accounts for easy mapping.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Mapping of
            trial balance based on master trial balance
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Availability of
            Monthly Financial statements
          </li>
          <button onclick="rcam()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div>
    <div class="col-sm animated fadeInUp textas">
      <img
        id="how-img"
        class="deo"
        src="assets/images/dashboard_full_1.png"
      />
    </div>
  </div>
  <div class="row text-center demo">
    <div class="col-sm animated fadeInUp textas">
      <img
        id="how-img"
        class="deo"
        src="assets/images/dashboard_full_3.png"
      />
    </div>
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of eContract
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>FAQ’s, EAC
            opinions and ITFG bulletins arranged in a systematic manner.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> All Ind AS’s
            presented in a very user-friendly and efficient manner.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Approx. 1000 Ind
            AS/IFRS financial statements of listed and other companies
            for reference.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Inbuilt
            Definition linkages from Ind AS, Guidance Notes, Schedule
            III and Companies Act.
          </li>
          <button onclick="eContract()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div>
  </div>`);
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
  $("#asddasas").html(`
  <div class="row text-center demo">
    <div class="col-sm animated fadeInUp textas">
      <img
        id="how-img"
        class="deo"
        src="assets/images/dashboard_full_3.png"
      />
    </div>
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of eContract
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>FAQ’s, EAC
            opinions and ITFG bulletins arranged in a systematic manner.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> All Ind AS’s
            presented in a very user-friendly and efficient manner.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Approx. 1000 Ind
            AS/IFRS financial statements of listed and other companies
            for reference.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Inbuilt
            Definition linkages from Ind AS, Guidance Notes, Schedule
            III and Companies Act.
          </li>
          <button onclick="eContract()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div>
  </div>
  <div class="row text-center demo">
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of RCAM
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Compatible with
            any accounting package
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Extensive List
            of Chart of accounts for easy mapping.
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Mapping of
            trial balance based on master trial balance
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Availability of
            Monthly Financial statements
          </li>
          <button onclick="rcam()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div><div class="col-sm animated fadeInUp textas">
    <img
      id="how-img"
      class="deo"
      src="assets/images/dashboard_full_1.png"
    />
  </div>
  </div>
  <div class="row text-center demo"><div class="col-sm animated fadeInUp textas">
  <img
    id="how-img"
    class="deo"
    src="assets/images/dashboard_full_2.png"
  />
</div>
    <div
      class="col-sm animated fadeInUp  textas"
      style="padding-top: 20px"
    >
      <div id="soft-text">
        <h3 style="font-family: 'Alike', sans-serif;">
          Features of XBRL
        </h3>
        <ul class="fa-ul padding-top: 25px">
          <li>
            <i class="fa-li blue-text fa fa-square"></i>User-friendly,
            tag, ungag, edit features
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Flexible data
            inputs (Direct copy paste from excel and by type also)
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i> Inbuilt
            calculation link base for auto totaling
          </li>
          <li>
            <i class="fa-li blue-text fa fa-square"></i>Current and
            previous year tagging at one go
          </li>
          <button onclick="xbrl()" id="reas" class="btn mt-5 buttonss">
            Read More
          </button>
        </ul>
      </div>
    </div>
  </div>
  `);
}

function rcam() {
  location.href = "tools/rcam.html";
}

function xbrl() {
  location.href = "tools/xbrl.html";
}

function eContract() {
  location.href = "tools/eContract.html";
}

$("#rcam").tooltip({
  title:
    "Consolidation of Group Accounts & Preperation of Finantial Statements Made Easy",
  container: "#rcam",
  placement: "bottom",
  delay: 200
});

$("#xbrl").tooltip({
  title: "XBRL Finantial Statement Filling Tool as Per MCA Regulations",
  container: "#xbrl",
  placement: "bottom",
  delay: 200
});

$("#eContract").tooltip({
  title: "Online Contract Management Tool.",
  container: "#eContract",
  placement: "bottom",
  delay: 200
});
function logo() {
  location.href = "/";
}
