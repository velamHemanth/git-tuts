$('h1').css({'background':'green','color':'yellow'})

// Next() and NextAll()

$('h1').next().css({'background':'pink'})

$('p').nextAll().css({'color':'red'})

// prev() and prevAll()

$('#prev2').prev().css({'color':'yellow','background':'black'})

$('#prevall').prevAll().css({'color':'violet','background':'skyblue'})

//Before() and after()

$('#before').before('<h1>This is for Before() method</h1> --> Added newly')

$('#after').after('<h2>This is for after() method</h2> --> added newly')

//siblings()

$('#sibling4').siblings().css({'background':'pink'})

//parent()

$('#parent5').parent().css({'background':'blue'})

//chidren()

$('#child').children().css({'color':'blue'})