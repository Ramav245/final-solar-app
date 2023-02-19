import React from 'react'
import SimpleReactFooter from "simple-react-footer";



const Footer = () => {
  const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const title = "Cats";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];













  return (
    <div>
      <div id="bloc_page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#2B5627" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,144C320,117,400,75,480,80C560,85,640,139,720,176C800,213,880,235,960,229.3C1040,224,1120,192,1200,192C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path>
        </svg>
      </div>
    
      <div class="footer">
        <h1>hello world</h1>
      </div>
 </div>


  )
}

export default Footer