

/*stair nav*/
	(function()
	{
		var $backcover=$('#stairsWrap .backcover');
		var $sortcover=$('#stairs .sortcover');
		var $stairs=$('#stairs');
		var $stair_nav=$('#main .stair-nav');
		var $stair_ul=$('#main .stair-ul');
		var $stairlist=$('#main .stair-ul .stairlist');
		var $sort=$('#stairs .sort');
		var $backtop=$('#stairs .backtop');
		var $download=$('#stairs .download');
		var stairnavLen=$stair_nav.length;
		var index;
		var clickbool=false;
		var sortbool=false;


		$stairlist.each(function(i)
		{
			this.onselectstart=function()
			{
				return false;
			}
			$(this).css('top',i*32+'px');
		});
		//side stair nav responses window resize
		$(window).resize(function()
		{
			if($(document).scrollTop()>=230)
			{
				var winH=$(this).height();
				var stairsTop=parseInt($stairs.css('top'));
				if(parseInt($stairs.css('bottom'))<50)
				{
					if(stairsTop>0)
					{
						stairsTop=winH-532;
						if(stairsTop<0)
						{
							stairsTop=0;
						}
					}
				}
				else
				{
					if(stairsTop<145)
					{
						stairsTop=winH-532;
						if(stairsTop>145)
						{
							stairsTop=145;
						}
					}
				}
				$stairs.stop().animate({'top':stairsTop+'px'},50);
			}
		});
		//side stair nav scroll
		sideScroll();
		$(window).on('scroll',sideScroll);
		//side stair nav click
		$stairlist.on('click',sideClick);

		//side back to top
		$backtop.click(function()
		{
			clickbool=true;
			$('body,html').stop().animate(
			{
				scrollTop : 0
			},300,function()
			{
				clickbool=false;
				index=undefined;
				$stairlist.removeClass('on');
			});
		});

		//side download
		$download.hover(function()
		{
			$(this).parent().css('zIndex','100');
			$(this).find('i').stop().fadeIn(500);
		},function()
		{
			if(!sortbool)
			{
				$(this).parent().css('zIndex','0');
			}
			$(this).find('i').stop().fadeOut(500);
		});

		//side nav sort click
		$sort.click(function()
		{
			if(!sortbool)
			{
				$stairs.css('zIndex','100');
				index=undefined;
				$(window).off('scroll',sideScroll);
				$stairlist.off('click',sideClick);
				$stairlist.removeClass('on');
				$backcover.stop().fadeIn();
				$sortcover.stop().fadeIn();
				$stairlist.on('mousedown',function(e)
				{
					var text=[];
					var top=[];
					var startY=e.clientY;
					var $That=$(this);
					var thisIndex=$(this).index();
					var textIndex=thisIndex;
					var minTop=0;
					var maxTop=448;
					for(var i=0;i<stairnavLen;i++)
					{
						text.push($stairlist.eq(i).text());
						top.push(parseInt($stairlist.eq(i).css('top')));
					}
					$(this).css('zIndex','10').siblings().css('zIndex','1');
					$(document).on('mousemove',function(e)
					{
						var nowY=e.clientY;
						//console.log($That.css('top'),lastY,nowY);
						if( (nowY-startY>=-top[thisIndex]) && (nowY-startY<=maxTop-top[thisIndex]) )
						{
							$That.css('top',top[thisIndex]+nowY-startY+'px');
							for(var i=0;i<stairnavLen;i++)
							{
								var temp;
								if(i<thisIndex)//if stairlist up to current list that be clicked
								{
									var dTop=$That.position().top-$stairlist.eq(i).position().top;
									if(dTop>0&&dTop<=16)
									{
										$stairlist.eq(i).css('top',top[i]+32+'px');
										temp=text[textIndex];
										text[textIndex]=text[i];
										text[i]=temp;
										temp=$stair_nav.eq(textIndex).html();
										$stair_nav.eq(textIndex).html($stair_nav.eq(i).html());
										$stair_nav.eq(i).html(temp);
										textIndex=i;
									}
									if(dTop>-16&&dTop<=0)//accord with this condition means stairlist had been swaped
									{
										$stairlist.eq(i).css('top',top[i]+'px');
										textIndex=i+1;
										temp=text[textIndex];
										text[textIndex]=text[i];
										text[i]=temp;
										temp=$stair_nav.eq(textIndex).html();
										$stair_nav.eq(textIndex).html($stair_nav.eq(i).html());
										$stair_nav.eq(i).html(temp);
									}
								}
								else if(i>thisIndex)//if stairlist down to current list that be clicked
								{
									var dTop=$That.position().top-$stairlist.eq(i).position().top;
									if(dTop>0&&dTop<=16)//accord with this condition means stairlist had been swaped
									{
										$stairlist.eq(i).css('top',top[i]+'px');
										textIndex=i-1;
										temp=text[textIndex];
										text[textIndex]=text[i];
										text[i]=temp;
										temp=$stair_nav.eq(textIndex).html();
										$stair_nav.eq(textIndex).html($stair_nav.eq(i).html());
										$stair_nav.eq(i).html(temp);
									}
									if(dTop>-16&&dTop<=0)
									{
										$stairlist.eq(i).css('top',top[i]-32+'px');
										temp=text[textIndex];
										text[textIndex]=text[i];
										text[i]=temp;
										temp=$stair_nav.eq(textIndex).html();
										$stair_nav.eq(textIndex).html($stair_nav.eq(i).html());
										$stair_nav.eq(i).html(temp);
										textIndex=i;
									}
								}
							}
						}
						else
						{
							nowY-startY<minTop?$That.css('top',minTop+'px'):$That.css('top',maxTop+'px')
						}
							return false;
					});
					$(document).mouseup(function()
					{
						$(this).off('mousemove');
						var nowTop=$That.position().top;
						$That.css('top',parseInt((nowTop+16)/32)*32+'px');
						$stairlist.each(function(i)
						{
							$(this).html(text[i]).css('top',32*i+'px');
						});
						var oBody=document.getElementsByTagName('body')[0];
						var oEvent_band=document.getElementById('event-band');
						oBody.removeChild(oEvent_band);
						var oEvent=document.createElement('script');
						oEvent.src='js/event-band.js';
						oEvent.id='event-band';
						oBody.appendChild(oEvent);
					});
				});
			}
			else
			{
				$stairs.css('zIndex','0');
				$backcover.stop().fadeOut();
				$sortcover.stop().fadeOut();
				sideScroll();
				$stairlist.off('mousedown');
				$(window).on('scroll',sideScroll);
				$stairlist.on('click',sideClick);
			}
			sortbool=!sortbool;
		});

		//backcover click hide
		$backcover.click(function()
		{
			$stairs.css('zIndex','0');
			$backcover.stop().fadeOut();
			$sortcover.stop().fadeOut();
			sideScroll();
			$stairlist.off('mousedown');
			$(window).on('scroll',sideScroll);
			$stairlist.on('click',sideClick);
			sortbool=!sortbool;
		});

		function sideScroll()
		{
			if(!clickbool)
			{
				var sTop=$(document).scrollTop();
				var winHeight=$(window).height();
				if(sTop>=230)
				{
					var stairsTop=parseInt($stairs.css('top'));
					if(parseInt($stairs.css('bottom'))<50)
					{
						if(stairsTop>0)
						{
							stairsTop=Math.min(winHeight-532,145);
							if(stairsTop<0)
							{
								stairsTop=0;
							}
						}
					}
					else
					{
						if(stairsTop<=145)
						{
							stairsTop=Math.min(winHeight-532,145);
						}
						else
						{
							stairsTop=145;
						}
					}
					$stairs.stop().animate({'top':stairsTop+'px'},200);
				}
				else
				{
					$stairs.stop().animate({'top':'235px'},200);
				}
				//console.log($stairs);
				if(index===undefined)
				{
					for(var i=0;i<stairnavLen-1;i++)
					{
						if( ($stair_nav.eq(i).offset().top-sTop<=winHeight/3) && ($stair_nav.eq(i+1).offset().top-sTop>winHeight/3))
						{
							index=i;
							break;
						}
					}
				}
				if(index==0)
				{
					if($stair_nav.eq(0).offset().top - sTop <= winHeight/3)
					{
						if($stair_nav.eq(1).offset().top - sTop <= winHeight/3)
						{
							$stairlist.removeClass('on').eq(1).addClass('on');
							index=1;
						}
						else
						{
							$stairlist.removeClass('on').eq(0).addClass('on');
						}
					}
					else
					{
						$stairlist.removeClass('on');
					}
				}
				else if(index>=1)
				{
					$stairlist.removeClass('on').eq(index).addClass('on');
					if($stair_nav.eq(index).offset().top - sTop >winHeight/3)
					{
						index=$stair_ul.find('.on').index()-1;
						$stairlist.removeClass('on').eq(index).addClass('on');
					}
					else if( (index<stairnavLen-1) && ($stair_nav.eq(index+1).offset().top - sTop <= winHeight/3))
					{
						index=$stair_ul.find('.on').index()+1;
						$stairlist.removeClass('on').eq(index).addClass('on');
					}
				}
			}
		}
		function sideClick()
		{
			clickbool=true;
			var winHeight=$(window).height();
			index=$(this).index();
			$('body,html').stop().animate(
			{
				scrollTop : $stair_nav.eq(index).offset().top-winHeight/3+1
			},300,function()
			{
				clickbool=false;
				$stairlist.removeClass('on').eq(index).addClass('on');
			});
		}
	})();

	
