//(c) Ger Versluis 2000 version 9.00



	var NoOffFirstLineMenus=7;

	var LowBgColor="";

	var HighBgColor="";

	var FontLowColor="#EFDE63";

	var FontHighColor="#FFFFFF";

	var BorderColor="";

	var BorderWidthMain=0;

	var BorderWidthSub=0;

	var BorderBtwnMain=0;

	var BorderBtwnSub=0;

	var FontFamily="arial, helvetica, sans-serif"

	var FontSize=11;

	var FontBold=1;

	var FontItalic=0;

	var MenuTextCentered='center';

	var MenuCentered='left';

	var MenuVerticalCentered='top';

	var ChildOverlap=.2;

	var ChildVerticalOverlap=.2;

	var LeftPaddng=2;

	var TopPaddng=6;

	var StartTop=60;

	var StartLeft=70;

	var VerCorrect=0;

	var HorCorrect=0;

	var DistFrmFrameBrdr=0;

	var FirstLineHorizontal=1;

	var MenuFramesVertical=0;

	var DissapearDelay=1000;

	var UnfoldDelay=100;

	var TakeOverBgColor=1;

	var FirstLineFrame="nav";

	var SecLineFrame="main";

	var DocTargetFrame="main";

	var MenuWrap=1;

	var TargetLoc="";

	var RightToLeft=0;

	var BottomUp=0;

	var UnfoldsOnClick=0;

	var BaseHref="http://www.wolfgangarchive.com/psg2-web/";

	var Arrws="";

	var MenuUsesFrames=1;

	var RememberStatus=0;

	var PartOfWindow=.75;

	var BuildOnDemand=1;

	var BgImgLeftOffset=0;

	var ScaleMenu=0;

	var HooverBold=0;

	var HooverItalic=0;

	var HooverUnderLine=0;

	var HooverTextSize=0;

	var HooverVariant=0;

	var MenuSlide="";

	var MenuShadow="";

	var MenuOpacity="";



function BeforeStart(){return}

function AfterBuild(){

	if(FrstCreat){Simg1=new Image();Simg1.src=BaseHref+"design/menu_top100.png";

		Simg2=new Image();Simg2.src=BaseHref+"design/menu_text100.png";}}

function BeforeFirstOpen(){return}

function AfterCloseAll(){return}



Menu1=new Array("Site Info","",BaseHref+"design/menu_top100.png",7,24,100,"","","","","","",-1,-1,-1,"","");

	Menu1_1=new Array("Startpage","start.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu1_2=new Array("News","news.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu1_3=new Array("Credits","credits.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu1_4=new Array("Sitemap","sitemap.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu1_5=new Array("Contact","contact.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu1_6=new Array("Main Menu","javascript:top.document.location.href='http://www.wolfgangarchive.com/choose.htm'",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu1_7=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu2=new Array("Towns","",BaseHref+"design/menu_top100.png",10,20,100,"","","","","","",-1,-1,-1,"","");

	Menu2_1=new Array("Arima","arima.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu2_2=new Array("Aukba","aukba.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_3=new Array("Kueri","kueri.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_4=new Array("Oputa","oputa.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_5=new Array("Paseo","paseo.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_6=new Array("Piata","piata.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_7=new Array("Ryuon","ryuon.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_8=new Array("Zema","zema.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_9=new Array("Zosa","zosa.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu2_10=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu3=new Array("Items","",BaseHref+"design/menu_top100.png",6,24,100,"","","","","","",-1,-1,-1,"","");

	Menu3_1=new Array("Armory","armory01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu3_2=new Array("Healing","healing01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

Menu3_3=new Array("Important","important01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu3_4=new Array("Pipes","pipes01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu3_5=new Array("Weapons","weapons01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu3_6=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu4=new Array("Enemies","",BaseHref+"design/menu_top100.png",11,24,100,"","","","","","",-1,-1,-1,"","");

	Menu4_1=new Array("Enemies A-B","enemies01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu4_2=new Array("Enemies C-D","enemies02.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_3=new Array("Enemies E-F","enemies03.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_4=new Array("Enemies G-H","enemies04.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_5=new Array("Enemies I-L","enemies05.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_6=new Array("Enemies M-O","enemies06.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_7=new Array("Enemies P-R","enemies07.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_8=new Array("Enemies S","enemies08.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_9=new Array("Enemies T-W","enemies09.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_10=new Array("Boss Enemies","enemies10.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu4_11=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu5=new Array("Dungeons A","",BaseHref+"design/menu_top100.png",13,24,100,"","","","","","",-1,-1,-1,"","");

	Menu5_1=new Array("Shure","shure_01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu5_2=new Array("Nido Tower","nido_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_3=new Array("North Bridge","bridge.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_4=new Array("Biosystem","biolab_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_5=new Array("Roron Dump","roron_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_6=new Array("Uzo Island","uzo.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_7=new Array("Climatrol","climatrol_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_8=new Array("Control Tower","c_tower_01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu5_9=new Array("Red Dam","rd_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_10=new Array("Yellow Dam","yd_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_11=new Array("Blue Dam","bd_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu5_12=new Array("Green Dam","gd_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

Menu5_13=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu6=new Array("Dungeons B","",BaseHref+"design/menu_top100.png",10,24,100,"","","","","","",-1,-1,-1,"","");

	Menu6_1=new Array("Garia","gaira_01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu6_2=new Array("Skure","skure_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_3=new Array("The Crevice","crevice_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_4=new Array("Esper Mansion","mansion_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_5=new Array("Menobe","menobe_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_6=new Array("Guaron","guaron_01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu6_7=new Array("Naval","naval_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_8=new Array("Ikuto","ikuto_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_9=new Array("Noah Ship","noah_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu6_10=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");

Menu7=new Array("Even More","",BaseHref+"design/menu_top100.png",10,24,100,"","","","","","",-1,-1,-1,"","");

	Menu7_1=new Array("Heroes","heroes_01.htm",BaseHref+"design/menu_text100.png",0,20,100,"","","","","","",-1,-1,-1,"","");

	Menu7_2=new Array("People","vip_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_3=new Array("Planets","planets.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_4=new Array("Techniques","technique_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_5=new Array("Skills","skill_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_6=new Array("Translations","tips01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_7=new Array("Midi Music","music.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_8=new Array("Anime Scenes","movie_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

Menu7_9=new Array("Backgrounds","back_01.htm",BaseHref+"design/menu_text100.png",0,0,0,"","","","","","",-1,-1,-1,"","");

	Menu7_10=new Array("","",BaseHref+"design/menu_bot100.png",0,8,100,"","","","","","",-1,-1,-1,"","");