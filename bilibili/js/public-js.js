
/*layout left state*/
	/*public left top click*/
	function public_left_click(leftUl,state)
	{
		var $state=state;
		var $leftUl=leftUl;
		$state.eq(0).click(function()
		{
			$leftUl.eq(1).removeClass('on');
			$leftUl.eq(0).addClass('on');
			$state.eq(1).removeClass('on');
			$(this).addClass('on');
		});
		$state.eq(1).click(function()
		{
			$leftUl.eq(0).removeClass('on');
			$leftUl.eq(1).addClass('on');
			$state.eq(0).removeClass('on');
			$(this).addClass('on');
		});
	}

	/*public left ul-li list data loading*/
	function dataLoad(leftUl,data1,data2,url)/*url:images/main/cartoon*/
	{
		var len=data1.length;
		for(var i=0;i<len;i++)
		{
			var barr='';
			var barrData=data1[i].barrages;
			for(var j=0,barrLen=barrData.length;j<barrLen;j++)
			{
				barr+='<span class="barr">'+barrData[j]+'</span>'
			}
			leftUl.eq(0).append('<li class="elemlist">'+
								'<a href="" class="list-link">'+
									'<div class="p-l-img">'+
										'<img src="'+url+'/1/'+(i+1)+'.jpg" alt="" />'+
										'<div class="DRTime">'+data1[i].drtime+'</div>'+
									'</div>'+
									'<p>'+data1[i].title+'</p>'+
									'<div class="barrage-wrap">'+barr+'</div>'+
								'</a>'+
								'<a href="" class="later"><span>稍后再看</span></a>'+
								'<div class="hidecontainer">'+
									'<div class="listHide">'+
										'<span class="plays"><i></i>'+data1[i].palys+'</span>'+
										'<span class="num"><i></i>'+data1[i].num+'</span>'+
									'</div>'+
								'</div>'+
							'</li>');
			barr='';
			barrData=data2[i].barrages;
			for(var j=0,barrLen=barrData.length;j<barrLen;j++)
			{
				barr+='<span class="barr">'+barrData[j]+'</span>'
			}
			leftUl.eq(1).append('<li class="elemlist">'+
								'<a href="" class="list-link">'+
									'<div class="p-l-img">'+
										'<img src="'+url+'/2/'+(i+1)+'.jpg" alt="" />'+
										'<div class="DRTime">'+data2[i].drtime+'</div>'+
									'</div>'+
									'<p>'+data2[i].title+'</p>'+
									'<div class="barrage-wrap">'+barr+'</div>'+
								'</a>'+
								'<a href="" class="later"><span>稍后再看</span></a>'+
								'<div class="hidecontainer">'+
									'<div class="listHide">'+
										'<span class="plays"><i></i>'+data2[i].palys+'</span>'+
										'<span class="num"><i></i>'+data2[i].num+'</span>'+
									'</div>'+
								'</div>'+
							'</li>');
		}
	}

	/*public left ul-li list js*/
	function public_left_list(elemlist,img,later,listHide)
	{
		var $popList=elemlist;
		var $p_l_img=img;
		var $later=later;
		var timer=null;
		$popList.hover(function()
		{
			$(this).find('.DRTime').stop().fadeIn(200);
			$(this).find('.list-link p').css('color','#00A1D6');
			$(this).find('.listHide').stop().animate({'top':'25px'},200);
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
			$(this).find('.listHide').stop().animate({'top':'0px'},200);
			/*barrage*/
			clearInterval(timer);
			$(this).find('.barrage-wrap').hide();
			$(this).find('.barrage-wrap .barr').stop();
		});
		$p_l_img.hover(function()
		{
			$(this).parents('.elemlist').find('.later').stop().fadeIn(200);
		},function()
		{
			$(this).parents('.elemlist').find('.later').stop().fadeOut(200);
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
		
	}

	/*public right*/
	function public_right(obj,data)
	{
		var $listwrap=obj.find('.m-s-right .listwrap');
		var $wrap=$listwrap.find('.wrap');
		dataLoad($wrap.eq(0).find('.wrapUl').eq(0),data[0][0]);
		dataLoad($wrap.eq(0).find('.wrapUl').eq(1),data[0][1]);
		dataLoad($wrap.eq(1).find('.wrapUl').eq(0),data[1][0]);
		dataLoad($wrap.eq(1).find('.wrapUl').eq(1),data[1][1]);

		
		function dataLoad(wrapUl,data)
		{
			wrapUl.append('<li class="list first">'+
								'<span class="rank pink">1</span>'+
								'<a href="">'+
									'<div class="smallimg">'+
										'<img src="'+data[0].url+'" width="100%"/>'+
									'</div>'+
									'<div class="discribe">'+
										'<p class="title">'+data[0].title+'</p>'+
										'<p class="score">综合评分：'+data[0].score+'</p>'+
									'</div>'+
								'</a>'+
								'<div class="later"><span>稍后再看</span></div>'+
							'</li>');
			for(var i=1,len=data.length;i<len;i++)
			{
				var span='';
				i<3?(span='<span class="rank pink">'+(i+1)+'</span>') : (span='<span class="rank">'+(i+1)+'</span>');
				wrapUl.append('<li class="list">'+span+
									'<a href="">'+
										'<p class="title">'+data[i].title+'</p>'+
									'</a>'+
								'</li>');
			}
		}
	}

	function public_right_event(obj,data)
	{
		var $state=obj.find('.m-s-right .m-s-right-top .state');
		var $dropdown=obj.find('.m-s-right .m-s-right-top .dropdown');
		var $dropitem=obj.find('.m-s-right .m-s-right-top .dropdown .dropitem');
		var $dropon=obj.find('.m-s-right .m-s-right-top .dropdown .dropon');
		var $listHide=obj.find('.m-s-right .listHide');
		var $listwrap=obj.find('.m-s-right .listwrap');
		var $list=$listwrap.find('.list');
		var $wrap=$listwrap.find('.wrap');
		var hideArr=[-125,-55,-17,21,59,95,133];
		var m=0,n=0;
		$state.hover(function()
		{
			m=$(this).index()-1;
			$state.removeClass('on');
			$(this).addClass('on');
			$wrap.stop().animate({'margin-left':-m*260+'px'},200);
		});
		$dropdown.hover(function()
		{
			$(this).find('ul').show();
		},function()
		{
			$(this).find('ul').hide();
		});
		$dropitem.click(function()
		{
			var txt=$(this).text();
			$(this).removeClass('on').siblings().addClass('on');
			$dropon.html(txt+'<i></i>');
			n++;
			n%=2;
			$wrap.eq(n).addClass('on').siblings().removeClass('on');
		});
		$list.hover(function()
		{
			var x=$(this).index();
			$listHide.html('<div class="title">'+
								'<p class="titlename">'+data[n][m][x].title+'</p>'+
								'<span class="up">'+data[n][m][x].up+'</span><span>|</span><span class="time">'+data[n][m][x].time+'</span>'+
							'</div>'+
							'<div class="info">'+
								'<img src="'+data[n][m][x].url+'" width="100%" alt="" />'+
								'<span class="detial">'+data[n][m][x].detail+'</span>'+
							'</div>'+
							'<div class="bottom">'+
								'<span class="palys"><i></i>'+data[n][m][x].palys+'</span>'+
								'<span class="comment"><i></i>'+data[n][m][x].comment+'</span>'+
								'<span class="collection"><i></i>'+data[n][m][x].collection+'</span>'+
								'<span class="coin"><i></i>'+data[n][m][x].coin+'</span>'+
							'</div>');
			$listHide.css('top',hideArr[x]+'px').stop().delay(300).fadeIn();
			$(this).find('.later').show();
			$(this).find('.title').css('color','#00A1D6');
		},function()
		{
			$listHide.stop().hide();
			$(this).find('.later').hide();
			$(this).find('.title').css('color','#000');
		});
		$list.find('.later').hover(function()
		{
			$(this).show();
		});
	}

/*bangumi public left dataloading*/
	function bangumiLoadLeft(obj,data,url)
	{
		var $element=obj.find('.public-up-left .elembox .element');
		var elemLen=data.length;
		for(var i=0;i<elemLen;i++)
		{
			var datalist=data[i];
			for(var j=0,len=datalist.length;j<len;j++)
			{
				var pink='';
				datalist[j].pink?(pink='<a href="" class="pink">'+datalist[j].updated+'</a>'):(pink='<a href="">'+datalist[j].updated+'</a>');
				var li='';
				j<3?(li='<li class="top-none">'):(li='<li>');
				$element.eq(i).append(li+
										'<a href="" title="'+datalist[j].title+'" class="pic"><img src="'+url+'/'+i+'/'+(j+1)+'.jpg" alt="" /></a>'+
										'<div class="info">'+
											'<a href="" title="'+datalist[j].title+'" class="title">'+datalist[j].title+'</a>'+
											'<p class="updated">更新至'+pink+'</p>'+
										'</div>'+
									'</li>');
			}
		}
	}
/*bangumi public left click*/
	function bangumiLeftClick(obj)
	{
		var $select=obj.find('.public-up-left .top li.select');
		var $element=obj.find('.public-up-left .elembox .element');
		var dateArr=['最新<i></i>','一<i></i>','二<i></i>','三<i></i>','四<i></i>','五<i></i>','六<i></i>','日<i></i>'];
		$select.click(function()
		{
			var index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$element.eq(index).addClass('on').siblings().removeClass('on');
			if(index!=0)
			{
				$select.each(function(i)
				{
					$(this).html(dateArr[i]);
				});
				$(this).html('周'+dateArr[index]);
			}
			else
			{
				$select.each(function(i)
				{
					$(this).html(dateArr[i]);
				});
			}
		});
	}
/*bangumi public right dataloading*/
	function bangumiLoadRight(obj,data)
	{
		var $element=obj.find('.public-up-right .elemwrap ul.element');
		var dataLen=data.length;
		for(var i=0;i<dataLen;i++)
		{
			for(var j=0,len=data[i].length;j<len;j++)
			{
				var span='';
				j<3?span='<span class="rank pink">'+(j+1)+'</span>':span='<span class="rank">'+(j+1)+'</span>';
				$element.eq(i).append('<li>'+
										'<a href="" title="'+data[i][j].title+' 播放:'+data[i][j].plays+'">'+span+
											'<p class="title">'+data[i][j].title+'</p>'+
											'<p class="update">更新至第'+data[i][j].update+'</p>'+
										'</a>'+
										'<div class="listHide">'+
											'<div class="discribe">'+
												'<div class="pic"><img src="'+data[i][j].url+'" alt="" /></div>'+
												'<div class="info">'+
													'<p class="title">'+data[i][j].title+'</p>'+
													'<p class="update">连载中 , 更新至第'+data[i][j].update+'</p>'+
												'</div>'+
											'</div>'+
											'<div class="num">'+
												'<p class="plays">'+data[i][j].plays+'</p>'+
												'<p class="comment">'+data[i][j].comment+'</p>'+
												'<p class="collect">'+data[i][j].collect+'</p>'+
											'</div>'+
										'</div>'+
									'</li>');
			}
		}
	}
	function bangumiRightHover(obj)
	{
		var $element=obj.find('.public-up-right .elemwrap ul.element');
		var $dropdown=obj.find('.public-up-right .right-top .dropdown');
		var $dropitem=obj.find('.public-up-right .right-top .dropdown .dropitem');
		var $dropon=obj.find('.public-up-right .right-top .dropdown .dropon');
		var n=0;
		$dropdown.hover(function()
		{
			$(this).find('ul').show();
		},function()
		{
			$(this).find('ul').hide();
		});
		$dropitem.click(function()
		{
			var txt=$(this).text();
			$(this).removeClass('on').siblings().addClass('on');
			$dropon.html(txt+'<i></i>');
			n++;
			n%=2;
			$element.eq(n).addClass('on').siblings().removeClass('on');
		});
		var $elementLi=$element.find('li');
		$elementLi.hover(function()
		{
			$(this).find('.listHide').stop().delay(300).fadeIn(100);
		},function()
		{
			$(this).find('.listHide').stop().hide();
		});
	}
/*bangumi public down banner*/
	function bangumi_banner($public_banner)
	{
		var $picUl=$public_banner.find('.pics .picUl');
		var $trig=$public_banner.find('.trig span');
		var len=$trig.length;
		var timer=null;
		var index=0;
		banner();
		$picUl.hover(function()
		{
			clearInterval(timer);
		},function()
		{
			banner();
		});
		$trig.hover(function()
		{
			clearInterval(timer);
			index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$picUl.stop().animate({'margin-left':-index*260+'px'},300);
		},function()
		{
			banner();
		});
		function banner()
		{
			timer=setInterval(function()
			{
				index++;
				index%=len;
				$picUl.stop().animate({'margin-left':-index*260+'px'},300);
			$trig.eq(index).addClass('on').siblings().removeClass('on');
			},5000);
		}
	}

/*main cartoon*/
	(function()
	{
		var $obj=$('#main .m-cartoon');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,cartoonData.data1,cartoonData.data2,'images/main/cartoon');
		public_right($obj,cartoonData.rightData);
	})();

/*main life*/
	(function()
	{
		var $obj=$('#main .m-life');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,lifeData.data1,lifeData.data2,'images/main/life');
		public_right($obj,lifeData.rightData);
	})();

/*main bangumi*/
	/*bangumi up*/
	(function()
	{
		var $obj=$('#main .m-bangumi .m-ban-up');
		bangumiLoadLeft($obj,bangumiData.part1,'images/main/bangumi/part1');
		bangumiLoadRight($obj,bangumiData.part1_right);
	})();
	/*bangumi down*/
	(function()
	{
		var $obj=$('#main .m-bangumi');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,bangumiData.part2_data1,bangumiData.part2_data2,'images/main/bangumi/part2');
	})();

/*main guochuang*/
	/*guochuang up*/
	(function()
	{
		var $obj=$('#main .m-guochuang .m-ban-up');
		bangumiLoadLeft($obj,guochuangData.part1,'images/main/guochuang/part1');
		bangumiLoadRight($obj,guochuangData.part1_right);
	})();
	/*guochuang down*/
	(function()
	{
		var $obj=$('#main .m-guochuang .m-guoc-down');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,guochuangData.part2.data1,guochuangData.part2.data2,'images/main/guochuang/part2');
		public_right($obj,guochuangData.part2.rightData);
	})();
/*main music*/
	(function()
	{
		var $obj=$('#main .m-music');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,musicData.data1,musicData.data2,'images/main/music');
		public_right($obj,musicData.rightData);
	})();
/*main movie*/
	(function()
	{
		var $obj=$('#main .m-movie');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,movieData.data1,movieData.data2,'images/main/movie');
		public_right($obj,movieData.rightData);
	})();
/*main game*/
	(function()
	{
		var $obj=$('#main .m-game');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,gameData.data1,gameData.data2,'images/main/game');
		public_right($obj,gameData.rightData);
	})();
/*main technology*/
	(function()
	{
		var $obj=$('#main .m-technology');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,technologyData.data1,technologyData.data2,'images/main/technology');
		public_right($obj,technologyData.rightData);
	})();
/*main advertisement*/
	(function()
	{
		var $obj=$('#main .m-advertisement');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,advertisementData.data1,advertisementData.data2,'images/main/advertisement');
		public_right($obj,advertisementData.rightData);
	})();
/*main dance*/
	(function()
	{
		var $obj=$('#main .m-dance');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,danceData.data1,danceData.data2,'images/main/dance');
		public_right($obj,danceData.rightData);
	})();
/*main amusement*/
	(function()
	{
		var $obj=$('#main .m-amusement');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,amusementData.data1,amusementData.data2,'images/main/amusement');
		public_right($obj,amusementData.rightData);
	})();
/*main fashion*/
	(function()
	{
		var $obj=$('#main .m-fashion');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,fashionData.data1,fashionData.data2,'images/main/fashion');
		public_right($obj,fashionData.rightData);
	})();
/*main kichiku*/
	(function()
	{
		var $obj=$('#main .m-kichiku');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,kichikuData.data1,kichikuData.data2,'images/main/kichiku');
		public_right($obj,kichikuData.rightData);
	})();
/*main teleplay*/
	(function()
	{
		var $obj=$('#main .m-teleplay');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		dataLoad($leftUl,teleplayData.data1,teleplayData.data2,'images/main/teleplay');
		public_right($obj,teleplayData.rightData);
	})();
