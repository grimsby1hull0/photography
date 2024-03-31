#!/usr/bin/env bash

while IFS= read -r -d $'\0' file <&3; do
  mkdir -p "$(dirname "$file")/thumbs"
  convert "$file" -resize 580x580^ -gravity center -extent 580x580 -quality 80 "$(dirname "$file")/thumbs/$(basename "$file")"
done 3< <(find assets/img -type f -iname "*.jpg" -depth 2 -print0)
