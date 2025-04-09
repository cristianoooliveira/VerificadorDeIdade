function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados informados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'homem-bebe.jpg')
            } else if (idade < 10){
                //crianca
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'homem-adolescente.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else if(idade < 120) {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            } else {
                img.setAttribute('src', 'homem-anjo.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'mulher-bebe.jpg')
            } else if (idade < 10){
                //crianca
                img.setAttribute('src', 'mulher-crianca.jpg')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'mulher-adolescente.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else if(idade < 120) {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            } else {
                img.setAttribute('src', 'mulher-anjo.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }   
}