<!--  Written by Myhyli, 2007/07/21. www.knowsky.com  -->
<!--  Member Of Blueidea Web Team. -->
<!--  Welcome to www.knowsky.com. -->

	var delta=0.8;
	var collection;
	var closeB=false;
	function floaters() {
		this.items	= [];
		this.addItem	= function(id,x,y,content)
				  {
					document.write('<DIV id='+id+' style="Z-INDEX: 10; POSITION: absolute;  width:80px; height:60px;left:'+(typeof(x)=='string'?eval(x):x)+';top:'+(typeof(y)=='string'?eval(y):y)+'">'+content+'</DIV>');
					
					var newItem				= {};
					newItem.object			= document.getElementById(id);
					newItem.x				= x;
					newItem.y				= y;

					this.items[this.items.length]		= newItem;
				  }
		this.play	= function()
				  {
					collection				= this.items
					setInterval('play()',30);
				  }
		}
		function play()
		{
			if(screen.width<=800 || closeB)
			{
				for(var i=0;i<collection.length;i++)
				{
					collection[i].object.style.display	= 'none';
				}
				return;
			}
			for(var i=0;i<collection.length;i++)
			{
				var followObj		= collection[i].object;
				var followObj_x		= (typeof(collection[i].x)=='string'?eval(collection[i].x):collection[i].x);
				var followObj_y		= (typeof(collection[i].y)=='string'?eval(collection[i].y):collection[i].y);

				if(followObj.offsetLeft!=(document.body.scrollLeft+followObj_x)) {
					var dx=(document.body.scrollLeft+followObj_x-followObj.offsetLeft)*delta;
					dx=(dx>0?1:-1)*Math.ceil(Math.abs(dx));
					followObj.style.left=followObj.offsetLeft+dx;
					}

				if(followObj.offsetTop!=(document.body.scrollTop+followObj_y)) {
					var dy=(document.body.scrollTop+followObj_y-followObj.offsetTop)*delta;
					dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
					followObj.style.top=followObj.offsetTop+dy;
					}
				followObj.style.display	= '';
			}
		}	
		function closeBanner()
		{
			closeB=true;
			return;
		}
       function url()
	   {
	    window.location.href="http://www.youku.com";
	   }

	var theFloaters		= new floaters();
	//
	theFloaters.addItem('followDiv1','document.body.clientWidth-106',80,'<div style="z-index:1"><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133" style="display:block;width:97px;height:233px;position:absolute;left:0;top:0;background:transparent "></a><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="97" height="233"><param name="movie" value="images/youhuo.png"><param name="quality" value="high"><embed src="images/youhuo.png" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="97" height="233"></embed></object></div><br><br><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133"><img src=images/close.gif style="cursor:pointer" onClick="closeBanner();"></a>');
	theFloaters.addItem('followDiv2',6,80,'<div style="z-index:1"><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133" style="display:block;width:97px;height:233px;position:absolute;left:0;top:0;background:transparent "></a><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="97" height="233"><param name="movie" value="images/youhuo.png"><param name="quality" value="high"><embed src="images/youhuo.png" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="97" height="233"></embed></object></div><br><br><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133"><img src=images/close.gif style="cursor:hand" onClick="closeBanner();"></a>');
	theFloaters.play();
	

//<a href=http://digi.blueidea.com/mms target=_blank><img src=/gg/blueidea/2004/digimms.gif width=100 height=100 border=0></a><a href=/news/game/2004/2363.asp><img src=/gg/computerarts/5000.gif width=100 height=150 border=0></a>