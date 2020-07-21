
	var NoOffFirstLineMenus=9;
	var LowBgColor="#001052";
	var HighBgColor="#00216B";
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
	var StartLeft=18;
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
	var BaseHref=(window.location != window.parent.location) ? document.referrer: document.location; //http://www.wolfgangarchive.com/stha-web/
	

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


Menu1=new Array("Site Info","","",7,18,60,"","","","","","",-1,-1,-1,"","");
		Menu1_1=new Array("Startpage","start.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_2=new Array("News","site/news.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_3=new Array("Sitemap","site/map.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_4=new Array("Credits","site/credits.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_5=new Array("Copyright","site/copyright.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_6=new Array("Contact","site/contact.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu1_7=new Array("Main menu","javascript:top.document.location.href='../choose.htm'","",0,18,80,"","","","","","",-1,-1,-1,"",""); //http://www.wolfgangarchive.com/choose.htm
		
Menu2=new Array("Characters","","",4,18,80,"","","","","","",-1,-1,-1,"","");
	Menu2_1=new Array("Heroes","heroes/heroes.htm","",8,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_1=new Array("Arthur","heroes/arthur.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_2=new Array("Melody","heroes/melody.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_3=new Array("Rodi","heroes/rodi.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_4=new Array("Forte","heroes/forte.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_5=new Array("Basso","heroes/basso.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_6=new Array("Lisa","heroes/lisa.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_7=new Array("Akane","heroes/akane.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_1_8=new Array("Doyle","heroes/doyle.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu2_2=new Array("Pixies","","",5,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2_1=new Array("Leprechauns","pixies/leprechauns01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2_2=new Array("Succubus","pixies/succubus01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2_3=new Array("Incubus","pixies/incubus01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2_4=new Array("Pixies","pixies/pixies01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_2_5=new Array("Fairies","pixies/fairies01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu2_3=new Array("Sidecasts","","",6,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_1=new Array("Spirits","heroes/spirits.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_2=new Array("Sabato","heroes/sabato.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_3=new Array("Enrich King","heroes/king.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_4=new Array("Ninja Chief","heroes/chief.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_5=new Array("Keeper","heroes/keeper.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_3_6=new Array("Galm","heroes/galm.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu2_4=new Array("Foes","","",3,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_4_1=new Array("Panzer","heroes/panzer.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_4_2=new Array("Rilix","heroes/rilix.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu2_4_3=new Array("Elise","heroes/elise.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");


Menu3=new Array("Enemies","","",7,18,60,"","","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("Monsters A-B","enemies/a_b01.htm","",0,18,90,"","","","","","",-1,-1,-1,"","");
	Menu3_2=new Array("Monsters C-F","enemies/c01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu3_3=new Array("Monsters G-K","enemies/g01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu3_4=new Array("Monsters M-R","enemies/m01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu3_5=new Array("Monsters S","enemies/s01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu3_6=new Array("Monsters T-V","enemies/t01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
	Menu3_7=new Array("Monsters W-Z","enemies/w01.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		
Menu4=new Array("Dungeons","","",15,18,70,"","","","","","",-1,-1,-1,"","");
	Menu4_1=new Array("Desire Mine (I)","maps/desire_mine01.htm","",0,21,120,"","","","","","",-1,-1,-1,"","");
	Menu4_2=new Array("Forest of Confusion","maps/forest_of_confusion.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_3=new Array("Forest Cave","maps/forest_cave01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_4=new Array("Enrich Wells","maps/enrich_wells.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_5=new Array("Enrich Dungeon (I)","maps/enrich_dungeon01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_6=new Array("Forest of Aborigine","maps/forest_of_aborigine.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_7=new Array("Graveyard","maps/graveyard_catacombs.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_8=new Array("Aborigine Mansion","maps/aborigine_mansion01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_9=new Array("Moutain Cave","maps/mountain_cave01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_10=new Array("South Shrine","maps/south_shrine01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_11=new Array("Enrich Dungeon (II)","maps/enrich_dungeon02.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_12=new Array("West Shrine","maps/west_shrine01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_13=new Array("East Shrine","maps/east_shrine01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_14=new Array("Tower Of Illusion","maps/t_o_illusion01.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
	Menu4_15=new Array("Desire Mine (II)","maps/desire_mine02.htm","",0,18,120,"","","","","","",-1,-1,-1,"","");
		
Menu5=new Array("Villages","","",4,18,60,"","","","","","",-1,-1,-1,"","");
		Menu5_1=new Array("Desire Village","towns/desire.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");					
		Menu5_2=new Array("Enrich Town","towns/enrich.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
		Menu5_3=new Array("Far East Village","towns/far_east.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");					
		Menu5_4=new Array("Mirage Village","towns/mirage.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
		
Menu6=new Array("Events","","",19,18,60,"","","","","","",-1,-1,-1,"","");
		Menu6_1=new Array("Desire Mine","events/desire_mine/desire_mine01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_2=new Array("Desire Village","events/desire/desire01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_3=new Array("Forest of Confusion","events/forest_of_confusion/f_o_c01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_4=new Array("Enrich Town","events/enrich/enrich01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_5=new Array("Enrich Castle","events/enrich_castle/castle01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_6=new Array("Enrich Dungeon","events/enrich_dungeon/dungeon01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_7=new Array("Forest of Aborigine","events/forest_of_aborigine/forest01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_8=new Array("Aborigine Mansion","events/aborigine_mansion/mansion01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_9=new Array("Moutain Cave","events/mountain_cave/cave01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_10=new Array("South Shrine","events/south_shrine/shrine01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_11=new Array("Far East Village","events/far_east/village01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_12=new Array("Enrich revised","events/enrich_ii/enrich01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_13=new Array("West Shrine","events/west_shrine/shrine01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_14=new Array("East Shrine","events/east_shrine/shrine01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_15=new Array("Mirage Village","events/mirage_town/mirage.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_16=new Array("Tower of Illusion","events/t_o_illusion/tower01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_17=new Array("Desire Mine revised","events/desire_mine/mine01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");					
		Menu6_18=new Array("Godspeak","events/godspeak/peak01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");
		Menu6_19=new Array("Ending","events/ending/ending01.htm","",0,18,125,"","","","","","",-1,-1,-1,"","");	

Menu7=new Array("Magic Spells","","",4,18,80,"","","","","","",-1,-1,-1,"","");
		Menu7_1=new Array("Attack Spells","magic/attack.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");					
		Menu7_2=new Array("Healing Spells","magic/healing.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
		Menu7_3=new Array("Support Spells","magic/support.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");					
		Menu7_4=new Array("Special Spells","magic/special.htm","",0,18,100,"","","","","","",-1,-1,-1,"","");
		
Menu8=new Array("Items","","",4,18,50,"","","","","","",-1,-1,-1,"","");
		Menu8_1=new Array("Weapons","","",6,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_1=new Array("Axes","items/axes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_2=new Array("Claws","items/claws.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_3=new Array("Knifes","items/knifes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_4=new Array("Ninja Blades","items/ninja_blades.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_5=new Array("Staffs","items/staffs.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_1_6=new Array("Swords","items/swords.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu8_2=new Array("Armory","","",9,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_1=new Array("Braces","items/braces.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_2=new Array("Circlets","items/circlets.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_3=new Array("Gloves","items/gloves.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_4=new Array("Helmets","items/helmets.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_5=new Array("Mails","items/mails.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_6=new Array("Robes","items/robes.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_7=new Array("Shells","items/shells.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_8=new Array("Shields","items/shields.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_2_9=new Array("Suits","items/suits.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu8_3=new Array("Accessory","","",3,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_3_1=new Array("Crests/Orbs","items/crests.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_3_2=new Array("Rings","items/rings.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_3_3=new Array("Other","items/other.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
		Menu8_4=new Array("Important","","",4,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_4_1=new Array("Healing","items/healing.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_4_2=new Array("Power Ups","items/power_ups.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_4_3=new Array("Blacksmith","items/blacksmith.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			Menu8_4_4=new Array("Clue Items","items/clues.htm","",0,18,80,"","","","","","",-1,-1,-1,"","");
			
Menu9=new Array("And More","","",3,18,70,"","","","","","",-1,-1,-1,"","");
		Menu9_1=new Array("Music","midis/music.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu9_2=new Array("Movies","movies/movie01_01.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		Menu9_3=new Array("Artwork","artwork/artwork.htm","",0,18,70,"","","","","","",-1,-1,-1,"","");
		