 /***********************************************

*	(c) Ger Versluis 2000 version 13.00 27 May 2004          *

*	You may use this script on non commercial sites.	          *

*	www.burmees.nl/menu			          *

*	You may remove all comments for faster loading	          *		

************************************************/

	var NoOffFirstLineMenus=6;			// Number of main menu  items

						// Colorvariables:

						// Color variables take HTML predefined color names or "#rrggbb" strings

						//For transparency make colors and border color ""

	var LowBgColor="#001052";		// Background color when mouse is not over 

	var HighBgColor="#00216B";		// Background color when mouse is over

	var FontLowColor="#EFDE63";		// Font color when mouse is not over

	var FontHighColor="#FFFFFF";	// Font color when mouse is over

	var BorderColor="#C69C84";		// Border color 

	var BorderWidthMain=1;			// Border width main items

	var BorderWidthSub=1;			// Border width sub items

 	var BorderBtwnMain=1;			// Border width between elements main items

	var BorderBtwnSub=1;			// Border width between elements sub items

	var FontFamily="arial";			// Font family menu items

	var FontSize=12;				// Font size menu items

	var FontBold=1;					// Bold menu items 1 or 0

	var FontItalic=1;				// Italic menu items 1 or 0

	var MenuTextCentered="left";	// Item text position left, center or right

	var MenuCentered="left";		// Menu horizontal position can be: left, center, right

	var MenuVerticalCentered="top";	// Menu vertical position top, middle,bottom or static

	var ChildOverlap=.25;			// horizontal overlap child/ parent

	var ChildVerticalOverlap=.5;	// vertical overlap child/ parent

	var StartTop=70;				// Menu offset x coordinate

	var StartLeft=18;				// Menu offset y coordinate

	var VerCorrect=0;				// Multiple frames y correction

	var HorCorrect=0;				// Multiple frames x correction

	var DistFrmFrameBrdr=3;			// Distance between main menu and frame border

	var LeftPaddng=3;				// Left padding

	var TopPaddng=2;				// Top padding. If set to -1 text is vertically centered

	var FirstLineHorizontal=1;		// Number defines to which level the menu must unfold horizontal; 0 is all vertical

	var MenuFramesVertical=0;		// Frames in cols or rows 1 or 0

	var DissapearDelay=1000;		// delay before menu folds in

	var UnfoldDelay=0;				// delay before sub unfolds	

	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame

	var FirstLineFrame="nav";		// Frame where first level appears

	var SecLineFrame="main";		// Frame where sub levels appear

	var DocTargetFrame="main";		// Frame where target documents appear

	var TargetLoc="";				// span id for relative positioning

	var MenuWrap=1;					// enables/ disables menu wrap 1 or 0

	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0

	var BottomUp=0;					// enables/ disables Bottom up unfold 1 or 0

	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover

	var BaseHref="";				// BaseHref lets you specify the root directory for relative links. 

						// The script precedes your relative links with BaseHref

						// For instance: 

						// when your BaseHref= "http://www.MyDomain/" and a link in the menu is "subdir/MyFile.htm",

						// the script renders to: "http://www.MyDomain/subdir/MyFile.htm"

						// Can also be used when you use images in the textfields of the menu

						// "MenuX=new Array("<img src=\""+BaseHref+"MyImage\">"

						// For testing on your harddisk use syntax like: BaseHref="file:///C|/MyFiles/Homepage/"



	var Arrws="";

	//var Arrws=[BaseHref+"tri.gif",5,10,BaseHref+"tridown.gif",10,5,BaseHref+"trileft.gif",5,10,BaseHref+"triup.gif",10,5];



						// Arrow source, width and height.

						// If arrow images are not needed keep source ""



	var MenuUsesFrames=1;			// MenuUsesFrames is only 0 when Main menu, submenus,

						// document targets and script are in the same frame.

						// In all other cases it must be 1



	var RememberStatus=0;			// RememberStatus: When set to 1, menu unfolds to the presetted menu item. 

						// When set to 2 only the relevant main item stays highligthed

						// The preset is done by setting a variable in the head section of the target document.

						// <head>

						//	<script type="text/javascript">var SetMenu="2_2_1";</script>

						// </head>

						// 2_2_1 represents the menu item Menu2_2_1=new Array(.......



						// Below some pretty useless effects, since only IE6+ supports them

						// I provided 3 effects: MenuSlide, MenuShadow and MenuOpacity

						// If you don't need MenuSlide just leave in the line var MenuSlide="";

						// delete the other MenuSlide statements

						// In general leave the MenuSlide you need in and delete the others.

						// Above is also valid for MenuShadow and MenuOpacity

						// You can also use other effects by specifying another filter for MenuShadow and MenuOpacity.

						// You can add more filters by concanating the strings

	var BuildOnDemand=0;			// 1/0 When set to 1 the sub menus are build when the parent is moused over

	var BgImgLeftOffset=5;			// Only relevant when bg image is used as rollover

	var ScaleMenu=0;				// 1/0 When set to 0 Menu scales with browser text size setting



	var HooverBold=0;				// 1 or 0

	var HooverItalic=0;				// 1 or 0

	var HooverUnderLine=0;			// 1 or 0

	var HooverTextSize=0;			// 0=off, number is font size difference on hoover

	var HooverVariant=0;			// 1 or 0



	var MenuSlide="";

	// var MenuSlide="progid:DXImageTransform.Microsoft.GradientWipe(duration=.5, wipeStyle=1)";

	

	var MenuShadow="";

	var MenuShadow="progid:DXImageTransform.Microsoft.Shadow(color=#000000, direction=135, strength=3)";

	

	var MenuOpacity="";

	// var MenuOpacity="progid:DXImageTransform.Microsoft.Alpha(opacity=75)";



	function BeforeStart(){return}

	function AfterBuild(){return}

	function BeforeFirstOpen(){return}

	function AfterCloseAll(){return}



// Menu tree:

// MenuX=new Array("ItemText","Link","background image",number of sub elements,height,width,"bgcolor","bghighcolor",

//	"fontcolor","fonthighcolor","bordercolor","fontfamily",fontsize,fontbold,fontitalic,"textalign","statustext");

// Color and font variables defined in the menu tree take precedence over the global variables

// Fontsize, fontbold and fontitalic are ignored when set to -1.

// For rollover images ItemText or background image format is:  "rollover?"+BaseHref+"Image1.jpg?"+BaseHref+"Image2.jpg" 





// Menu1=new Array("rollover?"+BaseHref+"button01.jpg?"+BaseHref+"button02.jpg","file.htm","",5,18,80,"","","","","","",-1,-1,-1,"","Own text entered");



Menu1=new Array("Site Info","","",7,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_1=new Array("Startpage","start.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_2=new Array("News","site/news.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_3=new Array("Sitemap","site/map.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_4=new Array("Credits","site/credits.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_5=new Array("Copyright","site/copyright.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_6=new Array("Contact","site/contact.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu1_7=new Array("Main menu","javascript:top.document.location.href='//www.wolfgangarchive.com/choose.htm'","",0,18,80,"","","","","","",-1,-1,-1,"","");

		

Menu2=new Array("Scenario I","sfiii_1/start.htm","",5,18,80,"","","","","","",-1,-1,-1,"","");

	Menu2_1=new Array("Heroes","","",20,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_1=new Array("Synbios","sfiii_1/heroes/01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_2=new Array("Cybel","sfiii_1/heroes/02.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_3=new Array("Dantares","sfiii_1/heroes/03.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_4=new Array("Eldar","sfiii_1/heroes/04.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_5=new Array("Frank","sfiii_1/heroes/05.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_6=new Array("Fynnding","sfiii_1/heroes/06.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_7=new Array("Grace","sfiii_1/heroes/07.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_8=new Array("Hagane","sfiii_1/heroes/08.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_9=new Array("Hayward","sfiii_1/heroes/09.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_10=new Array("Horst","sfiii_1/heroes/10.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_11=new Array("Irene","sfiii_1/heroes/11.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_12=new Array("Julian","sfiii_1/heroes/12.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_13=new Array("Justin","sfiii_1/heroes/13.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_14=new Array("Kahn","sfiii_1/heroes/14.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_15=new Array("Masqurin","sfiii_1/heroes/15.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_16=new Array("Murasame","sfiii_1/heroes/16.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_17=new Array("Noon","sfiii_1/heroes/17.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_18=new Array("Obright","sfiii_1/heroes/18.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_19=new Array("Penn","sfiii_1/heroes/19.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_20=new Array("Ratchet","sfiii_1/heroes/20.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu2_2=new Array("Sidecast","","",4,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_2_1=new Array("Friends","sfiii_1/sidecast/friends.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_2_2=new Array("Foes","sfiii_1/sidecast/foes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_2_3=new Array("VIP's","sfiii_1/sidecast/vips.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_2_4=new Array("Traders etc.","sfiii_1/sidecast/trade.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu2_3=new Array("Enemies","sfiii_1/enemies/enemies.htm","",16,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_1=new Array("Enemies A","sfiii_1/enemies/a.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_2=new Array("Enemies B","sfiii_1/enemies/b.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_3=new Array("Enemies C","sfiii_1/enemies/c.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_4=new Array("Enemies D","sfiii_1/enemies/d.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_5=new Array("Enemies F","sfiii_1/enemies/f.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_6=new Array("Enemies G","sfiii_1/enemies/g.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_7=new Array("Enemies H","sfiii_1/enemies/h.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_8=new Array("Enemies I","sfiii_1/enemies/i.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_9=new Array("Enemies K","sfiii_1/enemies/k.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_10=new Array("Enemies L","sfiii_1/enemies/l.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_11=new Array("Enemies M","sfiii_1/enemies/m.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_12=new Array("Enemies P-Q","sfiii_1/enemies/p.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_13=new Array("Enemies S","sfiii_1/enemies/s.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_14=new Array("Enemies T","sfiii_1/enemies/t.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_15=new Array("Enemies V","sfiii_1/enemies/u.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_3_16=new Array("Enemies W","sfiii_1/enemies/w.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu2_4=new Array("Chapters","sfiii_1/chapters.htm","",6,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_1=new Array("Chapter I","sfiii_1/chapter1/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_1_1=new Array("Battles","sfiii_1/chapter1/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_1_2=new Array("Events","sfiii_1/chapter1/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_1_3=new Array("Hidden Items","sfiii_1/chapter1/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_2=new Array("Chapter II","sfiii_1/chapter2/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_2_1=new Array("Battles","sfiii_1/chapter2/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_2_2=new Array("Events","sfiii_1/chapter2/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_2_3=new Array("Hidden Items","sfiii_1/chapter2/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_3=new Array("Chapter III","sfiii_1/chapter3/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_3_1=new Array("Battles","sfiii_1/chapter3/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_3_2=new Array("Events","sfiii_1/chapter3/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_3_3=new Array("Hidden Items","sfiii_1/chapter3/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_4=new Array("Chapter IV","sfiii_1/chapter4/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_4_1=new Array("Battles","sfiii_1/chapter4/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_4_2=new Array("Events","sfiii_1/chapter4/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_4_3=new Array("Hidden Items","sfiii_1/chapter4/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_5=new Array("Chapter V","sfiii_1/chapter5/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_5_1=new Array("Battles","sfiii_1/chapter5/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_5_2=new Array("Events","sfiii_1/chapter5/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_5_3=new Array("Hidden Items","sfiii_1/chapter5/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu2_4_6=new Array("Chapter VI","sfiii_1/chapter6/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_6_1=new Array("Battles","sfiii_1/chapter6/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_6_2=new Array("Events","sfiii_1/chapter6/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu2_4_6_3=new Array("Hidden Items","sfiii_1/chapter6/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu2_5=new Array("Hero Tomb","sfiii_1/hero_test/battle01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");



Menu3=new Array("Scenario II","sfiii_2/start.htm","",5,18,80,"","","","","","",-1,-1,-1,"","");

	Menu3_1=new Array("Heroes","","",20,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_1=new Array("Medion","sfiii_2/heroes/01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_2=new Array("Arthur","sfiii_2/heroes/02.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_3=new Array("Barnard","sfiii_2/heroes/03.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_4=new Array("Campbell","sfiii_2/heroes/04.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_5=new Array("David","sfiii_2/heroes/05.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_6=new Array("Donhardt","sfiii_2/heroes/06.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_7=new Array("Garosh","sfiii_2/heroes/07.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_8=new Array("Hazuki","sfiii_2/heroes/08.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_9=new Array("Hedoba","sfiii_2/heroes/09.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_10=new Array("Hera","sfiii_2/heroes/10.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_11=new Array("Jade","sfiii_2/heroes/11.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_12=new Array("Julian","sfiii_2/heroes/12.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_13=new Array("Papesh","sfiii_2/heroes/13.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_14=new Array("Penko","sfiii_2/heroes/14.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_15=new Array("Robbie","sfiii_2/heroes/15.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_16=new Array("Rock","sfiii_2/heroes/16.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_17=new Array("Synthesis","sfiii_2/heroes/17.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_18=new Array("Uryudo","sfiii_2/heroes/18.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_19=new Array("Waltz","sfiii_2/heroes/19.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_1_20=new Array("Zero","sfiii_2/heroes/20.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu3_2=new Array("Sidecast","","",4,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_2_1=new Array("Friends","sfiii_2/sidecast/friends.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_2_2=new Array("Foes","sfiii_2/sidecast/foes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_2_3=new Array("VIP's","sfiii_2/sidecast/vips.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_2_4=new Array("Traders etc.","sfiii_2/sidecast/trade.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu3_3=new Array("Enemies","sfiii_2/enemies/enemies.htm","",20,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_1=new Array("Enemies A","sfiii_2/enemies/a.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_2=new Array("Enemies B","sfiii_2/enemies/b.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_3=new Array("Enemies C","sfiii_2/enemies/c.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_4=new Array("Enemies D","sfiii_2/enemies/d.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_5=new Array("Enemies E","sfiii_2/enemies/e.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_6=new Array("Enemies G","sfiii_2/enemies/g.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_7=new Array("Enemies H","sfiii_2/enemies/h.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_8=new Array("Enemies J","sfiii_2/enemies/j.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_9=new Array("Enemies K-L","sfiii_2/enemies/k.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_10=new Array("Enemies M","sfiii_2/enemies/m.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_11=new Array("Enemies O","sfiii_2/enemies/o.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_12=new Array("Enemies P","sfiii_2/enemies/p.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_13=new Array("Enemies Q","sfiii_2/enemies/q.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_14=new Array("Enemies R","sfiii_2/enemies/r.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_15=new Array("Enemies S","sfiii_2/enemies/s.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_16=new Array("Enemies T","sfiii_2/enemies/t.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_17=new Array("Enemies V","sfiii_2/enemies/v.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_18=new Array("Enemies W","sfiii_2/enemies/w.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_19=new Array("Enemies Y","sfiii_2/enemies/y.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_3_20=new Array("Enemies Z","sfiii_2/enemies/z.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu3_4=new Array("Chapters","sfiii_2/chapters.htm","",6,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_1=new Array("Chapter I","sfiii_2/chapter1/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_1_1=new Array("Battles","sfiii_2/chapter1/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_1_2=new Array("Events","sfiii_2/chapter1/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_1_3=new Array("Hidden Items","sfiii_2/chapter1/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_2=new Array("Chapter II","sfiii_2/chapter2/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_2_1=new Array("Battles","sfiii_2/chapter2/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_2_2=new Array("Events","sfiii_2/chapter2/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_2_3=new Array("Hidden Items","sfiii_2/chapter2/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_3=new Array("Chapter III","sfiii_2/chapter3/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_3_1=new Array("Battles","sfiii_2/chapter3/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_3_2=new Array("Events","sfiii_2/chapter3/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_3_3=new Array("Hidden Items","sfiii_2/chapter3/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_4=new Array("Chapter IV","sfiii_2/chapter4/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_4_1=new Array("Battles","sfiii_2/chapter4/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_4_2=new Array("Events","sfiii_2/chapter4/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_4_3=new Array("Hidden Items","sfiii_2/chapter4/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_5=new Array("Chapter V","sfiii_2/chapter5/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_5_1=new Array("Battles","sfiii_2/chapter5/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_5_2=new Array("Events","sfiii_2/chapter5/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_5_3=new Array("Hidden Items","sfiii_2/chapter5/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu3_4_6=new Array("Chapter VI","sfiii_2/chapter6/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_6_1=new Array("Battles","sfiii_2/chapter6/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_6_2=new Array("Events","sfiii_2/chapter6/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu3_4_6_3=new Array("Hidden Items","sfiii_2/chapter6/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu3_5=new Array("Hero Tomb","sfiii_2/hero_test/battle01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		

Menu4=new Array("Scenario III","sfiii_3/start.htm","",5,18,80,"","","","","","",-1,-1,-1,"","");

	Menu4_1=new Array("Heroes","","",21,21,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_1=new Array("Julian","sfiii_3/heroes/01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_2=new Array("Brigit","sfiii_3/heroes/02.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_3=new Array("Cyclops","sfiii_3/heroes/03.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_4=new Array("Donhardt","sfiii_3/heroes/04.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_5=new Array("Edmund","sfiii_3/heroes/05.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_6=new Array("Gracia","sfiii_3/heroes/06.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_7=new Array("Harold","sfiii_3/heroes/07.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_8=new Array("Honesty","sfiii_3/heroes/08.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_9=new Array("Isabella","sfiii_3/heroes/09.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_10=new Array("Jubei","sfiii_3/heroes/10.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_11=new Array("Kate","sfiii_3/heroes/11.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_12=new Array("Leon","sfiii_3/heroes/12.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_13=new Array("Marki","sfiii_3/heroes/13.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_14=new Array("Pendolf","sfiii_3/heroes/14.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_15=new Array("Profound","sfiii_3/heroes/15.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_16=new Array("Purimla","sfiii_3/heroes/16.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_17=new Array("Rollie","sfiii_3/heroes/17.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_18=new Array("Spiriel","sfiii_3/heroes/18.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_19=new Array("Thousand","sfiii_3/heroes/19.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_20=new Array("Turk","sfiii_3/heroes/20.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_1_21=new Array("Unoma","sfiii_3/heroes/20.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu4_2=new Array("Sidecast","","",4,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_2_1=new Array("Friends","sfiii_3/sidecast/friends.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_2_2=new Array("Foes","sfiii_3/sidecast/foes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_2_3=new Array("VIP's","sfiii_3/sidecast/vips.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_2_4=new Array("Traders etc.","sfiii_3/sidecast/trade.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu4_3=new Array("Enemies","sfiii_3/enemies/enemies.htm","",19,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_1=new Array("Enemies A","sfiii_3/enemies/a.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_2=new Array("Enemies B","sfiii_3/enemies/b.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_3=new Array("Enemies C","sfiii_3/enemies/c.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_4=new Array("Enemies D","sfiii_3/enemies/d.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_5=new Array("Enemies E","sfiii_3/enemies/e.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_6=new Array("Enemies F","sfiii_3/enemies/f.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_7=new Array("Enemies G","sfiii_3/enemies/g.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_8=new Array("Enemies H","sfiii_3/enemies/h.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_9=new Array("Enemies I-J","sfiii_3/enemies/i.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_10=new Array("Enemies K","sfiii_3/enemies/k.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_11=new Array("Enemies L","sfiii_3/enemies/l.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_12=new Array("Enemies M","sfiii_3/enemies/m.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_13=new Array("Enemies P","sfiii_3/enemies/p.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_14=new Array("Enemies R","sfiii_3/enemies/r.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_15=new Array("Enemies S","sfiii_3/enemies/s.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_16=new Array("Enemies T","sfiii_3/enemies/t.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_17=new Array("Enemies V","sfiii_3/enemies/v.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_18=new Array("Enemies W","sfiii_3/enemies/w.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_3_19=new Array("Enemies Y","sfiii_3/enemies/y.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu4_4=new Array("Chapters","sfiii_3/chapters.htm","",8,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_1=new Array("Prologue","sfiii_3/prologue/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_1_1=new Array("Battles","sfiii_3/prologue/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_1_2=new Array("Events","sfiii_3/prologue/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_1_3=new Array("Hidden Items","sfiii_3/prologue/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_2=new Array("Chapter I","sfiii_3/chapter1/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_2_1=new Array("Battles","sfiii_3/chapter1/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_2_2=new Array("Events","sfiii_3/chapter1/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_2_3=new Array("Hidden Items","sfiii_3/chapter1/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_3=new Array("Chapter II","sfiii_3/chapter2/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_3_1=new Array("Battles","sfiii_3/chapter2/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_3_2=new Array("Events","sfiii_3/chapter2/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_3_3=new Array("Hidden Items","sfiii_3/chapter2/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_4=new Array("Chapter III","sfiii_3/chapter3/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_4_1=new Array("Battles","sfiii_3/chapter3/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_4_2=new Array("Events","sfiii_3/chapter3/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_4_3=new Array("Hidden Items","sfiii_3/chapter3/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_5=new Array("Chapter IV","sfiii_3/chapter4/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_5_1=new Array("Battles","sfiii_3/chapter4/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_5_2=new Array("Events","sfiii_3/chapter4/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_5_3=new Array("Hidden Items","sfiii_3/chapter4/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_6=new Array("Chapter V","sfiii_3/chapter5/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_6_1=new Array("Battles","sfiii_3/chapter5/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_6_2=new Array("Events","sfiii_3/chapter5/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_6_3=new Array("Hidden Items","sfiii_3/chapter5/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_7=new Array("Chapter VI","sfiii_3/chapter6/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_7_1=new Array("Battles","sfiii_3/chapter6/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_7_2=new Array("Events","sfiii_3/chapter6/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_7_3=new Array("Hidden Items","sfiii_3/chapter6/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		Menu4_4_8=new Array("Final Chapter","sfiii_3/final_chapter/start.htm","",3,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_8_1=new Array("Battles","sfiii_3/final_chapter/battle1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_8_2=new Array("Events","sfiii_3/final_chapter/event1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu4_4_8_3=new Array("Hidden Items","sfiii_3/final_chapter/items1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

	Menu4_5=new Array("Hero Tomb","sfiii_3/hero_test/battle01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

		

Menu5=new Array("Premium CD","sfiii_premium/start.htm","",2,18,80,"","","","","","",-1,-1,-1,"","");

		Menu5_1=new Array("Battles","","",9,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_1=new Array("Battle 1","sfiii_premium/1.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_2=new Array("Battle 2","sfiii_premium/2.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_3=new Array("Battle 3","sfiii_premium/3.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");	

			Menu5_1_4=new Array("Battle 4","sfiii_premium/4.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_5=new Array("Battle 5","sfiii_premium/5.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_6=new Array("Battle 6","sfiii_premium/6.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_7=new Array("Battle 7","sfiii_premium/7.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_8=new Array("Battle 8","sfiii_premium/8.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_1_9=new Array("Battle 9","sfiii_premium/9.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");					

		Menu5_2=new Array("Enemies","","",9,18,80,"","","","","","",-1,-1,-1,"","");

			Menu5_2_1=new Array("Octopus warm up","sfiii_premium/e1.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_2=new Array("Yasha's Ninjas","sfiii_premium/e2.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_3=new Array("The Rainbloods","sfiii_premium/e3.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");	

			Menu5_2_4=new Array("Four Highpriests","sfiii_premium/e4.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_5=new Array("Bulzom again","sfiii_premium/e5.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_6=new Array("Dark Dragon","sfiii_premium/e6.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_7=new Array("Iom and Guards","sfiii_premium/e7.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_8=new Array("Meeting Zeon","sfiii_premium/e8.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu5_2_9=new Array("Defeat Dark Sol","sfiii_premium/e9.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");	

		

Menu6=new Array("Even more","","",6,18,80,"","","","","","",-1,-1,-1,"","");

		Menu6_1=new Array("Items","","",8,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_1=new Array("All Weapons","","",25,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_1=new Array("Knifes","items/knifes/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_2=new Array("Swords","items/swords/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_3=new Array("Rapiers","items/rapiers/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_4=new Array("Blades","items/blades/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_5=new Array("Katanas/Shuriken","items/katana/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_6=new Array("Wings","items/wings/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_7=new Array("Lances","items/lances/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_8=new Array("Spears","items/spears/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_9=new Array("Halberds","items/halberds/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_10=new Array("Axes/Tomahawks","items/axes/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_11=new Array("Maces","items/maces/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_12=new Array("Anchors","items/anchors/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_13=new Array("Claws","items/claws/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_14=new Array("Gloves","items/gloves/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_15=new Array("Cestus","items/cestus/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_16=new Array("Rods/Staffs","items/rods/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_17=new Array("Wands","items/wands/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_18=new Array("Ankhs","items/ankhs/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_19=new Array("Arrows/Bows","items/bows/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_20=new Array("Quarrels/X-Bows","x_bows/knifes/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_21=new Array("Longbows/Shells","items/long_bows/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_22=new Array("Whips","items/whips/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_23=new Array("Beaks","items/beaks/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_24=new Array("Horns/Talons","items/animals/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_1_25=new Array("Enemy Weapons","items/enemies_only/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_2=new Array("Accessories","","",6,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_1=new Array("Rings","items/rings/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_2=new Array("Braces","items/accessory/braces.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_3=new Array("Circlets","items/accessory/circlets.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_4=new Array("Ninja Bowls","items/accessory/ninja.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_5=new Array("Ornament/Pierce","items/accessory/ornament.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

				Menu6_1_2_6=new Array("Clothes","items/accessory/clothes.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_3=new Array("Healing Items","items/healing/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_4=new Array("Power Ups","items/power_ups/item.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_5=new Array("Transport Items","items/important/transport.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_6=new Array("Magical Items","items/important/magic.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_7=new Array("Blacksmith Items","items/important/blacksmith.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_1_8=new Array("Important Items","items/important/important.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

		Menu6_2=new Array("Magic","","",11,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_1=new Array("Dark Magic","magic/dark.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_2=new Array("Earth Magic","magic/earth.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_3=new Array("Enemies Magic","magic/enemy.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_4=new Array("Fire Magic","magic/fire.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_5=new Array("Healing Magic","magic/heal.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_6=new Array("Ice Magic","magic/ice.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_7=new Array("Light Magic","magic/lightning.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_8=new Array("Special Magic","magic/special.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_9=new Array("Support Magic","magic/support.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_10=new Array("Transfer Magic","magic/transfer.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_2_11=new Array("Wind Magic","magic/wind.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

		Menu6_3=new Array("Midi Music","midis/music.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

		Menu6_4=new Array("Intro Pictures","","",3,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_4_1=new Array("Intro Scenario I","intro/1_01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_4_2=new Array("Intro Scenario II","intro/2_01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

			Menu6_4_3=new Array("Intro Scenario III","intro/3_01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

		Menu6_5=new Array("Artwork","sfiii_premium/artwork/artwork01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");

		Menu6_6=new Array("My older SFIII Pages","javascript:top.document.location.href='../sf3-web/index.html'","",0,18,120,"","","","","","",-1,-1,-1,"","");