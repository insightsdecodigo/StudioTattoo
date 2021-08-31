function whatsApp(Nome,Numero,Dia)
{
    var endereco;
    var texto="Sou #NOME#, meu número é o #NUMERO# e, quero agendar um horário no dia #DIA# para fazer uma tattoo, vim do site flaviodiastattoo.com.br e aguardo uma confirmação com valor e formas de pagamento que vocês aceitam!";
    texto=texto.replace('#NOME#',Nome);
    texto=texto.replace('#NUMERO#',Numero);
    texto=texto.replace('#DIA#',Dia);
    var telefone="5511989577433";
    if($.isMobile)
    {
        endereco="whatsapp://send?phone="+telefone+"&text="+texto
    }
    else
    {
        endereco="https://api.whatsapp.com/send?phone="+telefone+"&text="+texto
    }
    console.log("Enviando msg para: "+endereco);
    
    window.open(endereco);
}

$('#agendar').click( function() {
    
    var Nome = $('#Nome').val();
    var Numero = $('#Whatsapp').val();
    var data = $('#DtAgenda').val().split("-");;

    var Dia = data[2]+"-"+data[1]+"-"+data[0];

    whatsApp(Nome,Numero,Dia)
});