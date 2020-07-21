import React from 'react'
import './Posts.css'
//import Post from '../Post/Post'

// function Posts({title}) {

//     return <div className="Posts">
//          <h1 className="title">{title}</h1>
//         <Post imageUrl="blue-origami-bird.png" imageAlt="origami" author="Pesho">lorem50</Post>
//         <Post imageUrl="blue-origami-bird.png" imageAlt="origami" author="Pesho">Lorem ipsum dolor sit ametsint accusantium id est nulla, aliquid quia minima?</Post>
//     </div>
// }


export class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }
    }

    getOrigamis() {
        fetch('http://localhost:9999/api/origami')
            .then(res => {
                return res.json()
            }).then(origamis => {
                this.setState({ origamis })
                console.log(origamis);
            })
    }

    componentDidMount() {
        this.getOrigamis()
    }

    renderOrigamis(){
        const { origamis } = this.state

        return origamis.map((origami, index) => {
            return (
                <div className="Post">
                    <img src='blue-origami-bird.png' alt="origami" />
                    <p key={origami._id} className="description">
                       {index+1}: {origami.description}
                    </p>
                    <div>
                    <span>
                        <small>Author: </small>
                        {origami.author.username}
                    </span>
                    </div>
                </div>
            )
        })
    }



    render() {
        return <div className="Posts">
            <h1 className="title">Tova e zaglavie</h1>
            {
                this.renderOrigamis()
            }

        </div>
    }
}

export default Posts

