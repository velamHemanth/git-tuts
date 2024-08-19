let addbtn = $('#add');
let resetbtn = $('#reset');
let newtask = $('#newtask');
let tasklist = $('#tasklist')



function addtask(){
    let  add = $('<li>',{
        'class':'list-group-item',
        'text':newtask.val()
    })
    let delbtn = $('<button>',{
        'class':'btn btn-danger btn-sm right'
    })
    let delicon = $('<p>',{
        'text':'❌'
    })

    delbtn.click(function(){
        $(this).parent().remove()
    })

    add.click(function(){
        $(this).toggleClass('done')
    })

    delbtn.append(delicon)
    add.append(delbtn)
    tasklist.append(add)
    newtask.val('')

    toggleButtons();
}
addbtn.click(addtask)


function toggleButtons(){
    addbtn.prop('disabled', newtask.val() == '');  // Correct
    resetbtn.prop('disabled', newtask.val() == '');
}

newtask.on('input',toggleButtons)

toggleButtons()

resetbtn.click(function(){
    newtask.val('');
        toggleButtons()
    
})