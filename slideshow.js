var browserok = false;





if( parseInt( navigator.appVersion ) >= 3 && navigator.appName == "Netscape") { browserok = true; }

if( parseInt( navigator.appVersion ) >= 4 && navigator.appName == "Microsoft Internet Explorer") { browserok = true; }

function vs_openbr(openbrse, openbrna, openbrop) {window.open(openbrse, openbrna, openbrop )}







Browser_Name = navigator.appName;

                   Browser_Ver  = parseInt(navigator.appVersion);

                   if((Browser_Name == "Netscape" && Browser_Ver >= 3) || (Browser_Name == "Microsoft Internet Explorer" && Browser_Ver >= 4)) Browser_Gen = ">=3rd";

                   else Browser_Gen = "<3rd";



                   if (Browser_Gen == '>=3rd') {

                   num_of_slides = slides;    // Angabe der gesamten Screenshots

                   slide_num = 1;        // Welches Bild zum Anfang

                   url = ordner;       // Ordner unter /games/ wo die Bilder liegen

        

                   }



                   //  These functions alter the slide_num accordingly

                   function prevslide(){

                         slide_num = slide_num - 1;

                         if(slide_num < 1){

                           slide_num = num_of_slides;

                         }

                         changeslide();

                   }

                   function nextslide(){

                         slide_num = slide_num + 1;

                         if(slide_num > num_of_slides){

                           slide_num = 1

                         }

                         changeslide();

                   }



                   //  This function changes the slide according to the slide_num

                   function changeslide(){



                         //  Changes the slide

                         eval('document.screens.src="' + url + tname + slide_num + file + '"');



                   }



