function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hello there!!"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是网站作者Kevin!"
        })
        .then(function() {
          botui.message.add({
            delay: 1100,
            content: "是一个大二的计算机学生。"
            }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于dayswithvenki.top的故事!😃",
              value: "sure"
            }, {
              text: "好的收到,但是不想看",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "okok,拜拜咯"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 1000,
          content: "DaysWithVenki是一个个人性质的网站，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 2000,
            content: "域名为什么叫dayswithvenki呢？因为一开始是打算学习前端知识，然后一点一点用html的方式记录与女朋友的生活，后面知道有hexo这个工具后，通过一些教程开始建设自己的网站，距离做这个botui的时候已经建设了有一个月啦。"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "除了分类的图是在外网上看到画风很可爱的图外，其他的像素画基本上都是参照网上的材料自己一点点模仿在pixilart上画出来的。"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "分类中有许许多多的东西--"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "三角函数是给小吴一个考研的资料参考而整理编写出来的。"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "而其他的算法什么的，则是打算将这个学期学习的一些知识在自己网站上作一个整理，方便复习的时候有一个参考，而其他的就是与小吴的平常生活的分享以及网站的美化记录啥的啦~"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么叫Kevin呢？🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "吼吼，Kevin吗？Kevin是我的英文名哦。"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "😲，那英文名为什么叫Kevin呢？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "'K','E','V','I','N' "
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: ",这几个英文字母都是和我女朋友英文名一模一样的哦!Days With Venki,Venki就是我的小吴的英文名啦~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "吼吼吼，知道了哦~",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "不知道你觉得这个网站的风格怎么样呢?我会继续好好搭建这个网站的哦，我会把像素画慢慢学好，把前端知识也好好学好，然后大学的专业方向估计是人工智能啦，希望能把想做的事情都做的好好的，希望Kevin和Venki能够一直好好的！"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "欢迎浏览DaysWithVenki.top哦！！"
          })
        })
      }
  }