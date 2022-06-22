$(document).ready(function(){
  "use strict"
  var user = [{
                id:"327094",
                name:"P Padma raju",
                doj:"06-10-2018",
                status: "1"
            },
            {
                id:"330618",
                name:"s. v. raju",
                doj:"13-10-2018",
                status: "1"
            },
            {
                id:"350997",
                name:"e uday kumar",
                doj:"31-10-2018",
                status: "1"
            },
            {
                id:"369357",
                name:"c. bharath",
                doj:"14-11-2018",
                status: "1"
            },
            {
                id:"416541",
                name:"b poli raju",
                doj:"10-12-2018",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: ""
            },
           ];
           
           
  function sortByProp(data,prop){
    var propBySort = data.slice(0);
    
    propBySort.sort(function(a,b) {
    var x = a[prop].toLowerCase();
    var y = b[prop].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    }); 
    return (propBySort)                
  }
 
  
  var user_table,x=1;
        user = sortByProp(user,"id")
        for(let i in user){
            status = `<span class=text-danger>In Active</span>`;
            if(user[i].status == 1){status = "<span class=text-success>Active</span>"}
            name = user[i].name.toUpperCase()
            user_table += `<tr><td>${x}</td><td>${user[i].id}</td><td>${name}</td><td>${user[i].doj}</td><td>${status}</td></tr>`
            x++;
            }
        $("#user").html(user_table)
  
  
  
  
  
  
  })