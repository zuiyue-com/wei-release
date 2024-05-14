#!/bin/bash

rm -rf wei
tar xvf $1
mv $1 wei
tar -cJf latest.tar.xz ./wei
