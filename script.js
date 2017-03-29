var clickmacrord =  "${ADELPHIC_CLICK_REDIRECT_PROVIDED}";
var clickmacronord =  "${ADELPHIC_CLICK_NOREDIRCT}";
var clickmacronordenc = "${ADELPHIC_CLICK_NOREDIRECT_ENC}";
var cbmacro = "${ADELPHIC_CACHE_BUSTER}";
var finaltag = "";

String.prototype.replaceAll = function(target, replacement) {
		return this.split(target).join(replacement);
};

function addMacros (adserver, tag)
{

	document.getElementById("errormsg").innerHTML = ""; // Initialize error message
	document.getElementById("tagwithmacros").value = ""; // Initialize output textbox
	document.getElementById('imageurl').style.color = "black"; //Initialize color image url textbox (goes red if image url not found)
	finaltag = tag; // Initialize finaltag value


	if (tag.indexOf("ADELPHIC") != -1) {

		document.getElementById("errormsg").innerHTML = "Please review your tag, looks like Adelphic's macros are already there."
		return;
	}


	//validateTag(adserver, tag)
	switch (adserver)
	{

		case ("Sizmek"):

			var cbm = tag.indexOf("\&ord");
			var cm = tag.indexOf("\&ncu");
			var px = tag.indexOf("script"); // if there's no "script" then we can assume they are pixels

			if (tag.indexOf("bs.serving-sys.com") == -1) {

				document.getElementById("errormsg").innerHTML = "Please review your tag, it doesn't look like a Sizmek tag."
				break
			}

			if (px == -1) // pixels have been input (no tag)
			{
				if (tag.indexOf("Timestamp") != -1) {

					finaltag = tag.replaceAll("[Timestamp]", cbmacro);
				}
				else {

					finaltag = tag.replaceAll("[timestamp]", cbmacro);
				}

			}

			else{

				if (cbm != -1) // if the "ord" variable is already present in the tag 
				{
					var totph // variable to know the number of placeholders for the cb macro
					if (tag.indexOf("Timestamp") != -1) {

						totph = tag.match(/Timestamp/g).length; 
						finaltag = tag.replaceAll("[Timestamp]", cbmacro);
					}
					else {

						totph = tag.match(/timestamp/g).length; 
						finaltag = tag.replaceAll("[timestamp]", cbmacro);
					}

					if (totph < 2) // if the "ord" variable is only present in the script part of the tag
					{
						var insertedcachebuster = "\&ord\="+cbmacro+"\&FlightID"
						finaltag = finaltag.replaceAll("\&FlightID", insertedcachebuster)
					}				
					
				}

				else{ // no "ord" variable in the tag, so we add it

					var insertedcachebuster = "\&ord\="+cbmacro+"\&FlightID"
					finaltag = tag.replaceAll("\&FlightID", insertedcachebuster)
					var modtag = finaltag.split("\"\>\</script");
					finaltag = modtag[0]+"\&ord\="+cbmacro+"\"\>\<\/script"+modtag[1];
				}

				if (cm != -1) // if the clickmacro variable is already in the tag we replace the placeholder value
				{
					if (tag.indexOf("Click") != -1)
					finaltag = finaltag.replace("[Click]", clickmacronordenc)
					else if (tag.indexOf("click") != -1)
					finaltag = finaltag.replace("[click]", clickmacronordenc)
				}

				else{

						finaltag = finaltag.replace ("\"\>\</script", "\&ncu\=$$$$$"+clickmacronordenc+"$$$\"\>\<\/script");

				}

			}
			document.getElementById('tagwithmacros').value = finaltag;
			break;
			

		case ("Adform"):

			var cbm = tag.indexOf("\;ord");
			var cm = tag.indexOf("\;click");

			if (tag.indexOf("track.adform.net") == -1) {

				document.getElementById("errormsg").innerHTML = "Please review your tag, it doesn't look like an Adform tag"
				break
			}

			if (cbm != -1)
			{
				finaltag = tag.replaceAll("[timestamp]", cbmacro);
			}

			else{

				//Waiting to see exceptions in order to apply patches

			}

			if (cm != -1)
			{
				finaltag = finaltag.replace("click\=", "click\="+clickmacrord)
				var modtag = finaltag.split("\<a href\=\"");
				finaltag = modtag[0]+"\<a href\=\""+clickmacrord+modtag[1];

			}

			else{
				var modtag = finaltag.split("\"\>\<\/script");
				finaltag = modtag[0]+"\;click\=\""+clickmacrord+"\"\>\<\/script"+modtag[1];
				modtag = finaltag.split("\<a href\=\"");
				finaltag = modtag[0]+"\<a href\=\""+clickmacrord+modtag[1];

			}
			
			document.getElementById('tagwithmacros').value = finaltag;
			break;


	}


		case ("Weborama"):


			var cbm = tag.indexOf("random");
			var cm = tag.indexOf("publisherclick");

			if (tag.indexOf("weborama.fr") == -1) {

				document.getElementById("errormsg").innerHTML = "Please review your tag, it doesn't look like an Weborama tag"
				break
			}

			if (cbm != -1)
			{
				finaltag = tag.replaceAll("[RANDOM]", cbmacro);
			}

			else{

				//Waiting to see exceptions in order to apply patches

			}

			if (cm != -1)
			{
				finaltag = finaltag.replace("[PUBLISHER_TRACKING_URL]", clickmacrord)
				var modtag = finaltag.split("\<a href\=\"");
				finaltag = modtag[0]+"\<a href\=\""+clickmacrord+modtag[1];

			}

			else{

				//Waiting to see exceptions in order to apply patches


			}
			
			document.getElementById('tagwithmacros').value = finaltag;
			break;

	

		case ("DCM_Legacy"):

			var cbm = tag.indexOf("\;ord");
			var cm = tag.indexOf("\;click");

			if (tag.indexOf("ad.doubleclick.net") == -1) {

				document.getElementById("errormsg").innerHTML = "Please review your tag, it doesn't look like a DCM legacy tag"
				break
			}

			if (cbm != -1)
			{
				finaltag = tag.replaceAll("[timestamp]", cbmacro);
			}

			else{

				//Waiting to see exceptions in order to apply patches

			}

			if (cm != -1)
			{
				finaltag = finaltag.replace ("\;click=", "\;click\="+clickmacrord); //So far we've only observed DCM legacy tags without the click macro variable on them but in case...

			}

			else{

				finaltag = finaltag.replace ("\;ord", "\;click\="+clickmacrord+"\;ord");

			}
			
			document.getElementById('tagwithmacros').value = finaltag;
			break;

	

		case ("DCM_INS"):

			//var cbm = tag.indexOf("\;ord"); INS tags don't require our cache buster macros
			var cm = tag.indexOf("data-dcm-click-tracker");

			if (tag.indexOf("googletagservices.com") == -1) {

				document.getElementById("errormsg").innerHTML = "Please review your tag, it doesn't look like a DCM INS tag"
				break
			}

			/*if (cbm != -1)
			{
				finaltag = tag.replaceAll("[timestamp]", cbmacro);
			}

			else{

				//Waiting to see exceptions in order to apply patches

			}*/

			if (cm != -1)
			{
				console.log ("click tracker found")
				finaltag = finaltag.replace ("data-dcm-click-tracker\=\'\'\>", "data-dcm-click-tracker\="+clickmacrord+"\'\>")
			}

			else{

				console.log ("click tracker not found")
				finaltag = finaltag.replace ("data-dcm-app-id\=\'\'\>", "data-dcm-app-id\=\'\'\ndata-dcm-click-tracker\=\'"+clickmacrord+"\'\>")

			}
			
			document.getElementById('tagwithmacros').value = finaltag;
			break;

	}

	var regex = /<img.*?src=['"](.*?)['"]/;

	if (regex.exec(finaltag) != null)
	{
	 var src = regex.exec(finaltag)[1];
	 document.getElementById('imageurl').innerHTML = src;
	}

	else {

		regex = /<IMG.*?SRC=['"](.*?)['"]/; // Exception for DCM Legacy tags

		if (regex.exec(finaltag) != null)
		{
		 var src = regex.exec(finaltag)[1];
		 document.getElementById('imageurl').innerHTML = src;
		}

		else{

		document.getElementById('imageurl').style.color = "red";
		document.getElementById('imageurl').innerHTML = "No image found in the tag";
		}
	}

}