import { Ui } from "./ui.module.js"

export class Details{

    constructor(id){
        document.getElementById('btnClose').addEventListener('click', ()=>{
        document.getElementById('details').classList.add("d-none")    
        document.getElementById('games').classList.remove("d-none")  
           
      })

      this.loading = document.getElementById('load')

      this.ui = new Ui()
      
      this.getDetails(id);
    }

    async getDetails(id){

        this.loading.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e7200c262cmsh53b799515fdbeb3p198545jsnad40c6ba0070',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response = await api.json();
        console.log(response);

        this.loading.classList.add('d-none');
        
        this.ui.displayDetails(response)     
    }
}
