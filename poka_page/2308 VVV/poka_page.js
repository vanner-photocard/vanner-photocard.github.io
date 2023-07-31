
{
    // 카드 상태 수정
       let cardMode = ""
       $("button").click(function () {
           cardMode = ""
           let id = this.id
           cardMode = id
           console.log(cardMode)
       });

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
               image.style.backgroundColor = "rgb(255,255,255)"
               image.style.opacity = "0.5";
           }
       }

       function buttonHide() {
           let x = document.getElementById("cardModeButton");

           console.log(x.style.display + " yes")
           if (x.style.display === "none") {
               x.style.display = "block";
           } else {
               x.style.display = "none";
           }
       }
   }