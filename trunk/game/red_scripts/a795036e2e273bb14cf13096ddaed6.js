function reloadEventbox(d){if(d.length==0){return}var c=JSON.parse(d);var a=false;var b=typeof c.eventText;var e=parseInt(c.friendly)+parseInt(c.neutral)+parseInt(c.hostile);if(e>0){a=true}if(a){$("#eventFriendly").html(c.friendly);$("#eventNeutral").html(c.neutral);$("#eventHostile").html(c.hostile);$("#eventContent").html(c.eventText);$("#eventClass").attr("class",c.eventText)}if(b=="string"||b=="undefined"){$("#eventboxLoading").hide();if(a){$("#eventboxBlank").hide();$("#eventboxFilled").show();new simpleCountdown(getElementByIdWithCache("tempcounter"),c.eventTime,initAjaxEventbox)}else{$("#eventboxBlank").show();$("#eventboxFilled").hide()}}}function reloadResources(resources){var data=eval("("+resources+")");$("#resources_metal").html(data.metal["resources"]["actualFormat"]);$("#resources_metal").attr("class",data.metal["class"]);$("#metal_box").attr("title",data.metal["tooltip"]);$("#resources_crystal").html(data.crystal["resources"]["actualFormat"]);$("#resources_crystal").attr("class",data.crystal["class"]);$("#crystal_box").attr("title",data.crystal["tooltip"]);$("#resources_deuterium").html(data.deuterium["resources"]["actualFormat"]);$("#resources_deuterium").attr("class",data.deuterium["class"]);$("#deuterium_box").attr("title",data.deuterium["tooltip"]);$("#resources_energy").html(data.energy["resources"]["actualFormat"]);$("#resources_energy").attr("class",data.energy["class"]);$("#energy_box").attr("title",data.energy["tooltip"]);$("#resources_darkmatter").html(data.darkmatter["resources"]["actualFormat"]);$("#resources_darkmatter").attr("class",data.darkmatter["class"]);$("#darkmatter_box").attr("title",data.darkmatter["tooltip"]);reloadResourceTicker(resources)}function reloadResourceTicker(resources){var data=eval("("+resources+")");resourceTickerMetal={available:data.metal["resources"]["actual"],limit:[0,data.metal["resources"]["max"]],production:data.metal["resources"]["production"],valueElem:"resources_metal"};resourceTickerCrystal={available:data.crystal["resources"]["actual"],limit:[0,data.crystal["resources"]["max"]],production:data.crystal["resources"]["production"],valueElem:"resources_crystal"};resourceTickerDeuterium={available:data.deuterium["resources"]["actual"],limit:[0,data.deuterium["resources"]["max"]],production:data.deuterium["resources"]["production"],valueElem:"resources_deuterium"};if(!vacation){new resourceTicker(resourceTickerMetal);new resourceTicker(resourceTickerCrystal);new resourceTicker(resourceTickerDeuterium)}}function reloadRightmenu(a){$.get(a,{},displayRightmenu)}function displayRightmenu(a){$("#rechts").html(a);initCluetip()}function ajaxFormSubmit(c,b,d){var e=$("#"+c+"").serialize();var a=null;if(d!=null&&typeof d=="function"){a=d}$.ajax({type:"POST",url:b,data:e,success:a})};