TOKEN="5736702325:AAFI_RO3X1kKIumqCBCvPXwcSOWmS2Ea1NA"
ID="-1001539398172"
URL="https://api.telegram.org/bot$TOKEN/sendMessage"

curl -s -X POST $URL -d chat_id=$ID -d text="Hello World"