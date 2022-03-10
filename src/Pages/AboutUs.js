import "./Products.css"
import mission from "../images/mission_final.jpg"
import mixing from "../images/expertise_lab.jpg"
import shopwithus from "../images/shop_final.jpg"
import bottles from "../images/bottles.jpg"

function AboutUs() {
    return (
        <div>
            <div>
                <h5 className="mt-3">About us</h5>
                <div className="mt-3">
                    <ul className="nav nav-tabs about-us-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="mission-tab" data-bs-toggle="tab" data-bs-target="#mission" type="button" role="tab" aria-controls="home" aria-selected="true">Our mission</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="profile" aria-selected="false">Our history</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="expertise-tab" data-bs-toggle="tab" data-bs-target="#expertise" type="button" role="tab" aria-controls="contact" aria-selected="false">Our expertise</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="shopwithus-tab" data-bs-toggle="tab" data-bs-target="#shopwithus" type="button" role="tab" aria-controls="contact" aria-selected="false">Why shop with us?</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade show active" id="mission" role="tabpanel" aria-labelledby="our-mission">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">We are experts, we are passionate, we care</h5>
                                    <p className="card-text">Here at The Perfume Shop, we’re more than a shop. We are a people business. We care about every single customer from their expectations, their desires, their time and money. Whether it’s on our website or in our stores, your experience is very important to us. We want to ensure from start to finish that you feel very considered and you got great value from The Perfume Shop experience. If you have any queries before or after your visit to The Perfume Shop we are here to help.</p>
                                    <p className="card-text"><small className="text-muted">Tuesday March 9, 2022</small></p>
                                </div>
                                <img src={mixing} className="card-img-bottom" alt="mission" />
                            </div>
                        </div>

                        <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="our-history">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Our history is what we are proud of</h5>
                                    <p className="card-text">Founded in 1992, The Perfume Shop set out with the simple idea of making luxury perfume brands accessible to everyone at an affordable price. With the first store openings in Birmingham, Belfast and Milton Keynes, The Perfume Shop developed a genuine passion for delighting customers with expert perfume knowledge and the highest customer service standards which remain at the forefront of everything the brand stands for today. In 2005 The Perfume Shop was acquired by the world's largest international health and beauty retailer A.S Watson - known in 25 markets, they opened their 15,000th store in March 2019. Find out more about our history and our parent company.</p>
                                    <p className="card-text"><small className="text-muted">Tuesday March 9, 2022</small></p>
                                </div>
                                <img src={mission} className="card-img-bottom" alt="history" />
                            </div>
                        </div>

                        <div className="tab-pane fade" id="expertise" role="tabpanel" aria-labelledby="our-expertise">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Our expert perfume knowledge</h5>
                                    <p className="card-text">With the first store openings in Birmingham, Belfast and Milton Keynes, The Perfume Shop developed a genuine passion for delighting customers with expert perfume knowledge and the highest customer service standards which remain at the forefront of everything the brand stands for today. In 2005 The Perfume Shop was acquired by the world's largest international health and beauty retailer A.S Watson - known in 25 markets, they opened their 15,000th store in March 2019. We have trained and developed the most knowledgeable team of sales advisors in the perfume industry, proudly boasting the largest number of industry recognised CFSS (Certified Fragrance Sales Specialist) graduates in the world. To further showcase our dedication to fragrance expertise, we recently established our own innovative programme, so that you can always have confidence in our high quality, unbiased advice every time you shop.</p>
                                    <p className="card-text"><small className="text-muted">Tuesday March 9, 2022</small></p>
                                </div>
                                <img src={bottles} className="card-img-bottom" alt="expertise" />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="shopwithus" role="tabpanel" aria-labelledby="contact-tab">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">We are the leading perfume experts in the world</h5>
                                    <p className="card-text">You can be sure that you are in the best place when making a purchase at our shop. We have trained and developed the most knowledgeable team of sales advisors in the perfume industry, proudly boasting the largest number of industry recognised CFSS (Certified Fragrance Sales Specialist) graduates in the world. To further showcase our dedication to fragrance expertise, we recently established our own innovative programme, so that you can always have confidence in our high quality, unbiased advice every time you shop.</p>
                                    <p className="card-text"><small className="text-muted">Tuesday March 9, 2022</small></p>
                                </div>
                                <img src={shopwithus} className="card-img-bottom" alt="shopwithus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h5 className="mt-3">Contacts</h5>
                <div className="google-map mt-3">
                    <div class="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <iframe className="map-iframe" title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.874319861609!2d24.098392915395692!3d56.950954506414995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd9891942e5%3A0x5a4572cba0d880c1!2sPils%20laukums%203%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1646232897070!5m2!1slv!2slv" loading="lazy"></iframe>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Address:</h5>
                                    <p className="card-text">Pils laukums 3, Riga, LV-1050, Latvia</p>
                                    <h5 className="card-title">Email:</h5>
                                    <p className="card-text">someemail</p>
                                    <h5 className="card-title">Phone:</h5>
                                    <p className="card-text">+3712123234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutUs