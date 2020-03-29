import React from 'react'
import im from '../assets/image-mockups.png'
import '../styles/home.css'
import budget from '../assets/icon-budgeting.svg'
import online from '../assets/icon-online.svg'
import api from '../assets/icon-api.svg'
import onboard from '../assets/icon-onboarding.svg'
import confetti from '../assets/image-confetti.jpg'
import restaurant from '../assets/image-restaurant.jpg'
import currency from '../assets/image-currency.jpg'
import plane from '../assets/image-plane.jpg'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import youtube from '../assets/icon-youtube.svg'
import insta from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
const Home=()=>{
    const social=[facebook , twitter , insta , pinterest , youtube]
    const services=[
        {
            src:budget,
            title:"Simple Budgeting",
            desc:"See exactly where your money goes each month. Receive notifications when you’re close to hitting yourlimits."
        },
        {
            src:online,
            title:"Online Banking",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            src:api,
            title:"Open API",
            desc:" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        },
        {
            src:onboard,
            title:"Fast Onboarding",
            desc:"  We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        }
    ]

    const articles=[
        {
            src:confetti,
            writer:"Claire Robinson",
            title:"Receive money in any currency with no fees",
            desc:" The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
            src:restaurant,
            writer:"Claire Robinson",
            title:"Online Banking",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            src:currency,
            writer:"Claire Robinson",
            title:"Open API",
            desc:" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        },
        {
            src:plane,
            writer:"Claire Robinson",
            title:"Fast Onboarding",
            desc:"  We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        }
    ]
    return(
      <>
      <header>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-12 col-md-4 container">
                     <div className="container py-5 mt-5 ">
                     <h1>Next generation</h1>
                    <h1>digital banking</h1>   
                    <p className="mt-4">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                        </p> 
                        <button type="button" className="btn mt-5 btn-primary btn-lg">Request Invite</button>
                     </div>
                 </div>
                 <div className="col-sm-12 desk col-md-8">
                    <div className="text-desktop">
                        <img src={im} className="img-fluid" alt="phone"/>
                        </div>
                    </div>
                 </div>
             </div>
      </header>
      <section className="services">
                <div className="container">
                   <div className="row">
                       <div className="col-sm-12 col-md-5 mt-5">
                       <h1 className="">Why choose Easybank?</h1>
                    <p>
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                    </p>
                       </div>
                   </div>
                    <div className="row mt-3 text-center">
                            {
                                services.map((label , i)=>(
                                    <div className="col-sm-12 col-md-3" key={i}>
                                        <img src={label.src} className="img-fluid text-center mt-3 mb-3" alt="service icon"/>
                                        <h3>{label.title}</h3>
                                        <p className="mt-3">{label.desc}</p>
                                    </div>
                                ))
                            }     
                </div>
                </div>
      </section>

      <section className="articles">
          <div className="container">
          <div className="row">
                       <div className="col-sm-12 col-md-5 mt-5">
                       <h1 className=""> Latest Articles</h1>
                       </div>
                   </div>
              
              <div className="row mt-5">
              {
                                articles.map((label , i)=>(
                                    <div className="col-sm-12 col-md-3" key={i}>
                                        <div className="card mt-3 mb-3">
  <img className="card-img-top" src={label.src} alt="Card cap"/>
  <div className="card-body">
<h6 className="card-text text-muted">By {label.writer}</h6>
    <h3 className="card-text">{label.title}</h3>
    <p className="card-text text-muted">{label.desc}</p>
  </div>
</div>
                                    </div>
                                ))
                            }
              </div>
          </div>
         

      </section>

      <footer className="overlay">
           <div className="container py-5 text-center">
               <div className="row">
                   <div className="col-md-4 col-lg-3 col-sm-12 text-center">
                       <img src={logo}  className="img-fluid " id="logo-footer" alt="logo"/>
                    <div className="row mt-5 mb-4">
                        {
                            social.map((label , i )=>(
                                <div className="col" key={i}>
                                    <a href="/"><img src={label} alt=""/></a>
                                </div>
                            ))
                        }
                    </div>
                   </div>
                   <div className="col-md-2 col-sm-12">
                       <p>About Us</p>
                       <p>Contact</p>
                       <p>Blog</p>
                   </div>
                   <div className="col-md-2 col-sm-12">
                       <p>About Us</p>
                       <p>Contact</p>
                       <p>Blog</p>
                   </div>
                   <div className="col-md-4 col-sm-12 ml-auto">
                   <button type="button" className="btn mt-3 btn-lg btn-primary">Request Invite</button>
                   <p className="text-muted mt-3">© Easybank. All Rights Reserved</p>
                   </div>
               </div>
           </div>
      </footer>
      </>
    )
}
export default Home