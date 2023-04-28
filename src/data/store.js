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


}