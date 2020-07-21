// Java Script written by Mike Greathead  on the 8th of  March 2001

// when this script is placed into a  directory and run

// with the Windows Script Host the program creates

// an images.htm index of all the .htm(l) files in the directory

// with the list of images referenced by each HTML file

// to operate - Copy into the HTML directory

//                - use explorer to double-click onto imglist.js

//                - double-click on images.htm

fso = new ActiveXObject("Scripting.FileSystemObject");

path = "";

var s = "";

s += fso.GetAbsolutePathName(path);

fsofolder = fso.GetFolder( s );

colFiles  = fsofolder.Files;

fc = new Enumerator( colFiles );

var t = 0

var q = 0

var d = ""

var wf = "";

var x = 0;

var htm = /.htm/i;

fa = new Array();

fb = new Array();

for (; !fc.atEnd(); fc.moveNext() ){

  wf = fc.item().Name;

	if (wf.search(htm) > 0)

	  {	

		 fa[x] = fc.item();

		 d=fc.item();

		 q = wf.length;

		 t = wf.lastIndexOf("\\");

		 t = t+1;

		 fb[x] = wf.substring(t,q);

	  w=z-7;

		 x = x+1;

		 }

}

var fo;

var fi;

var outputFile = "images.htm";

fo = fso.OpenTextFile( outputFile, 2, true );

fo.Write( "<html>\r\n<head>\r\n<title>HTM  Image List</title>\r\n<head>\r\n" );

fo.Write( "<style>\r\n TD { \r\n\t border-bottom: thin groove lightblue; \r\n\t" );

fo.Write( "font-family:verdana; \r\n\t font-size:9pt; \r\n\t background: #f0f0f0; \r\n }\r\n" );

fo.Write( "TABLE { \r\n\t border: thin groove lightblue;}\r\n</style>\r\n\r\n" );

fo.Write( "<body bgcolor='#ffffff'>" );

fo.Write( "<font face=verdana size=+2><b>HTM Image Files List</b></font>\r\n");

fo.Write( "<hr><h3>" + s + "</h3><br>\r\n" );

fo.Write( "<table width='600' border='2' cellspacing='6' cellpadding='12'>\r\n" );

fo.Write("</td>\r\n<td width=150><center><b>File Name</b></center></td>\r\n" );

fo.Write( "<td width = 350><center><b>Link to</b></center></td>\r\n</tr>\r\n" );

var y = 0;

lcs = "src";

var stuff = "";

var sttl = /src/ig; 

var ettl = '\"';

var z = 0;

var w = 0;

var Actt = "";

var xf = 0;

var wt = 0;

for (y=0;y<x;y++) {

   fi = fso.OpenTextFile(fa[y],1)

   Actt = fi.ReadAll();

   fi.Close();

	 stuff = Actt.replace(sttl,lcs);

	 w=0;

	 z=0;

	 xf = 0;

	 wt = 0;

	 Actt="";

   qz = stuff.lastIndexOf(lcs);

	 while (w != qz)

	           {

               w = stuff.indexOf(lcs,z);

               xf = stuff.indexOf(ettl,w)+1;

	             wt = stuff.indexOf(ettl,xf); 

							 if (w+8 > xf) {

	             Actt = Actt + stuff.substring(xf,wt) + "<BR>";

							    } 

		           z = w+4;

							 }

 	 fo.Write("<tr><td valign=top>" + fb[y] +" </td><td> ");

	 fo.Write(Actt + "</td></tr>"); 

		 }

fo.Write("</table><BR>Produced by a Java Script written by Mike Greathead.<BR></body></html>");

fo.Close();

// end of program

	 


