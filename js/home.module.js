import { Ui } from "./ui.module.js"
import { Details } from "./details.module.js"
export class Home {

    constructor() {
        
        document.querySelectorAll('.nav-link').forEach(link =>{
            link.addEventListener('click', ()=>{
                this.activeLink(link)
                const category = link.getAttribute('data-category')
                console.log(category);
        
                this.getGames(category)

            })
        })
        this.loading = document.getElementById('load')
        this.details=document.getElementById('details')
        this.games=document.getElementById('games')
        
        this.ui = new Ui()
        this.getGames("MMORPG")
    }


  async  activeLink(link){

        document.querySelector('.navbar-nav .active').classList.remove('active')    
        link.classList.add('active')  
      
    }
    
    async getGames(cat) {

        this.loading.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e7200c262cmsh53b799515fdbeb3p198545jsnad40c6ba0070',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        const response = await api.json();
        console.log(response);

        this.loading.classList.add('d-none')

        this.ui.displayGames(response)

        document.querySelectorAll(".card").forEach((card)=>{
            card.addEventListener("click", ()=>{

            this.details.classList.remove("d-none")  

            this.games.classList.add('d-none') 
            
            this.detailsCard = new Details(card.dataset.id);
            })
        })
    }
}

