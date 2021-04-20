var homeContent = `<div class="home">
<section class="promo-tours">
    <div class="promo tour1">
        <p class="country">ISRAEL</p>
        <h3 class="price">from $1000</h3>
        <button><a id="israel">LEARN MORE</a></button>
    </div>
    <div class="promo tour2">
        <p class="country">U.S.A</p>
        <h3 class="price">from $1500</h3>
        <button><a id="usa">LEARN MORE</a></button>
    </div>
    <div class="promo tour3">
        <p class="country">AUSTRALIA</p>
        <h3 class="price">from $1800</h3>
        <button><a id="australia">LEARN MORE</a></button>
    </div>
</section>
<section class="book-form">
    <form>
        <p>Booking form</p>
        <div class="top">
            <input class="left" type="text" name="name" placeholder="name...">
            <input class="right" type="text" name="email" placeholder="email...">
            <input class="left" type="text" name="country" placeholder="country...">
            <input class="right" type="text" name="hotel" placeholder="hotel...">
        </div>
        <div class="checking">
            <div>
                <p>Check-in</p>
                <input type="type" placeholder="05/10/2020">
            </div>
            <div>
                <p class="second-check">Check-out</p>
                <input type="type" placeholder="05/20/2020">
            </div>
            
        </div>
        <div class="people">
            <div>
                <p>Adult</p>
                <select name="numbers" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
            <div>
                <p class="small">Children</p>
                <select name="numbers" id="">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
            <div>
                <p class="small">Rooms</p>
                <select name="numbers" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
        </div>
        <!-- <input class="message" type="text" value="message..."> -->
        <textarea class="message" name="message..." placeholder="message..."></textarea>
        <br>
        <button>SUBMIT</button>
    </form>
</section>
</div>`

var aboutContent = `<div class="about">
<section class="about-section">
    <p class="about-heading">ABOUT:</p>
    <hr>
    <p class="about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</section>
<section class="clients">
    <p class="clients-heading">CLIENT QUOTES:</p>
    <hr>
    <div class="client">
        <div class="image client-1">
        </div>
        <div class="client-text">
            <p class="quote">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <p class="name">- Miranda Brown</p>
        </div>
    </div>
    <div class="client">
        <div class="image client-2">
        </div>
        <div class="client-text">
            <p class="quote">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <p class="name">- Johnathan wes</p>
        </div>
    </div>
</section>
</div>`

var blogContent = `<div class="blogs">
<div class="blog-title"><div>BLOG:</div></div>
<div class="blog">
    <div class="blog-date">
        <p class="blog-day">06</p>
        <p class="blog-month">Jun</p>
    </div>
    <div class="blog-content">
        <div class="blog-image"></div>
        <div class="blog-heading">
            Sed et persipiatis unde omnis iste natus
        </div>
        <div class="blog-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </div>
    </div>
</div>
<div class="blog">
    <div class="blog-date">
        <p class="blog-day">23</p>
        <p class="blog-month">Jul</p>
    </div>
    <div class="blog-content">
        <div class="blog-image"></div>
        <div class="blog-heading">
            Sed et persipiatis unde omnis iste natus
        </div>
        <div class="blog-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </div>
    </div>
</div>
</div>`

var contactContent = `<div class="contact">
<div class="contact-heading"><div>CONTACT US:</div></div>
<div class="contact-content">
    <div class="contact-left">
        <div class="contact-map">
            
        </div>
        <div class="contact-address">
            <p>
                travel-fly Inc. <br>
                8901 Marmora Road, <br>
                Glasgow, D04 89GR. <br>
                Freephone:+1 800 559 6580 <br>
                Telephone:+1 800 603 6035 <br>
                FAX:+1 800 889 9898 <br>
                E-mail: mail@travelfly.org
            </p>
        </div>
    </div>
    <div class="contact-right">
        <div class="contact-form">
            <form>
                <input type="text" placeholder="Your name...">
                <input type="text" placeholder="Email Address...">
                <input type="text" placeholder="Company...">
                <textarea placeholder="Message..."></textarea>
            </form>
        </div>
        <div class="contact-button">
            <button>SEND MESSAGE</button>
        </div>
        
    </div>
</div>
</div>`

var specialOffersContent = `<div class="special-offers">
<div class="special-heading">
    <p><span>Special Offers:</span></p>
</div>
<div class="offer">
    <div class="offer-image offer1"></div>
    <div class="offer-content">
        <div class="offer-country">
            <span>Barcelona, Spain</span>
        </div>
        <div class="percentage">(20% OFF!)</div>
        <div class="offer-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
        <div class="offer-button">
            <button>LEARN MORE</button>
        </div>
    </div>
</div>
<div class="offer">
    <div class="offer-image offer2"></div>
    <div class="offer-content">
        <div class="offer-country">
            <span>Bangkok, Thailand</span>
        </div>
        <div class="percentage">(10% OFF!)</div>
        <div class="offer-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
        <div class="offer-button">
            <button>LEARN MORE</button>
        </div>
    </div>
</div>
</div>`

var toursContent = `<div class="tours-hero">
<p>TOURS:</p>
</div>
<div class="tours">
<div class="promo tour1">
    <p class="country">Israel</p>
    <h3 class="price">from $1000</h3>
    <button><a id="israel">LEARN MORE</a></button>
</div>
<div class="promo tour2">
    <p class="country">U.S.A</p>
    <h3 class="price">from $1500</h3>
    <button><a id="usa">LEARN MORE</a></button>
</div>
<div class="promo tour3">
    <p class="country">Australia</p>
    <h3 class="price">from $1800</h3>
    <button><a id="australia">LEARN MORE</a></button>
</div>
<div class="promo tour4">
    <p class="country">New Zealand</p>
    <h3 class="price">from $1200</h3>
    <button><a id="newZealand">LEARN MORE</a></button>
</div>
<div class="promo tour5">
    <p class="country">France</p>
    <h3 class="price">from $2500</h3>
    <button><a id="france">LEARN MORE</a></button>
</div>
<div class="promo tour6">
    <p class="country">Egypt</p>
    <h3 class="price">from $900</h3>
    <button><a id="egypt">LEARN MORE</a></button>
</div>
<div class="promo tour7">
    <p class="country">Japan</p>
    <h3 class="price">from $1300</h3>
    <button><a id="japan">LEARN MORE</a></button>
</div>
<div class="promo tour8">
    <p class="country">Canada</p>
    <h3 class="price">from $2000</h3>
    <button><a id="canada">LEARN MORE</a></button>
</div>
<div class="promo tour9">
    <p class="country">U.A.E</p>
    <h3 class="price">from $3000</h3>
    <button><a id="uae">LEARN MORE</a></button>
</div>
</div>`

var israelContent = `<div class="tour-container">
<div class="tour-hero israel-hero">
    <div class="tour-header">
        <p>Israel tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $1000 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview israel-preview1"></div>
    <div class="preview israel-preview2"></div>
    <div class="preview israel-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var usaContent = `<div class="tour-container">
<div class="tour-hero usa-hero">
    <div class="tour-header">
        <p>U.S.A tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $1500 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview usa-preview1"></div>
    <div class="preview usa-preview2"></div>
    <div class="preview usa-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var australiaContent = `<div class="tour-container">
<div class="tour-hero australia-hero">
    <div class="tour-header">
        <p>Australia tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $1800 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview australia-preview1"></div>
    <div class="preview australia-preview2"></div>
    <div class="preview australia-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var newZealandContent = `<div class="tour-container">
<div class="tour-hero nz-hero">
    <div class="tour-header">
        <p>New Zealand tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $1200 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview nz-preview1"></div>
    <div class="preview nz-preview2"></div>
    <div class="preview nz-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var franceContent = `<div class="tour-container">
<div class="tour-hero france-hero">
    <div class="tour-header">
        <p>France tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $2500 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview france-preview1"></div>
    <div class="preview france-preview2"></div>
    <div class="preview france-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var egyptContent = `<div class="tour-container">
<div class="tour-hero egypt-hero">
    <div class="tour-header">
        <p>Egypt tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $900 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview egypt-preview1"></div>
    <div class="preview egypt-preview2"></div>
    <div class="preview egypt-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var japanContent = `<div class="tour-container">
<div class="tour-hero japan-hero">
    <div class="tour-header">
        <p>Japan tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $1300 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview japan-preview1"></div>
    <div class="preview japan-preview2"></div>
    <div class="preview japan-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var canadaContent = `<div class="tour-container">
<div class="tour-hero canada-hero">
    <div class="tour-header">
        <p>Canada tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $2000 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview canada-preview1"></div>
    <div class="preview canada-preview2"></div>
    <div class="preview canada-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

var uaeContent = `<div class="tour-container">
<div class="tour-hero uae-hero">
    <div class="tour-header">
        <p>U.A.E tour package:</p>
    </div>
    <div class="tour-price">
        <p>Starting from $3000 (prices may vary)</p>
    </div>
</div>
<div class="preview-images">
    <div class="preview uae-preview1"></div>
    <div class="preview uae-preview2"></div>
    <div class="preview uae-preview3"></div>
</div>
<div class="days">
    <div class="day">
        <p class="day-heading">
            Day #1:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #2:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <p class="day-heading">
            Day #3:
        </p>
        <hr>
        <p class="day-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="tour-book-button">
    <button class="tour-book">BOOK NOW</button>
</div>
</div>`

export function getPageContent(pageId, callback){
    $("#app").html(eval(pageId));
    if (callback){
        callback();
    }
}