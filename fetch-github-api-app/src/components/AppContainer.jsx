import React, { Component } from 'react';
// import Filter from './Filter';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            // filterList: [],
        }
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData = async () => {
        //sanity
        console.log(`Trying to Fetch Data`)

        const response = await fetch('https://api.github.com/users?client_id=1cb51b2524b467bb3455&client_secret=12a719d7ee5465e6105bb8fc92571d821068cb65');
        const json = await response.json();
        this.setState(
            {
                dataList: json
            }
        );

    }

    // updatedataList=(newArray) =>{
    //     this.setState(
    //         {
    //             dataList: newArray
    //         }
    //     )
    // }

    // handleInput = (event) =>{
    //     if(event.target.name==='filter'){
    //         this.setState(
    //             {
    //                 dataList: event.target.value
    //             }
    //         )
    //     }
    // }

    // handleSubmission = (event) =>{
    //     event.preventDefault();
       
    //     this.props.updatedataList(this.state.dataList)

        
    // }

    render() {
        return (
            <div>
                <h1>AppContainer Online</h1>
                {/* <div>
                <Filter dataList={this.state.dataList} updatedataList={this.updatedataList}/>
                </div> */}
                {
                    this.state.dataList.map((data, index) => {
                        return (
                            <div key={index} className='container'>
                                
                                    <p>{`Name: ${data.login}`}</p>                                
                                
                                    <img src={data.avatar_url} alt="avatar" className='size'></img>
                                    <br />
                                    <br />
                                


                            </div>
                        )
                    }

                    )
                }
                {/* <div>
                <p>Filtered Result: {this.result}</p>
                <input type="text" id='filter' name='filter' value={this.state.filterList} onChange={this.handleInput}/>
                <button onClick={this.handleSubmission}>Filter</button>
                {
                    this.state.dataList.filter((post,index) =>{
                        return(
                            <div key={index}>
                                <p>{post}</p>
                            </div>
                        )
                    }

                    )
                } 
            </div> */}

            </div>
        );
    }
}

export default AppContainer;