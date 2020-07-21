
	var NoOffFirstLineMenus=5;
	var LowBgColor="#002080";
	var HighBgColor="#0084C6";
	var FontLowColor="#EFDE63";
	var FontHighColor="#FFFFFF";
	var BorderColor="#C69C84";
	var BorderWidthMain=1;
	var BorderWidthSub=1;
 	var BorderBtwnMain=1;
	var BorderBtwnSub=1;
	var FontFamily="arial";
	var FontSize=12;
	var FontBold=1;
	var FontItalic=1;
	var MenuTextCentered="left";
	var MenuCentered="left";
	var MenuVerticalCentered="top";
	var ChildOverlap=.25;
	var ChildVerticalOverlap=.5;
	var StartTop=70;
	var StartLeft=100;
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
	var BaseHref=(window.location != window.parent.location) ? document.referrer: document.location; //http://www.wolfgangarchive.com/sfii-web/
	

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


Menu1=new Array("Site Info","","",6,18,60,"","","","","","",-1,-1,-1,"","");
		Menu1_1=new Array("Startpage","start.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_2=new Array("News","site/news.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_3=new Array("Credits","site/credits.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_4=new Array("Copyright","site/copyright.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_5=new Array("Contact","site/contact.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_6=new Array("Main menu","javascript:top.document.location.href='../choose.htm'","",0,18,80,"","","","","","",-1,-1,-1,"",""); //http://www.wolfgangarchive.com/choose.htm
		
Menu2=new Array("Heroes (A-K)","","",16,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1=new Array("Bowie","heroes/bowie.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2=new Array("Chaz","heroes/chaz.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3=new Array("Chester","heroes/chester.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_4=new Array("Claude","heroes/claude.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_5=new Array("Elric","heroes/elric.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_6=new Array("Eric","heroes/eric.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_7=new Array("Frayja","heroes/frayja.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_8=new Array("Gerhalt","heroes/gerhalt.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_9=new Array("Gyan","heroes/gyan.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_10=new Array("Higins","heroes/higins.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_11=new Array("Jaha","heroes/jaha.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_12=new Array("Janet","heroes/janet.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_13=new Array("Jaro","heroes/jaro.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_14=new Array("Karna","heroes/karna.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_15=new Array("Kazan","heroes/kazan.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_16=new Array("Kiwi","heroes/kiwi.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
Menu3=new Array("Heroes (L-Z)","","",14,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_1=new Array("Lemon","heroes/lemon.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_2=new Array("Luke","heroes/luke.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_3=new Array("May","heroes/may.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_4=new Array("Peter","heroes/peter.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_5=new Array("Randolf","heroes/randolf.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_6=new Array("Rhode","heroes/rhode.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_7=new Array("Rick","heroes/rick.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_8=new Array("Sarah","heroes/sarah.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_9=new Array("Sheela","heroes/sheela.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_10=new Array("Skreech","heroes/skreech.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_11=new Array("Slade","heroes/slade.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_12=new Array("Taya","heroes/taya.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_13=new Array("Tyrin","heroes/tyrin.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu3_14=new Array("Zynk","heroes/zynk.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

Menu4=new Array("Enemies","","",12,18,60,"","","","","","",-1,-1,-1,"","");
		Menu4_1=new Array("Archdemon - Burstrock","enemies/a_b.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_2=new Array("Cerberus - Cyclops","enemies/c.htm","",0,18,146,"","","","","","",-1,-1,-1,"","");
		Menu4_3=new Array("Dark Bishop - Dark Sniper","enemies/d1.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_4=new Array("Dark Soldier - Dragonewt","enemies/d2.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_5=new Array("Evil Beast - Executioner","enemies/e.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_6=new Array("Galam Archer - Griffin","enemies/g.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_7=new Array("Harpy - Hydra","enemies/h.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_8=new Array("King (Chess) - Mudman","enemies/k_m.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_9=new Array("Necromancer - Pyro Hydra","enemies/n_p.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_10=new Array("Queen - Soulsower","enemies/q_s.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_11=new Array("Vampire Bat -Zombie","enemies/v_z.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		Menu4_12=new Array("Main Boss Enemies","enemies/bosses.htm","",0,18,156,"","","","","","",-1,-1,-1,"","");
		
Menu5=new Array("Even more...","","",2,18,95,"","","","","","",-1,-1,-1,"","");
		Menu5_1=new Array("Backgrounds","more/backgrounds.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
		Menu5_2=new Array("Midi Music","more/music.htm","",0,18,95,"","","","","","",-1,-1,-1,"","");
		
