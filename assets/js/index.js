var app = {
    init: function() {
        var _this = this
        _this.onSearch(document.getElementById('books'))
    },
    onSearch: function(inp) {
        document.getElementById("search").addEventListener("input", function(e){
            let filterValue = this.value.toUpperCase();
            // Get lis from ul
            let books = inp.querySelectorAll('li');

            // Loop through collection-item lis
            for(let i = 0;i < books.length;i++){
                let a = books[i];
                // If matched
                if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                books[i].style.display = ''; 
                } else {
                books[i].style.display = 'none';
                }
            }
        })
        
    },
    toggleSidebar: function(inp){
        var element = document.querySelector('.side__bar'),
            section = document.querySelector('section');
            aside = document.querySelector('aside')
        section.classList.toggle('z-index');    
        element.classList.toggle("toggle");
        window.onclick = function(event) {
            if (event.target == aside) {
                element.classList.toggle("toggle");
                section.classList.toggle('z-index');    
            }
        }
    },
    toggleSearchbar: function(inp){
        var element = document.querySelector('#header')
        element.classList.toggle("togglesearch");
    }
}
app.init()