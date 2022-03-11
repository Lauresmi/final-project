import "./Footer.css"

function Footer() {
    return (
        <footer class="mx-2 footer-container mt-2 border-top">
            <div class="d-flex justify-content-between py-2 my-2">
                <p className="mx-4">&copy; 2022 Laura Esmite, All rights reserved.</p>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4 mt-1">
                    <li className="ms-3">
                        <a className="text-muted"
                            href="https://www.delfi.lv/bizness/projekti/cartier-zimola-stasts-karalu-juvelieris-un-juvelieru-karalis.d?id=53953201"
                            target="blank"><img src="https://www.madaracosmetics.com/media/wysiwyg/Facebook.png" alt="facebook"
                                width="24" height="24" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted"
                            href="https://www.delfi.lv/bizness/projekti/cartier-zimola-stasts-karalu-juvelieris-un-juvelieru-karalis.d?id=53953201"
                            target="blank"><img src="https://www.madaracosmetics.com/media/wysiwyg/Twitter.png" alt="twitter" width="24"
                                height="24" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted"
                            href="https://www.delfi.lv/bizness/projekti/cartier-zimola-stasts-karalu-juvelieris-un-juvelieru-karalis.d?id=53953201"
                            target="blank"><img src="https://www.madaracosmetics.com/media/wysiwyg/Instagram.png" alt="instagram"
                                width="24" height="24" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer