//Para NodeJS
const {createInterface} = require('readline')

let cmd = createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log([
	'\n Digite um comando para conversão:',
	' # Lista de comandos:\n',
	'   ?px 16	- Converte ?px para ?em de base 16 (Padrão)',
	'   ?em 16	- Converte ?em para ?px de base 16 (Padrão)',
	'\n Exemplo:\n   240px 16\n',
].join('\n'))

cmd.question(' # Comando: ', comando => {
	comando = comando.split(' ')
	
	comando = (comando[0].toLowerCase().endsWith('px')) ? pxTOem(comando[0].replace(/px/gi, ''), comando[1]) :
	(comando[0].toLowerCase().endsWith('em')) ? emTOpx(comando[0].replace(/em/gi, ''), comando[1]) : '---'
	
	console.log('\n	Resultado:	'+ comando + '\n')
	cmd.close()
})

function pxTOem(px = 0, base = 16) {
	return (isNaN (px) || isNaN (base)) ? '---' : px/base + "em"
}

function emTOpx(em = 0, base = 16) {
	return (isNaN (em) || isNaN (base)) ? '---' : em*base + "px"
}

/* Em andamento....
function pxTOper(px = 0, tela = 1024) {
	return (isNaN (px) || isNaN (base)) ? 'NaN' : px*100/tela + "em"
}
*/
