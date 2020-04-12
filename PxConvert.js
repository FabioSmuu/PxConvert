function pxTOem(px = 0, base = 19.20) { //base padrão 16
	return (isNaN (px) || isNaN (base)) ? 'NaN' : px/base + "em"
}

function emTOpx(em = 0, base = 19.20) { //base padrão 16
	return (isNaN (em) || isNaN (base)) ? 'NaN' : em*base + "px"
}

/* Converte px para %
function pxTOper(px = 0, tela = 1024) {
	return (isNaN (px) || isNaN (base)) ? 'NaN' : px*100/tela + "em"
}

pxTOper(240) //Converte 240px para 23.4375%
pxTOper(240, 1359) //Converte 240px para 17.660044150110377%
*/

pxTOem(240) //Converte 240px para 12.5em
emTOpx(12.5) //Converte 12.5em para 240px
