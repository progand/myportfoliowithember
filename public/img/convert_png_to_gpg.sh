#!/usr/bin/env bash
for file in *.png;
do convert $file -quality 90 "`basename $file .png`.jpg";
done