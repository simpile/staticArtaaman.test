/* -------------------------------------------------------------------------- */
/*                                  NEWSPAGE                                  */
/* -------------------------------------------------------------------------- */

var contents = [
    {
      id: "newsCard-1",
      title: "آرماتور چیست؟",
      image:"images/NEWS/news-00 (1).jpg",
      text:`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
      مورد نیاز و کاربردهای متنوع`

    },
    {
      id: "newsCard-2",
      title: "استاپ موشن چیست؟",
      image:"images/NEWS/news-00 (2).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"

    },
    {
      id: "newsCard-3",
      title: "انواع آرماتور",
      image:"images/NEWS/news-00 (3).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
    {
      id: "newsCard-4",
      title: "حضور آرتامن در دوازدهمین جشنواره پویانمایی",
      image:"images/NEWS/news-00 (4).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
    {
      id: "newsCard-5",
      title: "چگونه مدل بسازیم",
      image:"images/NEWS/news-00 (5).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
    {
      id: "newsCard-6",
      title: "لوازم مورد نیاز برای ساخت استاپ موشن",
      image:"images/NEWS/news-00 (6).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
    {
      id: "newsCard-7",
      title: "لوازم مورد نیاز برای ساخت استاپ موشن",
      image:"images/NEWS/news-00 (6).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
    {
      id: "newsCard-8",
      title: "حضور آرتامن در دوازدهمین جشنواره پویانمایی",
      image:"images/NEWS/news-00 (4).jpg",
      text:"و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی"
    },
  ]
  var newsCard = document.getElementsByClassName('news-card');
    var newsCardLengh = newsCard.length;
    //  console.log(newsCard);
  
    for (var i = 0; i < newsCardLengh; i++) {
      newsCard[i].addEventListener("click", loadCard);
    }
  
    function loadCard() {
      //  console.log(this.id);
      // window.open('singleNewsPage.html');
      // location.href="singleNewsPage.html";
  
      contents.map(item => {
        if (item.id == this.id) {
              // location.href="singleNewsPage.html";
              openCard(item)
  
  
  //         document.write(
  // `
  
  // <div id="newsMainPart" style="min-height: 50vh;text-align:center; ">
  
  //     ${item.title}
  // </div>
  
  
  
    
  // `
  
  //   //  item.title
  //         )
        }
  
  
      })
    }
  
    function openCard(item){
  //     const newsMain = document.getElementById("newsMainPart");
  // newsMain.innerHTML = item.title;
  // var mainPart= document.getElementById("newsMainPart");
  // mainPart.innerHTML =item.title;
  // return item.title;
  localStorage.setItem("itemTitle",item.title );
  localStorage.setItem("itemImg",item.image );
  localStorage.setItem("itemTxt",item.text );
  
 window.open('singleNewsPage.html', "_self");
  
  // newWindow.document.write(item.title)
  // newsMain.innerHTML= item.title;
//   console.log(item.image);
    }
    var newsText= document.getElementById("newsText");
    var newsMainTitle = document.getElementById("newsTitle");
      var newsMainImg = document.getElementById("newsImg");
      var itemText = localStorage.getItem("itemTxt");
      var itemTitle = localStorage.getItem("itemTitle");
      var itemImage = localStorage.getItem("itemImg");
      newsText.innerHTML=itemText;
    newsMainImg.src=itemImage;  
    newsMainTitle.innerHTML=itemTitle;
   
