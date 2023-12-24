import React from 'react'
import NavbarPagesContainer from '../../common/Navbar'
import Banner from '../../common/Banner'
import Button from '../../common/Button/Button'
import BookButton from '../../common/BookButton'

export default function DetailPage() {
    return (
        <div className='DetailPage'>
            <NavbarPagesContainer />
            <Banner bannerImage={"https://ultimatefootball.co.uk/wp-content/uploads/2020/04/rev-bg-4.jpg"} />
            <div className="textSections">
                <h2>Enc Sports Turf</h2>
                <div className='star'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></div>
                <h3 className='cont'>Contact Detail</h3>
                <div className='seprationss'></div>
                <div className='contactDetail'>
                    <h3>EMAIL :</h3>
                    <a href="mailto:yadavshiv0041@gmail.com">yadavshiv0041@gmail.com</a>
                </div>
                <div className='contactDetail'>
                    <h3>PHONE : </h3>
                    <a href="tel:+91 9322363737">+91 9322363737</a>
                </div>
                <div className='contactDetail'>
                    <h3>ADDRESS </h3>
                    <a href="https://maps.app.goo.gl/im88QGBmeMXGJHBf8">Shop No, 2, Dargah Rd, New Prakash
                        Nagar, Sonapur, Bhandup West, Mumbai, Maharashtra 400078</a>
                </div>
                <div className='DetailPageButtonSection'>
                    <BookButton text={"Book Slot"} />
                </div>
            </div>
        </div>
    )
}
