import "./add.css";
function ADD() {
  return (
    <div>
      <nav className="navigation">
        <a href="index.html" className="logo">
          <img
            src="https://logodix.com/logo/982916.jpg"
            height={180}
            width={200}
          />
          <span>e</span>Grocery
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon">
          <span className="nav-icon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#category">Categories</a>
          </li>
          <li>
            <a href="#popular-bundle-pack">Our Packages</a>
          </li>
        </ul>

        <div className="right-nav">
          <a href="" className="like">
            <img
              src="https://th.bing.com/th/id/OIP.4pA-BqLOifCJOnjXNGK_QAHaHa?w=193&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              height={35}
              width={35}
            />
            <i className="far fa-heart"></i>
            <span>0</span>
          </a>

          <a href="#" className="cart">
            <i className="fas fa-"></i>
            <img
              src="https://th.bing.com/th/id/OIP.nzqCIj5aRSzyLfct2YmHVAHaHa?rs=1&pid=ImgDetMain"
              alt=""
              height={40}
              width={50}
            />
            <span>0</span>
          </a>
        </div>
      </nav>

      <section id="search-banner">
        <img alt="bg" className="bg-1" src="" />
        <img alt="bg-2" className="bg-2" src="" />
        <div className="search-banner-text">
          <h1>Order Your daily Groceries</h1>
          <strong>#Free Delivery</strong>

          <form action="" className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search your daily groceries"
              name="search"
              required
            />
            <input type="submit" className="search-btn" value="Search" />
          </form>
        </div>
      </section>

      <section id="category">
        <div className="category-heading">
          <h2>Category</h2>
          <span>All</span>
        </div>

        <div className="category-container">
          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.fgu0DYf6vJx1WKnw_Iik9gHaD8&pid=Api&P=0&h=180"
            />
            <span>RICE</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.rRP_SuDUv9XGst_CfMyfWgHaHa&pid=Api&P=0&h=180"
              height={100}
              width={100}
            />
            <span>OIL</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.e8EYvMfGjkkZlmyZ7Fh9XwHaHa&pid=Api&P=0&h=180"
            />

            <span>SOAPS</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse3.mm.bing.net/th?id=OIP.WwhQnET9BiODBx196fJUPAHaEA&pid=Api&P=0&h=180"
            />
            <span>PASTE</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.LwE0R8zTDL4gKqLfG3AuZgHaEA&pid=Api&P=0&h=200"
            />
            <span>CHOCOLATES</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.k1aYRxQIdbM_8Iru-7E2sAHaDq&pid=Api&P=0&h=180"
            />
            <span>COOL DRINKS</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.Ve85CwwF8e9e4F8gXdso7QHaHn&pid=Api&P=0&h=180"
            />
            <span>MILK</span>
          </a>
        </div>
      </section>

      <section id="popular-product">
        <div className="product-heading">
          <h3>Popular Product</h3>
          <span>All</span>
        </div>

        <div className="product-container">
          <div className="product-box">
            <img
              alt="apple"
              src="https://tse1.mm.bing.net/th?id=OIP.UXrKKmXr2xkeb33i3DpC8QHaHa&pid=Api&P=0&h=180"
            />
            <strong>Apple</strong>
            <span className="quantity">1 KG</span>
            <span className="price">Rs.100/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
          <div className="product-box">
            <img
              alt="apple"
              src="https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0&h=180"
            />
            <strong>Patato</strong>
            <span className="quantity">1 KG</span>
            <span className="price">Rs.30/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.j1wtIDvit6f5-TI_ONSERgHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <strong>Garlic</strong>
            <span className="quantity">1 KG</span>
            <span className="price">Rs.60/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.OBKKA27v0VUeDTRMhzG_gAHaFX?w=276&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <strong>Tamato</strong>
            <span className="quantity">1 KG</span>
            <span className="price">Rs.20/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="popular-bundle-pack">
        <div className="product-heading">
          <h3>Popular Bundle Pack</h3>
        </div>
        <div className="product-container">
          <div className="product-box">
            <img
              src="https://femina.wwmindia.com/content/2020/aug/health-051598496306.jpg"
              alt="pack"
            />
            <strong>Big Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+4</span>
            <span className="price">Rs.599/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.QEn-QpT7Byxg5lNapNFBGgHaE0?w=550&h=358&rs=1&pid=ImgDetMain"
            />
            <strong>Large Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+2</span>
            <span className="price">Rs.390/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.La3mEoyZdQRq2OOxKvRq-wAAAA?pid=ImgDet&w=200&h=132&c=7&dpr=1.3"
            />
            <strong>Small Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato</span>
            <span className="price">Rs.159/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="pack"
              src="https://th.bing.com/th/id/OIP.Ti8oAbhX_WlV7-cOIPZPjgHaFF?w=265&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <strong>Big Pack</strong>
            <span className="quantity">Banana ,Orange ,Grapes,+4</span>
            <span className="price">Rs.349/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.GYqg90ebaeztZT7EcFnyvwHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <strong>Large Pack</strong>
            <span className="quantity">Banana ,Orange ,Grapes,+2</span>
            <span className="price">Rs.279/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
          <div className="product-box">
            <img
              alt="apple"
              src="https://th.bing.com/th/id/OIP.4mJVoeTO0rJ-7gwitizhKQAAAA?w=261&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <strong>Small Pack</strong>
            <span className="quantity">Banana ,Orange ,Apple</span>
            <span className="price">Rs.179/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#">
              <span>e</span>Grocery
            </a>

            <div className="footer-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
                <img
                  src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_FACEBOOK-1024x1024.png"
                  height={40}
                  width={40}
                />
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
                <img
                  src="https://th.bing.com/th/id/OIP.Xn27U1Y5z0KR-wPnCt-v0QHaG0?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  height={35}
                  width={35}
                />
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
                <img
                  src="https://www.pngkey.com/png/detail/283-2831746_insta-icon-instagram.png"
                  height={35}
                  width={35}
                />
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_(2017).svg/2560px-YouTube_full-color_icon_(2017).svg.png"
                  height={40}
                  width={40}
                />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <strong>Product</strong>
            <ul>
              <li>
                <a href="#">Clothes</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <strong>Category</strong>
            <ul>
              <li>
                <a href="#">Beauty</a>
              </li>
              <li>
                <a href="#">Meats</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Clothes</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <strong>Contact</strong>
            <ul>
              <li>
                <a href="#">Phone : +917702498622</a>
              </li>
              <li>
                <a href="#">Email : bingimanishkumar@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default ADD;
