import article_image from './assets/image-product-desktop.jpg';
import mobile_article_image from './assets/image-product-mobile.jpg';
import bgn_image from './assets/icon-cart.svg';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <div
        className='
          flex
          flex-col
          items-center
          justify-center
          w-screen
          sm:h-screen
          h-fit
          sm:m-auto
          sm:my-8
          sm:mx-8
        '>
        <div
          className='
            flex
            flex-col
            items-center
            justify-center
            w-fit
            h-fit
            m-8
          '>
          <Card
            hover_btn_color='Very-dark-blue'
            mobile_image={mobile_article_image}
            image={article_image}
            type='Perfume'
            title='Gabrielle Essence Eau De Parfum'
            description='A floral, solar and voluptuous interpretation composed by Olivier Polge, 
            Perfumer-Creator for the House of CHANEL.'
            discounted_price={149.99}
            price={169.99}
            btn_label='Add to Cart'
            btn_color='Dark-cyan'
            btn_image={bgn_image}
            onClick={() => console.log('add to cart')}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;