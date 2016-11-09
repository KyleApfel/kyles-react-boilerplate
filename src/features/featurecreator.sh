#!/bin/bash
foo=$1
FEATURE=$(echo $foo | awk '{print toupper($0)}')
feature=$(echo $foo | awk '{print tolower($0)}')
Feature=`echo ${feature:0:1} | tr  '[a-z]' '[A-Z]'`${feature:1}
bold=$(tput bold)
normal=$(tput sgr0)
red='\033[0;31m'
nc='\033[0m' # No Color

if [ -z $1 ]
then
  echo "Please provide single argument. e.g. ./featurecreator Map"
  exit 0;
fi

if [ -z $(find . -maxdepth 1 | grep -w $BASH_SOURCE) ]
then
  echo "Please run script in the ./src/features/ directory"
  exit 0;
fi

if [ $(ls | grep -w $1) ]
then
  echo "This feature already exists, please try a different name"
  exit 0;
fi

cp -r _featureTemplate/ $feature/

cd $feature/

#sed -i -deleteme "s/blank/$feature/g" container.js reducer.js components/component.js
#sed -i -deleteme "s/BLANK/$FEATURE/g" actionTypes.js actions.js reducer.js
#sed -i -deleteme "s/Blank/$Feature/g" container.js initialState.js reducer.js components/component.js

#rm *-deleteme components/*-deleteme

echo "Add to your reducer:"
echo -e "${bold}${red}import ${feature}Reducer from '../features/$feature/reducer.js';${normal}${nc}"
echo "Add to your rootReducer obj"
echo -e "${bold}${red}${feature}Data: ${feature}Reducer,${normal}${nc}"

echo "Enjoy your new feature!"
