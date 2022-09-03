$(document).ready(function(){
    "use strict"

function sortByProp(data,prop,type){
    var propBySort = data.slice(0);
    
    propBySort.sort(function(a,b) {
        
        if(type == "num")
        {
            var x = parseInt(a[prop]);
            var y = parseInt(b[prop]);
            
        }
        if(type == "text")
        {
            var x = a[prop].toLowerCase();
            var y = b[prop].toLowerCase();
        }
    
    return x < y ? -1 : x > y ? 1 : 0;
    }); 
    return (propBySort)                
  }

  function findID(data, find_key, value, key){
    data =  data.filter((find) => { 
        return find[find_key] == value
    })
    return data[0][key].toUpperCase()
  }
 
  
  var user_table,x=1;
        user = sortByProp(user,"id","num")
        for(let i in user){
            var phone = ""
            status = `<span class=text-danger>In Active</span>`;
            if(user[i].status == 1){status = "<span class=text-success>Active</span>"}
            name = user[i].name.toUpperCase()
            if(user[i].hasOwnProperty('phone'))
            phone = user[i].phone
            var img = `<img src='./images/${user[i].id}.jpg' class="img-fluid img-thumbnail" alt='${name}' />`
            user_table += `<tr><td>${x}</td><td>${img}</td><td >${user[i].id}</td><td>${name}</td><td>${phone}</td><td>${user[i].doj}</td><td>${status}</td></tr>`
            x++;
            }
    $("#user").html(user_table)

    var amount_table,x=1,amount_td,
            sum_deposit = 0,sum_loan = 0,sum_interest = 0,sum_exit = 0, sum_expend = 0,sum_balance = 0,
        amount = sortByProp(money,"id","num");
        for(let i in amount){
            console.log(amount[i]);
            var id = amount[i].id,
            DE_name = findID(user,'id',id,'name')
            console.log(DE_name);
            if(amount[i].type == '1')
            {
                amount_td = `<td>${amount[i].amount}</td><td></td><td></td><td></td><td></td>`
                sum_deposit = parseInt(sum_deposit) + parseInt(amount[i].amount)
            }
            if(amount[i].type == '2')
            {
                amount_td = `<td></td><td>${amount[i].amount}</td><td></td><td></td><td></td>`
                sum_loan = parseInt(sum_loan) + parseInt(amount[i].amount)
            }
            if(amount[i].type == '3')
            {
                amount_td = `<td></td><td></td><td>${amount[i].amount}</td><td></td><td></td>`
                sum_interest = parseInt(sum_interest) + parseInt(amount[i].amount)
            }
            if(amount[i].type == '4')
            {
                amount_td = `<td></td><td></td><td></td><td>${amount[i].amount}</td><td></td>`
                sum_exit = parseInt(sum_exit) + parseInt(amount[i].amount)
            }
            if(amount[i].type == '5')
            {
                amount_td = `<td></td><td></td><td></td><td></td><td></td>`
                sum_expend = parseInt(sum_expend) + parseInt(amount[i].amount)
            }
            amount_table += `<tr><td>${x}</td>
            <td><a href='dedetails.html?deid=${id}'>${id}</a></td>
            <td>${DE_name}</td>
            <td>${amount[i].date}</td>
            ${amount_td}
            </tr>`
            x++;
        }
        sum_balance = sum_deposit + sum_interest - sum_loan - sum_expend - sum_exit
        amount_table += `<tr ><td colspan='4' align='center'>Grand Total</td><td>${sum_deposit}</td><td>${sum_loan}</td><td>${sum_interest}</td><td>${sum_exit}</td><td>${sum_expend}</td></tr>
                         <tr class='balance'><td colspan='4' align='center'>Balance</td><td colspan='5'>${sum_balance}</td></tr>`
    $("#amount").html(amount_table)


var url = new URL( window.location.href);
var c = url.searchParams.get("deid");
console.log(c);



})