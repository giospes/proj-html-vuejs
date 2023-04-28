import { text } from "@fortawesome/fontawesome-svg-core"
import { reactive } from "vue"

export const store = {
    sections:[
        'Home', 'About Us', 'Recent Courses', 'Events', 'News'
    ],
    AboutCards:[ 
        {
           title: 'Online Coaching',
           text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat beatae nostrum aut.',
           icon: 'laptop-code'
        },
        {
            title: 'Consultation',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat beatae nostrum aut.',
            icon: 'clipboard-check'
        },
        {
            title: 'Life Programs',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat beatae nostrum aut.',
            icon: 'id-card'
        },
    ],
    numbers:[ 
        {
           number: '6500 + ',
           text: 'Students',
           img: './img/counter-shape-1-1-1.png',
           color: '#f68c13',
        },
        {
            number: '200 + ',
            text: 'Online Courses',
            img: './img/counter-shape-2-1-1.png',
            color: '#e25f64',

        },
        {
            number: '100% ',
            text: 'Happy Clients',
            img: './img/counter-shape-3-1-1.png',
            color: '#39e17b',
         }
    ],
    CoursesCards:[ 
        {
           title: 'Google Analytics Certification: Earn More',
           text: 'Become Google Analytics Certified to Land a Job, Get Promoted, or Start a New Career...',
           img: './img/12786.jpg',
           price: '150.00'
        },
        {
            title: 'Digital Marketing Masterclass  23 Courses',
            text: 'Grow Your Business with Digital Marketing: Social Media Marketing, Facebook, Content, YouTube, Email Marketing, Websites',
            img: './img/7787.jpg',
            price: '55.00'
        },
        {
            title: 'CompTIA Network+ Cert. (N10-007)',
            text: 'CompTIA Network+ (N10-007) Bootcamp - Certification preparation course on the most popular networking certification!',
            img: './img/6498.jpg',
            price: '32.00'
        },
    ],


}