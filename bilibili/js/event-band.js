
/*main live*/
	/*liveList animation*/
	(function()
	{
		var $liveList=$('#main .m-live .m-live-ul .livelist');
		$liveList.hover(function()
		{
			$(this).find('.liveHide').stop().fadeIn(200);
			$(this).find('.play').stop().animate({'margin-top':'25px'},200);
			$(this).find('.live-classify').stop().fadeOut(200);
		},function()
		{
			$(this).find('.liveHide').stop().fadeOut(200);
			$(this).find('.play').stop().animate({'margin-top':'0px'},200);
			$(this).find('.live-classify').stop().fadeIn(200);
		});
	})();

	/*live right cut*/
	(function()
	{
		var $right_con=$('#main .m-live .m-live-right .right-cont');
		var $right_top=$('#main .m-live .m-live-right .right-top li.toplist');
		$right_top.click(function()
		{
			$(this).addClass('on').siblings().removeClass('on');
			var index=$(this).index();
			$right_con.stop().animate({'margin-left':-index*260+'px'},200);
		});
		/*recom banner*/
		var $recom_container=$('#main .m-live .m-live-right .right-cont .recom .recom-container');
		var $recom_pic=$('#main .m-live .m-live-right .right-cont .recom ul.pic');
		var $recom_title=$('#main .m-live .m-live-right .right-cont .recom .title>a');
		var $recom_selec=$('#main .m-live .m-live-right .right-cont .recom ul.selec li');
		var timer=null;
		var index=0;
		recomBanner();
		function recomBanner()
		{
			timer=setInterval(function()
			{
				$recom_pic.stop().animate({'margin-left':-index*260+'px'},200);
				$recom_title.eq(index).addClass('on').siblings().removeClass('on');
				$recom_selec.eq(index).addClass('on').siblings().removeClass('on');
				index++;
				index%=3;
			},5000);
		}
		$recom_selec.hover(function()
		{
			var n=$(this).index();
			index=n;
			$(this).addClass('on').siblings().removeClass('on');
			$recom_pic.stop().animate({'margin-left':-index*260+'px'},200);
			$recom_title.eq(index).addClass('on').siblings().removeClass('on');
		});
		$recom_container.hover(function()
		{
			clearInterval(timer);
		},function()
		{
			recomBanner();
		});
	})();

/*main cartoon*/
	(function()
	{
		var $obj=$('#main .m-cartoon');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,cartoonData.rightData);
	})();

/*main life*/
	(function()
	{
		var $obj=$('#main .m-life');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,lifeData.rightData);
	})();

/*main bangumi*/
	/*bangumi up*/
	(function()
	{
		var $obj=$('#main .m-bangumi .m-ban-up');
		bangumiLeftClick($obj);
		bangumiRightHover($obj);
	})();
	/*bangumi down*/
	(function()
	{
		var $obj=$('#main .m-bangumi');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		var $public_banner=$obj.find('.public-banner');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		bangumi_banner($public_banner);
	})();

/*main guochuang*/
	/*guochuang up*/
	(function()
	{
		var $obj=$('#main .m-guochuang .m-ban-up');
		var $public_banner=$obj.find('.public-banner');
		bangumiLeftClick($obj);
		bangumiRightHover($obj);
		bangumi_banner($public_banner);
	})();
	/*guochuang down*/
	(function()
	{
		var $obj=$('#main .m-guochuang .m-guoc-down');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,guochuangData.part2.rightData);
	})();

/*main music*/
	(function()
	{
		var $obj=$('#main .m-music');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,musicData.rightData);
	})();

/*main movie*/
	(function()
	{
		var $obj=$('#main .m-movie');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,movieData.rightData);
	})();
/*main game*/
	(function()
	{
		var $obj=$('#main .m-game');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,gameData.rightData);
	})();
/*main technology*/
	(function()
	{
		var $obj=$('#main .m-technology');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,technologyData.rightData);
	})();
/*main advertisement*/
	(function()
	{
		var $obj=$('#main .m-advertisement');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,advertisementData.rightData);
	})();
/*main dance*/
	(function()
	{
		var $obj=$('#main .m-dance');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,danceData.rightData);
	})();
/*main amusement*/
	(function()
	{
		var $obj=$('#main .m-amusement');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,amusementData.rightData);
	})();
/*main fashion*/
	(function()
	{
		var $obj=$('#main .m-fashion');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,fashionData.rightData);
	})();
/*main kichiku*/
	(function()
	{
		var $obj=$('#main .m-kichiku');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,kichikuData.rightData);
	})();
/*main teleplay*/
	(function()
	{
		var $obj=$('#main .m-teleplay');
		var $leftUl=$obj.find('.m-s-left .m-s-left-all');
		var $state=$obj.find('.m-s-left .m-s-l-top span.state');
		var $elemlist=$obj.find('.m-s-left .m-s-left-all .elemlist');
		var $img=$obj.find('.m-s-left .m-s-left-all .elemlist .list-link .p-l-img');
		var $later=$obj.find('.m-s-left .m-s-left-all .elemlist .later');
		var $listHide=$obj.find('.m-s-left .m-s-left-all .elemlist .listHide');
		public_left_list($elemlist,$img,$later,$listHide);
		public_left_click($leftUl,$state);
		public_right_event($obj,teleplayData.rightData);
	})();
