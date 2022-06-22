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
                name:"S V Raju",
                doj:"13-10-2018",
                status: "1"
            },
            {
                id:"350997",
                name:"E uday kumar",
                doj:"31-10-2018",
                status: "1"
            },
            {
                id:"369357",
                name:"C Bharath",
                doj:"14-11-2018",
                status: "1"
            },
            {
                id:"416541",
                name:"B Poli Raju",
                doj:"10-12-2018",
                status: "1"
            },
            {
                id:"568585",
                name:"V V Vijayanad",
                doj:"25-03-2019",
                status: "1"
            },
            {
                id:"568472",
                name:"T Nagakarunakar",
                doj:"25-03-2019",
                status: "1"
            },
            {
                id:"570076",
                name:"Pradeep Kumar",
                doj:"26-03-2019",
                status: "1"
            },
            {
                id:"778936",
                name:"K Chanti",
                doj:"15-07-2019",
                status: "1"
            },
            {
                id:"817553",
                name:"Santhosh",
                doj:"10-08-2019",
                status: "1"
            },
            {
                id:"970951",
                name:"M Rakesh",
                doj:"20-10-2019",
                status: "1"
            },
            {
                id:"889434",
                name:"R Santhosh Kumar",
                doj:"12-09-2019",
                status: "1"
            },
            {
                id:"996920",
                name:"P Naidu Babu",
                doj:"04-11-2019",
                status: "1"
            },
            {
                id:"1177174",
                name:"K Divakar",
                doj:"01-07-201",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
            {
                id:"",
                name:"",
                doj:"",
                status: "1"
            },
           ];
           
           
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
 
  
  var user_table,x=1;
        user = sortByProp(user,"id","num")
        for(let i in user){
            status = `<span class=text-danger>In Active</span>`;
            if(user[i].status == 1){status = "<span class=text-success>Active</span>"}
            name = user[i].name.toUpperCase()
            user_table += `<tr><td>${x}</td><td class='text-end'>${user[i].id}</td><td>${name}</td><td>${user[i].doj}</td><td>${status}</td></tr>`
            x++;
            }
        $("#user").html(user_table)
  
  
  
  
  
  
  })