

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
	theFloaters.addItem('followDiv1','document.body.clientWidth-106',80,'<div style="z-index:1"><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133" style="display:block;width:97px;height:233px;position:absolute;left:0;top:0;background:transparent"></a><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="97" height="233"><param name="movie" value="https://thumbnail0.baidupcs.com/thumbnail/ec5bb1df3169bf858b8535faec1d8f75?fid=369162585-250528-850128923225931&time=1476255600&rt=yt&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UO1SlzmpS7Xa3FY%2B3CfuIA%2BHx%2BU%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=6624765653887960974&dp-callid=0&size=c10000_u10000&quality=100"><param name="quality" value="high"><embed src="https://thumbnail0.baidupcs.com/thumbnail/ec5bb1df3169bf858b8535faec1d8f75?fid=369162585-250528-850128923225931&time=1476255600&rt=yt&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UO1SlzmpS7Xa3FY%2B3CfuIA%2BHx%2BU%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=6624765653887960974&dp-callid=0&size=c10000_u10000&quality=100" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="97" height="233"></embed></object></div><br><br><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133"><img src="https://raw.githubusercontent.com/lienrong/jiaoben/master/images/close.gif" style="cursor:pointer" onClick="closeBanner();"></a>');
	theFloaters.addItem('followDiv2',6,80,'<div style="z-index:1"><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133" style="display:block;width:97px;height:233px;position:absolute;left:0;top:0;background:transparent "></a><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="97" height="233"><param name="movie" value="https://thumbnail0.baidupcs.com/thumbnail/ec5bb1df3169bf858b8535faec1d8f75?fid=369162585-250528-850128923225931&time=1476255600&rt=yt&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UO1SlzmpS7Xa3FY%2B3CfuIA%2BHx%2BU%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=6624765653887960974&dp-callid=0&size=c10000_u10000&quality=100"><param name="quality" value="high"><embed src="https://thumbnail0.baidupcs.com/thumbnail/ec5bb1df3169bf858b8535faec1d8f75?fid=369162585-250528-850128923225931&time=1476255600&rt=yt&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-UO1SlzmpS7Xa3FY%2B3CfuIA%2BHx%2BU%3D&expires=2h&chkv=0&chkbd=0&chkpc=&dp-logid=6624765653887960974&dp-callid=0&size=c10000_u10000&quality=100" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="97" height="233"></embed></object></div><br><br><a href="http://tumanduo.pw/meiniu/ydy_l/index.jsp?fid=2133"><img src="https://raw.githubusercontent.com/lienrong/jiaoben/master/images/close.gif" style="cursor:hand" onClick="closeBanner();"></a>');
	theFloaters.play();

//<a href=http://digi.blueidea.com/mms target=_blank><img src=/gg/blueidea/2004/digimms.gif width=100 height=100 border=0></a><a href=/news/game/2004/2363.asp><img src=/gg/computerarts/5000.gif width=100 height=150 border=0></a>