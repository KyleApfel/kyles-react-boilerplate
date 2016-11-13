#!/bin/bash
foo=$1
FEATURE=$(echo $foo | awk '{print toupper($0)}')
feature=$(echo $foo | awk '{print tolower($0)}')
Feature=`echo ${feature:0:1} | tr  '[a-z]' '[A-Z]'`${feature:1}
bold=$(tput bold)
normal=$(tput sgr0)
red='\033[0;31m'
blue='\033[0;94m'
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

sed -i -deleteme "s/COMPONENT_TEMPLATE/$Feature/g" components/component.js
rm components/*-deleteme

echo "Copy these two lines to your rootReducer file"
echo -e "${bold}${blue}import ${feature}Reducer from './features/$feature/reducer';${normal}${nc}"
echo -e "${bold}${blue}${feature}Data: ${feature}Reducer,${normal}${nc}\n"

echo "If this feature needs to be routed to add the following line to routes.js:"
echo -e "${bold}${blue}import ${Feature}Container from './features/$feature/container';"
echo -e "${normal}${nc}Don't forget to add the <Route> entry\n"

echo "Enjoy your new feature!"
