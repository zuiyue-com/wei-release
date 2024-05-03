#!/bin/bash
# http://src.xlai.cc/wei/install.sh

sudo curl http://src.xlai.cc/wei/ubuntu/latest.tar.xz -o latest.tar.xz
sudo tar -xvf latest.tar.xz
sudo mv wei /root/wei
sudo /root/wei/wei install