//Installation directions produced by http://www.dynamicdrive.com

Three steps to installing DHTML Magnifier on your page

STEP 1: Upload to your webpage directory all files in the zip except "example.htm" and "readme.txt". FYI, they are:

-zoom.js
-zoom.html
-x.gif
-zoomin.gif
-zoomout.gif


STEP 2: Insert below code into the <HEAD> section of your page:

<script language="JavaScript1.2">

/*
DHTML Magnifier (Christian Patzer, cpatzer@djc.com)
For full source code and TOS to this script
visit http://www.dynamicdrive.com
*/

//if IE5.5+ (detected via window.createPopup)
if (window.createPopup)
document.write('<script src="zoom.js"><\/script>')

</script>


STEP 3: Insert the below code at the very END of your document, right above </BODY>:

<script laguage=javascript>
if (window.createPopup)
document.write("</tr></td></table>");
</script>


STEP 4: Finally, inside "zoom.js" above, make sure variable "iframeSrc" correctly points to the path of "zoom.html" You can open zoom.js using any text editor, such as Edit Pad (http://download.cnet.com/downloads/0-1475101-100-2787783.html?tag=st.dl.10001_103_1.lst.td_2787783)

Enjoy the awesome script!

Tip: This script works best in a page with its content contained inside a table with an explicit width defined (ie: <table width=600>).


