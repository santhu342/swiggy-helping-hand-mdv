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
                phone:"8919450217",
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
                doj:"01-07-2020",
                status: "1"
            },
            {
                id:"1036560",
                name:"Reddy Prasad",
                phone:"9704539423",
                doj:"21-11-2019",
                status: "1"
            },
            {
                id:"1147967",
                name:"K Kiran Kumar",
                doj:"17-02-2020",
                status: "1"
            },
            {
                id:"1072539",
                name:"K Samba Sivaji",
                doj:"",
                status: "1"
            },
            {
                id:"1301939",
                name:"K Vasu",
                doj:"23-11-2020",
                status: "1"
            },
            {
                id:"1359486",
                name:"J Ravi",
                doj:"22-01-2021",
                status: "1"
            },
            {
                id:"1314518",
                name:"P Abhilash",
                doj:"07-12-2020",
                status: "1"
            },
            {
                id:"1256201",
                name:"M N Raju",
                doj:"28-09-2020",
                status: "1"
            },
            {
                id:"1556866",
                name:"T Satish",
                doj:"19-07-2021",
                status: "1"
            },
            {
                id:"1608609",
                name:"P Ganesh",
                doj:"23-08-2021",
                status: "1"
            },
            {
                id:"1586575",
                name:"G Srinivas",
                doj:"09-08-2021",
                status: "1"
            },
            {
                id:"1652275",
                name:"P Ravi",
                doj:"20-09-2021",
                status: "1"
            },
            {
                id:"1724783",
                name:"P B V N Patrudu",
                phone:"9676964499",
                doj:"08-11-2021",
                status: "1"
            },
            {
                id:"1754569",
                name:"H Prasanta",
                doj:"29-11-2021",
                status: "1"
            },
            {
                id:"1801368",
                name:"R Vasubabu",
                doj:"23-02-2022",
                status: "1"
            },
            {
                id:"1888335",
                name:"K Giri",
                doj:"23-02-2022",
                status: "1"
            },
            {
                id:"1914150",
                name:"K Raju",
                doj:"14-03-2022",
                status: "1"
            },
            {
                id:"478141",
                name:"K Krishna",
                doj:"",
                status: "1"
            },
            {
                id:"778818",
                name:"S Sai",
                doj:"",
                status: "1"
            },
            {
                id:"992634",
                name:"P Praveen",
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
  
  
  
  
  
  
  })