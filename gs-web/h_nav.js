

	var NoOffFirstLineMenus=9;

	var LowBgColor="#006384";

	var HighBgColor="#4AADD6";

	var FontLowColor="#EFDE63";

	var FontHighColor="#FFFFFF";

	var BorderColor="#C0C0C0";

	var BorderWidthMain=1;

	var BorderWidthSub=1;

 	var BorderBtwnMain=1;

	var BorderBtwnSub=1;

	var FontFamily="arial";

	var FontSize=12;

	var FontBold=0;

	var FontItalic=0;

	var MenuTextCentered="left";

	var MenuCentered="left";

	var MenuVerticalCentered="top";

	var ChildOverlap=.25;

	var ChildVerticalOverlap=.5;

	var StartTop=70;

	var StartLeft=12;

	var VerCorrect=0;

	var HorCorrect=0;

	var DistFrmFrameBrdr=3;

	var LeftPaddng=3;

	var TopPaddng=2;

	var FirstLineHorizontal=1;

	var MenuFramesVertical=0;

	var DissapearDelay=1000;

	var UnfoldDelay=0;

	var TakeOverBgColor=1;

	var FirstLineFrame="nav";

	var SecLineFrame="main";

	var DocTargetFrame="main";

	var TargetLoc="";

	var MenuWrap=1;

	var RightToLeft=0;

	var BottomUp=0;

	var UnfoldsOnClick=0;

	var BaseHref="//www.wolfgangarchive.com/gs-web/"; // "" for internal use

	



	var Arrws="";

	

	var MenuUsesFrames=1;



	var RememberStatus=0;	

	var BuildOnDemand=0;	

	var BgImgLeftOffset=5;	

	var ScaleMenu=0;	



	var HooverBold=0;	

	var HooverItalic=0;	

	var HooverUnderLine=0;	

	var HooverTextSize=0;	

	var HooverVariant=0;	



	var MenuSlide="";

	

	var MenuShadow="progid:DXImageTransform.Microsoft.Shadow(color=#000000, direction=135, strength=3)";

	

	var MenuOpacity="";



	function BeforeStart(){return}

	function AfterBuild(){return}

	function BeforeFirstOpen(){return}

	function AfterCloseAll(){return}





Menu1=new Array("Jump to","","",3,18,60,"","","","","","",-1,-1,-1,"","");

		Menu1_1=new Array("Startpage","start.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_2=new Array("Golden Sun 2","javascript:top.document.location.href='//www.wolfgangarchive.com/gs2-web/index.html'","",0,18,80,"","","","","","",-1,-1,-1,"",""); //  ../gs2-web/index.html for internal use

Menu1_3=new Array("Main Menu","javascript:top.document.location.href='//www.wolfgangarchive.com/choose.htm'","",0,18,80,"","","","","","",-1,-1,-1,"",""); //  ../choose.htm for internal use 



Menu2=new Array("Site Info","","",5,18,60,"","","","","","",-1,-1,-1,"","");

		Menu2_1=new Array("News","site/news.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu2_2=new Array("Sitemap","site/map.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu2_3=new Array("Credits","site/credits.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu2_4=new Array("Copyright","site/copyright.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu2_5=new Array("Contact","site/contact.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");



Menu3=new Array("Characters","","",3,18,70,"","","","","","",-1,-1,-1,"","");

		Menu3_1=new Array("Heroes","","",4,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_1_1=new Array("Isaac","characters/isaak.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_1_2=new Array("Garet","characters/garret.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_1_3=new Array("Ivan","characters/ivan.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_1_4=new Array("Mia","characters/mia.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu3_2=new Array("Djinns","","",4,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_2_1=new Array("Jupiter","characters/jupiter.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_2_2=new Array("Mars","characters/mars.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_2_3=new Array("Mercury","characters/mercury.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_2_4=new Array("Venus","characters/venus.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu3_3=new Array("Sidecast","","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_3_1=new Array("Friends","characters/friends.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_3_2=new Array("Foes","characters/foes.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu3_3_3=new Array("VIPs","characters/vips.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		

Menu4=new Array("Psynergy","","",2,18,60,"","","","","","",-1,-1,-1,"","");

	Menu4_1=new Array("Spells","psynergy/spells.htm","",0,21,90,"","","","","","",-1,-1,-1,"","");

	Menu4_2=new Array("Summonings","psynergy/summon.htm","",0,21,90,"","","","","","",-1,-1,-1,"","");

		

Menu5=new Array("Items","","",3,18,60,"","","","","","",-1,-1,-1,"","");

		Menu5_1=new Array("Armory","","",6,18,60,"","","","","","",-1,-1,-1,"","");

			Menu5_1_1=new Array("Clothing","items/clothes/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_1_2=new Array("Armors","items/armory/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_1_3=new Array("Shields","items/shields/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");	

			Menu5_1_4=new Array("Gloves/Armlets","items/gloves_armlets/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_1_5=new Array("Helmets/Circlets","items/helmets/items.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

			Menu5_1_6=new Array("Boots","items/boots/items.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");			

		Menu5_2=new Array("Weapons","","",3,18,60,"","","","","","",-1,-1,-1,"","");

			Menu5_2_1=new Array("Swords etc.","items/swords/items.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

			Menu5_2_2=new Array("Axes/Maces","items/axes_maces/items.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

			Menu5_2_3=new Array("Staffs/Ankhs","items/staffs/items.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu5_3=new Array("Items","","",6,18,60,"","","","","","",-1,-1,-1,"","");

			Menu5_3_1=new Array("Power Ups","items/power_ups/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_3_2=new Array("Psynergy","items/psynergy/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_3_3=new Array("Attacking","items/attack/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");	

			Menu5_3_4=new Array("Healing","items/healing/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_3_5=new Array("Important Items","items/important/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu5_3_6=new Array("Utilities","items/utilities/items.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

		

Menu6=new Array("Towns","","",14,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_1=new Array("Vale","towns/vale.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_2=new Array("Vault","towns/vault.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_3=new Array("Lunpa","towns/lunpa.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_4=new Array("Bilibin","towns/bilibin.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_5=new Array("Imil","towns/imil.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_6=new Array("Kolima","towns/kolima.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_7=new Array("Fuchin","towns/fuchin.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_8=new Array("Xian","towns/xian.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_9=new Array("Altin","towns/altin.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_10=new Array("Lama","towns/lama.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_11=new Array("Kalay","towns/kalay.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_12=new Array("Tolbi","towns/tolbi.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_13=new Array("Suhalla","towns/suhalla.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");

		Menu6_14=new Array("Lalivero","towns/lalivero.htm","",0,18,60,"","","","","","",-1,-1,-1,"","");



Menu7=new Array("Maps","","",5,18,60,"","","","","","",-1,-1,-1,"","");

		Menu7_1=new Array("Buildings","","",7,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_1_1=new Array("Sol Sanctum","dungeons/buildings/sol_sanctum.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_2=new Array("Mercury Lighthouse","dungeons/buildings/mercury.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_3=new Array("Kalay Dungeon","towns/kalay_sewers.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_4=new Array("Venus Lighthouse 1","dungeons/buildings/venus1.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_5=new Array("Babi Tower","dungeons/buildings/babi.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_6=new Array("Tunnel Ruins","dungeons/buildings/tunnel.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_1_7=new Array("Venus Lighthouse 2","dungeons/buildings/venus2.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

		Menu7_2=new Array("Caves","","",9,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_2_1=new Array("Vale Cave","dungeons/caves/vale.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_2=new Array("Vault Cave","dungeons/caves/vault.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_3=new Array("Goma Cave","dungeons/caves/goma.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_4=new Array("Bilibin Cave","dungeons/caves/bilibin.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_5=new Array("Fuchin Cave","dungeons/caves/fuchin.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_6=new Array("Altin Cave","dungeons/caves/altin.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_7=new Array("Gondowan","dungeons/caves/gondowan.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_8=new Array("Altmiller Cave","dungeons/caves/altmiller.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");

			Menu7_2_9=new Array("Lunpa Fortress","dungeons/caves/lunpa.htm","",0,18,100,"","","","","","",-1,-1,-1,"","")

		Menu7_3=new Array("Countryside","","",6,18,80,"","","","","","",-1,-1,-1,"","");	

			Menu7_3_1=new Array("Kolima Forest","dungeons/country/kolima.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_3_2=new Array("Tret Tree","dungeons/country/tret.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_3_3=new Array("Mogall Forest","dungeons/country/mogall.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_3_4=new Array("Alpin Crossing","dungeons/country/alpin.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_3_5=new Array("Lamakan Desert","dungeons/country/lamakan.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

			Menu7_3_6=new Array("Suhalla Desert","dungeons/country/suhalla.htm","",0,18,115,"","","","","","",-1,-1,-1,"","");

		Menu7_4=new Array("Crossbone","","",11,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_1=new Array("Entrance","crossbone/entrance.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_2=new Array("Sublevel 1","crossbone/sublevel01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_3=new Array("Sublevel 2","crossbone/sublevel02.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_4=new Array("Sublevel 3","crossbone/sublevel03.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_5=new Array("Sublevel 4","crossbone/sublevel04.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_6=new Array("Sublevel 5","crossbone/sublevel05.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_7=new Array("Sublevel 6","crossbone/sublevel06.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_8=new Array("Sublevel 7","crossbone/sublevel07.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_9=new Array("Sublevel 8","crossbone/sublevel08.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_10=new Array("Sublevel 9","crossbone/sublevel09.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu7_4_11=new Array("Groundfloor","crossbone/sublevel10.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu7_5=new Array("Worldmap","worldmap/worldmap.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

Menu8=new Array("Enemies","","",5,18,60,"","","","","","",-1,-1,-1,"","");

		Menu8_1=new Array("Enemies A-E","enemies/a_e.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu8_2=new Array("Enemies F-I","enemies/f_i.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu8_3=new Array("Enemies K-N","enemies/k_n.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu8_4=new Array("Enemies O-S","enemies/o_s.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu8_5=new Array("Enemies T-Z","enemies/t_z.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

		Menu8_5=new Array("Boss Enemies","enemies/bosses.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");

Menu9=new Array("And more...","","",4,18,70,"","","","","","",-1,-1,-1,"","");

		Menu9_1=new Array("Backgrounds","more/back.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu9_2=new Array("Midi Music","more/music.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu9_3=new Array("Other Stuff...","more/other.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu9_4=new Array("Epilogue","more/epilogue.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		

		

		