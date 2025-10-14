import React from 'react';
import '../App.css';
import Carousel from '../components/Carousel';
import CarouselSmall from '../components/CarouselSmall';

import automatex  from '../assets/images/automatex.png';
import pcat from '../assets/images/pcat.png';
import photoGallery from '../assets/images/photoGallery.png';
import myrioImage from '../assets/images/Myriophora_lucigaster.png';
import phoridNewsletters from '../assets/images/phoridNewsletters.png';
import keys from '../assets/images/keys.png';
import melaImage from '../assets/images/melaloncha_annicae.png';
import apoImage from '../assets/images/apo_wallaceorum_lateral.jpg';
import dohrImage from '../assets/images/Dohrniphora_apharea.jpg';
import megaImage from '../assets/images/megaselia_mithridates.png';
import mLongaImage from '../assets/images/LACM_ENT_068159_longa_habitus.png';

const mapCarouselItems = [
  { src: automatex, alt: 'Automated material examined tool', href: 'http://example.com/page2', text: 'Automated Material Examined' },
  { src: pcat, alt: 'Phorid Catalog', href: 'http://example.com/page2', text: 'Phorid Catalog' },
  { src: photoGallery, alt: 'Image 2', href: 'http://example.com/page2', text: 'Photo Gallery' },
  { src: phoridNewsletters, alt: 'Image 1', href: '/phoridae/newsletters', text: 'Phorid Newsletters' },
  { src: keys, alt: 'Identification keys', href: 'phoridae/identificationKeys', text: 'Identification Keys' },



  // Add more items as needed
];

const GBIFtaxonCarouselItems = [
  { src: mLongaImage, alt: 'Image 2', href: 'https://www.gbif.org/occurrence/charts?taxon_key=9502', text: 'Phoridae' },
  { src: megaImage, alt: 'Image 2', href: 'https://www.gbif.org/occurrence/charts?taxon_key=1546413', text: 'Megaselia' },
  { src: apoImage, alt: 'Image 2', href: 'https://www.gbif.org/occurrence/charts?taxon_key=1545388', text: 'Apocephalus' },
  { src: dohrImage, alt: 'Image 2', href: 'https://www.gbif.org/occurrence/charts?taxon_key=1548850', text: 'Dohrniphora' },
  { src: melaImage, alt: 'Image 2', href: 'https://www.gbif.org/occurrence/charts?taxon_key=1550009', text: 'Melaloncha' },
  { src: myrioImage, alt: 'Image 1', href: 'https://www.gbif.org/occurrence/charts?taxon_key=4575472', text: 'Myriophora' },

  // Add more items as needed
];

const HomePage = () => {
  return (
    <div className="App">
      <Carousel />
      <div className='SectionHeader'>
        News and Resources
      </div>
        <CarouselSmall items={mapCarouselItems} infinite={true} slidesToShow={3} draggable={true} autoplay={true} />
      <div className='SectionHeader'>
        GBIF Taxon Pages
      </div>
        <CarouselSmall items={GBIFtaxonCarouselItems} infinite={true} slidesToShow={3} draggable={true} autoplay={true} />
              
    </div>
  );
}

export default HomePage;

