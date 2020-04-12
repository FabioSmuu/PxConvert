//Para NodeJS
const {createInterface} = require('readline')

let cmd = createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log([
	'\n Digite um tipo:',
	'  px - Para converter px para em',
	'  em - Para converter em para px\n'
].join('\n'))

cmd.question('# Tipo: ', tipo => {
cmd.question('# Contia: ', contia => {
cmd.question('# Base: ', base => {
	let resultado = (tipo === 'px') ? pxTOem(contia, base | 19.20) : (tipo === 'em') ? emTOpx(contia, base| 19.20) : '---'
	console.log('\n# Resultado:	'+resultado+'\n\n')
	cmd.close()
})})})

function pxTOem(px = 0, base = 19.20) {
	return (isNaN (px) || isNaN (base)) ? '---' : px/base + "em"
}

function emTOpx(em = 0, base = 19.20) {
	return (isNaN (em) || isNaN (base)) ? '---' : em*base + "px"
}
