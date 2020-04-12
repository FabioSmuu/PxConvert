function pxTOem(px = 0, base = 19.20) {
	return (isNaN (px) || isNaN (base)) ? 'NaN' : px/base + "em"
}

function emTOpx(em = 0, base = 19.20) {
	return (isNaN (em) || isNaN (base)) ? 'NaN' : em*base + "px"
}

pxTOem(240) //Converte 240px para 12.5em
emTOpx(12.5) //Converte 12.5em para 240px
