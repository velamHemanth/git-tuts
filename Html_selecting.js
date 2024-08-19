let ele  = $('div').html("<u>This div tag changed to h3 tag</u>")
let ele1 = $('h1').text("Everyone")
console.log(ele1)

let ele2 = $("#one").text("By Using Id We Chnaged")

let ele3 = $('.two');

$(ele3[0]).text('By using class we changed')

$('input[type="text"]').val('Enter value')

$('input[type="button"]').val('Submit')

let get = $('#get').text()

alert(get)