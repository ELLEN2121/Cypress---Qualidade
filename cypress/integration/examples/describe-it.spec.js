


// .only teste apenas esse 
it('Teste externo', ()=>{

})

describe('Grupo de testes',()=>{
    // Dentro de um grupo posso ter outro grupo. 
    describe('Grupo dentro de grupo',()=>{
        it('Teste interno 4', ()=>{

        })
        it('Teste Interno 5', ()=>{
    
        })
    })

    it('Teste interno 1', ()=>{

    })
    it('Teste Interno 2', ()=>{

    })
    
    // Teste não seja executado .skip
    it('Teste Interno 3', ()=>{

    })
})
