	var NoOffFirstLineMenus=9;

	var LowBgColor="#313B4D";  //#AA784D or #313B4D

	var HighBgColor="#3D4B61"; //#905D3A or #3D4B61

	var FontLowColor="#8F9BA3"; //#313B4D or #8F9BA3

	var FontHighColor="#FFFFFF"; //#7C8F9E or #FFFFFF

	var BorderColor="#7C8F9E";

	var BorderWidthMain=2;

	var BorderWidthSub=2;

 	var BorderBtwnMain=2;

	var BorderBtwnSub=2;

	var FontFamily="arial";

	var FontSize=12;

	var FontBold=1;

	var FontItalic=1;

	var MenuTextCentered="left";

	var MenuCentered="left";

	var MenuVerticalCentered="top";

	var ChildOverlap=.25;

	var ChildVerticalOverlap=.5;

	var StartTop=78;

	var StartLeft=15;

	var VerCorrect=0;

	var HorCorrect=0;

	var DistFrmFrameBrdr=2;

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

	var BaseHref="//www.wolfgangarchive.com/dq-web/html/";//  ../dragon_quest_8/index.html for internal use (external use: //www.wolfgangarchive.com/sf3_new/)

	



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





Menu1=new Array("Site Info","","",7,17,55,"","","","","","",-1,-1,-1,"","");

		Menu1_1=new Array("Startpage","start.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_2=new Array("News","site/news_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_3=new Array("Sitemap","site/map_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_4=new Array("Credits","site/credits_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_5=new Array("Copyright","site/copyright_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_6=new Array("Contact","site/contact_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu1_7=new Array("Main menu","javascript:top.document.location.href='//www.wolfgangarchive.com/choose.htm'","",0,17,80,"","","","","","",-1,-1,-1,"","");

		

Menu2=new Array("Characters","","",2,17,70,"","","","","","",-1,-1,-1,"","");

	Menu2_1=new Array("Heroes","characters/start.htm","",4,17,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_1=new Array("Hero","characters/hero_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_2=new Array("Yangus","characters/yangus_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_3=new Array("Jessica","characters/jessica_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

		Menu2_1_4=new Array("Angelo","characters/angelo_index.htm","",0,17,80,"","","","","","",-1,-1,-1,"","");

	Menu2_2=new Array("Sidecast","","",3,17,80,"","","","","","",-1,-1,-1,"","");

		Menu2_2_1=new Array("King Trode","characters/trode_index.htm","",0,17,120,"","","","","","",-1,-1,-1,"","");

		Menu2_2_2=new Array("Princess Medea","characters/medea_index.htm","",0,17,120,"","","","","","",-1,-1,-1,"","");

		Menu2_2_3=new Array("Other People","characters/others_index.htm","",0,17,120,"","","","","","",-1,-1,-1,"","");

Menu3=new Array("Monsters","monsters/start.htm","",14,17,60,"","","","","","",-1,-1,-1,"","");

	Menu3_1=new Array("Slime Family","monsters/slime_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_2=new Array("Beast Family","monsters/beast_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_3=new Array("Dragon Family","monsters/dragon_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_4=new Array("Bug Family","monsters/bug_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_5=new Array("Bird Family","monsters/bird_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_6=new Array("Plant Family","monsters/plant_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_7=new Array("Material Family","monsters/material_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_8=new Array("Machine Family","monsters/machine_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_9=new Array("Zombie Family","monsters/zombie_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_10=new Array("Demon Family","monsters/demon_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_11=new Array("Elemental Family","monsters/elemental_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_12=new Array("Humanoid Family","monsters/humanoid_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_13=new Array("Aquatic Family","monsters/aquatic_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");

	Menu3_14=new Array("??? Family","monsters/question_index.htm","",0,17,110,"","","","","","",-1,-1,-1,"","");	

Menu4=new Array("Towns","towns/towns_index.htm","",16,17,45,"","","","","","",-1,-1,-1,"","");

	Menu4_1=new Array("Farebury","towns/farebury_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_2=new Array("Alexandria","towns/alexandria_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_3=new Array("Port Prospect","towns/port_prospect_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_4=new Array("Peregin Quay","towns/peregrin_quay_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_5=new Array("Simpleton","towns/simpleton_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_6=new Array("Ascantha","towns/ascantha_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_7=new Array("Pickham","towns/pickham_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_8=new Array("Baccarat","towns/baccarat_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_9=new Array("Argonia","towns/argonia_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_10=new Array("Neos","towns/neos_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_11=new Array("Savella","towns/savella_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_12=new Array("Arcadia","towns/arcadia_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_13=new Array("Orkutsk","towns/orkutsk_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_14=new Array("Empycchu","towns/empycchu_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_15=new Array("Dark Empycchu","towns/d_empycchu_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

	Menu4_16=new Array("Tryan Gully","towns/t_gully_index.htm","",0,17,100,"","","","","","",-1,-1,-1,"","");

Menu5=new Array("Locations","","",5,17,65,"","","","","","",-1,-1,-1,"","");

	Menu5_1=new Array("North-East Continent","locations/ne_loc_index.htm","",10,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_1_1=new Array("Waterfall Cave","locations/waterfall_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_2=new Array("Waterfall Hut","locations/wf_hut_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_3=new Array("Red Tree","locations/red_tree_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_4=new Array("Tower of Alexandra","locations/t_o_alexandra_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_5=new Array("Hilltop Hut","locations/hilltop_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_6=new Array("Ancient Ship","locations/ship_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_7=new Array("Chapel near Trodain","locations/wt_chapel_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_8=new Array("Trodain Castle","locations/trodain_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_9=new Array("Pirate's Cove","locations/pirate_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_1_10=new Array("Flying Spot","locations/fs_ne_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

	Menu5_2=new Array("South-East Continent","locations/se_loc_index.htm","",9,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_1=new Array("Maella Abbey","locations/maella_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_2=new Array("Ruined Abbey","locations/r_abbey_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_3=new Array("Riverside Chapel","locations/riverside_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_4=new Array("Wisher's Peak","locations/whipeak_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_5=new Array("Lakeside Cabin","locations/lakeside_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_6=new Array("Monster Arena","locations/monster_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_7=new Array("Red's House","locations/r_house_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_8=new Array("Swordman's Labyrinth","locations/sml_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_2_9=new Array("Mole Hole","locations/molehole_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

	Menu5_3=new Array("South-West Continent","locations/sw_loc_index.htm","",15,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_1=new Array("Chateau Felix","events/event_64_index1.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_2=new Array("Royal Hunting Ground","locations/hunting_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_3=new Array("Campsite","locations/campsite_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_4=new Array("Mystical Well","locations/mystical_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_5=new Array("Seaview Chapel","locations/seaview_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_6=new Array("Desert Chapel","locations/desert_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_7=new Array("Dragon's Graveyard","locations/graveyard_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_8=new Array("Northern Checkpoint","events/event_71_index1.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_9=new Array("Puff Puff Club","locations/loc_01_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_10=new Array("Troll's Maze","locations/trolls_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_11=new Array("Flying Spot North","locations/fs_sw1_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_12=new Array("Flying Spot South","locations/fs_sw2_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_13=new Array("Dragovian Path","locations/drag_path_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_14=new Array("Dragovian Sanctuary","towns/dragovia_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_3_15=new Array("Heavenly Dais","locations/dais_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

	Menu5_4=new Array("North-West Continent","locations/nw_loc_index.htm","",6,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_4_1=new Array("Rydon's Tower","locations/rydon_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_4_2=new Array("Autumn Chapel","locations/autumn_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_4_3=new Array("Northern Cave","events/event_103_index1.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_4_4=new Array("Marta's Cottage","locations/marta_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_4_5=new Array("Herb Grotto","locations/grotto_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu5_4_6=new Array("Howlwind Hill","locations/howlwind_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

	Menu5_5=new Array("Islands and Citadell","locations/island_loc_index.htm","",9,17,140,"","","","","","",-1,-1,-1,"","");

		Menu5_5_1=new Array("Princess Minnie's Castle","locations/mica_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_2=new Array("Dark Ruins","locations/d_ruins_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_3=new Array("Invisible Island","locations/invisible_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_4=new Array("Lord Highpriest's Mansion","locations/lhp_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_5=new Array("Purgatory Island","locations/prison_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_6=new Array("Godbird's Eyrie","locations/godbird_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_7=new Array("Dark Ruins Flying Spot","locations/fs_dr_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_8=new Array("Flying Spot near Neos","locations/fs_neos_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu5_5_9=new Array("Black Citadell","locations/b_cit_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

Menu6=new Array("Where are...","","",2,17,75,"","","","","","",-1,-1,-1,"","");

	Menu6_1=new Array("...the Treasure Chests?","","",5,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_1_1=new Array("North-East Continent","locations/ne_che_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_1_2=new Array("South-East Continent","locations/se_che_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_1_3=new Array("South-West Continent","locations/sw_che_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_1_4=new Array("North-West Continent","locations/nw_che_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_1_5=new Array("Islands in the Ocean","locations/island_che_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

	Menu6_2=new Array("...the Team Monsters?","","",5,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_2_1=new Array("North-East Continent","recruit/ne_loc_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_2_2=new Array("South-East Continent","recruit/se_loc_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_2_3=new Array("South-West Continent","recruit/sw_loc_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_2_4=new Array("North-West Continent","recruit/nw_loc_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

		Menu6_2_5=new Array("Islands in the Ocean","recruit/island_loc_index.htm","",0,17,140,"","","","","","",-1,-1,-1,"","");

Menu7=new Array("Events (1)","events/event01_index.htm","",15,17,70,"","","","","","",-1,-1,-1,"","");

		Menu7_1=new Array("The Beginning","events/event_01_index.htm","",3,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_1_1=new Array("Prologue","events/event_01_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_1_2=new Array("The Beginning","events/event_02_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_1_3=new Array("First Fight","events/event_03_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu7_2=new Array("Farebury","events/event_04_index.htm","",7,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_1=new Array("Arriving at Farebury","events/event_04_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_2=new Array("Meeting Kalderasha","events/event_05_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_3=new Array("Monster in Town","events/event_06_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_4=new Array("Valentina's request","events/event_07_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_5=new Array("Waterfall Cave","events/event_08_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_6=new Array("Back in Farebury","events/event_09_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_2_7=new Array("Leaving Farebury","events/event_10_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");	

	    Menu7_3=new Array("Alexandria","events/event_11_index.htm","",8,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_1=new Array("Arriving at Alexandria","events/event_11_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_2=new Array("Munchie's first quest","events/event_12_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_3=new Array("Jessica's Letter","events/event_13_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_4=new Array("The Door's Secret","events/event_14_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_5=new Array("On Top of the Tower","events/event_15_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_6=new Array("Statue's Story","events/event_16_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_7=new Array("Leaving the Tower","events/event_17_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_3_8=new Array("Family Argues","events/event_18_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");	

		Menu7_4=new Array("Port Prospect and more","events/event_19_index.htm","",5,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_4_1=new Array("Khalamari Calamity","events/event_19_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_4_2=new Array("Back to Port Prospect","events/event_20_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_4_3=new Array("Yangus' Story (1)","events/event_21_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_4_4=new Array("Yangus' Story (2)","events/event_22_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_4_5=new Array("Finally, Peregrin Quay","events/event_23_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu7_5=new Array("Maella Abbey","events/event_24_index.htm","",11,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_5_1=new Array("Visiting Maella Abbey","events/event_24_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_5_2=new Array("Simpleton Pub","events/event_25_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_3=new Array("Behind the Pub","events/event_26_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_4=new Array("To Ruined Abbey","events/event_27_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_5=new Array("Is the Abbot alive?","events/event_28_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_6=new Array("Interrogation","events/event_29_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_7=new Array("Angelo will save you","events/event_30_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_8=new Array("Maella Abbey on fire","events/event_31_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_9=new Array("The Jester is back!","events/event_32_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_10=new Array("Francisco's Sacrifice","events/event_33_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_5_11=new Array("After the Burial","events/event_34_index.htm","",0,17,130,"","","","","","",-1,-1,-1,"","");

		Menu7_6=new Array("On to Ascantha","events/event_35_index.htm","",7,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_6_1=new Array("Angelo's Story (1)","events/event_35_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_2=new Array("Angelo's Story (2)","events/event_36_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_3=new Array("A Maiden's Sorrow","events/event_37_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_4=new Array("On Top of Wisher's Peak","events/event_38_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_5=new Array("Moonshadow World","events/event_39_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_6=new Array("Back in Ascantha","events/event_40_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_6_7=new Array("A Town reborn!","events/event_41_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_7=new Array("Pickham and beyond","events/event_42_index.htm","",7,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_7_1=new Array("Morrie's Request","events/event_42_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_2=new Array("Trouble in Pickham","events/event_43_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_3=new Array("Searching the Princess","events/event_44_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_4=new Array("Visiting Red","events/event_45_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_5=new Array("Swordsman's Labyrinth","events/event_46_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_6=new Array("A Tear for a Princess","events/event_47_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_7_7=new Array("Back in Pickham","events/event_48_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_8=new Array("Journey to Trodain","events/event_49_index.htm","",7,17,130,"","","","","","",-1,-1,-1,"","");	

			Menu7_8_1=new Array("Hilltop Hut","events/event_49_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_2=new Array("The Ancient Ship","events/event_50_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_3=new Array("Trodain Castle Ruins","events/event_51_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_4=new Array("How everything began (1)","events/event_52_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_5=new Array("How everything began (2)","events/event_53_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_6=new Array("Back to prensence","events/event_54_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_8_7=new Array("Inside Trodain Library","events/event_55_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_9=new Array("Moonshadow Harp","events/event_56_index.htm","",6,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_9_1=new Array("Moonshadow Land","events/event_56_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_9_2=new Array("Back in Ascantha","events/event_57_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_9_3=new Array("Mole Hole Concerto","events/event_58_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_9_4=new Array("Summoning an Ocean (1)","events/event_59_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_9_5=new Array("Summoning an Ocean (2)","events/event_60_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_9_6=new Array("Your very own Ship","events/event_61_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_10=new Array("Besides the Story (1)","events/event_62_index.htm","",11,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_10_1=new Array("Morrie again","events/event_62_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_2=new Array("Minnie's Castle","events/event_63_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_3=new Array("Chateau Felix and...","events/event_64_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_4=new Array("... Baumren's Bell","events/event_65_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_5=new Array("Rolo and Francisco","events/event_66_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_6=new Array("Francisco in Savella","events/event_67_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_7=new Array("Mystical Spring (1)","events/event_68_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_8=new Array("Mystical Spring (2)","events/event_69_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_9=new Array("Mystical Spring (3)","events/event_70_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_10=new Array("Northern Checkpoint","events/event_71_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_10_11=new Array("Royal Hunting Ground","events/event_72_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_11=new Array("Baccarat and more","events/event_73_index.htm","",2,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_11_1=new Array("From Baccarat...","events/event_73_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu7_11_2=new Array("...to the Dark Ruins","events/event_74_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

	Menu7_12=new Array("Kingdom of Argonia","events/event_75_index.htm","",8,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_12_1=new Array("Requesting the Mirror","events/event_75_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_2=new Array("A Prince on the flight","events/event_76_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_3=new Array("An Initiation Plot","events/event_77_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_4=new Array("On to the Hunting Ground","events/event_78_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_5=new Array("Hunting the Lizards...","events/event_79_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_6=new Array("...riding the Horse","events/event_80_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_7=new Array("Back in Argonia","events/event_81_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_12_8=new Array("Prince and Initiation","events/event_82_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_13=new Array("Magical Mirror","events/event_83_index.htm","",2,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_13_1=new Array("The tampered Mirror...","events/event_83_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_13_2=new Array("...and how to restore it","events/event_84_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_14=new Array("Inside the Dark Ruins","events/event_85_index.htm","",8,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_14_1=new Array("The Bird's Symbol","events/event_85_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_2=new Array("Dhoulmagus trapped?","events/event_86_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_3=new Array("Dhoulmagus' evil tricks","events/event_87_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_4=new Array("It isn't over yet!","events/event_88_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_5=new Array("A new (but ugly) Body","events/event_89_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_6=new Array("Dhoulmagus is History!!","events/event_90_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_7=new Array("After the Fight","events/event_91_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_14_8=new Array("Where is Jessica?","events/event_92_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

	Menu7_15=new Array("Arcadian Events","events/event_93_index.htm","",11,17,130,"","","","","","",-1,-1,-1,"","");

			Menu7_15_1=new Array("Can this be Jessica??","events/event_93_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_2=new Array("Dominico in Trouble","events/event_94_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_3=new Array("David and Sir Leopold","events/event_95_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_4=new Array("Rydon's Tower","events/event_96_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_5=new Array("Back to Alexandra Tower","events/event_97_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_6=new Array("Barrier Ingredients","events/event_98_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_7=new Array("Fighting evil Jessica","events/event_99_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_8=new Array("Saving Jessica from Evil","events/event_100_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_9=new Array("Jessica unveals the truth","events/event_101_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_10=new Array("The next victim","events/event_102_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu7_15_11=new Array("Follow Evil Sir Leopold","events/event_103_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

Menu8=new Array("Events (2)","events/event02_index.htm","",14,17,70,"","","","","","",-1,-1,-1,"","");

	Menu8_1=new Array("Northern Continent","events/event_104_index.htm","",11,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_1_1=new Array("The Northern Cave","events/event_104_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_2=new Array("The Avalanche","events/event_105_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_3=new Array("Inside Marta's Cottage","events/event_106_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_4=new Array("Arriving in Orkutsk","events/event_107_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_5=new Array("Freezing in Herb Grotto","events/event_108_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_6=new Array("Trouble outside","events/event_109_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_7=new Array("Marek's Request","events/event_110_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_8=new Array("Where is Marta?","events/event_111_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_9=new Array("Another Victim","events/event_112_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_10=new Array("Sir Leopold takes Flight","events/event_113_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_1_11=new Array("Saying Goodbye to Marta","events/event_114_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

		Menu8_2=new Array("Pirate's Cove","events/event_115_index.htm","",5,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_2_1=new Array("Looking for Treasures","events/event_115_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_2_2=new Array("Fighting Captain Crow","events/event_116_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_2_3=new Array("Visit Red back home","events/event_117_index.htm","",0,17,150,"","","","","","",-1,-1,-1,"","");

			Menu8_2_4=new Array("The Illuminated Sea Chart","events/event_118_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_2_5=new Array("The way to Empycchu","events/event_119_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_3=new Array("Godbird Empyrea","events/event_120_index.htm","",6,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_3_1=new Array("On to Dark Empycchu","events/event_120_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_3_2=new Array("Meeting the Godbird","events/event_121_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_3_3=new Array("Empyrea's Request","events/event_122_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_3_4=new Array("Fighting underling Gemon","events/event_123_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_3_5=new Array("Godbird's Soulstone","events/event_124_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_3_6=new Array("Back into the Light","events/event_126_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_4=new Array("Tryan Gully","events/event_127_index.htm","",3,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_4_1=new Array("A peaceful Town","events/event_127_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_4_2=new Array("The Story behind the town","events/event_128_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_4_3=new Array("A helpful Treasure","events/event_129_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_5=new Array("Lord Highpriest","events/event_130_index.htm","",5,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_5_1=new Array("Talking to Marcello","events/event_130_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_5_2=new Array("Sir Leopold has arrived","events/event_131_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_5_3=new Array("Fighting Evil Sir Leopold","events/event_132_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_5_4=new Array("Marcello victorious","events/event_133_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_5_5=new Array("Marcello and the Sceptre","events/event_134_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_6=new Array("Purgatory Island","events/event_135_index.htm","",6,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_6_1=new Array("Arriving in Prison","events/event_135_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_6_2=new Array("Rhapthorne tries it again","events/event_136_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_6_3=new Array("Down in the Pit","events/event_137_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_6_4=new Array("A plan to flee","events/event_138_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_6_5=new Array("We shall overcome","events/event_139_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_6_6=new Array("Find out the truth!","events/event_140_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_7=new Array("Neos Events","events/event_141_index.htm","",8,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_7_1=new Array("The new Lord Highpriest?","events/event_141_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_2=new Array("Who is not with me...","events/event_142_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_3=new Array("...must be against me!","events/event_143_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_4=new Array("Chaos in Neos","events/event_144_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_5=new Array("Black Citadell rising","events/event_145_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_6=new Array("A whole world in fear","events/event_146_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_7=new Array("The great Downfall","events/event_147_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_7_8=new Array("Back to Reality","events/event_148_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_8=new Array("Besides the Story (2)","events/event_149_index.htm","",9,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_8_1=new Array("Cash and Carrie","events/event_149_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_2=new Array("The drink was peppered","events/event_150_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_3=new Array("Dragon Graveyard and...","events/event_151_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_4=new Array("...the Door of Judgement","events/event_152_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_5=new Array("The Shrine of the Goldings","events/event_153_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_6=new Array("Back in Baccarat","events/event_154_index.htm","",0,17,170,"","","","","","",-1,-1,-1,"","");

			Menu8_8_7=new Array("The Puff Puff Club","events/event_155_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_8_8=new Array("Troll's Maze","events/event_156_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_8_9=new Array("The King Squid","events/event_157_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_9=new Array("Black Citadell and...","events/event_158_index.htm","",6,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_9_1=new Array("Rhapthorne, at last?","events/event_158_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_9_2=new Array("Rhapthorne is beaten","events/event_159_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_9_3=new Array("Leaving the Citadell","events/event_160_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_9_4=new Array("Fighting Ruin","events/event_161_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_9_5=new Array("Rhapthorne reborn (1)","events/event_162_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_9_6=new Array("Rhapthorne reborn (2)","events/event_163_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_10=new Array("Fighting Rhapthorne","events/event_164_index.htm","",7,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_10_1=new Array("The Echo Flute","events/event_164_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_2=new Array("Finding the Orbs","events/event_165_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_3=new Array("Godbird's Sceptre","events/event_166_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_4=new Array("Encountering Rhapthorne","events/event_167_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_5=new Array("Breaking the Evil Barrier","events/event_168_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_6=new Array("Vulnerable again!","events/event_169_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_10_7=new Array("Rhapthorne beaten!","events/event_170_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_11=new Array("It's all over now","events/event_171_index.htm","",4,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_11_1=new Array("The Fight is over","events/event_171_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_11_2=new Array("Back to normal (1)","events/event_172_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_11_3=new Array("Back to normal (2)","events/event_173_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_11_4=new Array("Epilogue","events/event_174_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_12=new Array("Royal Wedding (1)","events/event_175_index.htm","",11,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_12_1=new Array("Meeting old friends","events/event_175_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_2=new Array("Guarding the Princess","events/event_176_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_3=new Array("On to Savella Cathedral","events/event_177_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_4=new Array("This must be stopped!","events/event_178_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_5=new Array("Inside the Cathedral","events/event_179_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_6=new Array("The Princess in danger","events/event_180_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_7=new Array("Her true feelings","events/event_181_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_8=new Array("Fighting for the friends","events/event_182_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_9=new Array("Charmles' Downfall","events/event_183_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_10=new Array("Carridge to Safety","events/event_184_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_12_11=new Array("Back home at last!","events/event_185_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_13=new Array("Dragovian Quest","events/event_186_index.htm","",10,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_13_1=new Array("A new Challenge","events/event_186_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_2=new Array("Dragovian Sanctuary","events/event_187_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_3=new Array("Something is wrong here","events/event_188_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_4=new Array("The Elder Consil","events/event_189_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_5=new Array("Inside Chen Mui's House","events/event_190_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_6=new Array("Munchie won't leave you!","events/event_191_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_7=new Array("The Dragovian Lord","events/event_192_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_8=new Array("Munchie's Secret","events/event_193_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_9=new Array("A Hero's Story","events/event_194_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_13_10=new Array("Inside Hilltop Hut","events/event_195_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

		Menu8_14=new Array("Royal Wedding (2)","events/event_196_index.htm","",6,17,130,"","","","","","",-1,-1,-1,"","");

			Menu8_14_1=new Array("The Argon Ring","events/event_196_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_14_2=new Array("Get inside the Cathedral","events/event_197_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_14_3=new Array("Prince Charmles overruled","events/event_198_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_14_4=new Array("A Wedding Surprise","events/event_199_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_14_5=new Array("Leaving the Cathedral","events/event_200_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

			Menu8_14_6=new Array("The journey home","events/event_201_index.htm","",0,17,160,"","","","","","",-1,-1,-1,"","");

Menu9=new Array("Even more","","",6,17,70,"","","","","","",-1,-1,-1,"","");

		Menu9_1=new Array("Items","items/start.htm","",3,17,120,"","","","","","",-1,-1,-1,"","");

			Menu9_1_1=new Array("Weapons","","",11,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_1=new Array("Axes","items/axes.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_2=new Array("Boomerangs","items/boomerangs.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_3=new Array("Bows","items/bows.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_4=new Array("Clubs","items/clubs.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_5=new Array("Flails","items/flails.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_6=new Array("Knives","items/knives.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_7=new Array("Scythes","items/scythes.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_8=new Array("Spears","items/spears.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_9=new Array("Swords","items/swords.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_10=new Array("Wands","items/wands.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_1_11=new Array("Whips","items/whips.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

			Menu9_1_2=new Array("Armoury","","",5,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_1_2_1=new Array("Accessory","items/accessory.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_2_2=new Array("Body Armour","items/armoury.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_2_3=new Array("Helmets","items/helmets.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_2_4=new Array("Rings","items/rings.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_2_5=new Array("Shields","items/shields.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

			Menu9_1_3=new Array("Other Items","","",5,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_1_3_1=new Array("Alchemy only","items/alchemy.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_3_2=new Array("Cheese","items/cheese.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_3_3=new Array("Healing","items/healing.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_3_4=new Array("Useful Items","items/useful.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_1_3_5=new Array("Important Items","items/important.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

		Menu9_2=new Array("Alchemy Recipes","alchemy/start.htm","",3,17,120,"","","","","","",-1,-1,-1,"","");

			Menu9_2_1=new Array("Weapons","","",9,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_1=new Array("Axes","alchemy/axes.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_2=new Array("Boomerangs","alchemy/boomerangs.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_3=new Array("Bows","alchemy/bows.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_4=new Array("Hammers","alchemy/hammers.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_5=new Array("Knives","alchemy/daggers.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_6=new Array("Spears","alchemy/spears.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_7=new Array("Swords","alchemy/swords.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_8=new Array("Wands","alchemy/wands.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_1_9=new Array("Whips","alchemy/whips.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

			Menu9_2_2=new Array("Armoury","","",4,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_2_2_1=new Array("Accessory","alchemy/accessory.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_2_2=new Array("Body Armour","alchemy/armours.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_2_3=new Array("Helmets","alchemy/helmets.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_2_4=new Array("Shields","alchemy/shields.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

			Menu9_2_3=new Array("Other Items","","",3,17,80,"","","","","","",-1,-1,-1,"","");

				Menu9_2_3_1=new Array("Cheese","alchemy/cheese.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_3_2=new Array("Healing","alchemy/healing.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

				Menu9_2_3_3=new Array("Tools","alchemy/tools.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

		Menu9_3=new Array("Monster Arena","recruit/start.htm","",8,17,90,"","","","","","",-1,-1,-1,"","");

		        Menu9_3_1=new Array("Rank G","recruit/rank_g_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_2=new Array("Rank F","recruit/rank_f_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_3=new Array("Rank E","recruit/rank_e_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_4=new Array("Rank D","recruit/rank_d_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_5=new Array("Rank C","recruit/rank_c_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_6=new Array("Rank B","recruit/rank_b_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_7=new Array("Rank A","recruit/rank_a_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

				Menu9_3_8=new Array("Rank S","recruit/rank_s_index.htm","",0,17,70,"","","","","","",-1,-1,-1,"","");

		Menu9_4=new Array("Magic Spells","magic/magic_index.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

		Menu9_5=new Array("Skills","magic/skill_index.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");

		Menu9_6=new Array("Game Music","music/music_index.htm","",0,17,90,"","","","","","",-1,-1,-1,"","");