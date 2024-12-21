export class Ui{

    constructor(){}

    displayGames(data){

        let cartona = ''

        for(let i = 0; i < data.length; i++){
            cartona += `
            <div class="col-xl-3 col-lg-4 col-md-6">
            <div>
              <div class="card border-dark mb-3 bg-transparent" style="max-width: 18rem;" data-id="${data[i].id}">
                <div class="card-body">
                  <figure>
                     <img class="w-100 images" src="${data[i].thumbnail}" alt="${data[i].title}">
                  </figure>
      
                  <figcaption>
      
                     <div class="d-flex justify-content-between">
                        <h3 class="h6 small text-white">${data[i].title}</h3>
                        <span class="badge bg-primary p-2 free">Free</span>
                     </div>

                            <div class="d-flex justify-content-center flex-wrap text-white caption">
                            <span class="card-text text-center">
                            ${data[i].short_description}
                            </span>
                            </div>
                  </figcaption>
               </div>  
                <div class="card-footer bg-transparent border-dark d-flex justify-content-between">
                  <span class="badge title">${data[i].genre}</span>
                  <span class="badge badge-color title">${data[i].platform}</span>  
                </div>
              </div>
            </div>
          </div>`
        }

        document.getElementById('demo').innerHTML = cartona;
    }

    displayDetails(data){

        let cartona2 = `
                        <div class="col-md-4">
                        <img src="${data.thumbnail}" alt="game" class="w-100">
                        </div>
                        <div class="col-md-8">
                            <div class="text-white">
                                <h3>Title: ${data.title}</h3>
                                <p>Category:
                                    <span class="badge text-bg-info"> ${data.genre}</span>
                                </p>
                                <p>Platform:
                                    <span class="badge text-bg-info"> ${data.platform}</span>
                                </p>
                                <p>Status:
                                    <span class="badge text-bg-info"> ${data.status}</span>
                                </p>
                                <p class="small">
                                    ${data.description}
                                </p>
                                <a class="btn btn-outline-warning show" target="_blank" href="${data.game_url}">Show Game</a>
                            </div>
                        </div>
        `
        document.getElementById('detailsData').innerHTML = cartona2
    }
}
