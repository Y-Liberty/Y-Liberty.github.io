var posts=["CPP_DP/","CPP_Ele_Algorithm/","CPP_Graph_Theory/","CPP_Math_Theory/","CPP_data/","CPP_data_str/","CPP_if_for/","CPP_index/","CPP_func/","CPP_lesson/","High_Accuracy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋","color":"vip","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","rss":"/atom.xml","tag":"技术"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈","tag":"学习"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","tag":"技术"},{"name":"Tianli","link":"https://tianli-blog.club","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","tag":"技术"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！","tag":"技术"},{"name":"Black Flies","link":"https://www.yyyzyyyz.cn/","avatar":"https://npm.elemecdn.com/imgscdn/img/202111191951780.JPG","descr":"When nothing goes right,just go left.","tag":"技术"},{"name":"MysticStars","link":"https://www.mysticstars.cn","avatar":"https://www.mysticstars.cn/upload/MysticStars.svg","descr":"Discover Infinity","tag":"学习"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"网联基地","link":"https://www.wubase.com/","descr":"云服务器评测，分享国内外VPS、网站服务器等资讯","avatar":"https://s21.ax1x.com/2024/05/16/pknrxxI.png"},{"name":"Gin 琴酒","link":"https://blog.gincode.icu/","avatar":"https://files.superbed.cn/store/images/0e/8f/64baa3da1ddac507ccec0e8f.png","descr":"满堂花醉三千客，一剑霜寒十四州。|","siteshot":"https://pic.imgdb.cn/item/663285be0ea9cb1403204918.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };