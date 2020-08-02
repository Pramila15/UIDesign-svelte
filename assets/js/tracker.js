$(document).ready(function(){

        
    $.ajax({
        url:"https://api.covid19api.com/summary",
        type:"GET",
        success:function(response){
            let x = JSON.parse(JSON.stringify(response))
            console.log(x.Global.TotalConfirmed)
            $("#total").text(x.Global.TotalConfirmed)
            $("#totalr").text(x.Global.TotalRecovered)
            $("#totald").text(x.Global.TotalDeaths)

            let arr = x.Countries

            for(var i=0;i<arr.length;++i){

                let scope = "<th scope='row'>"+(i+1)+"</th>"
                let cell=''
                let j=5;
                console.log(arr[i])
               
                   cell+='<td>'+arr[i]['Country']+'</td>'+'<td>'+arr[i]['TotalConfirmed']+'</td>'+'<td>'+arr[i]['TotalRecovered']+'</td>'+'<td>'+arr[i]['TotalDeaths']+'</td>'
                   
              

               let row = '<tr>'+scope+cell+'</tr>'
                $('.table').append(row);
            }


        },
        error:function(err){
            console.log(err)
            alert("Please turn on internet, error:"+err)
        }
    })
})