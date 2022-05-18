/*const persons = 
[

    {name:'Daniel'},
    {name:'Fischl'},
    {name:'Thoma' },
    {name:'Qiqi'  },
    {name:'Keqing'},
    {name:'Xiao'  },
    {name:'CapybaraHub'}
    
];

const searchinput = document.getElementById('searchInput');

searchinput.addEventListener('keyup', function()
{
    const input = searchinput.value;
    
    const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) );
    
    let suggestion = '';
    
    if(input !=''){
    result.forEach(resultItem => 
        suggestion +=`
            <div class="suggestion">${resultItem.name}</div>
            `
        )
    }
    
    document.getElementById('suggestions').innerHTML = suggestion;
})*/


function search_videos() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('videos');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}