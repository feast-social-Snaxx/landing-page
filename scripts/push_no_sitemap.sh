#!/bin/bash

source ./scripts/.env.sh

workingPath=`pwd`

if [ `basename $workingPath` = $WORKING_FOLDER ]
then 
    ssh -i $KEY_PATH -t $REMOTE "rm -r $REMOTE_PATH/*"
    scp -r -i $KEY_PATH $PUSH_FILES $REMOTE:$REMOTE_PATH && echo "[Update successfully pushed to remote server]"
    ssh -i $KEY_PATH -t $REMOTE "cd $REMOTE_PATH && npm i && npx next build && pm2 restart 0"
else
    echo "Calling in wrong directory, go to $WORKING_FOLDER"
fi
