# Repositorio de Calculo de escala

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/Snooh)


Eu estava desenvolvendo um dashboard responsivo e dinamico e senti a grande necessidade de usar esala **em** ao inves de **pixel** para deixar tudo em ordem, então resolvi criar [esta função](/PxConvert.js) super boba que faz somente isso, converte de escala **em** para **pixel** e de **pixel** para escala **em**.


![N|Solid](https://i.imgur.com/6bOMyCB.gif)


### Como usar:
Converter 240px para escala em
```js
console.log(pxTOem(240)) //Retorna 12.5em
```


Converter 12.5em para pixel
```js
console.log(emTOpx(12.5)) //Retorna 240px
```


Esta função tambem aceita um valor base para que se ajuste melhor a seu ambiente.
```js
emTOpx(12.5, 16) //Retorna 200px
pxTOem(240, 25.0) //Retorna 9.6em
```

**Obrigado pela sua atenção!**
