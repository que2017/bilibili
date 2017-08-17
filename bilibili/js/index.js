
/*top nav*/
	(function()
	{
		var $nav_li=$('#header .h-top .h-t-container .h-t-c-nav>ul>li');
		var $nav_game_righ_li=$('.t-nav-game-right>ul>li');
		var $nav_game_righ_showImg=$('.t-nav-game-right .g-r-showImg');
		var $history=$('#header .h-top .h-t-container .h-t-login .history');
		var $history_hide=$('.h-t-login .history .history-login');
		var $contribute=$('#header .h-top .h-t-container .h-t-login .contribute');
		var $contribute_hide=$('.h-t-login .contribute .hide');
		
		/*nav hover*/
		$nav_li.hover(function()
		{
			$(this).find('.hide').fadeIn();
		},function()
		{
			$(this).find('.hide').stop().hide();
		});
		/*game right image hover*/
		$nav_game_righ_li.hover(function()
		{
			$nav_game_righ_showImg.css('background','url(images/header/top/game/show'+($(this).index()+1)+'.png)');
		},function()
		{
			$nav_game_righ_showImg.css('background','');
		});
		/*login history hover*/
		$history.hover(function()
		{
			$history_hide.show();
			$(this).css('background','rgba(200,200,200,0.4)');
		},function()
		{
			$history_hide.hide();
			$(this).css('background','');
		});
		/*login contribute hover*/
		$contribute.hover(function()
		{
			$(this).css('background','url(images/header/top/login/post-hover.png)');
			$contribute_hide.show();
		},function()
		{
			$(this).css('background','url(images/header/top/login/post.png)');
			$contribute_hide.hide();
		});

	})();

/*main nav*/
	(function()
	{
		var $navList=$('#main .m-nav .m-navlist>li');
		var navData=data['navData'];
		var navDataLen=navData.length;
		$navList.each(function(i)
		{
			var len=navData[i].length;
			if(len)
			{
				var $navHide=$('<div class="navHide"></div>');
				var $ul=$('<ul></ul>');
				for(var j=0;j<len;j++)
				{
					$ul.append('<li>'+
									'<a href="">'+navData[i][j]+'</a>'+
									'<span><i></i></span>'+
								'</li>');
				}
				$navHide.append($ul);
			}
			$(this).append($navHide);
		});
	})();


/*main banner left*/
	(function()
	{
		var $ban_left=$('#main .banner .m-ban-left');
		var $ul_images=$('#main .banner .m-ban-left ul.images');
		var $list_Li=$('#main .banner .m-ban-left ul.list li');
		var $more=$('#main .banner .m-ban-left ul.images .more')
		var index=0;
		var len=$list_Li.length;
		var timer=null;

		$list_Li.hover(function()
		{
			$(this).addClass('hover');
		},function()
		{
			$(this).removeClass('hover');
		}).click(function()
		{
			index=$(this).index();
			change();
		});
		$ban_left.hover(function()
		{
			clearInterval(timer);
			$more.stop().fadeIn(200);
		},function()
		{
			auto();
			$more.stop().fadeOut(200);
		});
		auto();
		function auto()
		{
			timer=setInterval(function()
			{
				index++;
				index%=len;
				change();
			},5000);
		}
		function change()
		{
			$list_Li.eq(index).addClass('on').siblings().removeClass('on');
			$ul_images.stop().animate({'margin-left':-index*440+'px'},200);
		}
	})();
/*main banner right*/
	(function()
	{
		(function ()
		{
			var $ban_right=$('#main .banner .m-ban-right');
			var data_right=data.bShowData;
			var dataLen=data_right.length;
			for(var i=0;i<dataLen;i++)
			{
				var listLen=data.bShowData[i].length;
				var $ul=$('<ul></ul>');
				var title='',up='',plays='';
				for(var j=0;j<listLen;j++)
				{
					var dataList=data.bShowData[i][j];
					title='【'+dataList.title+'】'+dataList.text;
					up='up主：'+dataList.up;
					plays='播放：'+dataList.plays;
					$ul.append('<li>'+
									'<a href=""><img src="images/main/banner/right/'+(i+1)+'/'+(j+1)+'.jpg" alt=""/></a>'+
									'<div class="listHide">'+
										'<a href="" title="'+title+'">'+
											'<p class="title">'+title+'</p>'+
											'<p class="up">'+up+'</p>'+
											'<p class="play">'+plays+'</p>'+
											'<a href="" class="later"><span>'+'稍后再看'+'</span></a>'+
										'</a>'+
									'</div>'+
								'</li>');
				}
				$ban_right.append($ul);
			}
		})();
		var $ban_right_ul=$('#main .banner .m-ban-right>ul');
		var $pre=$('#main .banner .m-ban-right .pre');
		var $next=$('#main .banner .m-ban-right .next');
		var $pre_span=$('#main .banner .m-ban-right .pre span');
		var $next_span=$('#main .banner .m-ban-right .next span');
		var day=['昨日','三日','一周'];
		var index=0;
		$ban_right_ul.eq(0).addClass('on');
		$pre_span.html(day[0]);
		$next_span.html(day[2]);

		$pre.click(function()
		{
			$ban_right_ul.eq(index).removeClass('on');
			index--;
			if(index==-1)
			{
				index=2;
			}
			$ban_right_ul.eq(index).addClass('on');
			$pre_span.html(day[index]);
			if(index==0)
			{
				$next_span.html(day[2]);
			}
			else
			{
				$next_span.html(day[index-1]);
			}
		});
		
		$next.click(function()
		{
			$ban_right_ul.eq(index).removeClass('on');
			$next_span.html(day[index]);
			index++;
			index%=3;
			$pre_span.html(day[index]);
			$ban_right_ul.eq(index).addClass('on');
		});
		
	})();

/*main popularize*/

	(function()
	{
		var $popular=$('#main .popularize .popular-all');
		var pop_data=data.promoteData;
		for(var i=0;i<5;i++)
		{
			var plays=pop_data[i].palys*1;
			var a=plays/10000;
			if(a>=1)
			{
				plays=a.toFixed(1)+'万';
			}
			var $barrageStr='<div class="barrage-wrap">';
			/*loading barrages*/
			for(var j=0,barrLen=pop_data[i].barrages.length;j<barrLen;j++)
			{
				$barrageStr+='<span class="barr">'+pop_data[i].barrages[j]+'</span>'
			}
			$barrageStr+='</div>'
			$popular.append('<li class="popList">'+
								'<a href="" class="list-link">'+
									'<div class="p-l-img">'+
										'<img src="images/main/popularize/'+(i+1)+'.jpg" alt="" />'+
										'<div class="DRTime">'+pop_data[i].drtime+'</div>'+
									'</div>'+
									'<p>'+pop_data[i].title+'</p>'+$barrageStr+
								'</a>'+
								'<a href="" class="later"><span>稍后再看</span></a>'+
								'<div class="listHide">'+
									'<div class="title">'+
										'<p class="titlename">'+pop_data[i].title+'</p>'+
										'<span class="up">'+pop_data[i].up+'</span>|<span class="time">'+pop_data[i].time+'</span>'+
									'</div>'+
									'<div class="info">'+
										'<img src="images/main/popularize/'+(i+1)+'.jpg" alt="" />'+
										'<span class="detial">'+pop_data[i].detail+'</span>'+
									'</div>'+
									'<div class="bottom">'+
										'<span class="palys"><i></i>'+plays+'</span>'+
										'<span class="comment"><i></i>'+pop_data[i].comment+'</span>'+
										'<span class="collection"><i></i>'+pop_data[i].collection+'</span>'+
										'<span class="coin"><i></i>'+pop_data[i].coin+'</span>'+
									'</div>'+
								'</div>'+
							'</li>');
		}
	})();
	(function()
	{
		var $popList=$('#main .popularize .popular-all .popList');
		var $p_l_img=$('#main .popularize .popular-all .popList .list-link .p-l-img');
		var $later=$('#main .popularize .popular-all .popList .later');
		var timer=null;
		$popList.hover(function()
		{
			$(this).find('.DRTime').stop().fadeIn(200);
			$(this).find('.list-link p').css('color','#00A1D6');
			$(this).find('.listHide').stop().delay(300).fadeIn(200);
			/*barrage*/
			var $barr=$(this).find('.barrage-wrap .barr');
			$(this).find('.barrage-wrap').show();
			if($barr.length)
			{
				barrage($barr);
			}
		},function()
		{
			$(this).find('.DRTime').stop().fadeOut(200);
			$(this).find('.list-link p').css('color','#000');
			$(this).find('.listHide').stop().hide();
			/*barrage*/
			clearInterval(timer);
			$(this).find('.barrage-wrap').hide();
			$(this).find('.barrage-wrap .barr').stop();
		});
		$p_l_img.hover(function()
		{
			$(this).parents('.popList').find('.later').stop().fadeIn(200);
		},function()
		{
			$(this).parents('.popList').find('.later').stop().fadeOut(200);
		});
		$later.hover(function()
		{
			$(this).stop().fadeIn(200);
		},function()
		{
			$(this).stop().fadeOut(200);
		});
		/*barrage function*/
		function barrage($barr)
		{
			
			$barr.css('left','200px');
			var index=0;
			var row1=0;
			var row2=1;
			timer=setInterval(function()
			{
				var a=index-1;
				var speed=10000;
				if(index==0)
				{
					$barr.eq(0).stop().animate({'left':'-500px'},10000,'linear');
				}
				else
				{
					var barr=$barr.eq(index);
					if(index==$barr.length)
					{
						clearInterval(timer);
						barrage($barr);
					}
					else 
					{
						if(a>=1)
						{
							var left1=$barr.eq(row1).position().left+$barr.eq(row1).width();
							var left2=$barr.eq(row2).position().left+$barr.eq(row2).width();
							if(left1<left2)
							{
								barr.css('top','0px');
								row1=index;
							}
							else
							{
								barr.css('top','20px');
								row2=index;
							}
						}
						else
						{
							barr.css('top','20px');
						}
						if(barr.width()>120)
						{
							speed=8000;
						}
						barr.stop().animate({'left':'-500px'},speed,'linear');
					}
				}
				index++;
			},1500);
		}
		
	})();

/*main live*/
	/*liveList loading*/
	(function()
	{
		var $live_ul=$('#main .m-live .m-live-ul');
		var liveData=data.liveData;
		for(var i=0,len=liveData.length;i<len;i++)
		{
			var plays=liveData[i].num*1;
			var a=plays/10000;
			if(a>=1)
			{
				plays=a.toFixed(1)+'万';
			}
			$live_ul.append('<li class="livelist">'+
							'<a href="">'+
								'<div class="pic">'+
									'<img src="images/main/live/'+(i+1)+'.jpg"/>'+
									'<div class="live-classify">'+liveData[i].classify+'</div>'+
								'</div>'+
								'<p class="tit">'+liveData[i].title+'</p>'+
								'<p class="play">'+
									'<span class="author"><i></i>'+liveData[i].up+'</span>'+
									'<span class="num"><i></i>'+plays+'</span>'+
								'</p>'+
								'<div class="liveHide">'+
									'<div class="avatar"><img src="'+liveData[i].src+'"/></div>'+
									'<div class="livelogo"><i></i><span>Live</span></div>'+
								'</div>'+
							'</a>'+
						'</li>');
		}
	})();

/*main special-recom*/
	(function()
	{
		var $listwrap=$('#main .m-specialRecom .m-sR-left .listwrap');
		for(var i=0,len=spectialRecomData.length;i<len;i++)
		{
			$listwrap.append('<li class="recomlist">'+
							'<a href="" class="list-link">'+
								'<div class="pic">'+
									'<img src="images/main/special-recom/big/'+(i+1)+'.jpg" alt="" />'+
								'</div>'+
								'<p class="title">'+spectialRecomData[i].title+'</p>'+
							'</a>'+
							'<a href="" class="later"><span>稍后再看</span></a>'+
							'<div class="reco-name">'+
								'<div class="pic"><img src="images/main/special-recom/small/'+(i+1)+'.jpg" alt="" /></div>'+
								'<a href="" class="name">'+spectialRecomData[i].name+'</a>'+
								'<span class="recom">推荐</span>'+
							'</div>'+
						'</li>');
		}
		var $pic=$listwrap.find('.recomlist .list-link .pic');
		var $later=$listwrap.find('.recomlist .later');
		var $title=$listwrap.find('.recomlist .list-link .title');
		$pic.hover(function()
		{
			$(this).parent().parent().find('.later').show();
			$(this).parent().find('.title').css('color','#00a1d6');
		},function()
		{
			$(this).parent().parent().find('.later').hide();
			$(this).parent().find('.title').css('color','#000');
		});
		$later.hover(function()
		{
			$(this).show();
			$(this).parent().find('.title').css('color','#00a1d6');
		});
		$title.hover(function()
		{
			$(this).css('color','#00a1d6');
		},function()
		{
			$(this).css('color','#000');
		});
	})();

/*footer*/
	(function()
	{
		var $list=$('#footer .f-container .f-c-up .up-contact .listUl li');
		$list.hover(function()
		{
			$(this).find('span').css('color','#00a1d6');
			$(this).find('.hide-pic').stop().fadeIn(200);
			$(this).find('.logo').css('background-positionX','-1090px');
		},function()
		{
			$(this).find('span').css('color','#000');
			$(this).find('.hide-pic').stop().fadeOut(200);
			$(this).find('.logo').css('background-positionX','-1024px');
		});
	})();
