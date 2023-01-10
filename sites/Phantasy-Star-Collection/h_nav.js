
	var NoOffFirstLineMenus=6;
	var LowBgColor="#84A5CE";
	var HighBgColor="#638CB8";
	var FontLowColor="#000000";
	var FontHighColor="#FFFFFF";
	var BorderColor="#5A8CBD";
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
	var BaseHref=(window.location != window.parent.location) ? document.referrer: document.location; ////www.wolfgangarchive.com/ps_collection/
	

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


Menu1=new Array("Site Info","","",6,18,60,"","","","","","",-1,-1,-1,"","");
		Menu1_1=new Array("Startpage","start.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_2=new Array("News","site/news.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_3=new Array("Credits","site/credits.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_4=new Array("Copyright","site/copyright.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_5=new Array("Contact","site/contact.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu1_6=new Array("Main menu","javascript:top.document.location.href='../choose.htm'","",0,18,70,"","","","","","",-1,-1,-1,"",""); ////www.wolfgangarchive.com/choose.htm
		
Menu2=new Array("Phantasy Star","","",10,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_1=new Array("Picture 1","ps1/01.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_2=new Array("Picture 2","ps1/02.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_3=new Array("Picture 3","ps1/03.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_4=new Array("Picture 4","ps1/04.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_5=new Array("Picture 5","ps1/05.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_6=new Array("Picture 6","ps1/06.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_7=new Array("Picture 7","ps1/07.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_8=new Array("Picture 8","ps1/08.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_9=new Array("Picture 9","ps1/09.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");
	Menu2_10=new Array("Picture 10","ps1/10.htm","",0,18,85,"","","","","","",-1,-1,-1,"","");

Menu3=new Array("Phantasy Star II","","",15,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("Picture 1","ps2/01.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_2=new Array("Picture 2","ps2/02.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_3=new Array("Picture 3","ps2/03.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_4=new Array("Picture 4","ps2/04.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_5=new Array("Picture 5","ps2/05.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_6=new Array("Picture 6","ps2/06.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_7=new Array("Picture 7","ps2/07.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_8=new Array("Picture 8","ps2/08.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_9=new Array("Picture 9","ps2/09.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_10=new Array("Picture 10","ps2/10.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_11=new Array("Picture 11","ps2/11.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_12=new Array("Picture 12","ps2/12.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_13=new Array("Picture 13","ps2/13.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_14=new Array("Picture 14","ps2/14.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_15=new Array("Picture 15","ps2/15.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	
Menu4=new Array("Phantasy Star III","","",23,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_1=new Array("Picture 1","ps3/01.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_2=new Array("Picture 2","ps3/02.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_3=new Array("Picture 3","ps3/03.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_4=new Array("Picture 4","ps3/04.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_5=new Array("Picture 5","ps3/05.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_6=new Array("Picture 6","ps3/06.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_7=new Array("Picture 7","ps3/07.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_8=new Array("Picture 8","ps3/08.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_9=new Array("Picture 9","ps3/09.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_10=new Array("Picture 10","ps3/10.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_11=new Array("Picture 11","ps3/11.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_12=new Array("Picture 12","ps3/12.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_13=new Array("Picture 13","ps3/13.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_14=new Array("Picture 14","ps3/14.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_15=new Array("Picture 15","ps3/15.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_16=new Array("Picture 16","ps3/16.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_17=new Array("Picture 17","ps3/17.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_18=new Array("Picture 18","ps3/18.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_19=new Array("Picture 19","ps3/19.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_20=new Array("Picture 20","ps3/20.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_21=new Array("Picture 21","ps3/21.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_22=new Array("Picture 22","ps3/22.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	Menu4_23=new Array("Picture 23","ps3/23.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
	

Menu5=new Array("Phantasy Star IV","","",14,18,95,"","","","","","",-1,-1,-1,"","");
	Menu5_1=new Array("Pictures        1-11","ps4/001.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_2=new Array("Pictures     12-29","ps4/012.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_3=new Array("Pictures     30-41","ps4/030.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_4=new Array("Pictures     42-60","ps4/042.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_5=new Array("Pictures     61-67","ps4/061.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_6=new Array("Pictures     68-76","ps4/068.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_7=new Array("Pictures     77-90","ps4/077.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_8=new Array("Pictures     91-98","ps4/091.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_9=new Array("Pictures   99-116","ps4/099.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_10=new Array("Pictures 117-125","ps4/117.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_11=new Array("Pictures 126-140","ps4/126.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_12=new Array("Pictures 141-148","ps4/141.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_13=new Array("Pictures 149-156","ps4/149.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
	Menu5_14=new Array("Pictures 157-167","ps4/157.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
		
Menu6=new Array("Midis Files","","",4,18,70,"","","","","","",-1,-1,-1,"","");
		Menu6_1=new Array("PS1 Midis","ps1/midi/music.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu6_2=new Array("PS2 Midis","ps2/midi/music.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu6_3=new Array("PS3 Midis","ps3/midi/music.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu6_4=new Array("PS4 Midis","ps4/midi/music.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");