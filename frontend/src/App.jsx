import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(response => response.json())
      .then(data => setMenu(data))
      .catch(error => console.error('Menu API error:', error))
  }, [])

  const addToCart = (item) => {
    setCart(currentCart => [...currentCart, item])
  }

  const removeFromCart = (index) => {
    setCart(currentCart => currentCart.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">RK TEA SHOP</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#cart" className="order-btn">
          Order Now ({cart.length})
        </a>
      </header>

      <main>

        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="small-title">WELCOME TO RK TEA SHOP</p>

            <h1>
              Fresh Tea.
              <br />
              <span>Happy Moments.</span>
            </h1>

            <p className="hero-text">
              Enjoy freshly prepared tea, coffee and delicious snacks
              served with love every day.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="primary-btn">Explore Menu</a>
              <a href="#about" className="secondary-btn">Our Story</a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/src/assets/hero.png" alt="RK Tea Shop" />
          </div>
        </section>

        <section id="menu" className="menu-section">
          <p className="section-label">OUR SPECIALS</p>

          <h2>Popular Menu</h2>

          <p className="section-text">
            Simple favourites made fresh for you.
          </p>

          <div className="menu-grid">
            {menu.map(item => (
              <div className="menu-card" key={item.id}>

                <div className="menu-icon">
                  {item.name.toUpperCase()}
                </div>

                <h3>{item.name}</h3>

                <p>
                  Freshly prepared and served with great taste.
                </p>

                <strong>Rs. {item.price}</strong>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>

              </div>
            ))}
          </div>
        </section>

        <section id="cart" className="cart-section">
          <p className="section-label">YOUR ORDER</p>

          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty. Add something from our menu.
            </p>
          ) : (
            <div className="cart-box">

              {cart.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${index}`}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>Rs. {item.price}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-total">
                <strong>Total: Rs. {total}</strong>
              </div>

              <button className="checkout-btn">
                Place Order
              </button>

            </div>
          )}
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <p className="section-label">ABOUT US</p>

            <h2>A Small Shop With A Big Taste</h2>

            <p>
              RK Tea Shop is a friendly place to relax, enjoy a hot cup
              of tea and spend quality time with friends and family.
            </p>

            <p>
              We focus on fresh preparation, good taste and friendly
              service.
            </p>
          </div>

          <div className="about-box">
            <span className="about-icon">TEA</span>
            <h3>Freshly Prepared</h3>
            <p>Every cup is prepared fresh when you order.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-label">VISIT US</p>

          <h2>Come & Enjoy Your Tea</h2>

          <p>We would love to serve you!</p>

          <div className="contact-details">
            <div>
              <strong>Location</strong>
              <p>RK Tea Shop</p>
            </div>

            <div>
              <strong>Contact</strong>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div>
              <strong>Opening Hours</strong>
              <p>7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>2026 RK Tea Shop. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
