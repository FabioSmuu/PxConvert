# Repositorio de arquivos bla bla bla.

[![N|Solid](https://i.imgur.com/mF9AKO0.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)


Eu estava desenvolvendo um dashboard responsivo e dinamico e senti a grande necessidade de usar esala **em** ao inves de **pixel** para deixar tudo em ordem, então resolvi criar esta função super boba que faz somente isso, converte de escala **em** para **pixel** e de **pixel** para escala **em**.

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
