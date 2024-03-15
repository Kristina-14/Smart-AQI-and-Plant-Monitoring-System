import "./styles.css";

export default function app() {
  // const mystyle = {
  //   TextDecoder
  // };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo-details">
          <a href="https://fhphs2.sse.codesandbox.io/login">
            &nbsp;&nbsp;&nbsp;
            <i className="bi bi-person-circle"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="logo_name">Options</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href=" " className="active">
              <i className="bi bi-grid-fill"></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="https://zksdsf.csb.app/">
              <i className="bi bi-cloud-sun-fill"></i>
              <span className="links_name">Weather</span>
            </a>
          </li>
          <li>
            <a href="https://colab.research.google.com/drive/1ovLJlnnFyv5nmUnjzc_Z5LMW040CWdP4?usp=sharing">
              <i className="fa fa-leaf"></i>
              <span className="links_name">Plant Diseases</span>
            </a>
          </li>
          <li>
            <a href="https://thingspeak.com/channels/1656770">
              <i className="fa fa-bar-chart"></i>
              <span className="links_name">Graphs </span>
            </a>
          </li>
          <li>
            <a href="https://colab.research.google.com/drive/1pZsWi67YihIEia_Jil8aaF7i_kyySOf8#scrollTo=9N4fC2TbLFDq">
              <i className="bi bi-graph-up"></i>
              <span className="links_name">Visualization </span>
            </a>
          </li>
          <li>
            <a href="#popup">
              {/*<i class="bi bi-stack-overflow"></i>*/}
              <i className="bi bi-currency-exchange"></i>
              <span className="links_name">Sell</span>
            </a>
          </li>
          <li>
            <a href="https://hn1nyz.csb.app/">
              <i className="bi bi-cart3"></i>
              <span className="links_name">Shop</span>
            </a>
          </li>
          <li>
            <a href="https://ured29.csb.app/">
              <i className="bi bi-card-heading"></i>
              <span className="links_name">Blog</span>
            </a>
          </li>
          <li>
            <a href="https://dev-kacyy-rss-news-feed.pantheonsite.io/rss-news-feed/">
              <i className="bi bi-newspaper"></i>
              <span className="links_name">News Feed</span>
            </a>
          </li>
          {/* <li>
            <a href="https://dev-kacyy.pantheonsite.io/community/">
              <i className="bi bi-chat-right-text"></i>
              <span className="links_name">Forum</span>
            </a>
          </li> */}
          <li>
            <a href="https://j891b9.csb.app/">
              <i className="bi bi-broadcast-pin"></i>
              <span className="links_name">Interact</span>
            </a>
          </li>
          <li>
            <a href="#popup1">
              <i className="bi bi-people-fill"></i>
              <span className="links_name">Contact us</span>
            </a>
          </li>

          <li className="log_out">
            <a href="https://ibpjs.sse.codesandbox.io/">
              <i className="bi bi-box-arrow-left"></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bi bi-justify sidebarBtn"></i>
            <span className="dashboard">
              <marquee>
                {" "}
                <div className="">Welcome to Dashboard</div>
              </marquee>
            </span>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />

        <div id="popup" class="overlay">
          <div className="popup1">
            <div className="wrapper">
              <form />
              <h4>Name</h4>
              <input type="text" name="name" placeholder="Enter your name" />
              <h4>ID&nbsp;Proof</h4>
              <input type="text" name="ID" placeholder="Enter your id proof" />
              <h4>Contact&nbsp;No</h4>
              <input
                type="tel"
                id="phone"
                name="Contact"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
              <h4>Address</h4>
              <input
                type="text"
                name="Address"
                placeholder="Enter your Address..."
              />
              <h4>Product&nbsp;Name</h4>
              <input
                type="text"
                name="Productname"
                placeholder="Enter your Productname"
              />
              <h4>Product&nbsp;Type</h4>
              <select className="input">
                <option value="0">Choose a category</option>
                <option value="fruits">Fruits</option>
                <option value="groceries">Groceries</option>
                <option value="vegetables">Vegetables</option>
                <option value="others">others</option>
              </select>
              <h4>Quantity</h4>
              <select className="input">
                <option value="0">Choose a Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button>Submit</button>
              <form />

              <a className="close" href=" ">
                &times;
              </a>
            </div>
          </div>
        </div>

        <div id="popup1" class="overlay">
          <div className="popup">
            <h2 className="call1">Project - KACYY</h2>
            <br />
            <div class="photo"></div>
            <h2>Contact Us</h2>
            <br />
            <a className="close" href=" ">
              &times;
            </a>

            <br />
            <a className="call" href=" ">
              <i class="bi bi-telephone-fill"></i>&nbsp;Contact number:
              123456789
            </a>
            <br />
            <br />
            <br />
            <a
              className="call2"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvZzbvcckCQlkmLLsVmxpGKMbXrrmcrscbKxbGsMVlSTchwbCxHsDxMlDkGsZwhmwgKTDw"
            >
              <i class="bi bi-envelope-fill"></i>&nbsp;&nbsp; Email ID:
              kacyy@gmail.com
            </a>
          </div>
        </div>

        <div className="column">
          <h1>Introduction</h1>
          <br />
          <p>
            Technology information plays an important role in everyone's life in
            the world of the Internet. Agriculture is rapidly becoming an
            information-intensive industry, where farmers can collect and
            evaluate large amounts of data from a single device (ie, a sensor)
            to be more efficient in production. Additionally, Agriculture
            accounts for 83% of India's water consumption. If there is no proper
            water usage plan in the area, it leads to water wastage. Therefore,
            we need a system that can supply water efficiently and also helps in
            the good growth of the plants to yield the maximum production.
          </p>
        </div>

        <div className="column3">
          <div classname="column">
            <img className="crop" src={require("./crop.jpg")} alt="" />
          </div>

          <div className="row">
            {/* <div
              className="column"
              style={{ float: "right", backgroundColor: "lightblue" }}
            > */}{" "}
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Temp</div>
                <div className="number">24°C</div>
              </div>
              <i className="bi bi-thermometer-half sun"></i>
            </div>
            <div className="box1">
              <div className="right-side">
                <div className="box-topic">Humidity</div>
                <div className="number">60%</div>
              </div>
              <i className="bi bi-moisture hum"></i>
            </div>
            <div className="box2">
              <div className="right-side">
                <div className="box-topic">AQI</div>
                <div className="number">Good</div>
              </div>
              <i className="bi bi-activity light"></i>
            </div>
          </div>
        </div>
        {/* </div> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="column4">
          <h1>Hardware video</h1>
          <video controls height="380px" width="95%">
            <source
              src="WhatsApp Video 2022-04-19 at 6.52.54 PM.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="column5">
          <h1>Principle</h1>
          <br />
          <p>
            The basic principle of this project is that — it has a small system
            on wheels, it's containing different types of sensors, and it tells
            the agriculturalists, environmentalists, or biologists about the
            moisture level of the soil moisture, and also tell about the
            humidity and air quality index in air. The data from the sensors is
            displayed and can be analyzed by the users either on the mobile app
            or the website. The connection of the hardware module to the
            webserver facilitates communication between the Arduino and the web
            page. While the Bluetooth module enables the communication between
            the mobile app and the Arduino.{" "}
          </p>
        </div>
        <div className="column1">
          <h1>Hardware Details</h1>
          <br />

          <div className="column2">
            <p>
              This project is about helping farmers with the help of IoT. The
              project will be helpful for the agriculture sector of our country.
              This project will be made just like a small system on wheels which
              will be containing different types of sensors such as air index
              sensor, soil moisture sensor, Humidity sensor, Temperature sensor.
              Basically, what the system will do is tell the farmers about the
              moisture level of the soil with the help of the sensors installed
              in it which will further reflect the data of the soil on either
              the app or the website which will be made by us for the farmers.
              The system will also be capable of checking air quality index and
              humidity in the air and this system will also help the farmer to
              water the soil if the soil is having less moisture and other
              sensors will also help the farmer with his crops.
            </p>
          </div>

          <img className="cr1" src={require("./hard.jpg")} alt="" />

          <img className="cr" src={require("./soil1.jpg")} alt="" />
          <img className="crl" src={require("./collision.jpg")} alt="" />

          <img
            className="cr2"
            src={require("./Temp. and humidity.jpg")}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
