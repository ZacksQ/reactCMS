import React, {Component} from 'react';
import axios from 'axios'

const RedditList = props => (
    <div>
        <h1>Contract</h1>
        <ul>{
            props.posts.map((li, i) => (
                    <li key={i}>{li.title}</li>
                )
            )
        }
        </ul>

    </div>
)

export default class Contract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    fetchFromApi() {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(response => {
                let posts = response.data.data.children.map(data => data.data);
                this.setState({
                    posts: posts
                })
            }).catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.fetchFromApi();
    }

    render() {
        return (
            <RedditList posts={this.state.posts}/>
        )
    }
}