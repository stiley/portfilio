import React , {Component} from 'react';

const TITLES = [
    'a software test engineer',
    'a music lover',
    'a lifelong learner'
];

class Title extends Component{
    state = {titleIndex: 0, fadeIn: true}

    // update title every 4 seconds
    animateTitles = () => {
       this.titleInterval = setInterval(()=>{
            const titleIndex =(this.state.titleIndex +1) % TITLES.length;
            this.setState({titleIndex: titleIndex, fadeIn: true});
           this.timeout = setTimeout(()=>{
               this.setState({fadeIn: false})
           },2000);
        }, 4000);

       // console.log('this.titleInterval',this.titleInterval)
    }

    componentDidMount() {
        // console.log('Title component has mounted');
        this.timeout = setTimeout(()=>{
            this.setState({fadeIn: false})
        },2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        // console.log('Title component will unmount');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);

    }

    render(){
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex]
        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        );
    }
}


export default Title;