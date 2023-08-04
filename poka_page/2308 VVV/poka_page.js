
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

       $(function (){
        // $('head').load("./header.html");
        $(".headerDiv").load("./common.html #header");
        $(".cardModeDiv").load("./common.html #cardModeButton");
        // $(".cardSpan").load("./common.html #cards");
       });



       (function(d) {
         var config = {
           kitId: 'pfc1rmw',
           scriptTimeout: 3000,
           async: true
         },
         h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
       })(document);
   }