#!/usr/bin/env bash

pattern="/nix/store/*-libsecret-*/lib"
libsecret_paths=( $pattern )
libsecret_path="${libsecret_paths[0]}"

export LD_LIBRARY_PATH="$libsecret_path"
nix-shell -p electron libsecret --run "electron ./app"
