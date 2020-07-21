
	var NoOffFirstLineMenus=7;
	var LowBgColor="#F79C5A";
	var HighBgColor="#DE6B10";
	var FontLowColor="#000000";
	var FontHighColor="#E0E0E0";
	var BorderColor="#EF8431";
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
	var StartTop=67;
	var StartLeft=96;
	var VerCorrect=0;
	var HorCorrect=0;
	var DistFrmFrameBrdr=5;
	var LeftPaddng=3;
	var TopPaddng=2;
	var FirstLineHorizontal=1;
	var MenuFramesVertical=0;
	var DissapearDelay=1000;
	var UnfoldDelay=0;
	var TakeOverBgColor=1;
	var FirstLineFrame="nav";
	var SecLineFrame="info";
	var DocTargetFrame="info";
	var TargetLoc="";
	var MenuWrap=1;
	var RightToLeft=0;
	var BottomUp=0;
	var UnfoldsOnClick=0;
	var BaseHref=(window.location != window.parent.location) ? document.referrer: document.location; //http://www.wolfgangarchive.com/psgd-web/
	

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
	
	var MenuShadow=""; //progid:DXImageTransform.Microsoft.Shadow(color=#000000, direction=135, strength=3)
	
	var MenuOpacity="";

	function BeforeStart(){return}
	function AfterBuild(){return}
	function BeforeFirstOpen(){return}
	function AfterCloseAll(){return}


Menu1=new Array("Site Info","","",6,18,55,"","","","","","",-1,-1,-1,"","");
		Menu1_1=new Array("Startpage","start.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_2=new Array("News","site/news.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_3=new Array("Sitemap","site/map.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_4=new Array("Credits","site/credits.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_5=new Array("Contact","site/contact.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_6=new Array("Main menu","javascript:top.document.location.href='../choose.htm'","",0,18,70,"","","","","","",-1,-1,-1,"",""); //http://www.wolfgangarchive.com/choose.htm
		
Menu2=new Array("Heroes","","",5,18,50,"","","","","","",-1,-1,-1,"","");
	Menu2_1=new Array("Alec","characters/alec.htm","",0,18,50,"","","","","","",-1,-1,-1,"","");
	Menu2_2=new Array("Minina","characters/minina.htm","",0,18,50,"","","","","","",-1,-1,-1,"","");
	Menu2_3=new Array("Doromu","characters/doromu.htm","",0,18,50,"","","","","","",-1,-1,-1,"","");
	Menu2_4=new Array("Dalos","characters/dalos.htm","",0,18,50,"","","","","","",-1,-1,-1,"","");
	Menu2_5=new Array("Alis","characters/alis.htm","",0,18,50,"","","","","","",-1,-1,-1,"","");

Menu3=new Array("Maps","","",2,18,50,"","","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("Worldmap","maps/world.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
	Menu3_2=new Array("Forest","maps/forest.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		
Menu4=new Array("Towns","","",8,18,50,"","","","","","",-1,-1,-1,"","");
		Menu4_1=new Array("Tedo","maps/tedo.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_2=new Array("Gypsy","maps/gypsy.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_3=new Array("Mechatron","maps/mechatron.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_4=new Array("Taini","maps/taini.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_5=new Array("Karukatto","maps/karukatto.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_6=new Array("Purimu","maps/purimu.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_7=new Array("Forest House","maps/house.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		Menu4_8=new Array("Tarimu","maps/tarimu.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
		
Menu5=new Array("Enemies","","",8,18,60,"","","","","","",-1,-1,-1,"","");
		Menu5_1=new Array("Enemies A-C","enemies/a_c.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_2=new Array("Enemies D","enemies/d.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_3=new Array("Enemies F-K","enemies/f_k.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_4=new Array("Enemies M","enemies/m.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_5=new Array("Enemies O-R","enemies/o_r.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_6=new Array("Enemies S","enemies/s.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_7=new Array("Enemies T-W","enemies/t_w.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		Menu5_8=new Array("Boss Enemy","enemies/boss.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
		
Menu6=new Array("Dungeons","","",9,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_1=new Array("Cave 1","maps/dungeon01.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_2=new Array("Cave 2","maps/dungeon02.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_3=new Array("Cave 3","maps/dungeon03.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_4=new Array("Cave 4","maps/dungeon04.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_5=new Array("Cave 5","maps/dungeon05.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_6=new Array("Cave 6","maps/dungeon06.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_7=new Array("Cave 7","maps/dungeon07.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_8=new Array("Ruins","maps/dungeon08.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		Menu6_9=new Array("Castle","maps/dungeon09.htm","",0,18,65,"","","","","","",-1,-1,-1,"","");
		
Menu7=new Array("And more","","",3,18,60,"","","","","","",-1,-1,-1,"","");
		Menu7_1=new Array("People","more/people.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu7_2=new Array("Backgrounds","more/backgrounds.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu7_3=new Array("Tips","more/tips.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		