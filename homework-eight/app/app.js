//var userName = 'Timmy "The Skinny" Turner';
//you would just take everything in the html and put it in these variables
var homeContent = "<div id ='app'><div class ='home'><table class='elements'> <th colspan='2'>Pro-Bending</th> <tr> <td class='elements'> <a id = 'cups' href='#'> <img src='images/Cups.png' alt='Cups Over Flowing with Cool Water' style='width: 200px; height: 200px;'> <br> <strong>Cups</strong> </a> </td> <td class='elements'> <a id = 'pentacles' href='#'> <img src='images/Pentacles.png' alt='Inpenetrable Stone Vaults Filled with Golden Pentacles' style='width: 200px; height: 200px;'> <br> <strong>Pentacles</strong> </a> </td> </tr> <tr> <td class='elements'>  <a id = 'wands' href='#'> <img src='images/Wands.png' alt='Wind Swept Fields with Blade like Grass' style='width: 200px; height: 200px;'>  <br>  <strong>Swords</strong>   </a> </td>    <td class='elements'>        <a id = 'swords' href='#'>            <img src='images/Swords.png' alt='Charred Forest With a Great Heat Emintating from the Center' style='width: 200px; height: 200px;'>              <br>                   <strong>Wands</strong>           </a>       </td>   </tr></table></div></div>";
var aboutContent = "<h1>ABOUT</h1><p>this is a page</p>";
var productsContent = "<h1>PRODUCTS</h1><p>this is a page</p>";
var gamesContent = "<h1>PRODUCTS</h1><p>this is a page</p>";
var contactContent = "<h1>CONTACT</h1><p>this is a page</p>";
var cupsContent = '<section id = "app"><div class = "cups"><table class="elements">    <th colspan="2">Pro-Bending</th>  <tr>       <td class="elem-describe" rowspan="3">            <div>               <p>               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero molestiae dolor praesentium facilis quibusdam repellendus consectetur excepturi maxime, minus, quam, suscipit distinctio atque delectus magnam eveniet est quas fugit!               <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nihil mollitia asperiores voluptas voluptatum sequi magnam, sint tempore saepe dolore earum ut cum aliquid reprehenderit et possimus repellendus laudantium hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis ipsa facere nobis veritatis esse quos nam neque, tempora, sit culpa aperiam nihil quisquam repudiandae corrupti expedita voluptatem. Porro, consequatur.              <br> Nulla quia obcaecati modi maiores earum nam quos nobis? Suscipit quas nesciunt illo praesentium adipisci libero doloremque delectus excepturi optio corrupti non sint porro alias ducimus, at fugiat quidem? Possimus.               <br>Odit suscipit sint esse nam laboriosam ex quis laborum nihil aliquam doloribus similique sequi consectetur, doloremque reprehenderit minima placeat nulla nesciunt velit! Alias excepturi similique iure hic beatae repellat architecto.               </p>           </div>       </td>      <td class="elem-describe" style="height: 50px;">         <div class="title">              <h1>Notable Drinker</h1>             <ul><li>Mosukka</li></ul>          </div>      </td>  </tr>  <tr>      <td class="elem-describe" rowspan="2">          <div class="elem-describe">               <h1>Element Mutations</h1>              <ul>                  <li>Adipisicing deserunt eum!</li>                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>                  <li>Unde pariatur facere dignissimos aut soluta mollitia eveniet eligendi dolores praesentium voluptates ullam veniam reprehenderit, doloribus recusandae accusamus!</li>                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex libero harum fuga!</li>                   <li>Ducimus odit laboriosam quia, molestiae blanditiis adipisci repellendus velit quasi ullam et? </li>              </ul>          </div>      </td>  </tr></table></div></section>';
var pentaclesContent ="lol";
var swordsContent="lol";
var wandsContent="lol";

function init(){
    
    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";



        console.log("clicked " + btnId);
        console.log(contentId);
        console.log(cupsContent);
        $("#app").html(eval(contentId));
        //$("#app").append(btnId);
        //$("#app").prepend(btnId);
        elemButtonListener();
    });

   
    // console.log("thar be a draft " + userName);
}

function elemButtonListener(){
    $(".elements a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";

        console.log("clicked " + btnId);
        console.log(contentId);
        console.log(cupsContent);
        $("#app").html(eval(contentId));
        //$("#app").append(btnId);
        //$("#app").prepend(btnId);
    });
}
//this checks for all Elements in the browser
$(document).ready(function(){
init();
});