import { FETCH_POSTS, FETCH_POSTS_RANGE, FETCH_POST } from '../actions/types';

//Currently dependent on dummy data until I code the backend api and database
const initialState = {
    posts: [
        {
            date: {
                year: '2019',
                month: 'January'
            },
            items: [
                {
                    id: 'uaohsdjhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '01/01/2019',
                    author: 'David Rojas'
                },
                {
                    id: 'uaohasafaqwjhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '01/01/2019',
                    author: 'David Rojas'
                },
                {
                    id: 'uaoqweafaegthsdjhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '01/01/2019',
                    author: 'David Rojas'
                }
            ]
        },
        {
            date: {
                year: '2018',
                month: 'December'
            },
            items: [
                {
                    id: 'uaohsdjhae5udfhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '12/01/2018',
                    author: 'David Rojas'
                },
                {
                    id: 'uaohsa34hsdfhdjhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '12/01/2018',
                    author: 'David Rojas'
                },
                {
                    id: 'uaohsaw354hsdfty54djhawodi',
                    img: '',
                    imgAlt: 'some text',
                    title: 'Blog Post Title',
                    shortText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus pulvinar leo, a viverra dolor lobortis quis. Cras eu scelerisque justo. Nam molestie a dui at eleifend. Donec imperdiet, ligula ac tincidunt pellentesque, nulla nunc consequat erat, ac condimentum diam turpis id nunc. Morbi aliquet nibh in tincidunt commodo. Vivamus imperdiet quam sem, nec laoreet dolor blandit ut. Donec suscipit consequat urna ac cursus.',
                    datePosted: '12/01/2018',
                    author: 'David Rojas'
                }
            ]
        },
    ],
    post: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case FETCH_POSTS_RANGE:
            return {
                ...state,
                posts: action.payload
            };
        case FETCH_POST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}