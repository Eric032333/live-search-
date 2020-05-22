
// $(document).ready(function(){
//     $('#search').keydown(function(){
//         $.getJSON("data.json",function(data){
//             var search = $('#search').val()
//             var regex = new RegExp(search , 'i' )
//             var output  ;
//             $.each(data , function(key , val){
//                 if(val.titleName.search(regex)!= -1){
//                 output += "<tr>"
//                 output += "<td id='"+key+"'>"+val.titleName + "</td>"
//                 output += "<td id='"+key+"'>"+val.type + "</td>"
//                 output += "<td id='"+key+"'>"+val.updated + "</td>"
//                 output += "</tr>"
//                 }    
//             })
//             $('tbody').html(output)         
//         })
//     })
// })


$(document).ready(function(){
  update()
    $('#search').keydown(function(){
      update()
    })
})

function update(){
    // console.log('update')
    $.getJSON("data.json",function(data){
        let search = $('#search').val()
        let regex = new RegExp(search , 'i')
        let output  ;
        $.each(data , function(key , val){
            if(val.titleName.search(regex)!= -1){
            output += "<tr>"
            output += "<td id='"+key+"'>"+val.titleName + "</td>"
            output += "<td id='"+key+"'>"+val.type + "</td>"
            output += "<td id='"+key+"'>"+val.updated + "</td>"
            output += "</tr>"
            }    
        })
        $('tbody').html(output)         
    })
}