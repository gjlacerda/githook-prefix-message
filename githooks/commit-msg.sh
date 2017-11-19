#!/bin/sh

NAME=$(git symbolic-ref --short HEAD)
if [ -n "$NAME" ] && [ "$NAME" != "master" ]; then
	echo "$NAME"': '$(cat "$1") > "$1"
fi
