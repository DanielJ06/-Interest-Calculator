//Ex 1
const juroSimples = (c, i, t) => c*i*t

//Ex 2
const montanteSimples = ({ juroSimples }) => (c,i,t) => c + juroSimples(c, i, t)

//Ex 3
const montanteComposto = (c, i, t) => c * Math.pow((1 + i), t)

//Ex 4
const jurosComposto = ({ montanteComposto }) => (c,i,t) => montanteComposto(c,i,t) - c

module.exports = {
    juroSimples,
    montanteSimples: montanteSimples({ juroSimples }),
    montanteComposto,
    jurosComposto: jurosComposto({ montanteComposto }),
    pure: {
        montanteSimples,
        jurosComposto
    }
}


 