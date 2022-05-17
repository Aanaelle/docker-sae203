const persons = 
[

    {name:'Daniel', url:},
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
})
