import React from 'react';
import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import iconTraveler from 'assets/images/icons/icon-traveler.svg';
import iconTreasure from 'assets/images/icons/icon-treasure.svg';
import formatNumber from 'utils/formatNumber';

import Button from 'elements/Button';

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: 'smooth'
        });
    }

  return (
    <section className="container pt-4">
        <div  className="row align-items-center">
            <div className="col-auto pr-5" style={{ width: 500 }}>
                <h1 className="h2 font-weight-bold line-height-1 mb-3">
                    Forget Busy Work, <br/> Start Next Vacation
                </h1>
                <p className="mb-4 font-weight-light text-gray-500 w-75 " style={{ lineHeight: '170%' }}>
                We provide what you need to enjoy your 
                holiday with family. Time to make another 
                memorable moments.
                </p>
                <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>

                <div className="row" style={{ marginTop: '80px' }}>
                    <div className="col-4">
                        <img src={iconTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36" />
                        <h6 className="mt-3">{formatNumber(props.data.travelers)}{" "} <span className="text-gray-500 font-weight-light">travelers</span></h6>
                    </div>
                    <div className="col-4">
                        <img src={iconTreasure} alt={`${props.data.treasures} Treasures`} width="36" height="36" />
                        <h6 className="mt-3">{formatNumber(props.data.treasures)}{" "} <span className="text-gray-500 font-weight-light">treasures</span></h6>
                    </div>
                    <div className="col-4">
                        <img src={IconCities} alt={`${props.data.cities} Travelers`} width="36" height="36" />
                        <h6 className="mt-3">{formatNumber(props.data.cities)}{" "} <span className="text-gray-500 font-weight-light">cities</span></h6>
                    </div>
                </div>
            </div>
            <div className="col-6 pl-5 ml-auto">
                <div className="image-hero">
                    <img src={ImageHero} alt="Room" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1, width: 500 }} />
                    <img src={ImageHeroFrame} alt="Room" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0', width: 500 }} />
                </div>
            </div>
        </div>
    </section>
  )
}
