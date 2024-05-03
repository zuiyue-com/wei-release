#!/bin/bash

# 获取操作系统类型
os_type=$(uname)

if [ "$os_type" == "Linux" ]; then
    # 检查是Debian-based还是Red Hat-based
    if [ -f /etc/debian_version ]; then
        sudo apt-get install -y curl
    elif [ -f /etc/redhat-release ]; then
        sudo yum install -y curl
    elif [ -f /etc/arch-release ]; then
        sudo pacman -S --noconfirm curl
    elif [ -f /etc/alpine-release ]; then
        apk add --no-cache curl
    else
        echo "Unsupported Linux distribution. Only Debian-based, Red Hat-based, Arch Linux and Alpine Linux are supported."
    fi
elif [ "$os_type" == "Darwin" ]; then
    # MacOS
    brew install curl
else
    echo "Unsupported operating system. Only Linux and MacOS are supported."
fi

