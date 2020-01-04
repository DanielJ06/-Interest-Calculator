const juros = require('./juros')

//-----------------------------------//
test('jurosSimples', () => {
    const c = 100
    const i = 0.10
    const t = 1
    const jurosEsperado = 10
    const jurosCalc = juros.juroSimples(c, i, t)
    expect(jurosCalc).toBe(jurosEsperado)
})

test('jurosSimples', () => {
    const c = 100
    const i = 0.10
    const t = 10
    const jurosEsperado = 100
    const jurosCalc = juros.juroSimples(c, i, t)
    expect(jurosCalc).toBe(jurosEsperado)
})

test('jurosSimples', () => {
    const c = 100
    const i = 0.10
    const t = 0
    const jurosEsperado = 0
    const jurosCalc = juros.juroSimples(c, i, t)
    expect(jurosCalc).toBe(jurosEsperado)
})
//-----------------------------------//
test('montanteSimples', () => {
    const c = 100
    const i = 0.10
    const t = 1
    const montanteEsperado = 110
    const juroSimples = jest.fn()
    juroSimples.mockImplementation(() => 10) 
    const montanteSimples = juros.pure.montanteSimples({ juroSimples })
    const montante = montanteSimples(c, i, t)
    console.log(juroSimples.mock)
    expect(juroSimples.mock.calls[0]).toEqual([c, i, t])
    expect(montante).toBe(montanteEsperado)
    //const jurosCalc = juros.juroSimples(c, i, t)
    //expect(montanteSimples).toBe(jurosEsperado)
})
//-----------------------------------//
test('montanteComposto', () => {
    const c = 1000
    const i = 0.10
    const t = 1
    const jurosEsperado = 1100
    const jurosCalc = juros.montanteComposto(c, i, t)
    expect(jurosCalc).toBe(jurosEsperado)
})
//-----------------------------------//
test('jurosComposto', () => {
    const c = 1000
    const i = 0.10
    const t = 1
    const jurosEsperado = 1100
    const montanteComposto = jest.fn()
    montanteComposto.mockImplementation(() => 1100)
    
    const jurosComposto = juros.pure.jurosComposto({ montanteComposto })
    const jurosCalc = jurosComposto(c,i,t)

    expect(montanteComposto.mock.calls[0]).toEqual([c, i, t])
    expect(jurosCalc).toBe(100)
})
//-----------------------------------//