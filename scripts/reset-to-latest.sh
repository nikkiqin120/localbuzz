#!/bin/bash

# 获取当前分支名
current_branch=$(git rev-parse --abbrev-ref HEAD)

echo "当前分支: $current_branch"

# 重置所有本地更改
echo "正在重置本地更改..."
git reset --hard HEAD

# 清理未跟踪的文件和目录
echo "正在清理未跟踪的文件..."
git clean -fd

# 强制拉取远程最新代码
echo "正在拉取远程最新代码..."
git fetch origin
git reset --hard origin/$current_branch

echo "完成！本地代码已还原到远程最新状态。" 