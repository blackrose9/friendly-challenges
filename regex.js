/([0-9])(?!.*\1)/ // checks all occurences and returns 1 of each match

latlong = coordinates.match(/\([^()]+\)/);
lat = latlong[0].match(/-?\d+\.?\d*/gm);
latlong = coordinates.match(/-?[0-9]+(?:.[0-9]+)?/g);