# science-gateway-web

This script creates a web-app with the following properties
1) App hosted on [science-gateway-web](http://science-gateway-web.azurewebsites.net)
2) 

```
az login

az group create \
  --name Science-Gateway --location "West Europe"

az group deployment validate \
  --resource-group "Science-Gateway" \
  --template-file azuredeploy.json \
  --parameters @azuredeploy.parameters.json

az group deployment create  \
  --name "Science-Gateway-Web" \
  --resource-group "Science-Gateway" \
  --template-file azuredeploy.json --parameters @azuredeploy.parameters.json
  ```
