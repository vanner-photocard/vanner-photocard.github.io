{
  $(".headerDiv").load("./common.html #header");
  $(".cardModeDiv").load("./common.html #cardModeButton");
  cardModeChanger();
  let cardMode = "have"


  // 카드 상태 수정
  function cardModeChanger() {
      $("button").click(function () {
          let id = this.id
          cardMode = id
      });
  }


  function changeImage(image) {
      if (cardMode == "have") {
          image.style.opacity = "1";
      } else if (cardMode == "not_have") {
          image.style.opacity = "0.5";
      } else if (cardMode == "want") {
          image.style.backgroundColor = "rgb(200,0,0)";
          image.style.opacity = "0.8";
      } else if (cardMode == "want_exchangeable") {
          image.style.backgroundColor = "rgb(100,200,150)";
          image.style.opacity = "1";
      } else if (cardMode == "reset") {
          window.location.reload();
      }
  }

  function buttonHide() {
      let x = document.getElementById("cardModeButton");
      if (x.style.visibility === "visible") {
          x.style.visibility = "hidden";
      } else {
          x.style.visibility = "visible";
      }
  }

}

function pageSetter(pageNameH3, pageNameH4){
  $("#pageTitleH3").append(pageNameH3)
  $("#pageTitleH4").append(pageNameH4)
}




function pokaAttacher(pokaArray, pokaName, scnName) {

  // 카드 폴더에서 업로드하기
  let TAE = "1 TAE"
  let GON = "2 GON"
  let HYE = "3 HYE"
  let AHX = "4 AHX"
  let YGW = "5 YGW"
  let ALL1 = "6 ALL"
  let ALL2 = "7 ALL"
  let MEM_ARR = [TAE, GON, HYE, AHX, YGW, ALL1, ALL2]
  let POKA_NAME = pokaName;
  let POKA_ARR = pokaArray;
  let SCANNER_NAME = scnName;
  const BASE_IMG_URL = 'https://qvogmfjdivslqlaioqyg.supabase.co/storage/v1/object/public/photocard/'
  const pokaAddress = location.pathname.split('/').slice(-2).join('/').replace(".html","") + "/"
  const defaultAddress = BASE_IMG_URL + 'VPA%20WATERMARK_.png'
  const imgFolder = BASE_IMG_URL + pokaAddress
  //포카 넣기

  for (let p = 0; p < POKA_ARR.length; p++) {

      let pokaDivID = POKA_ARR[p];
      let pokaName = POKA_NAME[p];
      // ALL까지 몇개있는지 & MEM_ARR 조정
      let pokaMember = parseInt(pokaDivID.substr(-2, 1))
      console.log(pokaDivID, pokaName, pokaMember)
      if (pokaMember < 7) {
          MEM_ARR = [TAE, GON, HYE, AHX, YGW, ALL1, ALL2].slice(0, pokaMember)
          console.log(MEM_ARR)

      }
      // 멤버별 몇종있는지
      let pokaNumber = parseInt(pokaDivID.substr(-1, 1))

      // table(카드판 cardPan)에 넣어주기
      let default_html1 = `<tr><td><b class="pokaName">`
      let default_html2 = `</b><div id=`
      let default_html3 = ` class="pokaHolder"></div></td></tr>`
      let basic_html = default_html1 + pokaName + default_html2 + pokaDivID + default_html3
      $("#cardPan").append(basic_html)


      for (let i = 1; i < pokaNumber + 1; i++) {
          MEM_ARR.forEach((m) => {
              img_html = `<img class="poka" src="${imgFolder}${pokaDivID} ${m} (${i}).jpg" onclick="changeImage(this)" onError="this.src='${defaultAddress}';">`
              $("#" + pokaDivID).append(img_html)
          })
      }
  }
  $("#scnName").append(SCANNER_NAME)

}

