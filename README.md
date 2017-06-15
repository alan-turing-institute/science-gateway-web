# science-gateway-web

This script creates a web-app with the following properties
1) App hosted on [science-gateway-web](http://science-gateway-web.azurewebsites.net)
2) Creates resource group called Science-Gateway-Web
3) Priced onto the account set 

```
az login
az account list
az account set --subscription <id>

az group create \
  --name Science-Gateway --location "West Europe"

az group deployment validate \
  --resource-group "Science-Gateway-Web" \
  --template-file azuredeploy.json \
  --parameters @azuredeploy.parameters.json

az group deployment create  \
  --name "Science-Gateway-Web" \
  --resource-group "Science-Gateway-Web" \
  --template-file azuredeploy.json --parameters @azuredeploy.parameters.json
  ```
