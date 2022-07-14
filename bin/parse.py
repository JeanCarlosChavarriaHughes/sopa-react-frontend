import json
import os
import sys
import re
import fileinput

print('Running Configuration for Spotlite in Python {}'.format(sys.version))
sourceConstants = sys.argv[1]
mypath = sys.argv[2]
if len(sys.argv) > 3:
    envVarPrefix = sys.argv[3] or "BAAM__"
else:
    envVarPrefix = "BAAM__"

files = os.listdir(mypath)

print ("Reading input constants from '{}'.".format(sourceConstants))
if os.path.exists(sourceConstants):
    with open(sourceConstants) as json_file:
        data = json.load(json_file)
else:
    print ("    File does not exist")
    data = {}

print ("Fetching input constants from environment variables prefixed with '{}'".format(envVarPrefix))
for k, v in os.environ.items():
#    print ("key: {}, value: {}".format(k, v))
    kupper = k.upper()
    if kupper.startswith(envVarPrefix):
        print ("    Collecting environment variable {}: '{}'".format(kupper, v))
        data[kupper[len(envVarPrefix):]] =v

print ("Data Constants for replacement: {}".format(data))

for x in files:
    fullPath = "{}/{}".format(mypath,x)
    print ("Munging: {}".format(fullPath))
    with open (fullPath, 'r' ) as f:
        content = f.read()
        for key in data.keys(): 
            lookingFor = "(%%{}%%)".format(key)
            valueToReplace = "{}".format(data[key])
            (content, count) = re.subn(lookingFor, valueToReplace, content, flags = re.M)
            if count > 0:
                print ("    Replaced {} occurrences of {} with {}".format(count, key, valueToReplace))
        f = open( fullPath, 'w' )
        f.write(content)
        f.close()

print ("Done parsing")

