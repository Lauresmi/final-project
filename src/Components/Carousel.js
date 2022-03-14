import onebottle from "../images/carousel_image_2_final.jpg"
import escada from "../images/carousel_image_5_final.jpg"
import narcisso from "../images/carousel_image_4_final.jpg"
import escada2 from "../images/carousel_image_3_final.jpg"
import versacce from "../images/carousel_image_6_final.jpg"

function Carousel() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row">
                            <div className="col-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title my-5">Narciso</h4>
                                        <h5 className="card-subtitle mb-2 text-muted my-5">For Her</h5>
                                        <p className="card-text lh-lg my-3">The new fragrance from Narciso Rodriguez is a tribute to the powerful mystique of a woman’s inner beauty and her innate sensuality. for her MUSC NOIR heightens the addictive nature of the original for her with an exploration of the darker, more intense aspects of narciso rodriguez’s signature musc. Along with rich leather suede accords, the heart of musc is further emboldened with heliotrope and enhanced by white cedar and rose: a hint of lucious plum adds light and harmony. For the first time ever, the iconic bottle appears in its purest form. for her MUSC NOIR is presented in a completely translucent bottle, revealing the mystery within. Only a delicate pink juice, echoing the original for her, adorns the signature bottle while a black cap alludes to scent’s darker facets.</p>
                                        <p className="text-end mt-3"><a href="https://www.narcisorodriguez.com/for-her" className="card-link my-3 text-end">Read more about Narciso For Her</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={narcisso} className="d-block w-100" alt="narcisso" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                    <div className="row">
                            <div className="col-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title my-5">Aqua Allegoria collection</h4>
                                        <h5 className="card-subtitle mb-2 text-muted my-5">Pera Granita</h5>
                                        <p className="card-text lh-lg my-3">Pera Granita belongs to the Aqua Allegoria collection, the first collection of intensely fresh fragrances in perfumery created in 1999. On the strength of the Guerlain Perfumer’s expertise dating back to the legendary Eau de Cologne Impériale in 1853, the Guerlain Perfumer creates each of the Aqua Allegoria with the freshness of a Cologne and the hold of a Guerlain perfume. The guiding thread of the collection is bergamot, a precious citrus fruit, “Calabrian green gold”. Pera Granita is a juicy and cheerful Eau de Toilette, a walk among the garden of the Hesperides. Create your own olfactory signature: select your favorite duo among recommended options and spray each Aqua Allegoria on your skin one by one in equivalent quantities. With its golden mesh, its pure, refined bottle is a tribute to the famous Bee bottle. </p>
                                        <p className="text-end mt-3"><a href="https://www.guerlain.com/us/en-us/p/aqua-allegoria-pera-granita---eau-de-toilette-P013089.html" className="card-link my-3 text-end">Read more about Aqua Allegoria collection</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={onebottle} className="d-block w-100" alt="onebottle" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                    <div className="row">
                            <div className="col-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title my-5">Escada</h4>
                                        <h5 className="card-subtitle mb-2 text-muted my-5">Absolutely me</h5>
                                        <p className="card-text lh-lg my-3">Absolutely Me opens with fresh fruit accords and raspberries. The heart is filed with delicate aroma of pink Rose Macaron, followed by soft vanilla in the base. The bottle was created as its predecessors with the logo of 2 letters E facing each other, decorated with crystals. The bottle is transparent and the liquid color is delicate purple. It is completely tantalizing the harmony of fruity, sweet, and vanilla aromas. The sparkling delicate beauty will rejuvenate your spirits with its fruity splurge. It is completely tantalizing the harmony of fruity, sweet, and vanilla aromas. The top notes of the fragrance are made of fruits, releasing a strong raspberry whiff. The heart is sweetened with flower extracts of pink rose macaron. It has been placed on the gourmand base of vanilla, to let you leave behind a creamy trail. It comes in the same flacon as its precursors adorned with crystals.</p>
                                        <p className="text-end mt-3"><a href="https://www.amazon.in/Escada-Absolutely-Edp-Women-ml/dp/B0041H35UK" className="card-link my-3 text-end">Read more about Escada Absolutely me</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={escada} className="d-block w-100" alt="escada-two" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title my-5">Escada</h4>
                                        <h5 className="card-subtitle mb-2 text-muted my-5">Especially Escada</h5>
                                        <p className="card-text lh-lg my-3">This luxurious and bright fragrance is floral and subtle. It is inspired by the woman who radiates femininity and lights up the room with her smile. Ready to escape to this summer’s most iconic destination? Be transported to Tokyo with the Escada Cherry in Japan Limited Edition Eau de Toilette for women! A radiant fragrance that opens with a sparkling Cherry accord, combined with natural Jasmine petals melting into an addictive Tonka base. Floral and subtle. It is inspired by the woman who radiates femininity and lights up the room with her smile. Ready to escape to this summer’s most iconic destination? Be transported to Tokyo with the Escada Cherry in Japan Limited Edition Eau de Toilette for women! A radiant fragrance that opens with a sparkling Cherry accord, combined with natural Jasmine petals melting into an addictive Tonka base.</p>
                                        <p className="text-end mt-3"><a href="https://www.escada-fragrances.com/en-gb/fragrance/fragrance/especially-escada" className="card-link my-3 text-end">Read more about Especially Escada</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={escada2} className="d-block w-100" alt="escada" />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-5">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title my-5">Versace</h4>
                                        <h5 className="card-subtitle mb-2 text-muted my-5">Eros Flame</h5>
                                        <p className="card-text lh-lg my-3">A fragrance that strikes you right through the heart bearing an important message for new generations about the dignity of love and the power of diversity. Versace Eros Flame is a fragrance for a strong, Passionate, self-confident man who is deeply in touch with his emotions.The olfactory notes of Versace Eros Flameare characterised by strong contrasts in which the mostnoble and elegant ingredients enrich and enhanceone another - from lemon tangerine, orange, black pepper, wild rosemary, pepperwood, geranium, rose facet, cedar, patchouli, tonka beans and vanilla. A persistent and enveloping fragrance that is simultaneously virile, an ode to passion and a celebration of sensuous rapture.</p>
                                        <p className="text-end"><a href="https://www.versace.com/us/en-us/men/accessories/fragrances/eros-flame/eros-flame-100-ml-rnul/R741010-R100MLS_RNUL.html" className="card-link my-3 text-end">Read more about Versace Eros Flame</a></p> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <img src={versacce} className="d-block w-100" alt="versace" />
                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel